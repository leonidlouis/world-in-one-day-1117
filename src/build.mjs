import {mkdirSync,writeFileSync} from 'node:fs';
import {C,esc,rect,path,circle,line,stroke,group} from './art.mjs';
import {scenes} from './scenes.mjs';
import {regions,illustrated,briefs,stories} from './stories.mjs';

const text=(x,y,s,size=12,weight=450,fill=C.ink,cls='sans',extra='')=>`<text x="${x}" y="${y}" class="copy ${cls}" font-size="${size}" font-weight="${weight}" fill="${fill}" ${extra}>${esc(s)}</text>`;
const lines=(x,y,list,size,leading,weight=450,cls='sans')=>list.map((s,i)=>text(x,y+i*leading,s,size,weight,C.ink,cls)).join('');
const story=(d,x,y,w,h,content)=>`<g class="story" data-id="${d.id}" data-box="${x},${y},${w},${h}">${content}</g>`;
let s=`<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><style>
 .sans{font-family:'Source Sans 3',sans-serif}.serif{font-family:'DejaVu Serif',serif}
 text{font-kerning:normal;text-rendering:geometricPrecision}</style>${rect(0,0,1024,1024,C.paper)}`;
s+=text(18,18,'THE DAY IN WORLD NEWS',9.5,750,C.ink,'sans','letter-spacing="1.8"')+text(1006,18,'43 STORIES · 6 CONTINENTS · ONE DAY',9.5,750,C.ink,'sans','text-anchor="end" letter-spacing="1.2"');
s+=text(512,95,'Tuesday 17 November 2026',90,700,C.ink,'serif','id="date" text-anchor="middle" textLength="988" lengthAdjust="spacingAndGlyphs"');
s+=line(18,120,1006,120,C.ink,1.2);

const figures=[['5+','SHIPS HIT IN HORMUZ'],['11,000+','EBOLA CASES · DR CONGO'],['$115.8bn','NVIDIA Q3 REVENUE'],['−848','DOW POINTS · −1.64%'],['56–44','DEMOCRATIC SENATE MAJORITY'],['46','INJURED IN PRAGUE']];
figures.forEach(([value,caption],i)=>{const x=18+i*166;s+=text(x+79,152,value,27,750,C.ink,'sans','text-anchor="middle"')+text(x+79,167,caption,7.9,650,C.muted,'sans','text-anchor="middle" letter-spacing=".4"');if(i)s+=line(x-7,131,x-7,169,'#bfc4ba',.6);});

function tile(d,x,y,w,h,lead){
 const color=regions[d.region].color,artH=lead?135:61,bandH=lead?15:11,picH=artH+bandH;
 let p=line(x,y-4,x+w,y-4,color,1.6)+`<g class="illustration" data-avoid="1" transform="translate(${x} ${y})">${scenes[d.scene]()}</g>`;
 p+=rect(x,y+artH,w,bandH,C.ink)+text(x+7,y+picH-(lead?4:2.7),d.caption,lead?10:8.1,700,C.cream,'sans',lead?'letter-spacing=".5"':'letter-spacing=".2"');
 p+=text(x+1,y+picH+13,`${d.id} · ${d.kicker}`,lead?9:7.5,750,color,'sans',lead?'letter-spacing=".7"':'letter-spacing=".35"');
 p+=lines(x+1,y+(lead?187:101),d.head,lead?25.5:16.3,lead?27:17.5,700,'serif');
 p+=lines(x+1,y+(lead?234:139),d.deck,lead?12.2:10.6,lead?14.8:12.5);
 s+=story(d,x,y,w,h,p);
}
illustrated.slice(0,3).forEach((d,i)=>tile(d,18+i*334,180,320,255,true));
s+=line(18,439,1006,439,'#a9b0a7',.8);
illustrated.slice(3).forEach((d,i)=>tile(d,18+(i%5)*200,448+Math.floor(i/5)*168,188,157,false));
s+=line(18,778,1006,778,C.ink,1.2);

