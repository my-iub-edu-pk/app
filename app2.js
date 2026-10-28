/* app2.js - app.js ke BAAD load hota hai. app.js ko change nahi karna. */
Object.assign(UR,{'Class Time':'کلاس ٹائم','Generate Challan':'چالان بنائیں','Download Forms':'فارم ڈاؤن لوڈ','Hostel Items':'ہاسٹل آئٹمز','Repeat Course':'کورس دہرائیں','Short Courses':'شارٹ کورسز','IUB Email':'IUB ای میل','Announcements':'اعلانات','Roll No Slip':'رول نمبر سلپ','Open portal':'پورٹل کھولیں'});
const WEB={'E-Portal':'','My-IUB':'https://my-iub-edu-pk.github.io/portal/','LMS':'https://lms.iub.edu.pk/login/index.php'};
let W=null;
const ic=b=>`<svg viewBox="0 0 48 48" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${b}</svg>`,
N=d=>`<path class="n" d="${d}"/>`,G=d=>`<path class="g" d="${d}"/>`,CG=(x,y,r)=>`<circle class="g" cx="${x}" cy="${y}" r="${r}"/>`,CN=(x,y,r)=>`<circle class="n" cx="${x}" cy="${y}" r="${r}"/>`;
const IC={
ct:N('M8 14h32v26H8zM8 22h32M16 8v8M32 8v8')+CG(24,31,6.5)+G('M24 28v4l2 1.5'),
chal:N('M12 6h24v36l-4-3-4 3-4-3-4 3-4-3z')+G('M18 16h12M18 23h12M18 30h7'),
schol:N('M4 18l20-9 20 9-20 9zM12 23v9c7 5 17 5 24 0v-9')+G('M44 18v12'),
entry:N('M10 10h28v32H10zM18 6h12v8H18z')+G('M16 24l3 3 5-6M28 25h6M16 34l3 3 5-6M28 35h6'),
dl:N('M12 6h16l8 8v28H12z')+G('M24 20v13M18 28l6 6 6-6'),
adm:N('M12 10h22v30H12z')+G('M18 18h10M18 25h10M18 32h6M34 14h6v22a4 4 0 01-4 4'),
doc:N('M14 12h22v30H14zM18 8h14')+G('M20 20h12M20 27h12M20 34h8'),
card:N('M6 12h36v26H6z')+CG(16,23,4)+G('M10 33c1-4 11-4 12 0M27 21h10M27 28h8'),
clr:N('M10 6h28v36H10z')+G('M16 15l2 2 4-4M26 16h8M16 25l2 2 4-4M26 26h8M16 35l2 2 4-4M26 36h8'),
roll:N('M12 6h24v36l-4-3-4 3-4-3-4 3-4-3z')+G('M18 16h12M18 24h12'),
veh:N('M8 28v-6l5-9h22l5 9v6H8zM10 28v8h6v-4M38 28v8h-6v-4')+G('M14 24h4M30 24h4'),
host:N('M6 38V12M6 30h36v8M42 30v-8a4 4 0 00-4-4H22v12')+CG(14,23,3.5),
rep:N('M6 12c6-2 12-2 18 2 6-4 12-4 18-2v26c-6-2-12-2-18 2-6-4-12-4-18-2zM24 14v26')+G('M28 26l5-5 3 3 5-6'),
short:N('M6 10h36v24H6zM18 40l6-4 6 4V30')+CG(24,26,5)+G('M12 16h12'),
mail:N('M6 12h36v26H6zM6 14l18 14 18-14')+G('M1 20h5'),
soc:CN(24,12,5)+CN(10,30,5)+CN(38,30,5)+G('M24 20v8M16 36h16M14 25l6-4M34 25l-6-4'),
chat:N('M8 10h32v22H22l-8 7v-7H8z')+G('M16 18h16M16 25h10'),
ann:N('M6 20v8h8l16 10V10L14 20z')+G('M36 18c3 3 3 9 0 12M40 13c6 6 6 16 0 22')};
const L2=[['Class Time','ct','ch'],['Generate Challan','chal','ch'],['Scholarships','schol','ch'],['Entry Test','entry','err'],['Download Forms','dl','https://www.iub.edu.pk/downloads'],['Admissions','adm','err'],['My Documents','doc','ch'],['Student Card','card','ch'],['My Clearance','clr','ch'],['Roll No Slip','roll','ch'],['Vehicle Entry','veh','ch'],['Hostel Items','host','err'],['Repeat Course','rep','ch'],['Short Courses','short','err'],['IUB Email','mail','ch'],['Societies','soc','ch'],['Live Chat','chat','ch'],['Announcements','ann','https://www.iub.edu.pk/news-update']];
const SL2=[['#e8b23a','Transport<br>Schedule','bus.jpg','gd'],['#0b1f45','Admission<br>Last Date','b1.jpg',''],['#12305f','Merit<br>List','b3.jpg',''],['#0b1f45','Entry Test<br>Schedule','b1.jpg','']];
const AD='<div class="ad"><b>IUB PORTALS</b><small>IUB ALL PORTAL ACCESS AT ONE CLICK</small></div>';
const GEAR='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>';
function home2(){clearInterval(tm);
$('#view').innerHTML=`<div class="v2"><div class="h2"><div><div class="tt"><h1>IUB PORTALS</h1><button onclick="nav('settings')">${GEAR}</button></div><p>${t('App version')} 5.7</p></div><img src="logo.png" alt=""></div>
<div class="tb">${['E-Portal','My-IUB','LMS'].map(n=>`<button onclick="tp('${n}')">${n}</button>`).join('')}</div>
<div class="s2"><input id="q" placeholder="${t('Search')}..." oninput="ql2()"><button>${IS}</button></div>
<div class="c2"><div class="t2" id="trk">${SL2.map(b=>`<div class="sl2 ${b[3]}" style="--c:${b[0]}"><span>${b[1]}</span><img src="${b[2]}" alt="" onerror="this.style.display='none'"></div>`).join('')}</div></div>
<div class="d2">${SL2.map((b,i)=>`<i onclick="sl(${i})"></i>`).join('')}</div><div class="g2" id="g2"></div></div>`;
ql2();sl(0);tm=setInterval(()=>sl((slide+1)%4),3000)}
function ql2(){const q=($('#q').value||'').toLowerCase();
$('#g2').innerHTML=L2.map((l,i)=>[l,i]).filter(([l])=>(l[0]+t(l[0])).toLowerCase().includes(q)).map(([l,i])=>`${i==15&&!q?AD:''}<button class="i2" onclick="go(${i})"><div class="bx">${ic(IC[l[1]])}</div><span>${t(l[0])}</span></button>`).join('')}
function go(i){const l=L2[i];if(l[2]=='ch')sheet();else openWeb(l[0],l[2]=='err'?'':l[2])}
function tp(n){closeSheet();openWeb(n,WEB[n])}
function sheet(){closeSheet();const d=document.createElement('div');d.id='chs';d.innerHTML=`<div class="bk" onclick="closeSheet()"></div><div class="sh"><b>${t('Open portal')}</b>${['E-Portal','My-IUB','LMS'].map(n=>`<button onclick="tp('${n}')">${n}</button>`).join('')}</div>`;B.appendChild(d)}
function closeSheet(){const d=$('#chs');if(d)d.remove()}
function openWeb(title,url){if(url&&!navigator.onLine)return snack('Internet is required to open the portal.');W={t:title,u:url};nav('web')}
const ERR=`<div class="er"><div class="eh"><img src="logo.png" alt=""><b>The Islamia University Of Bahawalpur</b></div><div class="e4"><svg viewBox="0 0 100 100" fill="none" stroke="#444" stroke-width="6" stroke-linecap="round"><circle cx="50" cy="50" r="44"/><path d="M22 22l56 56M36 46v-8a14 14 0 0128 0v8M34 46h32v22H34z"/></svg><div><h2>403</h2><h3>Error</h3></div></div><p>You don’t have permission to access this page</p></div>`;
const BI=d=>`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
function webOpen(){const x=W.u;
$('#web').innerHTML=`<div class="wh"><img src="logo.png" alt=""><span>${esc(W.t)}</span>${x?`<button onclick="window.open('${x}','_blank')">${BI('<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>')}</button>`:''}</div>
<div class="wb" id="wb">${x?`<iframe id="wf" src="${x}"></iframe>`:ERR}</div>
<div class="bar"><button onclick="wk(-1)">${BI('<path d="M15 5l-7 7 7 7"/>')}</button><button onclick="wk(1)">${BI('<path d="M9 5l7 7-7 7"/>')}</button><button onclick="wr()">${BI('<path d="M20 11a8 8 0 10-2 6M20 4v7h-7"/>')}</button><button onclick="wd()">${BI('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 21h8M12 16v5"/>')}</button><button onclick="history.back()">${BI('<path d="M5 5l14 14M19 5L5 19" stroke="#e0a526"/>')}</button></div>`}
function wk(d){try{$('#wf').contentWindow.history.go(d)}catch(e){}}
function wr(){const f=$('#wf');if(f)f.src=W.u}
function wd(){const b=$('#wb'),f=$('#wf');if(!f)return;if(b.classList.toggle('dt')){const s=b.clientWidth/1100;f.style.cssText=`width:1100px;height:${b.clientHeight/s}px;transform:scale(${s});transform-origin:0 0`}else f.style.cssText=''}
/* slider: ungli se slide (dono design) */
function swipe(){const c=$('#trk');if(!c)return;const p=c.parentNode;let x0=null,dx=0,w=0;p.style.touchAction='pan-y';
p.onpointerdown=e=>{x0=e.clientX;dx=0;w=p.clientWidth;clearInterval(tm);c.style.transition='none';p.setPointerCapture(e.pointerId)};
p.onpointermove=e=>{if(x0===null)return;dx=e.clientX-x0;c.style.transform=`translateX(${-slide*w+dx}px)`};
const end=()=>{if(x0===null)return;x0=null;c.style.transition='';const n=c.children.length;if(Math.abs(dx)>w*.15)slide=Math.max(0,Math.min(n-1,slide+(dx<0?1:-1)));sl(slide);tm=setInterval(()=>sl((slide+1)%n),3000)};
p.onpointerup=end;p.onpointercancel=end}
sl=function(i){slide=i;const x=$('#trk');if(!x)return;x.style.transform=`translateX(-${i*100}%)`;document.querySelectorAll('.dots i,.d2 i').forEach((d,j)=>d.classList.toggle('on',j==i))};
const _home=home;home=function(){if(LS.iubStyle==2)home2();else _home();swipe()};
const _render=render;
render=function(v){if(v=='web'&&(!W||!LS.iubIn))v=LS.iubIn?'home':'login';
$('#web').classList.toggle('on',v=='web');if(v!='web')$('#web').innerHTML='';closeSheet();
if(v=='web'){clearInterval(tm);B.className=cls('hm');webOpen();cur=v;return}
_render(v)};
const _so=signOut;signOut=function(){delete LS.iubName;W=null;_so()};
