import { mkdirSync, writeFileSync } from 'node:fs';

// All drawings and lettering below are original, deterministic SVG.
// News copy is drawn solely from /workspace/make-fun/newsimg/facts1117.md.
const C = {paper:'#f5f0e5', ink:'#142c3d', red:'#bd392d', gold:'#d99b3d', pale:'#e6e6d9', blue:'#cddfe4', sea:'#dce7e6', green:'#37796e', muted:'#59666b', rule:'#b7b7ab'};
const esc = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const text = (x,y,s,size=16,weight=400,fill=C.ink,cls='body',extra='') => `<text x="${x}" y="${y}" class="${cls}" font-size="${size}" font-weight="${weight}" fill="${fill}" ${extra}>${esc(s)}</text>`;
const rect = (x,y,w,h,fill,rx=0,extra='') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" ${extra}/>`;
const line = (x1,y1,x2,y2,col=C.rule,w=1) => `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${col}" stroke-width="${w}"/>`;
const path = (d,fill=C.ink,stroke='none',sw=1) => `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
const circle = (x,y,r,fill,stroke='none',sw=1) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const group = (x,y,scale,svg) => `<g transform="translate(${x} ${y}) scale(${scale})">${svg}</g>`;
const stroke = (d,c=C.ink,w=2) => path(d,'none',c,w);
const flame = (x,y,s=1) => group(x,y,s,path('M0 32C-13 22-6 12 0 5L4 15Q13 4 10-5C26 14 29 25 16 34Z',C.red)+path('M4 31Q-1 22 9 15Q8 23 15 25L12 33Z',C.gold));
const mine = (x,y,s=1) => group(x,y,s,stroke('M0-16V16M-16 0H16M-12-12L12 12M12-12L-12 12',C.ink,3)+circle(0,0,9,C.ink)+circle(-3,-3,2,C.paper));
const wave = y => stroke(`M0 ${y}Q12 ${y-5} 24 ${y}T48 ${y}T72 ${y}T96 ${y}T120 ${y}T144 ${y}T168 ${y}T192 ${y}T232 ${y}`, '#8daeb4',1.4);

function tanker(){return rect(0,0,232,112,C.blue,2)+circle(194,25,21,'#e6c58c')+
 path('M0 74L32 67L56 70L91 61L121 66L148 55L176 64L210 59L232 68V112H0Z','#bbced1')+
 rect(33,55,145,21,C.ink)+rect(142,37,27,22,C.paper)+rect(151,30,7,8,C.ink)+rect(146,42,6,6,C.ink)+rect(156,42,6,6,C.ink)+
 path('M20 73H202L181 93H40Z',C.ink)+rect(43,61,24,7,C.gold,3)+rect(73,61,24,7,C.gold,3)+rect(103,61,24,7,C.gold,3)+
 flame(67,28,.95)+flame(103,28,.72)+stroke('M65 20Q55 5 65-6M83 12Q96-1 91-12','#768b91',6)+mine(211,89,.8)+wave(101)+text(9,17,'STRAIT OF HORMUZ',11,700,C.ink,'sans');}
function bridges(){return rect(0,0,232,112,C.blue,2)+rect(0,78,232,34,'#a9c9d0')+
 path('M0 52H31V41H42V57H66V45H84V58H102V39H123V54H145V47H166V57H192V42H214V56H232V78H0Z','#a9b8b8')+
 stroke('M14 81H92M131 81H220',C.ink,8)+stroke('M40 81V109M78 81V108M160 81V110M199 81V108',C.ink,7)+
 stroke('M21 78L42 51L67 78M141 79L168 50L192 78',C.ink,3)+path('M90 77L103 72L107 88L116 75L132 79L124 88L104 86Z',C.red)+
 stroke('M71 22H112M91 12V31M84 18L76 12M101 18L109 12',C.ink,4)+circle(75,12,7,'none',C.ink,2)+circle(110,12,7,'none',C.ink,2)+
 stroke('M115 31L107 49L119 45L112 65',C.red,2)+rect(7,94,151,16,'#d5e3e4',2)+text(10,105,'KYIV: 17 AIR-RAID ALERTS',10.5,700,C.ink,'sans');}
function summit(){return rect(0,0,232,112,'#e9dbc0',2)+circle(195,26,19,'#dcbb80')+
 path('M0 91H232V112H0Z','#cecbb7')+path('M23 71L92 57L144 25L156 27L133 59L204 65L210 74L129 76L113 93L101 93L105 74L26 77Z',C.ink)+
 stroke('M177 87V42M196 88V40M215 89V47',C.ink,2)+path('M177 42H193V54H177Z',C.red)+path('M196 40H212V52H196Z',C.gold)+path('M215 47H230V59H215Z',C.green)+
 stroke('M12 111V97M29 111V96M47 111V100M64 111V96',C.ink,4)+circle(12,92,4,C.ink)+circle(29,91,4,C.ink)+circle(47,95,4,C.ink)+circle(64,91,4,C.ink)+
 rect(7,82,17,9,C.paper)+rect(48,82,25,8,C.paper)+text(9,17,'MANILA → SHENZHEN',11,700,C.ink,'sans');}
function climate(){return rect(0,0,232,112,'#d9e5d8',2)+circle(75,62,44,C.ink)+circle(75,62,39,'#87a99d')+
 path('M43 32L59 24L77 30L80 42L69 51L75 62L58 70L53 61L40 59L38 47Z','#dce1bc')+path('M88 57L108 49L109 69L95 84L89 96L81 85L86 75Z','#dce1bc')+
 stroke('M63 23Q44 63 69 100M89 24Q111 63 85 101M37 61H113',C.paper,1)+
 rect(126,32,77,73,C.paper,2)+rect(133,24,77,73,'#faf8ef',2)+text(142,46,'DRAFT',19,700,C.red,'cond')+
 stroke('M142 56H199M142 63H196M142 70H188M142 77H198',C.muted,2)+
 rect(211,38,7,45,C.red,3)+circle(214.5,85,9,C.red)+stroke('M214 39V17',C.ink,2)+text(9,17,'ANTALYA • DAY 9',11,700,C.ink,'sans');}

// Small narrative icons use a shared 80 × 60 drawing space.
function icon(kind){
 switch(kind){
 case 'ger': return path('M6 30L40 8L74 30Z',C.gold)+rect(10,30,60,27,C.paper,2)+path('M10 32H70M20 32V56M60 32V56','none',C.ink,2)+rect(31,36,18,21,C.ink)+stroke('M8 57H72',C.ink,3)+path('M32 8H49V18H32Z',C.red);
 case 'aid':return rect(3,29,53,23,C.ink,2)+rect(56,35,19,17,C.ink,2)+rect(7,19,22,22,C.paper,2)+rect(31,22,21,19,C.gold,2)+rect(61,38,10,8,C.blue)+circle(17,53,6,C.ink)+circle(63,53,6,C.ink)+text(9,35,'UN',12,800,C.ink,'sans')+stroke('M65 4V24M57 10L73 18M57 18L73 10',C.blue,2);
 case 'stocks':return stroke('M5 5V54H75',C.ink,2)+stroke('M10 17L25 10L37 25L48 19L65 42',C.red,5)+path('M55 42L70 49L71 32Z',C.red)+rect(14,37,8,14,C.gold)+rect(29,40,8,11,C.gold)+rect(44,43,8,8,C.gold);
 case 'tv':return rect(7,15,66,39,C.ink,3)+rect(13,21,54,26,C.blue,1)+stroke('M26 2L40 15L55 3',C.ink,3)+stroke('M23 49L57 19',C.red,5)+text(20,40,'TV',20,800,C.ink,'cond')+stroke('M31 59H51',C.ink,2);
 case 'hub':return path('M8 12L25 5L40 14L37 36L24 52L9 37Z',C.blue)+circle(22,23,4,C.ink)+stroke('M25 26Q61 12 64 38',C.red,3)+path('M56 35L64 46L72 34Z',C.red)+path('M55 50L67 42L78 50V60H55Z',C.green)+rect(63,52,6,8,C.paper);
 case 'health':return circle(23,28,16,C.green)+stroke('M23 5V12M23 45V53M0 28H7M40 28H47M7 12L13 18M35 40L41 46M7 45L13 39M35 16L41 10',C.green,3)+circle(19,24,3,C.paper)+circle(29,32,3,C.paper)+group(52,11,-1,rect(-23,0,19,44,C.red,9)+rect(-23,0,19,22,C.paper,9))+stroke('M56 33H75',C.ink,2);
 case 'radar':return stroke('M20 52L34 25L48 52M10 54H59',C.ink,3)+path('M16 16Q33 38 51 17L34 30Z',C.ink)+stroke('M43 5Q64 6 65 28M44 13Q55 14 56 27',C.red,2)+stroke('M59 43L72 54M72 43L59 54',C.red,3);
 case 'telegram':return circle(39,29,25,C.blue)+path('M13 28L65 11L54 48L35 36L29 45L29 34L53 21L32 31Z',C.paper)+stroke('M15 51L64 5',C.red,4);
 case 'home':return path('M7 28L39 4L72 28Z',C.gold)+rect(15,26,49,32,C.ink)+rect(34,38,13,20,C.paper)+stroke('M1 46H24M18 39L25 46L18 53',C.green,4);
 case 'boat':return path('M1 38H58L48 52H14Z',C.ink)+rect(20,25,24,13,C.paper)+stroke('M32 8V25M20 12H44',C.ink,2)+stroke('M62 8V41M51 16H75M54 16L48 30H60ZM72 16L66 30H78Z',C.red,2)+stroke('M5 58Q15 53 25 58T45 58T65 58',C.blue,2);
 case 'diplomacy':return circle(15,13,8,C.ink)+circle(65,13,8,C.ink)+path('M3 54V35Q14 20 27 35V54Z',C.green)+path('M52 54V35Q64 20 77 35V54Z',C.gold)+rect(29,19,23,32,C.paper,1)+stroke('M34 27H47M34 33H47M34 39H44',C.ink,2);
 case 'press':return group(9,0,1,path('M6 6H38V52H6Z',C.paper)+stroke('M12 15H32M12 22H32M12 29H27',C.ink,2)+path('M44 2L54 6L42 30L36 32L36 25Z',C.ink)+stroke('M1 52L58 9',C.red,4));
 case 'shield':return path('M39 3L67 12L63 38L39 57L15 38L11 12Z',C.green)+rect(24,18,29,24,C.paper,3)+circle(38,29,8,'none',C.ink,3)+stroke('M45 35L54 45',C.ink,4);
 case 'fifa':return circle(25,31,22,C.paper,C.ink,2)+path('M25 20L35 27L31 39H19L15 27Z',C.ink)+stroke('M25 10V20M5 25L15 27M12 49L19 39M40 49L31 39M46 24L35 27',C.ink,2)+path('M55 43H70V50H55ZM58 12H67V44H58ZM51 8H75L70 23H56Z',C.gold);
 case 'shirt':return path('M26 4L12 10L2 27L15 35L21 26V57H60V26L67 35L79 27L69 10L54 4L48 14H32Z',C.blue,C.ink,2)+path('M34 15H45V56H34Z',C.red)+text(36,42,'F',18,800,C.paper,'cond');
 case 'horse':return path('M13 52L17 31L35 21L36 8L46 2L51 12L67 22L63 31L51 27L47 40L52 55H43L36 42L25 44L22 55Z',C.ink)+path('M36 13L25 25L17 25L28 16Z',C.red)+circle(49,15,2,C.paper)+stroke('M1 58H76',C.gold,3);
 default:return '';
 }
}

function label(x,y,id,region,color=C.red){return rect(x,y-13,23,17,color,1)+text(x+11.5,y,id,12,800,C.paper,'sans','text-anchor="middle"')+text(x+30,y,region,12,750,color,'sans','letter-spacing="1.1"');}
function headline(x,y,lines,size=34,leading=34){return lines.map((s,i)=>text(x,y+i*leading,s,size,750,C.ink,'cond')).join('');}
function lead(x,id,region,art,lines,body){return label(x,189,id,region)+`<defs><clipPath id="art-${id}"><rect width="232" height="112" rx="2"/></clipPath></defs>`+group(x,201,1,`<g clip-path="url(#art-${id})">${art}</g>`)+headline(x,347,lines)+body.map((s,i)=>text(x,407+i*18,s,15.5,450)).join('');}

let s=`<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><style>
 .body,.sans{font-family:'Source Sans 3',sans-serif} .cond{font-family:'Barlow Condensed',sans-serif} .serif{font-family:'Fraunces',serif}
 text{font-kerning:normal} </style>${rect(0,0,1024,1024,C.paper)}`;
s+=text(24,31,'WORLD REPORT',12,750,C.red,'sans','letter-spacing="1.7"')+text(512,34,'The World in One Day',28,650,C.ink,'serif','text-anchor="middle"')+text(1000,31,'20 STORIES / 6 CONTINENTS',12,750,C.red,'sans','text-anchor="end" letter-spacing="1"');
s+=text(0,101,'TUESDAY 17 NOVEMBER 2026',71,800,C.ink,'cond','text-anchor="middle" transform="translate(512 0) scale(1.34 1)"');
s+=line(24,114,1000,114,C.ink,3)+text(512,129,'WAR & DIPLOMACY  /  CLIMATE  /  ECONOMY  /  HEALTH & TECHNOLOGY  /  SPORT',11,650,C.muted,'sans','text-anchor="middle" letter-spacing="1.9"');
s+=rect(24,140,976,27,C.ink)+text(38,159,'DOW  50,759  −1.64%',16,700,C.paper,'sans')+text(295,159,'S&P  7,340  −1.03%',16,700,C.paper,'sans')+text(561,159,'BRENT  $93.14',16,700,C.paper,'sans')+text(802,159,'COP31  DAY 9',16,700,'#e5b75e','sans');
s+=lead(24,'01','IRAN / HORMUZ',tanker(),['HORMUZ: MINES','HIT 5+ SHIPS'],['Iran says tankers caught fire.','US strikes Qeshm launch site.']);
s+=lead(272,'02','UKRAINE / RUSSIA',bridges(),['UKRAINE WAR:','BRIDGES HIT'],['Russia says Crimea bridge hit.','Kyiv: metro partly suspended.']);
s+=lead(520,'03','ASIA / DIPLOMACY',summit(),['TRUMP LANDS','IN MANILA'],['ASEAN/Quad talks; protests.','Shenzhen summit set for Thursday.']);
s+=lead(768,'04','TURKEY / CLIMATE',climate(),['COP31 DRAFT','UNDER PRESSURE'],['Fossil-fuel phaseout divides talks.','Adaptation finance also disputed.']);
for(const x of [264,512,760])s+=`<path d="M${x} 179V435" stroke="${C.rule}" stroke-width="1"/>`;
s+=line(24,443,1000,443,C.ink,2);

// Regional sidebars frame a hand-drawn world locator map.
s+=label(24,466,'05','MONGOLIA',C.gold)+group(152,450,.86,icon('ger'))+headline(24,503,['PRESIDENT','SEEKS TO QUIT'],29,29)+text(24,566,'Khurelsukh denies allegations',14.5)+text(24,583,'of railway-project corruption.',14.5)+text(24,607,'Parliament must approve.',14.5,650);
s+=label(778,466,'06','GAZA',C.red)+group(930,450,.8,icon('aid'))+headline(778,503,['MORE AID','BEFORE WINTER'],29,29)+text(778,566,'Germany urges Israel to let more in.',14.5)+text(778,583,'Strike near UN fuel convoy',14.5)+text(778,600,'in Rafah.',14.5);

function world(){
 let m=rect(0,0,508,171,C.ink,3)+text(15,20,'THE DAY, LOCATED',12,700,'#f5f0e5','sans','letter-spacing="1.6"');
 // Stylized longitude and latitude lines, without claims about borders.
 m+=`<g stroke="#314b5a" fill="none" stroke-width=".65"><path d="M10 64H498M10 100H498M10 136H498M100 28V161M200 28V161M300 28V161M400 28V161"/></g>`;
 const land='#b7c5ba';
 m+=path('M28 45L44 32L74 29L95 40L114 38L133 51L117 65L104 72L97 90L79 87L70 75L53 72L49 58L35 58ZM105 87L121 94L126 103L117 107L108 99Z',land);
 m+=path('M126 105L149 108L163 124L156 140L145 150L138 168L126 157L123 139L113 124Z',land);
 m+=path('M139 29L158 23L171 29L160 44L146 46Z',land);
 m+=path('M230 47L243 41L257 47L264 39L285 39L297 29L322 27L345 33L363 29L392 36L422 42L439 54L426 68L402 67L387 79L372 81L361 73L350 78L347 91L332 92L327 78L310 77L297 68L281 73L271 62L253 65L238 61Z',land);
 m+=path('M239 69L262 69L279 82L284 102L271 126L255 134L244 119L237 103L226 90Z',land);
 m+=path('M291 77L307 81L317 97L327 99L329 111L318 108L306 98L299 99Z',land);
 m+=path('M348 91L357 97L364 113L375 116L376 124L360 122L349 109Z',land);
 m+=path('M383 110L398 114L402 121L387 123ZM397 132L415 122L438 125L453 141L446 155L419 158L400 150Z',land);
 m+=path('M466 145L473 143L469 159L459 165Z',land)+path('M435 67L440 76L435 86L429 82Z',land)+path('M377 96L381 104L377 113L373 103Z',land)+path('M282 130L286 139L281 149L277 143Z',land);
 const pin=(x,y,n,c)=>circle(x,y,10,c,C.ink,1.4)+text(x,y+4,n,10,800,C.paper,'sans','text-anchor="middle"');
 m+=pin(91,68,'07',C.red)+pin(239,48,'02',C.red)+pin(255,66,'04',C.red)+pin(270,84,'06',C.red)+pin(295,85,'01',C.red)+pin(371,103,'03',C.red)+pin(342,51,'05',C.gold)+pin(255,125,'15',C.green)+pin(429,143,'20',C.gold)+pin(122,112,'14',C.red);
 m+=text(30,94,'AMERICAS',8.5,650,'#e0e5da','sans','letter-spacing="1"')+text(190,36,'EUROPE',8.5,650,'#e0e5da','sans','letter-spacing="1"')+text(380,51,'ASIA',8.5,650,'#e0e5da','sans','letter-spacing="1"')+text(209,145,'AFRICA',8.5,650,'#e0e5da','sans','letter-spacing="1"')+text(406,168,'OCEANIA',8.5,650,'#e0e5da','sans','letter-spacing="1"');
 m+=text(14,155,'Pins match numbered reports',10,550,'#e0e5da','sans');
 return m;
}
s+=group(258,455,1,world());
s+=line(24,637,1000,637,C.ink,2);

function medium(x,id,region,kind,head,body,col=C.red){return label(x,660,id,region,col)+group(x+166,704,.78,icon(kind))+headline(x,695,head,27,28)+body.map((a,i)=>text(x,762+i*17,a,14.3)).join('');}
s+=medium(24,'07','WALL STREET','stocks',['AI JITTERS','HIT STOCKS'],['Shares fall before Nvidia earnings.','Dow loses 848 points.']);
s+=medium(272,'08','TURKEY','tv',['SÖZCÜ TV','TAKEN OFF AIR'],['Istanbul HQ raided; trustee installed.','Four executives detained.']);
s+=medium(520,'09','EUROPE / AFRICA','hub',['EU STATES EYE','RWANDA HUB'],['Five states explore migrant returns.','Transfers targeted for 2027.'],C.green);
s+=medium(768,'10','HEALTH / WHO','health',['DRUG RESISTANCE','WARNING'],['39M+ direct deaths possible by 2050.','World AMR Awareness Week.'],C.green);
s+=line(24,802,1000,802,C.ink,2);

function brief(x,y,id,region,kind,head,body,col=C.red){return label(x,y+14,id,region,col)+group(x+149,y-5,.45,icon(kind))+headline(x,y+41,head,22,21)+text(x,y+79,body,12.5,450);}
const briefs=[
 ['11','GULF','radar',['BAHRAIN DISPUTES','IRAN DRONE CLAIM'],'Bahrain/CENTCOM: intercepted.'],
 ['12','MIDDLE EAST','telegram',['TELEGRAM','BLOCKED'],'Jordan and Iraq cite security.'],
 ['13','SYRIA','home',['NEARLY 4M','RETURN HOME'],'UN says needs remain acute.'],
 ['14','ECUADOR / US','boat',['FISHERMEN SUE','OVER US STRIKE'],'16 survivors take legal action.'],
 ['15','AFRICA','diplomacy',['DIPLOMATIC','DISPUTE'],"S. Africa summons Nigeria’s envoy.",C.green],
 ['16','MEXICO','press',['JOURNALIST','FOUND DEAD'],'Eduardo Flores Salado, Acapulco.'],
 ['17','TECHNOLOGY','shield',['AI TOOL TO','DETECT CSAM'],'OpenAI: free to vetted groups.',C.green],
 ['18','FOOTBALL','fifa',['FIFA PRESIDENCY','CHALLENGE'],'Diallo to challenge Infantino.'],
 ['19','FOOTBALL','shirt',['PALACE APPOINTS','THOMAS FRANK'],'Manager’s deal to June 2029.'],
 ['20','AUSTRALIA','horse',['RACEHORSE','LANDFILL OUTRAGE'],'So You Are dumped in Sydney.',C.gold]
];
briefs.forEach((b,i)=>s+=brief(24+(i%5)*198,815+Math.floor(i/5)*91,...b));
s+=line(24,903,1000,903,C.rule,1)+line(24,998,1000,998,C.ink,2)+text(24,1015,'17 NOVEMBER 2026  •  A WORLD NEWS SNAPSHOT',10,700,C.muted,'sans','letter-spacing="1"')+text(1000,1015,'Events and reports of Tuesday • Planned events labelled',10,500,C.muted,'sans','text-anchor="end"');
s+='</svg>';
mkdirSync('build',{recursive:true});
writeFileSync('build/entry.svg',s);
writeFileSync('build/entry.html',`<!doctype html><meta charset="utf-8"><style>*{box-sizing:border-box}html,body{margin:0;width:1024px;height:1024px;overflow:hidden;background:${C.paper}}svg{display:block}</style>${s}`);
console.log('Wrote build/entry.svg and build/entry.html');