// Locator: thirteen numbered story pins; each brief also receives a small dot.
function map(){
 let m=rect(0,0,268,142,'#e2e8df',2);
 const land='#bdc8b5';
 const continents=[
  'M10 25L28 14L48 18L65 10L78 22L67 35L60 45L53 49L52 60L40 59L28 47L16 45ZM54 58L63 67L59 73L53 66Z',
  'M61 72L78 75L89 89L82 106L72 116L67 131L59 117L56 99L48 85Z',
  'M80 8L96 8L101 17L88 25L78 19Z',
  'M129 28L142 22L154 28L161 21L169 30L161 40L148 40L140 46L132 40Z',
  'M129 46L148 43L163 55L165 77L154 99L140 105L132 89L127 70L118 58Z',
  'M154 24L174 15L199 18L224 15L244 31L245 46L228 52L223 64L209 66L199 58L189 66L180 62L179 75L166 71L158 55L150 48L157 40Z',
  'M182 67L194 76L200 89L214 94L217 101L201 99L190 89ZM222 77L227 84L224 92L220 86Z',
  'M207 106L220 99L238 104L247 119L239 130L219 132L206 121ZM252 122L256 120L253 133L248 138Z',
  'M246 47L249 55L246 66L242 61ZM169 103L173 110L170 119L167 114Z'
 ];
 m+=continents.map(d=>path(d,land)).join('');
 for(const d of briefs){const [x,y]=d.point;m+=circle(x,y,1.5,regions[d.region].color);}
 // The measles report covers three named countries, linked to one numbered pin.
 m+=stroke('M92 81L42 43M92 81L45 63M92 81L71 100','#a68963',.5);
 for(const d of illustrated){const color=regions[d.region].color,[ax,ay]=d.point,[px,py]=d.pin;m+=line(ax,ay,px,py,color,.65)+circle(ax,ay,1.4,color)+circle(px,py,6.2,color,C.paper,.7)+`<text x="${px}" y="${py+2.5}" class="sans" font-size="7.4" font-weight="750" fill="${C.cream}" text-anchor="middle">${d.id}</text>`;}
 return m;
}
s+=text(18,794,'WHERE IT HAPPENED',11.5,700,C.ink,'serif','letter-spacing=".5"');
s+=group(18,807,1,map());
Object.values(regions).forEach((r,i)=>{const x=18+(i%3)*89,y=962+Math.floor(i/3)*12;s+=circle(x+3,y-2,2.5,r.color)+text(x+10,y,r.name,7.2,650,C.muted);});
s+=text(18,989,'1–13: illustrated stories · small dots: briefs',7.3,500,C.muted);
s+=text(306,794,'ALSO ON TUESDAY 17 NOVEMBER',12.4,700,C.ink,'serif','letter-spacing=".3"');
briefs.forEach((d,i)=>{
 const col=Math.floor(i/15),row=i%15,x=306+col*355,y=810+row*12.8,w=345,color=regions[d.region].color;
 const chip=rect(x,y-8,16,9.5,color,1)+text(x+8,y-.6,d.id,7.2,750,C.cream,'sans','text-anchor="middle"');
 const copy=`<text x="${x+22}" y="${y}" class="copy sans" font-size="10.8" font-weight="450" fill="${C.ink}"><tspan font-weight="750">${esc(d.place)}:</tspan><tspan> ${esc(d.fact)}</tspan></text>`;
 s+=story(d,x,y-11,w,14,chip+copy);
});
s+=line(18,997,1006,997,C.ink,.8)+text(18,1008,'Every story here happened or was first reported on 17 November 2026. Claims by warring sides are attributed.',8.2,500,C.ink)+text(18,1019,'Sources: supplied verified fact sheets · Reuters · AP · WHO · PAHO · Nvidia · Al Jazeera · Euronews · BBC.',8.1,450,C.muted);
s+='</svg>';
mkdirSync('build',{recursive:true});
writeFileSync('build/entry.svg',s);
writeFileSync('build/entry.html',`<!doctype html><meta charset="utf-8"><style>html,body{margin:0;width:1024px;height:1024px;overflow:hidden;background:${C.paper}}svg{display:block}</style>${s}`);
writeFileSync('build/story-index.json',JSON.stringify(stories,null,2));
console.log('Built 43 stories: 3 leads, 10 medium scenes, 30 one-line briefs.');
