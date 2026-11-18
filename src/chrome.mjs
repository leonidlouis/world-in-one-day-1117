// Headless Chrome over its local DevTools pipe: no remote service or npm package.
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

mkdirSync('build',{recursive:true});
const profile=mkdtempSync(resolve('build/chrome-r2-'));
for(const dir of ['config','data','cache'])mkdirSync(`${profile}/${dir}`);
const child=spawn('/usr/bin/google-chrome',[
 '--headless=new','--no-sandbox','--disable-gpu','--disable-dev-shm-usage',
 '--no-first-run','--no-default-browser-check','--disable-background-networking',
 '--disable-component-update','--disable-extensions','--disable-sync','--no-proxy-server',
 '--password-store=basic','--remote-debugging-pipe',`--user-data-dir=${profile}`,'about:blank'
],{stdio:['ignore','ignore','pipe','pipe','pipe'],env:{...process.env,
 XDG_CONFIG_HOME:`${profile}/config`,XDG_DATA_HOME:`${profile}/data`,XDG_CACHE_HOME:`${profile}/cache`,
 DBUS_SESSION_BUS_ADDRESS:'unix:path=/dev/null'
}});
let log='',buffer='',next=0;
const waiting=new Map();
child.stderr.on('data',chunk=>{log+=chunk.toString();});
child.stdio[4].on('data',chunk=>{
 buffer+=chunk.toString();
 let pos;
 while((pos=buffer.indexOf('\0'))!==-1){
  const raw=buffer.slice(0,pos);buffer=buffer.slice(pos+1);
  if(!raw)continue;
  const message=JSON.parse(raw),pending=waiting.get(message.id);
  if(pending){waiting.delete(message.id);clearTimeout(pending.timer);message.error?pending.reject(new Error(JSON.stringify(message.error))):pending.resolve(message.result);}
 }
});
function call(method,params={},sessionId){return new Promise((resolve,reject)=>{
 const id=++next,timer=setTimeout(()=>{waiting.delete(id);reject(new Error(`Chrome timeout: ${method}\n${log.slice(-3000)}`));},15000);
 waiting.set(id,{resolve,reject,timer});
 child.stdio[3].write(JSON.stringify({id,method,params,...(sessionId?{sessionId}:{})})+'\0');
});}
try{
 const version=await call('Browser.getVersion');
 console.log('Renderer:',version.product);
 const {targetId}=await call('Target.createTarget',{url:'about:blank'});
 const {sessionId}=await call('Target.attachToTarget',{targetId,flatten:true});
 await call('Page.enable',{},sessionId);
 await call('Emulation.setDeviceMetricsOverride',{width:1024,height:1024,deviceScaleFactor:1,mobile:false},sessionId);
 await call('Page.navigate',{url:`file://${resolve('build/entry.html')}`},sessionId);
 await call('Runtime.evaluate',{expression:`new Promise(async resolve=>{while(document.readyState!=='complete')await new Promise(r=>setTimeout(r,20));await document.fonts.ready;requestAnimationFrame(()=>requestAnimationFrame(resolve));})`,awaitPromise:true},sessionId);
 const report=await call('Runtime.evaluate',{returnByValue:true,expression:`(()=>{
  const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');
  function ink(el){const b=el.getBoundingClientRect(),s=getComputedStyle(el);ctx.font=s.fontWeight+' '+s.fontSize+' '+s.fontFamily;const m=ctx.measureText(el.textContent),matrix=el.getCTM(),scale=Math.hypot(matrix.c,matrix.d),p=new DOMPoint(+el.getAttribute('x'),+el.getAttribute('y')).matrixTransform(matrix);return {x:b.x,y:p.y-m.actualBoundingBoxAscent*scale,w:b.width,h:(m.actualBoundingBoxAscent+m.actualBoundingBoxDescent)*scale,text:el.textContent};}
  const intersect=(a,b)=>Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x)>.5&&Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y)>.5;
  const issues=[],boxes=[];
  for(const p of document.querySelectorAll('.story')){
   const id=p.dataset.id,[x,y,w,h]=p.dataset.box.split(',').map(Number),words=[...p.querySelectorAll('text.copy')].map(ink);
   const icons=[...p.querySelectorAll('[data-avoid]')].map(el=>{const b=el.getBoundingClientRect();return{x:b.x,y:b.y,w:b.width,h:b.height};});
   for(const a of words){if(a.x<x-.5||a.x+a.w>x+w+.5||a.y<y-.5||a.y+a.h>y+h+.5)issues.push({id,type:'outside panel',...a});for(const b of icons)if(intersect(a,b))issues.push({id,type:'text/icon overlap',...a});}
   words.forEach((a,i)=>words.slice(i+1).forEach(b=>{if(intersect(a,b))issues.push({id,type:'text/text overlap',a:a.text,b:b.text});}));
   boxes.push({id,x,y,w,h});
  }
  const all=[...document.querySelectorAll('svg text')].map(ink);
  for(const a of all)if(a.x<0||a.y<0||a.x+a.w>1024||a.y+a.h>1024)issues.push({type:'outside image',...a});
  all.forEach((a,i)=>all.slice(i+1).forEach(b=>{if(intersect(a,b))issues.push({type:'page-wide text overlap',a:a.text,b:b.text});}));
  return{panels:boxes.length,textElements:all.length,issues,boxes,date:ink(document.querySelector('#date')),fonts:[...document.fonts].map(f=>f.family)};
 })()`},sessionId);
 writeFileSync('build/audit.json',JSON.stringify(report.result.value,null,2));
 const {data}=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false,fromSurface:true},sessionId);
 writeFileSync('build/raw.png',Buffer.from(data,'base64'));
 console.log(`Chrome wrote fresh 1024×1024 PNG; ${report.result.value.issues.length} layout issues reported.`);
 await call('Browser.close');
}finally{
 child.kill('SIGKILL');
 for(const pending of waiting.values())clearTimeout(pending.timer);
 writeFileSync('build/chrome.log',log);
 rmSync(profile,{recursive:true,force:true});
}
