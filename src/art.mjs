
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


export { C, esc, text, rect, line, path, circle, group, stroke, tanker, bridges, summit, climate, icon };

// Additional pictograms drawn for the expanded edition (80 × 60 design space).
export function symbol(kind) {
 const roof = path('M4 21L39 3L74 21Z',C.ink)+rect(7,49,65,7,C.ink)+stroke('M15 25V45M31 25V45M47 25V45M63 25V45',C.gold,7);
 switch(kind) {
 case 'bank': return roof;
 case 'bankplane': return group(0,10,.65,roof)+path('M43 21L61 15L69 3L74 3L70 17L79 21L79 25L68 25L62 35L58 35L59 24L44 25Z',C.ink);
 case 'carrier': return path('M3 33H77L65 52H15Z',C.ink)+rect(42,17,17,15,C.ink)+stroke('M49 4V17M44 9H62',C.ink,2)+path('M11 30L25 24L31 14L35 14L33 25L41 27L39 30H28L24 33H20L21 29Z',C.red)+stroke('M1 58Q14 52 26 58T52 58T78 58',C.blue,2);
 case 'camera':return rect(6,16,62,37,C.ink,4)+rect(17,9,22,10,C.ink,2)+circle(39,34,13,C.blue)+circle(39,34,7,C.ink)+circle(59,24,3,C.red);
 case 'plane':return path('M4 30L30 23L48 2L55 2L45 23L72 28L76 34H44L34 52H26L30 33L5 36Z',C.ink)+stroke('M3 56H76',C.gold,3);
 case 'bus':return rect(6,8,65,42,C.ink,5)+rect(12,15,19,18,C.blue,2)+rect(35,15,28,18,C.blue,2)+circle(20,51,8,C.ink)+circle(59,51,8,C.ink)+stroke('M9 39H67',C.red,3);
 case 'oil':return path('M32 2C26 15 9 28 9 39A23 23 0 0 0 55 39C55 28 39 14 32 2Z',C.ink)+rect(52,21,21,34,C.gold,3)+stroke('M54 30H71M54 45H71',C.ink,2)+circle(25,42,6,C.paper);
 case 'chip':return rect(17,9,44,42,C.ink,4)+rect(27,19,24,22,C.blue,2)+stroke('M7 16H17M7 29H17M7 43H17M61 16H72M61 29H72M61 43H72M26 0V9M42 0V9M54 0V9M26 51V59M42 51V59M54 51V59',C.ink,3)+text(31,35,'AI',13,800,C.ink,'sans');
 case 'cloud':return path('M16 47C-3 44 0 22 17 22C20 1 48-3 56 20C80 15 85 46 65 48Z',C.blue,C.ink,2)+stroke('M35 22L48 40M48 22L35 40',C.red,4);
 case 'barrier':return stroke('M13 8V57M66 8V57',C.ink,5)+rect(5,20,70,15,C.red,2)+path('M9 20H19L30 35H20ZM37 20H47L58 35H48Z',C.paper);
 case 'document':return rect(15,3,48,54,C.paper,2)+stroke('M15 3H63V57H15ZM24 15H54M24 24H54M24 33H54M24 43H43',C.ink,3)+circle(58,47,9,C.gold);
 case 'chair':return rect(18,4,45,28,C.ink,3)+rect(12,36,58,9,C.gold,2)+stroke('M20 45V58M61 45V58M17 23V37M65 23V37',C.ink,4);
 case 'car':return path('M7 29L18 10H58L71 29V49H7Z',C.ink)+path('M22 16H52L60 29H15Z',C.blue)+circle(19,49,9,C.ink)+circle(60,49,9,C.ink)+rect(12,35,10,5,C.gold,1)+rect(56,35,10,5,C.gold,1);
 case 'servers':return [2,21,40].map(y=>rect(8,y,61,16,C.ink,2)+circle(18,y+8,3,C.gold)+stroke(`M29 ${y+6}H59M29 ${y+11}H59`,C.blue,2)).join('');
 case 'pope':return path('M23 24L28 3L39 13L50 3L55 24Z',C.paper,C.ink,2)+circle(39,32,10,C.ink)+path('M15 59Q15 40 39 40T64 59Z',C.paper,C.ink,2)+stroke('M68 6V55M60 15H76',C.gold,3);
 case 'medal':return path('M17 2H31L40 22L48 2H63L48 33H31Z',C.red)+circle(40,40,17,C.gold)+path('M40 27L44 35L54 37L46 43L48 53L40 48L32 53L34 43L26 37L36 35Z',C.ink);
 case 'health':return circle(25,30,17,C.green)+stroke('M25 3V12M25 48V58M0 30H8M43 30H53M5 9L14 19M38 43L48 53M5 51L14 42M38 17L48 7',C.green,3)+circle(20,26,3,C.paper)+circle(31,34,3,C.paper)+rect(59,9,16,42,C.red,8)+rect(59,9,16,21,C.paper,8)+stroke('M59 30H75',C.ink,1);
 case 'globe':return circle(39,30,27,C.ink)+circle(39,30,23,C.blue)+path('M23 10L38 9L47 20L37 28L41 37L29 39L20 24ZM49 33L59 29L58 43L44 52L40 42Z',C.green)+stroke('M15 30H63M39 7Q22 30 39 53M39 7Q56 30 39 53',C.paper,1);
 case 'mine':return mine(38,30,1.5);
 case 'drone':return stroke('M12 27H66M39 12V42M23 23L13 9M55 23L67 9',C.ink,4)+circle(13,9,8,'none',C.ink,2)+circle(67,9,8,'none',C.ink,2)+path('M34 39L27 54H47L40 39Z',C.red);
 default:return icon(kind);
 }
}
