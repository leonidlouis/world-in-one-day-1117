// Four original illustrations drawn natively at 238 × 80 (no stretched circles).
import { C, rect, path, circle, stroke, text, group, symbol } from './art.mjs';
export function tanker(){
 return rect(0,0,238,80,C.blue,2)+circle(210,18,14,'#e5bd7e')+
 path('M0 50L30 43L58 48L101 37L130 44L168 38L201 46L238 41V80H0Z','#b9cfd0')+
 rect(34,37,151,20,C.ink)+rect(153,23,27,22,C.paper)+rect(163,16,6,7,C.ink)+rect(158,28,6,6,C.ink)+rect(168,28,6,6,C.ink)+
 path('M16 54H210L190 72H38Z',C.ink)+[45,76,107].map(x=>rect(x,44,23,5,C.gold,2)).join('')+
 path('M69 39C53 31 64 17 67 13L71 23L79 10C92 25 90 35 81 39Z',C.red)+path('M70 39Q65 31 75 24L81 39Z',C.gold)+
 path('M109 37Q96 27 105 19L110 24L115 13Q130 31 117 38Z',C.red)+path('M109 37L113 25L119 36Z',C.gold)+
 stroke('M68 12Q61 6 67 3M83 12Q92 7 88 3','#7d9699',4)+
 group(202,54,.36,symbol('mine'))+stroke('M0 76Q12 71 24 76T48 76T72 76T96 76T120 76T144 76T168 76T192 76T216 76T238 76','#89adb1',1.3);
}
export function bridges(){
 return rect(0,0,238,80,C.blue,2)+rect(0,55,238,25,'#a9cad1')+
 path('M0 40H31V31H42V42H65V35H83V44H104V27H124V42H148V33H167V41H194V31H216V42H238V56H0Z','#a6b7b7')+
 stroke('M14 59H93M135 59H227',C.ink,6)+stroke('M42 59V79M79 59V79M166 59V79M208 59V79',C.ink,5)+
 stroke('M21 56L44 34L70 56M145 56L171 34L197 56',C.ink,2.5)+path('M94 55L104 51L109 64L119 54L134 58L125 65L105 64Z',C.red)+
 group(57,0,.60,symbol('drone'))+stroke('M119 16L113 29L123 27L116 43',C.red,2)+
 rect(7,68,151,11,'#e1ecea',2)+text(10,76.5,'KYIV: 17 AIR-RAID ALERTS',8.2,750,C.ink,'sans');
}
export function summit(){
 return rect(0,0,238,80,'#e9dbc0',2)+circle(207,17,13,'#ddb777')+
 path('M0 65H238V80H0Z','#c7c7b1')+
 path('M23 45L94 32L146 12L158 14L136 34L213 43L219 51L131 52L115 67H103L107 51L26 51Z',C.ink)+
 stroke('M184 64V26M205 64V23M225 64V29',C.ink,1.5)+rect(184,26,16,12,C.red)+rect(205,23,16,12,C.gold)+rect(225,29,13,12,C.green)+
 [9,27,46,65].map((x,i)=>circle(x,65+(i%2)*2,3,C.ink)+stroke(`M${x} ${69+(i%2)*2}V80`,C.ink,3)).join('')+
 rect(2,54,16,7,C.paper)+rect(48,55,23,7,C.paper)+text(9,12,'MANILA → SHENZHEN',9,750,C.ink,'sans');
}
export function climate(){
 return rect(0,0,238,80,'#d9e5d8',2)+circle(58,41,35,C.ink)+circle(58,41,31,'#91afa0')+
 path('M35 20L50 13L65 20L69 30L55 40L58 48L44 57L38 47L30 38Z','#dfe4bd')+
 path('M69 39L85 33L86 49L72 67L65 62L70 51Z','#dfe4bd')+
 stroke('M27 41H89M49 11Q35 41 51 71M66 11Q83 41 66 72',C.paper,1)+
 rect(110,20,76,57,C.paper,2)+rect(116,13,76,57,'#faf8ef',2)+text(126,33,'DRAFT',17,750,C.red,'cond')+
 stroke('M125 42H180M125 48H177M125 54H171M125 60H180',C.muted,1.5)+rect(214,24,6,39,C.red,3)+circle(217,65,8,C.red)+stroke('M217 24V9',C.ink,1.5);
}
