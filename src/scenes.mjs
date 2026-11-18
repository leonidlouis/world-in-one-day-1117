// Original story-specific scenes. Lead art: 320×135; medium art: 188×61.
import {C,rect,path,circle,stroke,line,label,group,flame,mine,drone} from './art.mjs';
const windowRow=(x,y,n,dx,w=7,h=8)=>Array.from({length:n},(_,i)=>rect(x+i*dx,y,w,h,C.blue,1)).join('');
const waves=(y,w=320)=>stroke(`M1 ${y}Q13 ${y-5} 26 ${y}T52 ${y}T78 ${y}T104 ${y}T130 ${y}T156 ${y}T182 ${y}T208 ${y}T234 ${y}T260 ${y}T286 ${y}T${w-1} ${y}`,'#84a5ad',1.4);
export const scenes={
 kerch(){return rect(0,0,320,135,C.blue)+circle(280,24,18,'#e9d0a3')+
  path('M0 62L42 51L75 59L112 50L148 59L184 53L227 59L261 50L294 57L320 52V85H0Z','#a7bdba')+
  rect(0,80,320,55,C.sea)+stroke('M5 75H121M199 75H315',C.ink,9)+
  stroke('M41 78V130M103 78V130M217 78V130M283 78V130',C.ink,8)+
  stroke('M2 78L24 94L43 78L72 94L102 78M217 78L248 94L281 78L315 94',C.ink,3)+
  path('M122 79L187 111L182 121L117 88Z',C.ink)+stroke('M126 92L169 113',C.gold,2)+
  path('M138 70L147 60L153 72L165 62L164 78L179 74L168 87L144 83Z',C.red)+
  drone(68,29,.8)+path('M222 23L182 62L176 65L179 56L217 19Z',C.ink)+path('M222 23L226 14L217 19Z',C.red)+
  waves(126)+waves(133);},
 hormuz(){return rect(0,0,320,135,'#d6e1df')+circle(231,24,18,'#e4c38a')+
  path('M263 66L281 54L301 58L320 49V96H257Z','#b4bba2')+rect(0,80,320,55,'#a8c4c9')+
  path('M7 65H90L80 76H20Z','#7f999f')+rect(27,54,48,10,'#7f999f')+rect(64,45,12,12,'#aabec0')+
  rect(36,73,205,20,C.ink)+rect(211,48,28,33,C.cream)+rect(222,40,7,8,C.ink)+windowRow(216,55,2,10,6,7)+
  path('M17 91H269L247 117H43Z',C.ink)+[58,96,134,172].map(x=>rect(x,80,27,6,C.gold,3)).join('')+
  flame(89,36,1.05)+flame(142,44,.84)+stroke('M87 32Q77 19 88 11M109 25Q122 16 116 7','#7b9292',5)+
  mine(289,108,.9)+drone(282,20,.43)+stroke('M283 47V70M269 71H297',C.ink,2)+path('M270 41Q282 57 295 41L283 51Z',C.ink)+
  stroke('M266 32L274 39M274 32L266 39',C.red,2)+waves(127);},
 quad(){
  let s=rect(0,0,320,135,'#e5dccb')+rect(0,111,320,24,'#b8b9a7')+
   path('M17 29Q42 8 67 29V83H17ZM253 29Q278 8 303 29V83H253Z','#c7d8d6')+
   label(160,20,'QUAD',15,C.ink,'text-anchor="middle" letter-spacing="4"');
  [57,125,193,261].forEach((x,i)=>{s+=path(`M${x-22} 85V65Q${x} 50 ${x+22} 65V85Z`,['#243b49','#555c62','#4e5d69','#354c54'][i])+circle(x,43,11,'#cba987')+path(`M${x-10} 39Q${x} 24 ${x+10} 39V34Q${x} 23 ${x-10} 34Z`,i===0?'#c7ae72':C.ink)+path(`M${x-6} 57L${x} 73L${x+6} 57Z`,C.cream);});
  s+=rect(20,84,280,39,C.ink,2)+path('M125 83L134 67L146 76L152 65L166 75L179 70L190 84Z','#90a1a2')+path('M134 81L146 72L157 82L169 72L181 82Z','#c7c6b3');
  ['US','JAPAN','INDIA','AUSTRALIA'].forEach((name,i)=>{s+=rect(30+i*68,96,56,14,C.cream,1)+label(58+i*68,106,name,8.3,C.ink,'text-anchor="middle"');});
  return s+label(160,132,'CRITICAL MINERALS',8.2,C.ink,'text-anchor="middle" letter-spacing="1.3"');
 },
 ebola(){return rect(0,0,188,61,'#d9e3d6')+path('M0 50L29 43L59 46L95 40L134 47L162 40L188 45V61H0Z','#b3c4ad')+
  path('M8 28L57 8L108 28Z','#7b9a83')+rect(13,28,89,31,C.cream)+rect(20,35,24,19,'#d2dfd9')+rect(55,39,20,20,'#467265')+
  label(57,36,'EBOLA',9.4,C.red,'text-anchor="middle"')+circle(132,21,9,C.cream)+rect(125,17,15,8,C.blue,2)+path('M119 59V40Q132 26 145 40V59Z',C.cream)+
  stroke('M122 41L116 54M141 41L147 54','#809994',3)+rect(158,36,22,5,C.ink)+[160,168,176].map(x=>rect(x,17,5,24,C.cream,2)+rect(x+1,27,3,11,C.red,1)).join('');},
 nvidia(){return rect(0,0,188,61,'#dce6d7')+rect(8,8,97,47,'#315c43',3)+
  stroke('M13 17H32V26M14 45H30V37M76 20H96M76 43H96M38 10V19M63 10V19M39 44V53M63 44V53','#87aa74',2)+
  rect(31,18,47,29,C.ink,2)+label(54.5,36,'NVIDIA',8.8,C.cream,'text-anchor="middle"')+rect(115,6,65,49,C.cream,2)+
  label(126,20,'Q3 REVENUE',7.1)+label(123,38,'+103%',16,'#3e764d')+stroke('M124 46H169','#86958b',1);},
 measles(){let s=rect(0,0,188,61,'#e9dfcf');['US','MEXICO','BOLIVIA'].forEach((name,i)=>{const x=10+i*60;s+=rect(x,7,49,47,C.cream,2)+label(x+24.5,19,name,8.3,C.ink,'text-anchor="middle"')+label(x+24.5,30,'STATUS',6.7,'#7a8581','text-anchor="middle"')+circle(x+24.5,42,8,'none',C.red,2)+stroke(`M${x+19} 48L${x+30} 36`,C.red,2);});return s;},
 mongolia(){return rect(0,0,188,61,'#dce4df')+rect(0,49,188,12,'#adbea1')+
  path('M50 24L108 5L168 24Z',C.gold)+rect(54,25,110,31,C.cream)+stroke('M62 29V52M80 29V52M98 29V52M116 29V52M134 29V52M152 29V52','#788c8d',4)+rect(48,54,123,5,C.ink)+
  path('M4 34L26 17L48 34Z','#c79c54')+rect(8,34,37,23,C.cream)+rect(21,43,10,14,C.ink)+
  rect(120,11,49,43,C.cream,1)+label(126,26,'RESIGN',8.5,C.red)+stroke('M126 33H160M126 38H160M126 46H149','#87948f',1);},
 cop(){return rect(0,0,188,61,'#dce7da')+circle(34,31,24,C.ink)+circle(34,31,20,'#8eac9a')+
  path('M20 18L30 14L39 21L36 30L25 33L18 25ZM42 30L53 28L51 41L39 48L36 40Z','#e4e5bb')+stroke('M14 31H54M32 10Q19 30 32 51M38 10Q50 30 38 51',C.cream,.7)+
  path('M67 34L76 28L84 34L93 28L103 34V54H67Z','#77928a')+rect(72,18,6,17,'#77928a')+rect(88,23,6,12,'#77928a')+circle(74,12,5,'#b3c4b7')+circle(78,7,4,'#b3c4b7')+
  rect(112,6,65,49,C.cream,2)+label(120,22,'DRAFT',13,C.red)+label(120,33,'PROPOSALS',6.4,C.ink)+label(120,47,'$120B+',11.5,C.ink);},
 stocks(){return rect(0,0,188,61,'#e3e1d6')+path('M5 26L37 9L69 26Z',C.ink)+rect(9,49,57,7,C.ink)+stroke('M17 29V47M31 29V47M45 29V47M59 29V47','#758f96',5)+
  rect(78,6,101,49,C.cream,2)+stroke('M84 13V49H172M85 24H173M85 36H173','#d4d8cd',.8)+stroke('M85 15L103 22L113 18L128 35L142 31L166 45',C.red,3)+path('M158 46L171 50L170 37Z',C.red);},
 gaza(){return rect(0,0,188,61,'#e5e2d5')+path('M3 46V19H26V46M31 46V11H53V46M140 46V19H161V46M165 46V8H184V46', '#c2c2b1')+
  windowRow(8,25,2,9,4,5)+windowRow(36,18,2,9,4,5)+windowRow(169,16,2,8,4,5)+rect(0,52,188,9,'#a9ac9a')+
  rect(41,29,73,23,C.ink,2)+rect(114,36,24,16,C.ink,2)+rect(119,38,13,7,C.blue,1)+circle(55,53,6,C.ink)+circle(123,53,6,C.ink)+
  rect(46,33,24,15,C.cream,1)+label(58,44,'AID',9,C.ink,'text-anchor="middle"')+rect(74,34,17,14,'#d9b986')+rect(92,34,17,14,'#d9b986')+
  stroke('M144 9Q156 2 168 9M149 14Q163 6 176 14','#a6b5ae',1.3);},
 alaska(){return rect(0,0,188,61,'#dce2dd')+path('M17 12L37 9L43 22L59 30L58 43L44 40L35 34L26 45L15 33L6 30L13 23Z','#ba793c')+
  circle(25,49,2,'#ba793c')+circle(17,52,1.8,'#ba793c')+circle(10,54,1.5,'#ba793c')+rect(72,23,38,30,C.ink,2)+stroke('M77 29H105',C.cream,2)+
  rect(81,5,22,24,C.cream,1)+stroke('M85 17L90 22L99 11','#4c7b56',2.5)+label(124,27,'D 56',15,'#a6602c')+label(124,48,'R 44',15,'#637478');},
 prague(){return rect(0,0,188,61,'#dbe5e4')+path('M35 22Q94-9 153 22V48H35Z','#bdceca')+stroke('M52 23V46M72 17V46M93 15V46M114 18V46M134 23V46','#8fa8a8',2)+
  stroke('M1 58L85 42L187 50M1 60L88 47L187 56','#879c99',2)+
  path('M4 32H72L88 40V51H4Z','#396879')+windowRow(10,36,5,12,8,6)+rect(74,40,9,7,C.blue,1)+
  path('M104 26H182V45H94V35Z','#687e75')+windowRow(111,30,5,13,9,6)+rect(99,35,8,8,C.blue,1)+
  path('M87 38L94 32L99 38L109 35L105 46L98 47L93 53L88 46L81 45Z',C.gold);},
 an12(){return rect(0,0,188,61,'#d5e0df')+path('M0 53L18 47L34 52L50 44L70 51L94 44L118 50L141 43L163 50L188 45V61H0Z','#9eb2a7')+
  path('M90 5Q94 0 98 5L100 20L158 34L161 40L101 32V46L116 54H106L94 48L82 54H72L87 46V32L27 40L30 34L88 20Z',C.ink)+
  [52,73,115,136].map(x=>rect(x-3,28,6,13,C.ink,2)+circle(x,34,5,'none','#566e77',1)+stroke(`M${x-7} 34H${x+7}M${x} 27V41`,'#566e77',1)).join('')+
  flame(119,13,.65)+stroke('M135 15Q149 9 154 15','#8d9f9e',4);}
};
