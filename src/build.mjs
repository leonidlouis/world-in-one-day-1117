import { mkdirSync, writeFileSync } from 'node:fs';
import { C, esc, rect, line, path, circle, group, stroke, symbol } from './art.mjs';
import { tanker, bridges, summit, climate } from './lead-art.mjs';
import { stories } from './stories.mjs';

const topic = {conflict:'#b83530',politics:'#17374e',economy:'#a16b20',climate:'#42794e',society:'#247a7c',sport:'#bf651e'};
const backgrounds = {conflict:'#f5e8de',politics:'#e4e8e6',economy:'#f0e6cf',climate:'#e3ebdc',society:'#e1ebe5',sport:'#f5e5d3'};
// Real SVG text is rasterized by Chrome. Width and collision checks run in the browser.
const txt=(x,y,s,size=12,weight=450,fill=C.ink,cls='sans',extra='')=>`<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" class="copy ${cls}" ${extra}>${esc(s)}</text>`;
const copyLines=(x,y,lines,size,leading,weight=450,cls='sans')=>lines.map((a,i)=>txt(x,y+i*leading,a,size,weight,C.ink,cls)).join('');
const badge=(x,y,id,color,size=16)=>rect(x,y,size,13,color,1)+txt(x+size/2,y+9.6,id,9.2,750,C.paper,'sans','text-anchor="middle"');
const panel=(d,x,y,w,h,content)=>`<g class="story" data-id="${d.id}" data-box="${x},${y},${w},${h}">${content}</g>`;
const picture=(d,x,y,scale)=>`<g class="illustration" data-avoid="1">${group(x,y,scale,symbol(d.icon))}</g>`;
const rules=[];
let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><style>
 .sans{font-family:'Source Sans 3',sans-serif}.cond{font-family:'Barlow Condensed',sans-serif}.serif{font-family:'Fraunces',serif}
 text{font-kerning:normal;text-rendering:geometricPrecision}</style>${rect(0,0,1024,1024,C.paper)}`;
svg+=txt(18,22,'THE WORLD IN ONE DAY',17,650,C.ink,'serif')+txt(1006,21,'48 REPORTS • SIX CONTINENTS',10,700,C.red,'sans','text-anchor="end" letter-spacing="1.5"');
svg+=txt(512,86,'TUESDAY 17 NOVEMBER 2026',67,800,C.ink,'cond','id="date" text-anchor="middle" textLength="988" lengthAdjust="spacingAndGlyphs"');
svg+=line(18,97,1006,97,C.ink,2.5);

// The day in seven figures, with claims and approximate figures labelled.
const figures=[
 [176,'DOW','−1.64%  TO 50,759'],[176,'S&P 500','−1.03%  TO 7,340'],[112,'BRENT CRUDE','$93.14'],
 [124,'HORMUZ','5+ SHIPS HIT'],[174,'RUSSIA SAYS / 24 HOURS','2,000+ DRONES DOWN'],[106,'COP31','DAY 9'],[120,'SYRIANS RETURNED','NEARLY 4M']
];
let fx=18;svg+=rect(18,104,988,34,C.ink);
figures.forEach(([w,label,value],i)=>{svg+=txt(fx+9,115,label,8.5,650,'#d6e0dc','sans','letter-spacing=".6"')+txt(fx+9,131,value,14,750,i===5?'#f0bf68':C.paper,'cond');if(i)svg+=line(fx,109,fx,133,'#4c626c',.7);fx+=w;});

const art={tanker,bridges,summit,climate};
stories.slice(0,4).forEach((d,i)=>{
 const x=18+i*250,y=149,w=238,h=194;
 let p=badge(x,y,d.id,topic[d.topic])+txt(x+23,y+10,d.region,10,750,topic[d.topic],'sans','letter-spacing=".6"');
 p+=`<g class="illustration" data-avoid="1" transform="translate(${x} 168)">${art[d.art]()}</g>`;
 p+=copyLines(x,271,d.head,26,26,750,'cond')+copyLines(x,313,d.lines,11.5,12.5);
 svg+=panel(d,x,y,w,h,p);
 if(i<3)svg+=line(x+w+6,149,x+w+6,342,C.rule,.8);
});
svg+=line(18,348,1006,348,C.ink,1.5);

function medium(d,x,y,w,h,wide=false){
 const title=wide?17.5:17;
 let p=badge(x,y,d.id,topic[d.topic])+txt(x+22,y+10,d.region,wide?9.4:8.7,750,topic[d.topic],'sans');
 // Two headline lines have a reserved right-hand illustration gutter.
 p+=picture(d,x+w-36,y+24,.42)+copyLines(x,y+32,d.head,title,17.5,750,'cond');
 p+=copyLines(x,y+65,d.lines,wide?10.4:9.8,11.5);
 svg+=panel(d,x,y,w,h,p);
}
medium(stories[4],18,360,208,84,true);
medium(stories[5],18,453,208,90,true);
medium(stories[6],798,360,208,84,true);
medium(stories[7],798,453,208,88,true);

function world(){
 let m=rect(0,0,548,181,C.ink,2);
 const mt=(x,y,s,size=8,fill='#e8eee8',extra='')=>`<text x="${x}" y="${y}" class="sans" font-size="${size}" font-weight="650" fill="${fill}" ${extra}>${esc(s)}</text>`;
 m+=mt(12,14,'THE WORLD, LOCATED',10,C.paper,'letter-spacing="1.4"')+mt(536,14,'Numbered pins grouped by region',8,'#c6d5d0','text-anchor="end"');
 m+=`<g stroke="#3a5360" stroke-width=".6"><path d="M9 69H539M9 113H539M100 23V162M200 23V162M300 23V162M400 23V162M500 23V162"/></g>`;
 const land='#6d8b8d';
 const continents=[
 'M28 45L44 32L74 29L95 40L114 38L133 51L117 65L104 72L97 90L79 87L70 75L53 72L49 58L35 58ZM105 87L121 94L126 103L117 107L108 99Z',
 'M126 105L149 108L163 124L156 140L145 150L138 168L126 157L123 139L113 124Z',
 'M139 29L158 23L171 29L160 44L146 46Z',
 'M230 47L243 41L257 47L264 39L285 39L297 29L322 27L345 33L363 29L392 36L422 42L439 54L426 68L402 67L387 79L372 81L361 73L350 78L347 91L332 92L327 78L310 77L297 68L281 73L271 62L253 65L238 61Z',
 'M239 69L262 69L279 82L284 102L271 126L255 134L244 119L237 103L226 90Z',
 'M291 77L307 81L317 97L327 99L329 111L318 108L306 98L299 99Z',
 'M348 91L357 97L364 113L375 116L376 124L360 122L349 109Z',
 'M383 110L398 114L402 121L387 123ZM397 132L415 122L438 125L453 141L446 155L419 158L400 150Z',
 'M466 145L473 143L469 159L459 165ZM435 67L440 76L435 86L429 82ZM377 96L381 104L377 113L373 103ZM282 130L286 139L281 149L277 143Z'
 ];
 m+=`<g transform="translate(24 5) scale(1.025 .92)">${continents.map(d=>path(d,land)).join('')}</g>`;
 const pin=(d,x,y)=>circle(x,y,7.1,topic[d.topic],C.paper,.7)+mt(x,y+2.8,d.id,7.7,C.paper,'text-anchor="middle"');
 const sets=[
  ['northamerica',14,43,3,18,16,119,70,'NORTH AMERICA',12,30],
  ['europe',204,44,5,18,16,272,67,'EUROPE',205,31],
  ['middleeast',285,93,5,18,16,302,87,'MIDDLE EAST',284,139],
  ['africa',221,143,2,18,16,283,120,'AFRICA',211,160],
  ['southamerica',110,135,2,18,16,160,118,'SOUTH AMERICA',88,159],
  ['global',498,47,2,18,16,0,0,'GLOBAL',489,31]
 ];
 const used=new Set();
 for(const [place,x,y,cols,dx,dy,ax,ay,label,lx,ly] of sets){
  const list=stories.filter(d=>d.place===place);
  if(ax)m+=stroke(`M${x+8} ${y+10}L${ax} ${ay}`,'#a2b8b7',.7)+circle(ax,ay,1.7,C.paper);
  m+=mt(lx,ly,label,7.9,C.paper,'letter-spacing=".8"');
  list.forEach((d,i)=>{m+=pin(d,x+(i%cols)*dx,y+Math.floor(i/cols)*dy);used.add(d.id);});
 }
 const asiaPositions=[[411,94],[374,48],[425,48],[415,121]];
 stories.filter(d=>d.place==='asia').forEach((d,i)=>{const [x,y]=asiaPositions[i];m+=pin(d,x,y);used.add(d.id);});
 m+=mt(374,31,'ASIA',7.9,C.paper,'letter-spacing=".8"');
 for(const d of stories.filter(d=>d.place==='oceania')){m+=pin(d,469,146);used.add(d.id);}
 m+=mt(435,163,'AUSTRALIA',7.9,C.paper,'letter-spacing=".8"');
 m+=line(10,167,538,167,'#536b73',.6);
 Object.entries(topic).forEach(([name,color],i)=>{const x=12+i*87;m+=circle(x,175,3,color,'#d6e0dc',.4)+mt(x+7,178,name.toUpperCase(),7.3,C.paper);});
 if(used.size!==48)throw new Error('All 48 stories need map pins');
 return m;
}
svg+=group(238,360,1,world());
svg+=line(18,548,1006,548,C.ink,1.5);
stories.slice(8,14).forEach((d,i)=>{
 medium(d,18+i*166,558,158,83,false);
 if(i<5)svg+=line(180+i*166,558,180+i*166,641,C.rule,.7);
});
svg+=line(18,648,1006,648,C.ink,1.5);

// 34 concise briefs: six columns, six rows. Every item has its own pictogram.
stories.slice(14).forEach((d,i)=>{
 const col=i%6,row=Math.floor(i/6),x=18+col*166,y=657+row*56,w=158,h=54;
 let p=badge(x,y,d.id,topic[d.topic],16)+picture(d,x+w-21,y,.255);
 p+=copyLines(x+22,y+11,d.head,13,12.8,750,'cond');
 const by=y+(d.head.length===1?27:37);
 p+=copyLines(x,by,d.lines,9.7,10.8);
 svg+=panel(d,x,y,w,h,p);
 if(col<5)rules.push(line(x+w+4,y,x+w+4,y+h,C.rule,.6));
 if(row<5)rules.push(line(x,y+52,x+w,y+52,'#cccbc0',.6));
});
svg+=rules.join('');
// The two remaining grid cells provide a transparent date and attribution key.
svg+=rect(682,937,324,54,'#e8e6d9',2)+txt(691,951,'READING THIS FRONT PAGE',10.3,750,C.ink,'cond')+txt(691,963,'Tuesday reports • Prior outages dated • Future events labelled',9.3,500)+txt(691,975,'Claims attributed; draft targets are proposals. Map pins match story IDs.',9.3,500)+txt(691,987,'Only news source: supplied verified 17 November fact sheet.',9.3,500);
svg+=line(18,1000,1006,1000,C.ink,1.5)+txt(18,1014,'17 NOVEMBER 2026 • 48 NUMBERED REPORTS • ONE WORLD',9,700,C.ink,'sans','letter-spacing=".8"')+txt(1006,1014,'WAR / DIPLOMACY / MARKETS / CLIMATE / SOCIETY / SPORT',8.5,650,C.ink,'sans','text-anchor="end"');
svg+='</svg>';
mkdirSync('build',{recursive:true});
writeFileSync('build/entry.svg',svg);
writeFileSync('build/story-index.json',JSON.stringify(stories,null,2));
writeFileSync('build/entry.html',`<!doctype html><meta charset="utf-8"><style>html,body{margin:0;width:1024px;height:1024px;overflow:hidden;background:${C.paper}}svg{display:block}</style>${svg}`);
console.log(`Built ${stories.length} numbered news panels and map pins.`);
