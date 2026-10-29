const $=s=>document.querySelector(s),LS=localStorage,B=document.body;
const UR={'Quick Links':'فوری لنکس','Announcements':'اعلانات','Show More':'مزید دکھائیں','Show Less':'کم دکھائیں','Search':'تلاش','Hi':'سلام','Good Morning':'صبح بخیر','Good Afternoon':'سہ پہر بخیر','Good Evening':'شام بخیر','Settings':'ترتیبات','Change Mode':'موڈ تبدیل کریں','Change Language':'زبان تبدیل کریں','Home Screen Style':'ہوم اسکرین اسٹائل','Change Profile Photo & Name':'پروفائل فوٹو اور نام تبدیل کریں','Sign Out':'سائن آؤٹ','App version':'ایپ ورژن','Entry Test':'انٹری ٹیسٹ','Scholarships':'اسکالرشپس','Vouchers':'واؤچرز','Admissions':'داخلے','Time Table':'ٹائم ٹیبل','Student Card':'اسٹوڈنٹ کارڈ','Societies':'سوسائٹیز','Courses':'کورسز','Vehicle Entry':'گاڑی کا اندراج','Roll No slips':'رول نمبر سلپس','My Clearance':'میری کلیئرنس','My Documents':'میرے دستاویزات','Live Chat':'لائیو چیٹ','Announcement':'اعلان','Search For.....':'تلاش کریں.....','Class Time':'کلاس ٹائم','Generate Challan':'چالان بنائیں','Download Forms':'فارم ڈاؤن لوڈ','Roll No Slip':'رول نمبر سلپ','Hostel Items':'ہاسٹل آئٹمز','Repeat Course':'ریپیٹ کورس','Short Courses':'شارٹ کورسز','IUB Email':'آئی یو بی ای میل'};
const t=s=>LS.iubLang=='ur'&&UR[s]||s,esc=s=>String(s).replace(/[<>&]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;'})[c]);
const L=[['entry','Entry Test'],['schol','Scholarships'],['vouch','Vouchers'],['adm','Admissions'],['tt','Time Table'],['card','Student Card'],['soc','Societies'],['course','Courses'],['veh','Vehicle Entry'],['roll','Roll No slips'],['clr','My Clearance'],['doc','My Documents'],['chat','Live Chat'],['ann','Announcement']];
const PR='BS Cyber Security|BS Computer Science|BS Software Engineering|BS Information Technology';
const P={entry:{k:'form',f:[['Full Name'],['CNIC'],['Program','select',PR],['Preferred Test Date','date']]},
schol:{k:'list',i:[['Merit Scholarship','Top position holders'],['Need Based Scholarship','Financial assistance'],['Hafiz-e-Quran Scholarship','For Huffaz'],['Sports Scholarship','Inter-university players']]},
vouch:{k:'table',h:['Voucher','Semester','Status'],r:[['V-1001','Fall 2026','Unpaid'],['V-0974','Spring 2026','Paid']]},
adm:{k:'form',f:[['Applicant Name'],['Father Name'],['Matric Marks'],['Program applied','select',PR]]},
tt:{k:'table',h:['Day','Time','Course','Room'],r:[['Mon','9:00','Programming Fundamentals','A-12'],['Tue','10:30','Calculus','B-04'],['Wed','9:00','Intro to Cyber Security','Lab 2'],['Thu','12:00','English Composition','A-07']]},
soc:{k:'list',i:[['Computer Society','Coding & tech events'],['Debating Society','Debates & speeches'],['Sports Society','Tournaments'],['Literary Society','Poetry & writing']]},
course:{k:'table',h:['Code','Course','Cr.'],r:[['CS-101','Programming Fundamentals','3'],['MT-101','Calculus','3'],['IS-101','Intro to Cyber Security','3'],['HU-101','English Composition','2']]},
veh:{k:'form',f:[['Vehicle Number'],['Vehicle Type','select','Car|Motorbike'],['Owner Name']]},
roll:{k:'table',h:['Exam','Roll No','Status'],r:[['Mid Term Fall 2026','—','Not issued']]},
clr:{k:'table',h:['Department','Status'],r:[['Library','Pending'],['Accounts','Pending'],['Hostel','Pending'],['Department','Pending']]},
doc:{k:'list',i:[['CNIC Copy','Not uploaded'],['Matric Certificate','Not uploaded'],['Intermediate Certificate','Not uploaded']]},
ann:{k:'list',i:[['Test - 1','Announcement',''],['Transport Schedule w.e.f. 16-09-2026','Tap to view','transport']]}};
const CARD=[['Name','Saad Durrani'],['Registration no.','REG-2026-10896'],['Program','BS Cyber Security'],['Department','Cyber Security'],['Session','Fall 2026'],['Valid until','31 Jan 2027']];
const PORTAL='https://my-iub-edu-pk.github.io/portal/',LMS='https://lms.iub.edu.pk/login/index.php';
const OKU=['saaddurrani1','f25binse1m02207'],OK=n=>OKU.includes(String(n).trim().toLowerCase()),authed=()=>LS.iubIn&&OK(LS.iubName||'');
let hl0,goS,cur,tm,more=0,slide=0,pend,ci,ox,oy,dg;
const base=()=>authed()?'home':'login',cls=c=>c+(LS.iubDark?' dark':'');
const CAM='<svg viewBox="0 0 24 24"><g fill="none" stroke="#0f2a5c" stroke-width="1.6"><rect x="3" y="7" width="18" height="13" rx="2.5"/><circle cx="12" cy="13.5" r="3.8"/><path d="M8 7l1.5-2.5h5L16 7"/></g></svg>';
function snack(m){const s=$('#snack');s.textContent=m;s.classList.add('on');clearTimeout(snack.t);snack.t=setTimeout(()=>s.classList.remove('on'),3200)}
function nav(v){history.pushState({v},'');render(v)}
addEventListener('popstate',e=>render(e.state&&e.state.v||base()));
function show(id){document.querySelectorAll('.scr').forEach(s=>s.classList.toggle('on',s.id==id))}
function render(v){if(!authed()&&v!='login')v='login';const ov=v=='settings';
$('#dim').classList.toggle('on',ov);$('#set').classList.toggle('on',ov);
if(v!='home'&&!ov)clearInterval(tm);
if(v=='login'){B.className=cls('lg');show('login');$('#un').value=LS.iubName||'';setPv(LS.iubPhoto)}
else if(v=='profile'){B.className=cls('pf');show('prof');pend=0;$('#pp').src=LS.iubPhoto;$('#nn').value=LS.iubName||''}
else if(v=='portal'){B.className=cls('hm');show('app');$('#view').innerHTML=`<iframe class="fr" src="${PORTAL}"></iframe>`}
else if(v.slice(0,2)=='x:'){B.className=cls('hm');show('app');viewer(VW[v.slice(2)]||VW.myiub)}
else{B.className=cls('hm'+(LS.iubStyle==2?' s2':''));show('app');if(ov){if(cur!='home')home();settings()}else if(v=='home'){if(cur!='settings')home()}else page(v.slice(2))}
$('#tc').content=LS.iubDark?'#232323':'#f7f7f7';cur=v}
function setPv(s){$('#pv').innerHTML=s?`<img src="${s}" alt="">`:CAM}
function doLogin(){const n=$('#un').value.trim();if(!LS.iubPhoto||!n)return snack('Please upload a profile photo and enter your name to login.');
if(!OK(n))return snack('Username not found. Please enter a valid username.');
LS.iubName=n;LS.iubIn=1;history.replaceState({v:'home'},'');cur='';render('home')}
function openProf(){history.replaceState({v:'home'},'');nav('profile')}
function saveProf(){const n=$('#nn').value.trim();if(!n)return snack('Please enter your name.');if(!OK(n))return snack('Username not found. Please enter a valid username.');if(pend)LS.iubPhoto=pend;LS.iubName=n;snack('Profile updated');history.back()}
function signOut(){LS.iubIn='';LS.iubName='';delete LS.iubPhoto;history.replaceState({v:'login'},'');cur='';render('login')}
const SUN='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></svg>',MOON='<svg width="22" height="22" viewBox="0 0 24 24" fill="#222"><path d="M20 14.5A8 8 0 019.5 4 8.5 8.5 0 1020 14.5z"/></svg>';
function settings(){const d=B.classList.contains('dark'),u=LS.iubLang=='ur';
$('#set').innerHTML=`<div class="sd"><h2>${t('Settings')}</h2>
<div class="sr" onclick="tgDark()">${t('Change Mode')}<div class="tg"><i>${d?MOON:SUN}</i>${d?'NIGHT MODE':'DAY MODE'}</div></div>
<div class="sr" onclick="tgLang()">${t('Change Language')}<span><b style="font-weight:${u?400:700}">English</b> / <b style="font-weight:${u?700:400}">اردو</b></span></div>
<div class="sr" onclick="tgStyle()">${t('Home Screen Style')}<span>Style ${LS.iubStyle==2?2:1}</span></div>
<button class="sr red" onclick="openProf()">${t('Change Profile Photo & Name')}</button>
<button class="sr" onclick="signOut()">${t('Sign Out')}</button><p class="ver">${t('App version')} 5.7</p></div>`}
function tgDark(){LS.iubDark=LS.iubDark?'':1;B.classList.toggle('dark');$('#tc').content=LS.iubDark?'#232323':'#f7f7f7';settings()}
function tgLang(){LS.iubLang=LS.iubLang=='ur'?'en':'ur';home();settings()}
function tgStyle(){LS.iubStyle=LS.iubStyle==2?1:2;home();settings()}
const IS='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/></svg>',IM='<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg>';
function home(){LS.iubStyle==2?home2():home1()}
const BN=[['b1','#0b1f45','Admission<br>Last Date','',''],['b2','#e8b23a','Fee<br>Structure','f',''],['b3','#0b1f45','Merit<br>List','',''],['bus','#e8b23a','Transport<br>Schedule','f','transport']];
const slides=c=>(LS.iubStyle==2?[BN[3],BN[0],BN[1],BN[2]]:BN).map(b=>`<div class="sl ${b[3]} ${c}" style="--c:${b[1]}" ${b[4]?`onclick="nav('p:${b[4]}')"`:''}><span>${b[2]}</span><img src="${b[0]}.jpg" alt=""></div>`).join('');
const dots=()=>`<div class="dots">${BN.map((b,i)=>`<i onclick="goS(${i})"></i>`).join('')}</div>`;
function car(){const t=$('#trk');if(!t)return;const n=BN.length,step=()=>t.firstElementChild.getBoundingClientRect().width+(parseFloat(getComputedStyle(t).columnGap)||0);
goS=i=>t.scrollTo({left:i*step(),behavior:'smooth'});
t.onscroll=()=>{slide=Math.round(t.scrollLeft/step());document.querySelectorAll('.dots i').forEach((d,j)=>d.classList.toggle('on',j==slide))};
const auto=()=>{clearInterval(tm);tm=setInterval(()=>goS((slide+1)%n),3500)};
['touchstart','pointerdown'].forEach(e=>t.addEventListener(e,()=>clearInterval(tm)));['touchend','pointerup'].forEach(e=>t.addEventListener(e,()=>setTimeout(auto,2500)));
slide=0;t.onscroll();auto()}
function home1(){clearInterval(tm);const h=new Date().getHours(),g=h<12?'Good Morning':h<17?'Good Afternoon':'Good Evening';
$('#view').innerHTML=`<div class="hd"><img class="av" src="${LS.iubPhoto}" alt="" onclick="openProf()"><div class="hi">${t('Hi')} ${esc(LS.iubName)},<small>${t(g)}</small></div><button onclick="snack('No new notifications')"><img src="i-bell.png" alt=""></button><button onclick="nav('settings')"><img src="i-gear.png" alt=""></button></div>
<div class="sb"><input id="q" placeholder="${t('Search')}" oninput="ql()"><button onclick="$('#q').focus()">${IS}</button><button onclick="mic()">${IM}</button></div>
<div class="car"><div class="trk" id="trk">${slides('')}</div></div>${dots()}
<h4>${t('Quick Links')}</h4><div class="grid ${LS.iubStyle==2?'s2':''}" id="ql"></div><button class="more" id="mb" onclick="more^=1;ql()"></button>
<h4>${t('Announcements')}</h4><div class="li" onclick="portal()"><img src="i-ann.png" alt="">Test - 1</div>`;
ql();car()}
const T2=[['tt','Class Time','p'],['vouch','Generate Challan','p'],['schol','Scholarships','p'],['entry','Entry Test','e'],['dl','Download Forms','https://www.iub.edu.pk/downloads'],['adm','Admissions','e'],['doc','My Documents','p'],['card','Student Card','p'],['clr','My Clearance','p'],['roll','Roll No Slip','p'],['veh','Vehicle Entry','p'],['host','Hostel Items','e'],['course','Repeat Course','p'],['short','Short Courses','e'],['mail','IUB Email','p'],['ad'],['soc','Societies','p'],['chat','Live Chat','p'],['news','Announcements','https://www.iub.edu.pk/news-update']];
const VW={eport:{t:'E-Portal',e:1},myiub:{t:'My-IUB',u:PORTAL},lms:{t:'LMS',u:LMS}};
T2.forEach(x=>{if(x[2])VW[x[0]]={t:x[1],e:x[2]=='e',u:x[2]=='p'?PORTAL:x[2]=='e'?'':x[2]}});
function home2(){clearInterval(tm);
$('#view').innerHTML=`<div class="s2w"><div class="h2"><div><div class="h2t">IUB PORTALS<button onclick="nav('settings')"><img src="i-gearw.png" alt=""></button></div><small>Application version 5.7</small></div><img class="lg2" src="logo-c.png" alt=""></div>
<div class="pl"><button onclick="openV('eport')">E-Portal</button><button onclick="openV('myiub')">My-IUB</button><button onclick="openV('lms')">LMS</button></div>
<div class="sb2"><input id="q" placeholder="${t('Search For.....')}" oninput="ql2()"><button onclick="$('#q').focus()">${IS}</button></div>
<div class="car2"><div class="trk t2" id="trk">${slides('s')}</div></div>${dots()}<div class="g3" id="g3"></div></div>`;
ql2();car()}
function ql2(){const q=($('#q').value||'').toLowerCase();$('#g3').innerHTML=T2.filter(x=>q?(x[1]&&(x[1]+t(x[1])).toLowerCase().includes(q)):1).map(x=>x[1]?`<button class="tb" onclick="openV('${x[0]}')"><span class="tl"><img src="i-${x[0]}.png" alt=""></span>${t(x[1])}</button>`:`<img class="ad" src="ad.png" alt="" onclick="openV('dl')">`).join('')}
function openV(k){nav('x:'+k);hl0=history.length}
const ib=(p,c)=>`<svg viewBox="0 0 24 24" fill="none" stroke="${c||'#fff'}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ERR=`<div class="er"><div class="eu"><img src="logo-c.png" alt="">The Islamia University Of Bahawalpur</div><div class="e4"><svg viewBox="0 0 100 100"><g fill="none" stroke="#444" stroke-width="5" stroke-linecap="round"><circle cx="50" cy="50" r="44"/><rect x="32" y="46" width="36" height="26" rx="4"/><path d="M38 46v-8a12 12 0 0124 0v8M20 20l60 60"/></g></svg><div><b>403</b><i>Error</i></div></div><p>You don't have permission to access this page</p></div>`;
function viewer(o){if(!o.e){$('#view').innerHTML=`<iframe class="fr" id="fr2" src="${o.u}"></iframe>`;return}
$('#view').innerHTML=`<div class="vwr"><div class="vh"><img src="logo-c.png" alt=""><b>${esc(o.t)}</b></div><div class="vb">${o.e?ERR:`<iframe id="fr2" data-u="${o.u}" src="${o.u}"></iframe>`}</div>
<div class="vt"><button onclick="history.back()">${ib('<path d="M15 5l-7 7 7 7"/>')}</button><button onclick="history.forward()">${ib('<path d="M9 5l7 7-7 7"/>')}</button><button onclick="vref()">${ib('<path d="M20 12a8 8 0 11-2.5-5.8M20 4v5h-5"/>')}</button><button onclick="vdsk()">${ib('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 21h8M12 16v5"/>')}</button><button onclick="vx()">${ib('<path d="M5 5l14 14M19 5L5 19"/>','#d9a521')}</button></div></div>`}
function vref(){const f=$('#fr2');if(!f)return;try{f.contentWindow.location.replace(f.dataset.u)}catch(e){f.src=f.dataset.u}}
function vdsk(){const f=$('#fr2');if(!f)return;const b=f.parentNode,on=f.dataset.d!='1';f.dataset.d=on?'1':'0';if(on){const k=b.clientWidth/1100;f.style.cssText=`width:1100px;height:${b.clientHeight/k}px;transform:scale(${k});transform-origin:0 0`}else f.style.cssText=''}
function vx(){const k=history.length-(hl0||history.length-1);history.go(-Math.max(1,k));setTimeout(()=>{if((cur||'').slice(0,2)=='x:'){history.replaceState({v:'home'},'');render('home')}},500)}
function ql(){const q=($('#q').value||'').toLowerCase(),a=L.filter(l=>(l[1]+t(l[1])).toLowerCase().includes(q)),v=q||more?a:a.slice(0,6);
$('#ql').innerHTML=v.map(l=>{const n=t(l[1]);return`<button class="q" onclick="portal()"><img src="i-${l[0]}.png" alt=""><span style="font-size:calc(var(--u)*${Math.min(24,225/n.length).toFixed(1)})">${n}</span></button>`}).join('');
$('#mb').style.display=q?'none':'block';$('#mb').textContent=t(more?'Show Less':'Show More')}
function portal(){if(!navigator.onLine)return snack('Internet is required to open the portal.');nav('portal')}
function mic(){const S=window.SpeechRecognition||window.webkitSpeechRecognition;if(!S)return snack('Voice search is not supported on this device');const r=new S();r.onresult=e=>{$('#q').value=e.results[0][0].transcript;ql()};r.start()}
function page(k){clearInterval(tm);const p=P[k],nm=k=='transport'?'Transport Schedule':(L.find(l=>l[0]==k)||[])[1];let h=`<div class="pt">${t(nm)}</div>`;
if(k=='card')h+=`<div class="cards"><img src="card-front.png" alt=""><img src="card-back.png" alt=""></div><div class="card" style="margin-top:22px"><table class="det">${CARD.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table></div>`;
else if(k=='transport')h+=`<div class="cards"><a href="transport1.png" target="_blank"><img src="transport1.png" alt=""></a><a href="transport2.png" target="_blank"><img src="transport2.png" alt=""></a></div>`;
else if(k=='chat')h+=`<div class="card" id="cl"><div class="msg">Assalam o Alaikum! How can we help you?</div></div><input class="fi" id="cm" placeholder="Type a message"><button class="sub" onclick="send()">Send</button>`;
else if(p.k=='list')h+=p.i.map(i=>`<div class="li" ${i[2]?`onclick="nav('p:${i[2]}')"`:''}><div>${i[0]}<small>${i[1]}</small></div></div>`).join('');
else if(p.k=='table')h+=`<div class="card"><table><tr>${p.h.map(x=>`<th>${x}</th>`).join('')}</tr>${p.r.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
else h+=`<div class="card"><form onsubmit="return sub(event,'${k}')">${p.f.map((f,i)=>`<label class="fl">${f[0]}</label>${f[1]=='select'?`<select class="fi" name="f${i}">${f[2].split('|').map(o=>`<option>${o}</option>`).join('')}</select>`:`<input class="fi" required name="f${i}" type="${f[1]||'text'}">`}`).join('')}<button class="sub">Submit</button></form></div>`;
$('#view').innerHTML=h;scrollTo(0,0)}
function sub(e,k){e.preventDefault();LS['iub_'+k]=JSON.stringify(Object.fromEntries(new FormData(e.target)));snack('Submitted successfully');e.target.reset();return false}
function send(){const i=$('#cm');if(!i.value.trim())return;$('#cl').innerHTML+=`<div class="msg me">${esc(i.value)}</div>`;i.value='';setTimeout(()=>{$('#cl').innerHTML+='<div class="msg">Thanks! An agent will reply shortly.</div>'},900)}
[cam,fil].forEach(i=>i.onchange=e=>{const f=e.target.files[0];if(f)cropOpen(f);i.value=''});
function cropOpen(f){const r=new FileReader();r.onload=()=>{ci=new Image();ci.onload=()=>{zm.value=1;const k=300/Math.min(ci.width,ci.height);ox=(300-ci.width*k)/2;oy=(300-ci.height*k)/2;crop.classList.add('on');draw()};ci.src=r.result};r.readAsDataURL(f)}
function geom(S){const k=S/Math.min(ci.width,ci.height)*zm.value,w=ci.width*k,h=ci.height*k;ox=Math.min(0,Math.max(S-w,ox));oy=Math.min(0,Math.max(S-h,oy));return[w,h]}
function draw(){const[w,h]=geom(300),x=cc.getContext('2d');x.clearRect(0,0,300,300);x.drawImage(ci,ox,oy,w,h)}
zm.oninput=draw;cv.onpointerdown=e=>{dg=[e.clientX,e.clientY];cv.setPointerCapture(e.pointerId)};cv.onpointerup=()=>dg=0;
cv.onpointermove=e=>{if(!dg)return;const s=300/cv.clientWidth;ox+=(e.clientX-dg[0])*s;oy+=(e.clientY-dg[1])*s;dg=[e.clientX,e.clientY];draw()};
function cropOk(){const[w,h]=geom(300),o=document.createElement('canvas'),f=400/300;o.width=o.height=400;o.getContext('2d').drawImage(ci,ox*f,oy*f,w*f,h*f);crop.classList.remove('on');
const d=o.toDataURL('image/jpeg',.85);if(cur=='profile'){pend=d;$('#pp').src=d}else{LS.iubPhoto=d;setPv(d)}}
$('#un').addEventListener('keydown',e=>e.key=='Enter'&&doLogin());
B.className=cls('lg');
setTimeout(()=>{$('#s0').classList.remove('on');$('#s1').classList.add('on')},1600);
setTimeout(()=>{$('#s1').classList.remove('on');const v=base();history.replaceState({v},'');cur='';render(v)},4300);
if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
