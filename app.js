const $=s=>document.querySelector(s),LS=localStorage;
const USERS={saaddurrani1:{name:'Saad Durrani',reg:'REG-2026-10896',prog:'BS Cyber Security',dept:'Cyber Security',ses:'Fall 2026',valid:'31 Jan 2027'}};
const IC={entry:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM8 12l2 2 3-3M8 17h8"/>',schol:'<path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5"/>',vouch:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6"/>',adm:'<path d="M5 3h12v14H5zM8 7h6M8 11h6M17 17v4l-2-1-2 1v-4"/>',tt:'<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/>',card:'<rect x="4" y="4" width="16" height="17" rx="2"/><circle cx="12" cy="11" r="2.5"/><path d="M8 18c1-3 7-3 8 0"/>',soc:'<circle cx="12" cy="6" r="2.5"/><circle cx="6" cy="17" r="2.5"/><circle cx="18" cy="17" r="2.5"/><path d="M12 9v3M9 15h-1M15 15h1"/>',course:'<path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1zM12 6v14"/>',veh:'<path d="M4 14l2-6h12l2 6v4H4zM4 14h16"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/>',roll:'<path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1zM9 8h6M9 12h6"/>',clr:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M8 9l1.5 1.5L12 8M8 15l1.5 1.5L12 14M14 10h3M14 15h3"/>',doc:'<path d="M7 3h10v18H7zM10 8h4M10 12h4M10 16h4"/>',chat:'<path d="M4 5h16v11H9l-5 4zM8 10h8"/>',ann:'<path d="M3 10v4h4l8 5V5L7 10zM18 9c1.5 1 1.5 5 0 6"/>',bus:'<rect x="4" y="3" width="16" height="15" rx="3"/><path d="M4 11h16M7 21v-3M17 21v-3"/>',home:'<path d="M3 11l9-8 9 8v10H3z"/>',out:'<path d="M9 3H4v18h5M16 8l4 4-4 4M20 12H9"/>'};
const ic=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="#0f2a5c" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${IC[k]}</svg>`;
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
ann:{k:'list',i:[['Test - 1','Announcement','ann'],['Transport Schedule w.e.f. 16-09-2026','Tap to view','transport']]}};
const T=(t,d)=>`<div class="ph">${t}</div>${d}`;
let user=sessionStorage.iub,open=0,slide=0,tm;
function show(id){document.querySelectorAll('.scr').forEach(s=>s.classList.toggle('on',s.id==id))}
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),2200)}
function setPv(src){$('#pv').innerHTML=`<img src="${src}" alt="">`}
if(LS.iubPhoto)setPv(LS.iubPhoto);
[cam,fil].forEach(i=>i.onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement('canvas'),s=Math.min(1,500/Math.max(im.width,im.height));c.width=im.width*s;c.height=im.height*s;c.getContext('2d').drawImage(im,0,0,c.width,c.height);LS.iubPhoto=c.toDataURL('image/jpeg',.85);setPv(LS.iubPhoto);$('#err').textContent=''};im.src=r.result};r.readAsDataURL(f);i.value=''});
function doLogin(){const u=$('#un').value.trim().toLowerCase(),e=$('#err');
if(!LS.iubPhoto)return e.textContent='Please add your profile photo first.';
if(!u)return e.textContent='Please enter your username.';
if(!USERS[u])return e.textContent='Username not found. Please enter a valid username.';
user=u;sessionStorage.iub=u;home();show('app')}
function drawer(o){$('#dim').classList.toggle('on',o);$('#dr').classList.toggle('on',o);
if(o)$('#dr').innerHTML=`<img class="av" src="${LS.iubPhoto}"><p>${USERS[user].name}</p><button class="d" onclick="drawer(0);home()">${ic('home')}Home</button><button class="d" onclick="drawer(0);page('card')">${ic('card')}Student Card</button><button class="d" onclick="drawer(0);page('transport')">${ic('bus')}Transport Schedule</button><button class="d" onclick="drawer(0);page('ann')">${ic('ann')}Announcement</button><button class="d" onclick="logout()">${ic('out')}Logout</button>`}
function logout(){drawer(0);sessionStorage.removeItem('iub');user=null;$('#un').value='';show('login')}
const ham='<svg width="24" height="24" viewBox="0 0 24 24" stroke="#0f2a5c" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
function home(){clearInterval(tm);
$('#top').innerHTML=`<button class="ib" onclick="drawer(1)">${ham}</button><div class="sb"><input id="q" placeholder="Search" oninput="filt()"><button onclick="$('#q').focus()"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f2a5c" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M16 16l5 5"/></svg></button><button onclick="mic()"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f2a5c" stroke-width="2"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg></button></div>`;
const B=['Admission<br>Last Date','Merit<br>List','Entry Test<br>Schedule','Scholarship<br>Open'];
$('#view').innerHTML=`<div class="car"><div class="trk" id="trk">${B.map(b=>`<div class="sl">${b}</div>`).join('')}</div></div><div class="dots" id="dots">${B.map(()=>'<i></i>').join('')}</div><h4>Quick Links</h4><div class="grid" id="ql"></div><button class="more" id="mb" onclick="open^=1;ql()"></button><h4>Announcements</h4><div id="an"></div>`;
$('#an').innerHTML=P.ann.i.map(a=>`<div class="li" onclick="page('${a[2]=='ann'?'ann':'transport'}')">${ic('ann')}${a[0]}</div>`).join('');
ql();sl(0);tm=setInterval(()=>sl((slide+1)%4),3000)}
function sl(i){slide=i;const t=$('#trk');if(!t)return;t.style.transform=`translateX(-${i*100}%)`;document.querySelectorAll('#dots i').forEach((d,j)=>d.classList.toggle('on',j==i))}
function ql(){const q=($('#q')?.value||'').toLowerCase(),a=L.filter(l=>l[1].toLowerCase().includes(q)),v=q||open?a:a.slice(0,6);
$('#ql').innerHTML=v.map(l=>`<button class="q" onclick="page('${l[0]}')">${ic(l[0])}${l[1]}</button>`).join('');
$('#mb').style.display=q?'none':'block';$('#mb').textContent=open?'Show Less':'Show More'}
const filt=ql;
function mic(){const S=window.SpeechRecognition||window.webkitSpeechRecognition;if(!S)return toast('Voice search not supported');const r=new S();r.onresult=e=>{$('#q').value=e.results[0][0].transcript;ql()};r.start()}
function page(k){clearInterval(tm);const p=P[k],t=k=='transport'?'Transport Schedule':k=='card'?'Student Card':(L.find(l=>l[0]==k)||[])[1];
$('#top').innerHTML=`<button class="ib" onclick="home()"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f2a5c" stroke-width="2.4" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg></button><b style="font-size:22px">${t}</b>`;let h='';
if(k=='card'){const u=USERS[user];h=`<div class="card"><img src="card-front.png"><img src="card-back.png" style="margin:0"></div><div class="card"><table class="det">${[['Name',u.name],['Registration no.',u.reg],['Program',u.prog],['Department',u.dept],['Session',u.ses],['Valid until',u.valid]].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table></div>`}
else if(k=='transport')h=`<div class="card"><a href="transport1.png" target="_blank"><img src="transport1.png"></a><a href="transport2.png" target="_blank"><img src="transport2.png" style="margin:0"></a></div>`;
else if(k=='chat')h=`<div class="card" id="cl"><div class="msg">Assalam o Alaikum! How can we help you?</div></div><input class="fi" id="cm" placeholder="Type a message"><button class="sub" onclick="send()">Send</button>`;
else if(p.k=='list')h=p.i.map(i=>`<div class="li" ${i[2]?`onclick="page('${i[2]=='ann'?'ann':i[2]}')"`:''}><div>${i[0]}<small>${i[1]}</small></div></div>`).join('');
else if(p.k=='table')h=`<div class="card"><table><tr>${p.h.map(x=>`<th>${x}</th>`).join('')}</tr>${p.r.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
else h=`<div class="card"><form onsubmit="return sub(event,'${k}')">${p.f.map((f,i)=>`<label class="fl">${f[0]}</label>${f[1]=='select'?`<select class="fi" name="f${i}">${f[2].split('|').map(o=>`<option>${o}</option>`).join('')}</select>`:`<input class="fi" required name="f${i}" type="${f[1]||'text'}">`}`).join('')}<button class="sub">Submit</button></form></div>`;
$('#view').innerHTML=h;scrollTo(0,0)}
function sub(e,k){e.preventDefault();LS['iub_'+k]=JSON.stringify(Object.fromEntries(new FormData(e.target)));toast('Submitted successfully');e.target.reset();return false}
function send(){const i=$('#cm');if(!i.value.trim())return;$('#cl').innerHTML+=`<div class="msg me">${i.value.replace(/</g,'&lt;')}</div>`;i.value='';setTimeout(()=>{$('#cl').innerHTML+='<div class="msg">Thanks! An agent will reply shortly.</div>'},900)}
$('#un').addEventListener('keydown',e=>e.key=='Enter'&&doLogin());
setTimeout(()=>show('s1'),1600);
setTimeout(()=>{if(user&&USERS[user]){home();show('app')}else show('login')},4300);
if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
