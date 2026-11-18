// Only news sources: facts1117.md and facts1117b.md supplied for 17 November 2026.
// The verified addendum supersedes the earlier Kerch and pre-results Nvidia reports.
export const regions={europe:{name:'Europe',color:'#34658a'},mideast:{name:'Middle East',color:'#b54237'},asia:{name:'Asia',color:'#765381'},africa:{name:'Africa',color:'#48784e'},americas:{name:'Americas',color:'#b5692d'},global:{name:'Global / Oceania',color:'#2e7b78'}};
export const illustrated=[
 {region:'europe',scene:'kerch',kicker:'EUROPE · UKRAINE WAR',caption:'KERCH STRAIT · OCCUPIED CRIMEA',head:['Kerch bridge span','collapses in strike'],deck:['Ukrainian drones and missiles hit the bridge.','Road traffic halts; rail resumes after a pause.'],point:[158,41],pin:[175,27]},
 {region:'mideast',scene:'hormuz',kicker:'MIDDLE EAST · WAR AT SEA',caption:'STRAIT OF HORMUZ · BAHRAIN',head:['Mines hit 5+ ships','in Strait of Hormuz'],deck:['Iran says tankers burned; IRGC claims radar hit.','Bahrain/CENTCOM: drones intercepted, no damage.'],point:[176,62],pin:[193,62]},
 {region:'asia',scene:'quad',kicker:'ASIA · SUMMIT DIPLOMACY',caption:'MANILA · QUAD / SHENZHEN · THURSDAY',head:['Quad minerals push;','Shenzhen talks next'],deck:['Trump says critical-minerals deals signed.','Thu: first Trump–Xi–Putin summit in Shenzhen.'],point:[224,83],pin:[242,81]},
 {region:'africa',scene:'ebola',kicker:'AFRICA · HEALTH',caption:'DR CONGO · BUNDIBUGYO EBOLA',head:['Ebola cases pass','11,000 in DR Congo'],deck:['WHO: ~5,400 deaths; 400–500 new','cases weekly; third emergency review.'],point:[145,82],pin:[144,92]},
 {region:'americas',scene:'nvidia',kicker:'AMERICAS · TECHNOLOGY',caption:'NVIDIA · AFTER TUESDAY’S CLOSE',head:['Nvidia’s $115.8bn','beats expectations'],deck:['Q3 sales +103%; Q4 guide about $130bn.','Shares rise ~3% in after-hours trading.'],point:[29,35],pin:[15,25]},
 {region:'americas',scene:'measles',kicker:'AMERICAS · PUBLIC HEALTH',caption:'UNITED STATES · MEXICO · BOLIVIA',head:['Measles elimination','status lost'],deck:['PAHO: endemic spread for 12+ months.','US: first such loss in nearly 30 years.'],point:[65,74],pin:[92,81]},
 {region:'asia',scene:'mongolia',kicker:'ASIA · POLITICS',caption:'MONGOLIA · PRESIDENT TO RESIGN',head:['Mongolia president','will resign'],deck:['Khurelsukh denies $25M railway graft;','parliament must approve early exit.'],point:[198,40],pin:[212,27]},
 {region:'mideast',scene:'cop',kicker:'CLIMATE · COP31 DAY 9',caption:'ANTALYA · DRAFT UNDER PRESSURE',head:['COP31 draft sparks','fossil-fuel fight'],deck:['Phaseout and finance disputed.','Draft proposes at least $120bn adaptation.'],point:[153,46],pin:[139,58]},
 {region:'americas',scene:'stocks',kicker:'AMERICAS · MARKETS',caption:'WALL STREET · BEFORE NVIDIA RESULTS',head:['Wall Street slides','before chip results'],deck:['Dow −1.64% to 50,759; S&P −1.03%.','AI/chip jitters; Nasdaq down 0.74%.'],point:[60,34],pin:[63,20]},
 {region:'mideast',scene:'gaza',kicker:'MIDDLE EAST · HUMANITARIAN',caption:'GAZA · WINTER AID SHORTFALL',head:['Gaza faces winter','with aid shortfall'],deck:['Germany urges more aid; Haaretz says','ceasefire aid commitments unmet.'],point:[156,55],pin:[169,78]},
 {region:'americas',scene:'alaska',kicker:'AMERICAS · US POLITICS',caption:'ALASKA · AP CALL TUESDAY NIGHT',head:['Alaska flips;','Senate now 56–44'],deck:['AP: Peltola defeats Dan Sullivan;','Democrats gain a 56–44 Senate majority.'],point:[16,18],pin:[30,9]},
 {region:'europe',scene:'prague',kicker:'EUROPE · TRANSPORT',caption:'PRAGUE · PASSENGER TRAINS COLLIDE',head:['Two Prague trains','collide: 46 injured'],deck:['Four seriously hurt near main station;','human error suspected.'],point:[144,35],pin:[131,24]},
 {region:'asia',scene:'an12',kicker:'ASIA · RUSSIA',caption:'KEMEROVO · MILITARY AN-12 CRASH',head:['An-12 crashes','in Siberia: 19 dead'],deck:['Russian Defence Ministry: all 19 killed','near Kemerovo after plane caught fire.'],point:[181,32],pin:[181,12]}
].map((d,i)=>({id:String(i+1),...d}));

