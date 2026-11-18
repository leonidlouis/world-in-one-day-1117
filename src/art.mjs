// Original flat-vector drawing primitives. No images, fonts or art are downloaded.
export const C={paper:'#f6f1e7',ink:'#1e282d',muted:'#596366',blue:'#cedfe2',sea:'#9fbdc6',red:'#b54237',gold:'#d4a04e',green:'#759680',cream:'#faf7ee'};
export const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
export const rect=(x,y,w,h,f,rx=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}"/>`;
export const path=(d,f=C.ink,stroke='none',w=1)=>`<path d="${d}" fill="${f}" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
export const stroke=(d,c=C.ink,w=1)=>path(d,'none',c,w);
export const line=(x1,y1,x2,y2,c=C.ink,w=1)=>stroke(`M${x1} ${y1}L${x2} ${y2}`,c,w);
export const circle=(x,y,r,f,stroke='none',w=1)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="${stroke}" stroke-width="${w}"/>`;
export const group=(x,y,s,art)=>`<g transform="translate(${x} ${y}) scale(${s})">${art}</g>`;
export const label=(x,y,s,size=9,color=C.ink,extra='')=>`<text x="${x}" y="${y}" font-size="${size}" font-weight="700" fill="${color}" class="sans art-label" ${extra}>${esc(s)}</text>`;
export const flame=(x,y,s=1)=>group(x,y,s,path('M0 36C-16 25-7 14 0 7L5 17L12 0C29 21 25 32 16 37Z',C.red)+path('M5 36Q-1 27 9 19L16 36Z',C.gold));
export const mine=(x,y,s=1)=>group(x,y,s,stroke('M0-17V17M-17 0H17M-12-12L12 12M12-12L-12 12',C.ink,3)+circle(0,0,10,C.ink)+circle(-3,-3,2,C.cream));
export const drone=(x,y,s=1)=>group(x,y,s,stroke('M-24 0H24M0-9V9M-13-2L-22-13M13-2L22-13',C.ink,3)+circle(-23,-14,7,'none',C.ink,2)+circle(23,-14,7,'none',C.ink,2));