export const briefs=[
 ['mideast','Qeshm','US hits IRGC missile site; US calls it self-defense.',[171,62]],
 ['mideast','Gulf','Third US carrier arrives; Kuwait reports drone attacks.',[173,65]],
 ['mideast','Iran','Anti-regime protests follow a deadly bus crash.',[177,55]],
 ['asia','Pakistan','US–Iran talks sought; Qatar/Oman mediate, no breakthrough.',[186,63]],
 ['europe','Kyiv','Bridges hit; metro, water, heating disrupted; 17 alerts.',[155,33]],
 ['europe','Russia','Claims 2,000+ drones down in 24h; ~600 aimed at Moscow.',[165,29]],
 ['europe','Moldova','Airspace shut over drone headed toward Chisinau.',[153,38]],
 ['europe','Black Sea','19 gas-carrier crew rescued off Bulgaria.',[154,43]],
 ['europe','Ukraine','IMF could add $1.6bn; Zelenskyy: Europe in talks.',[157,35]],
 ['mideast','Istanbul','Sözcü TV raided, taken off air; four detained.',[151,45]],
 ['mideast','Jordan & Iraq','Telegram blocked, citing security.',[162,56]],
 ['mideast','West Bank','Military zone order forces European delegation out.',[157,56]],
 ['mideast','Rafah','Israeli strike near a UN fuel convoy.',[155,58]],
 ['europe','EU','Backs Syria agreement; five states eye Rwanda return hub.',[140,35]],
 ['europe','France','Renault plans +2,000 / −1,000 jobs by 2028.',[135,38]],
 ['mideast','Syria','UN: nearly 4 million returned; needs remain acute.',[162,49]],
 ['africa','South Africa','Summons Nigeria’s high commissioner in dispute.',[148,111]],
 ['americas','Ecuador','16 survivors of US boat strike sue Trump administration.',[58,86]],
 ['americas','Mexico','Journalist Eduardo Flores Salado found dead in Acapulco.',[41,58]],
 ['americas','Modesto','ICE pepper-sprays pregnant US citizen filming protest.',[31,37]],
 ['americas','Peru','Pope Leo XIV tours the Andes by helicopter.',[61,99]],
 ['global','WHO','Drug resistance could cause 39M+ direct deaths by 2050.',[112,122]],
 ['global','OpenAI','Free CSAM-detection AI for vetted organizations.',[116,124]],
 ['europe','Frankfurt','ECB/Fed officials warn AI could threaten finance.',[140,36]],
 ['americas','Harvard','403 US data centres emit CO₂ equal to Denmark.',[60,32]],
 ['asia','Singapore','US probes Megaspeed over chips to China.',[211,91]],
 ['europe','Crystal Palace','Thomas Frank named manager through June 2029.',[131,30]],
 ['global','FIFA','Diallo to challenge Infantino; vote 18 Mar 2027, Rabat.',[120,124]],
 ['global','Sydney','Dead racehorse So You Are found dumped at landfill.',[237,121]],
 ['europe','Bosnia','New three-member Presidency; Cvijanović chairs.',[147,42]]
].map(([region,place,fact,point],i)=>({id:String(i+14),region,place,fact,point}));
export const stories=[...illustrated,...briefs];
