
// ══════════════════════════════════════════════════════════════
// FIREBASE CONFIG — substitua pelos dados do seu projeto Firebase
// ══════════════════════════════════════════════════════════════
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAiEhZCD46FxKSQpKwRFHdYPbRanApqSMk",
  authDomain:        "bolao-copa-2026-d3fe3.firebaseapp.com",
  projectId:         "bolao-copa-2026-d3fe3",
  storageBucket:     "bolao-copa-2026-d3fe3.firebasestorage.app",
  messagingSenderId: "95883353462",
  appId:             "1:95883353462:web:83603f1ee661d38c07ae57"
};
const USE_FIREBASE = FIREBASE_CONFIG.apiKey !== "COLE_AQUI";
// ══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const SK = 'BOLAO2026';

const GROUPS = [
  {id:'A',t:['México','África do Sul','Coreia do Sul','Tchéquia']},
  {id:'B',t:['Canadá','Suíça','Qatar','Bósnia-Herzegovina']},
  {id:'C',t:['Brasil','Marrocos','Haiti','Escócia']},
  {id:'D',t:['Estados Unidos','Paraguai','Austrália','Turquia']},
  {id:'E',t:['Alemanha','Curaçao','Costa do Marfim','Equador']},
  {id:'F',t:['Holanda','Japão','Tunísia','Suécia']},
  {id:'G',t:['Bélgica','Egito','Irã','Nova Zelândia']},
  {id:'H',t:['Espanha','Cabo Verde','Arábia Saudita','Uruguai']},
  {id:'I',t:['França','Senegal','Noruega','Iraque']},
  {id:'J',t:['Argentina','Argélia','Áustria','Jordânia']},
  {id:'K',t:['Portugal','Uzbequistão','Colômbia','Congo RD']},
  {id:'L',t:['Inglaterra','Croácia','Gana','Panamá']},
];

const FLAGS = {
  'México':'🇲🇽','África do Sul':'🇿🇦','Coreia do Sul':'🇰🇷','Tchéquia':'🇨🇿',
  'Canadá':'🇨🇦','Suíça':'🇨🇭','Qatar':'🇶🇦','Bósnia-Herzegovina':'🇧🇦',
  'Brasil':'🇧🇷','Marrocos':'🇲🇦','Haiti':'🇭🇹','Escócia':'🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  'Estados Unidos':'🇺🇸','Paraguai':'🇵🇾','Austrália':'🇦🇺','Turquia':'🇹🇷',
  'Alemanha':'🇩🇪','Curaçao':'🇨🇼','Costa do Marfim':'🇨🇮','Equador':'🇪🇨',
  'Holanda':'🇳🇱','Japão':'🇯🇵','Tunísia':'🇹🇳','Suécia':'🇸🇪',
  'Bélgica':'🇧🇪','Egito':'🇪🇬','Irã':'🇮🇷','Nova Zelândia':'🇳🇿',
  'Espanha':'🇪🇸','Cabo Verde':'🇨🇻','Arábia Saudita':'🇸🇦','Uruguai':'🇺🇾',
  'França':'🇫🇷','Senegal':'🇸🇳','Noruega':'🇳🇴','Iraque':'🇮🇶',
  'Argentina':'🇦🇷','Argélia':'🇩🇿','Áustria':'🇦🇹','Jordânia':'🇯🇴',
  'Portugal':'🇵🇹','Uzbequistão':'🇺🇿','Colômbia':'🇨🇴','Congo RD':'🇨🇩',
  'Inglaterra':'🏴󠁧󠁢󠁥󠁮󠁧󠁿','Croácia':'🇭🇷','Gana':'🇬🇭','Panamá':'🇵🇦',
};

const FLAG_CODES = {
  'México':'mx','África do Sul':'za','Coreia do Sul':'kr','Tchéquia':'cz',
  'Canadá':'ca','Suíça':'ch','Qatar':'qa','Bósnia-Herzegovina':'ba',
  'Brasil':'br','Marrocos':'ma','Haiti':'ht','Escócia':'gb-sct',
  'Estados Unidos':'us','Paraguai':'py','Austrália':'au','Turquia':'tr',
  'Alemanha':'de','Curaçao':'cw','Costa do Marfim':'ci','Equador':'ec',
  'Holanda':'nl','Japão':'jp','Tunísia':'tn','Suécia':'se',
  'Bélgica':'be','Egito':'eg','Irã':'ir','Nova Zelândia':'nz',
  'Espanha':'es','Cabo Verde':'cv','Arábia Saudita':'sa','Uruguai':'uy',
  'França':'fr','Senegal':'sn','Noruega':'no','Iraque':'iq',
  'Argentina':'ar','Argélia':'dz','Áustria':'at','Jordânia':'jo',
  'Portugal':'pt','Uzbequistão':'uz','Colômbia':'co','Congo RD':'cd',
  'Inglaterra':'gb-eng','Croácia':'hr','Gana':'gh','Panamá':'pa',
};

const PHASE_NAMES = {
  group:'Fase de Grupos',r32:'Rodada de 32',r16:'Oitavas de Final',
  qf:'Quartas de Final',sf:'Semifinais','3rd':'Disputa de 3º Lugar',final:'GRANDE FINAL'
};

const TEAM_MAP = {
  'Mexico':'México','South Africa':'África do Sul','Korea Republic':'Coreia do Sul',
  'South Korea':'Coreia do Sul','Czech Republic':'Tchéquia','Czechia':'Tchéquia',
  'Canada':'Canadá','Switzerland':'Suíça','Bosnia and Herzegovina':'Bósnia-Herzegovina',
  'Brazil':'Brasil','Morocco':'Marrocos','Scotland':'Escócia',
  'United States':'Estados Unidos','USA':'Estados Unidos','Paraguay':'Paraguai',
  'Australia':'Austrália','Turkey':'Turquia','Türkiye':'Turquia',
  'Germany':'Alemanha',"Côte d'Ivoire":'Costa do Marfim','Ivory Coast':'Costa do Marfim',
  'Ecuador':'Equador','Netherlands':'Holanda','Japan':'Japão','Tunisia':'Tunísia',
  'Sweden':'Suécia','Belgium':'Bélgica','Egypt':'Egito','Iran':'Irã',
  'New Zealand':'Nova Zelândia','Spain':'Espanha','Cape Verde':'Cabo Verde',
  'Saudi Arabia':'Arábia Saudita','Uruguay':'Uruguai','France':'França',
  'Senegal':'Senegal','Norway':'Noruega','Iraq':'Iraque','Argentina':'Argentina',
  'Algeria':'Argélia','Austria':'Áustria','Jordan':'Jordânia','Portugal':'Portugal',
  'Uzbekistan':'Uzbequistão','Colombia':'Colômbia','DR Congo':'Congo RD',
  'England':'Inglaterra','Croatia':'Croácia','Ghana':'Gana','Panama':'Panamá',
  'Haiti':'Haiti','Qatar':'Qatar','Curaçao':'Curaçao',
};

const MD1 = {A:'2026-06-11',B:'2026-06-12',C:'2026-06-13',D:'2026-06-12',
              E:'2026-06-15',F:'2026-06-16',G:'2026-06-17',H:'2026-06-18',
              I:'2026-06-19',J:'2026-06-20',K:'2026-06-21',L:'2026-06-22'};

// ─────────────────────────────────────────────
// MATCH GENERATION
// ─────────────────────────────────────────────
function addDays(s,n){
  const d=new Date(s+'T12:00:00Z');
  d.setUTCDate(d.getUTCDate()+n);
  return d.toISOString().slice(0,10);
}

function genGroupMatches(){
  const ms=[]; let id=1;
  GROUPS.forEach(g=>{
    const[t1,t2,t3,t4]=g.t;
    const d1=MD1[g.id], d2=addDays(d1,9), d3=addDays(d1,15);
    ms.push(
      {id:id++,phase:'group',round:1,group:g.id,home:t1,away:t2,date:d1,time:'16:00'},
      {id:id++,phase:'group',round:1,group:g.id,home:t3,away:t4,date:d1,time:'22:00'},
      {id:id++,phase:'group',round:2,group:g.id,home:t1,away:t3,date:d2,time:'16:00'},
      {id:id++,phase:'group',round:2,group:g.id,home:t2,away:t4,date:d2,time:'22:00'},
      {id:id++,phase:'group',round:3,group:g.id,home:t1,away:t4,date:d3,time:'16:00'},
      {id:id++,phase:'group',round:3,group:g.id,home:t2,away:t3,date:d3,time:'22:00'},
    );
  });
  return ms;
}

function genKnockoutMatches(){
  const ms=[];
  for(let i=1;i<=16;i++) ms.push({id:1000+i,phase:'r32',group:null,home:`Classificado ${i}A`,away:`Classificado ${i}B`,date:'2026-07-04',time:'16:00'});
  for(let i=1;i<=8;i++)  ms.push({id:2000+i,phase:'r16',group:null,home:`Vencedor R32 ${2*i-1}`,away:`Vencedor R32 ${2*i}`,date:'2026-07-11',time:'16:00'});
  for(let i=1;i<=4;i++)  ms.push({id:3000+i,phase:'qf', group:null,home:`Vencedor Oitava ${2*i-1}`,away:`Vencedor Oitava ${2*i}`,date:'2026-07-14',time:'16:00'});
  ms.push(
    {id:4001,phase:'sf',group:null,home:'Vencedor QF 1',away:'Vencedor QF 2',date:'2026-07-17',time:'21:00'},
    {id:4002,phase:'sf',group:null,home:'Vencedor QF 3',away:'Vencedor QF 4',date:'2026-07-18',time:'21:00'},
    {id:5001,phase:'3rd',group:null,home:'Perdedor SF 1',away:'Perdedor SF 2',date:'2026-07-18',time:'17:00'},
    {id:6001,phase:'final',group:null,home:'Finalista 1',away:'Finalista 2',date:'2026-07-19',time:'17:00'},
  );
  return ms;
}

const ALL = [...genGroupMatches(),...genKnockoutMatches()];
const TOTAL = ALL.length;

function getMatch(id){ return ALL.find(m=>m.id===id); }

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
function initData(){
  return {v:1,adminPin:H('admin123'),participants:[],predictions:{},results:{},koTeams:{},banner:null};
}
function getData(){
  try{ const r=localStorage.getItem(SK); return r?JSON.parse(r):initData(); }
  catch{ return initData(); }
}
function setData(d){
  try{ localStorage.setItem(SK,JSON.stringify(d)); }catch(e){ toast('⚠️ Erro ao salvar: '+e.message,3500); }
  if(_fbEnabled&&_db){
    _db.collection('bolao').doc('main').set({payload:d,ts:Date.now()})
      .catch(e=>console.warn('[Firebase] Erro ao gravar:',e));
  }
}
function save(fn){ const d=getData(); fn(d); setData(d); }

// ─────────────────────────────────────────────
// FIREBASE SYNC
// ─────────────────────────────────────────────
let _db=null,_fbEnabled=false,_ignoreSnap=false;

function _reRenderCurrent(){
  const map={'p-rank':()=>renderRank(),'p-preds':()=>renderPreds(),'p-admin':()=>renderAdminCfg(),'p-profile':()=>renderProfile(),'p-groups':()=>renderGroups(),'p-next':()=>renderNextGames()};
  for(const[id,fn] of Object.entries(map)){
    if(document.getElementById(id)?.classList.contains('show')){fn();return;}
  }
  renderWelcome();
}

function initFirebase(){
  if(!USE_FIREBASE){console.log('[Firebase] Config não preenchida — usando só localStorage');return;}
  try{
    firebase.initializeApp(FIREBASE_CONFIG);
    _db=firebase.firestore();
    _fbEnabled=true;
    // Carrega dados remotos ao iniciar
    _db.collection('bolao').doc('main').get().then(doc=>{
      if(doc.exists){
        const remote=doc.data().payload;
        localStorage.setItem(SK,JSON.stringify(remote));
        console.log('[Firebase] Dados carregados do Firestore');
        _reRenderCurrent();
      } else {
        // Nenhum dado remoto ainda — sobe o local
        const local=getData();
        _db.collection('bolao').doc('main').set({payload:local,ts:Date.now()}).catch(console.warn);
      }
      // Listener em tempo real — sincroniza quando outro dispositivo salva
      _db.collection('bolao').doc('main').onSnapshot(snap=>{
        if(!snap.exists||_ignoreSnap) return;
        const remote=snap.data().payload;
        const local=localStorage.getItem(SK);
        if(JSON.stringify(remote)!==local){
          localStorage.setItem(SK,JSON.stringify(remote));
          _reRenderCurrent();
          toast('🔄 Dados atualizados!',1800);
        }
      });
    }).catch(e=>console.warn('[Firebase] Erro ao carregar:',e));
  }catch(e){console.warn('[Firebase] Erro de inicialização:',e);}
}

// ─────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────
function H(s){
  s=s+'BOLAO2026COPA';
  let h=0;
  for(let i=0;i<s.length;i++){h=Math.imul(31,h)+s.charCodeAt(i)|0;}
  return h.toString(36);
}
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
function fmtD(s){
  if(!s) return '';
  const[,m,d]=s.split('-');
  const mn=['','Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  return `${parseInt(d)} ${mn[parseInt(m)]}`;
}
function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function flag(t){
  const code=FLAG_CODES[t];
  if(code) return `<img src="https://flagcdn.com/w40/${code}.png" class="flag-img" alt="${t}" onerror="this.outerHTML='${(FLAGS[t]||'🏳️')}'">`;
  return FLAGS[t]||'🏳️';
}

let _tt;
function toast(msg,dur=2400){
  const el=document.getElementById('toast');
  el.textContent=msg; el.className='show';
  clearTimeout(_tt); _tt=setTimeout(()=>{el.className='';},dur);
}
function openModal(title,bodyHtml){
  document.getElementById('m-title').textContent=title;
  document.getElementById('m-body').innerHTML=bodyHtml;
  document.getElementById('moverlay').classList.add('show');
}
function closeModal(){ document.getElementById('moverlay').classList.remove('show'); }

// ─────────────────────────────────────────────
// SCORING  (10/7/5/2/0)
// ─────────────────────────────────────────────
function calcPts(pred,result){
  if(!result||result.home==null||result.away==null) return null;
  if(!pred||pred.home==null||pred.away==null) return 0;
  const ph=+pred.home,pa=+pred.away,rh=+result.home,ra=+result.away;
  if(ph===rh&&pa===ra) return 10;                          // Placar exato
  const co=Math.sign(ph-pa)===Math.sign(rh-ra);           // Acertou resultado
  const or=ph===rh||pa===ra;                               // Acertou 1 placar
  if(co&&or) return 7;   // Vencedor + 1 placar
  if(co)     return 5;   // Só vencedor / empate
  if(or)     return 2;   // Só 1 placar
  return 0;
}
function calcScore(pid){
  const d=getData();
  let pts=0,exact=0,s7=0,s5=0,s2=0,preds=0;
  ALL.forEach(m=>{
    const r=d.results[m.id];
    const p=d.predictions[pid+':'+m.id];
    if(p) preds++;
    const v=calcPts(p,r);
    if(v!==null){pts+=v;if(v===10)exact++;else if(v===7)s7++;else if(v===5)s5++;else if(v===2)s2++;}
  });
  return {pts,exact,s7,s5,s2,correct:exact+s7+s5,preds,total:TOTAL};
}
function calcScoreForMatches(pid,matches){
  const d=getData();
  let pts=0,exact=0,s7=0,s5=0,s2=0,preds=0;
  matches.forEach(m=>{
    const r=d.results[m.id];
    const p=d.predictions[pid+':'+m.id];
    if(p) preds++;
    const v=calcPts(p,r);
    if(v!==null){pts+=v;if(v===10)exact++;else if(v===7)s7++;else if(v===5)s5++;else if(v===2)s2++;}
  });
  return {pts,exact,s7,s5,s2,correct:exact+s7+s5,preds,total:matches.length};
}
function getRanking(){
  const d=getData();
  return d.participants
    .map(p=>({...p,...calcScore(p.id)}))
    .sort((a,b)=>b.pts-a.pts||b.exact-a.exact);
}
function getFilteredRanking(){
  const fase=document.getElementById('rk-fase')?.value||'all';
  const rod=document.getElementById('rk-rodada')?.value||'all';
  let ms=ALL;
  if(fase==='group') ms=ms.filter(m=>m.phase==='group');
  else if(fase==='ko') ms=ms.filter(m=>m.phase!=='group');
  if(rod!=='all') ms=ms.filter(m=>m.round===parseInt(rod));
  const d=getData();
  return d.participants
    .map(p=>({...p,...calcScoreForMatches(p.id,ms)}))
    .sort((a,b)=>b.pts-a.pts||b.exact-a.exact);
}

// ─────────────────────────────────────────────
// STEPPER +/-
// ─────────────────────────────────────────────
function stepScore(wrapperId,delta){
  const el=document.getElementById(wrapperId);
  if(!el) return;
  const valEl=el.querySelector('.step-val');
  if(!valEl||valEl.classList.contains('locked')) return;
  const cur=valEl.textContent.trim()==='−'?0:parseInt(valEl.textContent)||0;
  valEl.textContent=Math.max(0,Math.min(20,cur+delta));
}

// ─────────────────────────────────────────────
// QUEM PALPITOU
// ─────────────────────────────────────────────
function showWhoPredicted(mid){
  const m=getMatch(mid);
  const d=getData();
  const locked=isMatchLocked(m);
  const r=d.results[m.id];
  const h=mHome(m,d),aw=mAway(m,d);
  if(!locked&&!r){
    openModal(`👥 ${esc(h)} × ${esc(aw)}`,`
      <div style="text-align:center;padding:20px 0;color:var(--muted)">
        <div style="font-size:38px;margin-bottom:8px">🔓</div>
        Os palpites serão revelados quando o jogo travar (1 min antes do início).
      </div>
      <button class="btn btn-out" onclick="closeModal()" style="margin-top:4px">Fechar</button>
    `);
    return;
  }
  const rows=d.participants.map(p=>{
    const pr=d.predictions[p.id+':'+mid];
    const pts=calcPts(pr,r);
    let badge='';
    if(r){
      if(pts===10) badge='<span class="badge b4" style="font-size:10px">⭐10</span>';
      else if(pts===7) badge='<span class="badge b3" style="font-size:10px">✓7</span>';
      else if(pts===5) badge='<span class="badge b3" style="font-size:10px">✓5</span>';
      else if(pts===2) badge='<span class="badge bpd" style="font-size:10px">↑2</span>';
      else badge='<span class="badge b0" style="font-size:10px">✗0</span>';
    }
    const isMe=CU&&!CU.admin&&p.id===CU.id;
    return `<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid rgba(20,20,19,.08)${isMe?';background:rgba(26,92,42,.08);margin:0 -4px;padding:8px 4px;border-radius:6px':''}">
      <div style="width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--g),var(--gl));display:flex;align-items:center;justify-content:center;font-weight:900;font-size:12px;flex-shrink:0">${p.name[0].toUpperCase()}</div>
      <div style="flex:1;font-size:12px;font-weight:700;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:${isMe?'var(--y)':'inherit'}">${esc(p.name)}${isMe?' (você)':''}</div>
      <div style="font-size:15px;font-weight:900;font-family:'Courier New',monospace;color:var(--y);flex-shrink:0">${pr!=null&&pr.home!=null?pr.home+'–'+pr.away:'—'}</div>
      ${badge}
    </div>`;
  }).join('');
  openModal(`👥 ${esc(h)} × ${esc(aw)}`,`
    <div style="font-size:11px;color:var(--muted);margin-bottom:10px">${fmtD(m.date)} ${m.time}${r?` · Resultado: <strong style="color:var(--y)">${r.home}–${r.away}</strong>`:''}</div>
    <div style="max-height:340px;overflow-y:auto;margin:0 -4px">${rows}</div>
    <button class="btn btn-out" style="margin-top:10px" onclick="closeModal()">Fechar</button>
  `);
}

// ─────────────────────────────────────────────
// FILTRO POR DATA (preds)
// ─────────────────────────────────────────────
let CPD=null;
function setDate(date){CPD=date;renderPreds();}
function renderDateStrip(dates){
  const el=document.getElementById('date-strip');
  if(!el) return;
  if(dates.length<2){el.style.display='none';return;}
  el.style.display='block';
  el.innerHTML=`<div style="display:flex;gap:5px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px">
    <button class="date-chip${!CPD?' on':''}" onclick="setDate(null)">Todos</button>
    ${dates.map(d=>`<button class="date-chip${CPD===d?' on':''}" onclick="setDate('${d}')">${fmtD(d)}</button>`).join('')}
  </div>`;
}

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let CU=null;
let CPF='all';
let APF='all';

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
function nav(pid){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('show'));
  document.getElementById('p-'+pid).classList.add('show');
  if(pid==='welcome') renderWelcome();
  if(pid==='login') populateSelect();
  if(pid==='admin-login') document.getElementById('in-admpw').value='';
}
function goTo(sec){
  const map={dash:'dash',preds:'preds',mygames:'mygames',rank:'rank',profile:'profile',groups:'groups'};
  nav(map[sec]||sec);
  document.querySelectorAll('.bot-nav .nav-btn').forEach(b=>b.classList.remove('on'));
  const nb=document.getElementById('nb-'+sec);
  if(nb) nb.classList.add('on');
  if(sec==='dash')    renderDash();
  if(sec==='preds')   renderPreds();
  if(sec==='mygames') renderMyGames();
  if(sec==='rank')    renderRank();
  if(sec==='profile') renderProfile();
  if(sec==='groups')  renderGroupsPage();
}
function aTab(tab,btn){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  ['ptcp','res','rank','cfg'].forEach(t=>{
    const el=document.getElementById('a-'+t);
    if(el) el.style.display='none';
  });
  if(tab==='res') document.getElementById('a-res').style.display='flex';
  else document.getElementById('a-'+tab).style.display='';
  if(tab==='ptcp') aRenderPtcp();
  if(tab==='res')  aRenderMatches();
  if(tab==='rank') aRenderRank();
  if(tab==='cfg')  aLoadCfg();
}
function aLoadCfg(){
  const d=getData();
  const el=document.getElementById('cfg-apikey');
  if(el&&d.apiKey) el.value=d.apiKey;
  renderAdminCfg();
}

// ─────────────────────────────────────────────
// AUTH
// ─────────────────────────────────────────────
function populateSelect(){
  const d=getData();
  const sel=document.getElementById('sel-name');
  sel.innerHTML='<option value="">— Escolha seu nome —</option>';
  d.participants.forEach(p=>{ sel.innerHTML+=`<option value="${esc(p.id)}">${esc(p.name)}</option>`; });
  ['in-pin','in-newname','in-newpin','in-newpin2'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
}
function doLogin(){
  const d=getData();
  const id=document.getElementById('sel-name').value;
  const pin=document.getElementById('in-pin').value.trim();
  if(!id){ toast('Selecione seu nome!'); return; }
  if(!pin){ toast('Digite seu PIN!'); return; }
  const p=d.participants.find(x=>x.id===id);
  if(!p||p.pin!==H(pin)){ toast('❌ PIN incorreto!'); return; }
  CU={id:p.id,name:p.name};
  goTo('dash');
  startAutoRefresh();
}
function doRegister(){
  const name=document.getElementById('in-newname').value.trim();
  const pin=document.getElementById('in-newpin').value.trim();
  const pin2=document.getElementById('in-newpin2').value.trim();
  if(!name||name.length<2){ toast('Nome inválido!'); return; }
  if(!/^\d{4}$/.test(pin)){ toast('PIN deve ter 4 dígitos!'); return; }
  if(pin!==pin2){ toast('PINs não conferem!'); return; }
  const d=getData();
  if(d.participants.find(p=>p.name.toLowerCase()===name.toLowerCase())){ toast('Nome já cadastrado!'); return; }
  const newP={id:uid(),name,pin:H(pin)};
  d.participants.push(newP);
  setData(d);
  CU={id:newP.id,name:newP.name};
  toast('✅ Bem-vindo(a) '+name+'!');
  goTo('dash');
  startAutoRefresh();
}
function doAdminLogin(){
  const d=getData();
  const pw=document.getElementById('in-admpw').value;
  if(H(pw)===d.adminPin){
    CU={admin:true};
    nav('admin');
    document.getElementById('a-ptcp').style.display='';
    document.getElementById('a-res').style.display='none';
    document.getElementById('a-rank').style.display='none';
    document.getElementById('a-cfg').style.display='none';
    aRenderPtcp();
  } else { toast('❌ Senha incorreta!'); }
}
function doLogout(){ CU=null; stopAutoRefresh(); nav('welcome'); }

// ─────────────────────────────────────────────
// WELCOME
// ─────────────────────────────────────────────
function renderWelcome(){
  startCountdown();
  spawnEmbers();
  const d=getData();
  // Grade de jogadores com fotos
  const grid=document.getElementById('wl-players-grid');
  const card=document.getElementById('wl-players-card');
  if(grid&&card){
    if(d.participants.length){
      card.style.display='';
      grid.innerHTML=d.participants.map(p=>`
        <div class="player-tile">
          ${p.photo
            ?`<img class="player-tile-img" src="${p.photo}" alt="${esc(p.name)}">`
            :`<div class="player-tile-av">${p.name[0].toUpperCase()}</div>`}
          <div class="player-tile-name">${esc(p.name.split(' ')[0])}</div>
        </div>`).join('');
    } else {
      card.style.display='none';
    }
  }
  const r=getRanking();
  const el=document.getElementById('wl-rank');
  if(!r.length){
    el.innerHTML='<div class="empty" style="padding:20px 0"><span class="empty-ico">🏆</span>Nenhum participante ainda</div>';
    return;
  }
  const medals=['🥇','🥈','🥉'];
  el.innerHTML=`<table class="rtable"><thead><tr>
    <th>#</th><th style="text-align:left">Nome</th><th>Pts</th><th>Exatos</th>
  </tr></thead><tbody>
    ${r.slice(0,10).map((p,i)=>`<tr class="${i===0?'r-gold':i===1?'r-silver':i===2?'r-bronze':''}">
      <td class="r-medal">${medals[i]||i+1}</td>
      <td class="r-name">${esc(p.name)}</td>
      <td><strong style="color:var(--y)">${p.pts}</strong></td>
      <td>${p.exact}</td>
    </tr>`).join('')}
  </tbody></table>`;
}

// ─────────────────────────────────────────────
// WELCOME — countdown to kickoff + atmosphere
// ─────────────────────────────────────────────
const KICKOFF = new Date('2026-06-11T19:00:00-06:00'); // abertura · Estádio Azteca
let _cdTimer=null;
function tickCountdown(){
  const body=document.getElementById('cd-body');
  if(!body) return;
  let diff=Math.floor((KICKOFF-new Date())/1000);
  if(diff<=0){
    body.innerHTML='<div class="cd-live"><span class="live-dot"></span>A Copa começou!</div>';
    if(_cdTimer){clearInterval(_cdTimer);_cdTimer=null;}
    return;
  }
  const d=Math.floor(diff/86400);diff-=d*86400;
  const h=Math.floor(diff/3600);diff-=h*3600;
  const m=Math.floor(diff/60);const s=diff-m*60;
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=String(v).padStart(2,'0');};
  // body may have been reset to live; ensure grid exists
  if(!document.getElementById('cd-d')){
    body.innerHTML='<div class="cd-grid">'+
      '<div class="cd-cell"><div class="cd-num" id="cd-d">--</div><div class="cd-lbl">Dias</div></div>'+
      '<div class="cd-cell"><div class="cd-num" id="cd-h">--</div><div class="cd-lbl">Horas</div></div>'+
      '<div class="cd-cell"><div class="cd-num" id="cd-m">--</div><div class="cd-lbl">Min</div></div>'+
      '<div class="cd-cell"><div class="cd-num" id="cd-s">--</div><div class="cd-lbl">Seg</div></div></div>';
  }
  set('cd-d',d);set('cd-h',h);set('cd-m',m);set('cd-s',s);
}
function startCountdown(){
  if(_cdTimer) return;
  tickCountdown();
  _cdTimer=setInterval(tickCountdown,1000);
}
function spawnEmbers(){
  const box=document.getElementById('whero-particles');
  if(!box||box.childElementCount) return;
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let html='';
  for(let i=0;i<14;i++){
    const left=Math.random()*100;
    const dur=(6+Math.random()*7).toFixed(1);
    const delay=(Math.random()*8).toFixed(1);
    const size=(2+Math.random()*2.5).toFixed(1);
    html+=`<i style="left:${left}%;width:${size}px;height:${size}px;animation-duration:${dur}s;animation-delay:-${delay}s"></i>`;
  }
  box.innerHTML=html;
}

// ─────────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────────
function renderDash(){
  if(!CU||CU.admin) return;
  const sc=calcScore(CU.id);
  const rank=getRanking();
  const pos=rank.findIndex(p=>p.id===CU.id)+1;
  const d=getData();
  document.getElementById('dash-hdr').textContent=CU.name;
  document.getElementById('d-uname').textContent=CU.name;
  document.getElementById('d-pos').textContent=pos||'—';
  document.getElementById('d-pts').textContent=sc.pts;
  document.getElementById('d-ex').textContent=sc.exact;
  document.getElementById('d-acc').textContent=sc.correct;
  const pct=sc.total?Math.round(sc.preds/sc.total*100):0;
  document.getElementById('d-prog').style.width=pct+'%';
  document.getElementById('d-prog-lbl').textContent=`${sc.preds} de ${sc.total} palpites dados`;
  renderNextGames();
  const played=ALL.filter(m=>d.results[m.id]).slice(-5).reverse();
  const rec=document.getElementById('d-recent');
  if(!played.length){
    rec.innerHTML='<div style="color:var(--muted);font-size:13px;text-align:center;padding:12px 0">Nenhum resultado ainda</div>';
  } else {
    rec.innerHTML=played.map(m=>{
      const r=d.results[m.id];
      const pr=d.predictions[CU.id+':'+m.id];
      const pts=calcPts(pr,r);
      const h=mHome(m,d), aw=mAway(m,d);
      let b='';
      if(pts===10) b='<span class="badge b4">⭐ 10</span>';
      else if(pts===7) b='<span class="badge b3">✓ 7</span>';
      else if(pts===5) b='<span class="badge b3">✓ 5</span>';
      else if(pts===2) b='<span class="badge bpd">↑ 2</span>';
      else b='<span class="badge b0">✗ 0</span>';
      return `<div class="rec-row">
        <div class="rec-teams">
          <div>${flag(h)} ${esc(h)} <strong style="font-family:\'Courier New\',monospace;color:var(--y)">${r.home}–${r.away}</strong> ${esc(aw)} ${flag(aw)}</div>
          <div style="font-size:11px;color:var(--muted)">${pr?'Palpite: '+pr.home+'–'+pr.away:'Sem palpite'}</div>
        </div>${b}</div>`;
    }).join('');
  }
}

// ─────────────────────────────────────────────
// PREDICTIONS
// ─────────────────────────────────────────────
function setPhase(ph,btn){
  CPF=ph; CPD=null;
  document.querySelectorAll('#ph-pills .pill').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  renderPreds();
}
function mHome(m,d){ return d.koTeams&&d.koTeams[m.id]&&d.koTeams[m.id].home||m.home; }
function mAway(m,d){ return d.koTeams&&d.koTeams[m.id]&&d.koTeams[m.id].away||m.away; }

function renderPreds(){
  if(!CU||CU.admin) return;
  const d=getData();
  const list=document.getElementById('preds-list');
  let matches=
    CPF==='all'?ALL:
    CPF==='r1'?ALL.filter(m=>m.phase==='group'&&m.round===1):
    CPF==='r2'?ALL.filter(m=>m.phase==='group'&&m.round===2):
    CPF==='r3'?ALL.filter(m=>m.phase==='group'&&m.round===3):
    ALL.filter(m=>m.phase===CPF);
  // date strip
  const allDates=[...new Set(matches.map(m=>m.date))].sort();
  renderDateStrip(allDates);
  if(CPD) matches=matches.filter(m=>m.date===CPD);

  if(!matches.length){ list.innerHTML='<div class="empty"><span class="empty-ico">⚽</span>Nenhum jogo nessa data</div>'; return; }
  const secs={}, order=[];
  matches.forEach(m=>{
    const k=CPF==='all'&&m.phase==='group'?'Rodada '+m.round:m.group?'Grupo '+m.group:(PHASE_NAMES[m.phase]||m.phase);
    if(!secs[k]){secs[k]=[];order.push(k);}
    secs[k].push(m);
  });
  let html='';
  order.forEach(sec=>{
    const ms=secs[sec];
    html+=`<div class="match-block" style="padding:0 16px;margin-bottom:0">
      <div class="grp-hdr">${esc(sec)}</div>
      ${ms.map(m=>renderMatchCard(m,d)).join('')}
    </div>`;
  });
  list.innerHTML=html;
}

function renderMatchCard(m,d){
  const r=d.results[m.id];
  const pr=d.predictions[CU.id+':'+m.id];
  const pts=calcPts(pr,r);
  const locked=isMatchLocked(m);
  const h=mHome(m,d),aw=mAway(m,d);
  let badge='';
  if(pts===10)      badge='<span class="badge b4">⭐ 10 pts</span>';
  else if(pts===7)  badge='<span class="badge b3">✓ 7 pts</span>';
  else if(pts===5)  badge='<span class="badge b3">✓ 5 pts</span>';
  else if(pts===2)  badge='<span class="badge bpd">↑ 2 pts</span>';
  else if(pts===0&&r) badge='<span class="badge b0">✗ 0 pts</span>';
  else if(locked)   badge=pr?'<span class="badge bsv">🔒 Travado</span>':'<span class="badge b0">🔒 Sem palpite</span>';
  else if(pr)       badge='<span class="badge bsv">💾 Salvo</span>';

  let scoreArea;
  if(r){
    scoreArea=`<div class="res-box">${r.home}</div><span class="score-sep">–</span><div class="res-box">${r.away}</div>`;
  } else {
    const mk=(side,val)=>`<div class="stepper" id="${side}-${m.id}">
      <button class="step-btn" onclick="stepScore('${side}-${m.id}',-1)"${locked?' disabled':''}>−</button>
      <div class="step-val${locked?' locked':''}">${val!=null?val:'−'}</div>
      <button class="step-btn" onclick="stepScore('${side}-${m.id}',1)"${locked?' disabled':''}>+</button>
    </div>`;
    scoreArea=mk('ph',pr?.home!=null?pr.home:null)+'<span class="score-sep" style="margin:0 2px">:</span>'+mk('pa',pr?.away!=null?pr.away:null);
  }

  const dl=!r&&!locked&&isToday(m.date)
    ?`<div style="font-size:10px;color:var(--orange);text-align:center;margin-top:6px;font-weight:700">⏰ Fecha às ${getMatchDeadline(m).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</div>`
    :'';

  return `<div class="match-card">
    <div class="match-meta">
      <span class="match-date">${fmtD(m.date)} · ${m.time}</span>
      ${badge}
    </div>
    <div class="match-teams">
      <div class="tm"><span class="tm-flag">${flag(h)}</span><div class="tm-name">${esc(h)}</div></div>
      <div class="score-area" style="gap:2px">${scoreArea}</div>
      <div class="tm"><span class="tm-flag">${flag(aw)}</span><div class="tm-name">${esc(aw)}</div></div>
    </div>
    ${r&&pr?`<div class="pts-note">Seu palpite: ${pr.home}–${pr.away}</div>`:''}
    <div style="display:flex;justify-content:flex-end;margin-top:6px">
      <button onclick="showWhoPredicted(${m.id})" style="background:rgba(20,20,19,.05);border:1px solid rgba(20,20,19,.12);border-radius:999px;color:var(--muted);font-size:10px;font-weight:700;padding:4px 10px;cursor:pointer;-webkit-tap-highlight-color:transparent">👥 Quem palpitou</button>
    </div>
    ${dl}
  </div>`;
}

function savePreds(){
  if(!CU||CU.admin) return;
  const d=getData(); let count=0;
  ALL.forEach(m=>{
    if(isMatchLocked(m)) return;
    const hEl=document.getElementById('ph-'+m.id);
    const aEl=document.getElementById('pa-'+m.id);
    if(!hEl||!aEl) return;
    const hv=hEl.querySelector('.step-val')?.textContent?.trim();
    const av=aEl.querySelector('.step-val')?.textContent?.trim();
    if(!hv||!av||hv==='−'||av==='−') return;
    const h=parseInt(hv),a=parseInt(av);
    if(isNaN(h)||isNaN(a)||h<0||h>20||a<0||a>20) return;
    d.predictions[CU.id+':'+m.id]={home:h,away:a}; count++;
  });
  setData(d);
  toast(count?`✅ ${count} palpite(s) salvo(s)!`:'⚠️ Nenhum palpite novo para salvar.');
  renderPreds();
}

// ─────────────────────────────────────────────
// MY GAMES
// ─────────────────────────────────────────────
function renderMyGames(){
  if(!CU||CU.admin) return;
  const d=getData();
  const played=ALL.filter(m=>d.results[m.id]);
  const el=document.getElementById('mg-list');
  if(!played.length){
    el.innerHTML='<div class="empty"><span class="empty-ico">⏳</span>Nenhum resultado ainda</div>';
    return;
  }
  let total=0, html='', lastSec='';
  played.forEach(m=>{
    const sec=m.group?'Grupo '+m.group:(PHASE_NAMES[m.phase]||m.phase);
    if(sec!==lastSec){ html+=`<div class="sec-lbl">${esc(sec)}</div>`; lastSec=sec; }
    const r=d.results[m.id];
    const pr=d.predictions[CU.id+':'+m.id];
    const pts=calcPts(pr,r);
    const h=mHome(m,d), aw=mAway(m,d);
    total+=pts||0;
    let b='';
    if(pts===10)     b='<span class="badge b4">⭐ 10</span>';
    else if(pts===7) b='<span class="badge b3">✓ 7</span>';
    else if(pts===5) b='<span class="badge b3">✓ 5</span>';
    else if(pts===2) b='<span class="badge bpd">↑ 2</span>';
    else             b='<span class="badge b0">✗ 0</span>';
    html+=`<div class="mg-card">
      <div class="mg-header"><span class="match-date" style="color:var(--muted)">${fmtD(m.date)}</span>${b}</div>
      <div class="mg-teams">
        <div class="mg-tm"><div class="mg-flag">${flag(h)}</div><div class="mg-tname">${esc(h)}</div></div>
        <div class="mg-score-box">
          <div class="mg-result">${r.home}–${r.away}</div>
          ${pr?`<div class="mg-pred">palpite: ${pr.home}–${pr.away}</div>`:`<div class="mg-nopred">sem palpite</div>`}
        </div>
        <div class="mg-tm"><div class="mg-flag">${flag(aw)}</div><div class="mg-tname">${esc(aw)}</div></div>
      </div>
    </div>`;
  });
  el.innerHTML=`<div class="mg-total-banner">
    <div class="mg-total-pts">${total}</div>
    <div class="mg-total-lbl">pontos totais</div>
  </div>${html}`;
}

// ─────────────────────────────────────────────
// RANKING
// ─────────────────────────────────────────────
function renderRank(){
  const r=getFilteredRanking();
  const podEl=document.getElementById('rank-podium');
  if(r.length>=1){
    const order=[r[1],r[0],r[2]].filter(Boolean);
    const classes=['pod-2','pod-1','pod-3'];
    const medals=['🥈','🥇','🥉'];
    podEl.innerHTML=`<div class="podium">${order.map((p,i)=>`
      <div class="pod ${classes[i]}">
        <div class="pod-medal">${medals[i]}</div>
        <div class="pod-av">${p.name[0].toUpperCase()}</div>
        <div class="pod-name">${esc(p.name)}</div>
        <div class="pod-pts">${p.pts} pts</div>
        <div class="pod-base"></div>
      </div>`).join('')}
    </div>`;
  } else { podEl.innerHTML=''; }
  document.getElementById('rank-tbl').innerHTML=buildRankTable(r);
  document.getElementById('rank-chart').innerHTML=buildRankingChart();
}

function buildRankTable(r){
  if(!r) r=getRanking();
  if(!r.length) return '<div class="empty" style="padding:20px 0"><span class="empty-ico">🏆</span>Nenhum participante ainda</div>';
  const medals=['🥇','🥈','🥉'];
  const myId=CU&&!CU.admin?CU.id:null;
  const rows=r.map((p,i)=>{
    const prev=_prevRanking[p.id];
    let chg='';
    if(prev!==undefined&&prev!==i){
      if(prev>i) chg=`<span class="rch-up">▲${prev-i}</span>`;
      else chg=`<span class="rch-dn">▼${i-prev}</span>`;
    } else if(prev!==undefined){ chg='<span class="rch-eq">—</span>'; }
    _prevRanking[p.id]=i;
    const rowCls=[p.id===myId?'me':'',i===0?'r-gold':i===1?'r-silver':i===2?'r-bronze':''].filter(Boolean).join(' ');
    const breakdown=`<div style="display:flex;gap:3px;margin-top:3px;flex-wrap:wrap">
      <span style="background:rgba(245,197,24,.15);color:var(--y);padding:1px 5px;border-radius:4px;font-size:9px;font-weight:800">⭐${p.exact||0}</span>
      <span style="background:rgba(22,163,74,.1);color:#16a34a;padding:1px 5px;border-radius:4px;font-size:9px;font-weight:800">✓${(p.s7||0)+(p.s5||0)}</span>
      <span style="background:rgba(251,191,36,.1);color:#fbbf24;padding:1px 5px;border-radius:4px;font-size:9px;font-weight:800">↑${p.s2||0}</span>
    </div>`;
    const av=p.photo
      ?`<img class="rank-av" src="${p.photo}" alt="">`
      :`<span class="rank-av-init">${p.name[0].toUpperCase()}</span>`;
    return `<tr class="${rowCls}">
      <td class="r-medal">${medals[i]||i+1}</td>
      <td class="r-name">
        <div style="display:flex;align-items:center;gap:7px">${av}<div>
        ${esc(p.name)}${p.id===myId?'&nbsp;<small style="color:var(--y);font-size:10px">(você)</small>':''}
        ${breakdown}
        </div></div>
      </td>
      <td><strong style="color:var(--y)">${p.pts}</strong></td>
      <td>${chg}</td>
    </tr>`;
  });
  return `<table class="rtable"><thead><tr>
    <th>#</th><th style="text-align:left">Nome</th><th>Pts</th><th>±</th>
  </tr></thead><tbody>${rows.join('')}</tbody></table>`;
}

// ─────────────────────────────────────────────
// EXPORT / IMPORT CODE
// ─────────────────────────────────────────────
function genCode(){
  if(!CU||CU.admin) return;
  const d=getData();
  const ptcp=d.participants.find(p=>p.id===CU.id);
  if(!ptcp){ toast('Erro ao gerar código.'); return; }
  const preds={};
  ALL.forEach(m=>{ const p=d.predictions[CU.id+':'+m.id]; if(p) preds[m.id]=p; });
  const payload={n:CU.name,i:CU.id,pin:ptcp.pin,preds};
  let code;
  try{ code='B26|'+btoa(unescape(encodeURIComponent(JSON.stringify(payload)))); }
  catch(e){ toast('Erro: '+e.message); return; }
  window._expCode=code;
  openModal('Código de Palpites',`
    <p style="font-size:13px;color:var(--muted);margin-bottom:8px">Copie e envie para o admin via WhatsApp:</p>
    <div class="code-box">${esc(code)}</div>
    <div class="btn-row" style="margin-top:12px">
      <button class="btn btn-g" onclick="cpCode()">Copiar código</button>
      <button class="btn btn-out" onclick="closeModal()">Fechar</button>
    </div>
    <p style="font-size:11px;color:var(--muted);margin-top:8px;text-align:center">${Object.keys(preds).length} palpite(s) incluídos</p>
  `);
}
function cpCode(){
  const c=window._expCode; if(!c) return;
  if(navigator.clipboard){
    navigator.clipboard.writeText(c).then(()=>toast('✅ Código copiado!')).catch(()=>cpFallback(c));
  } else { cpFallback(c); }
}
function cpFallback(t){
  const a=document.createElement('textarea');
  a.value=t; a.style.cssText='position:fixed;opacity:0';
  document.body.appendChild(a); a.select();
  document.execCommand('copy');
  document.body.removeChild(a);
  toast('✅ Código copiado!');
}
function aImportCode(){
  const raw=document.getElementById('a-import-code').value.trim();
  if(!raw){ toast('Cole um código primeiro!'); return; }
  try{
    if(!raw.startsWith('B26|')) throw new Error('Formato inválido (deve começar com B26|)');
    const json=decodeURIComponent(escape(atob(raw.slice(4))));
    const pl=JSON.parse(json);
    if(!pl.n||!pl.preds) throw new Error('Dados incompletos no código');
    const d=getData();
    let ptcp=d.participants.find(p=>p.name.toLowerCase()===pl.n.toLowerCase());
    if(!ptcp){ ptcp={id:pl.i||uid(),name:pl.n,pin:pl.pin||H('0000')}; d.participants.push(ptcp); }
    let cnt=0;
    Object.entries(pl.preds).forEach(([mid,pred])=>{ d.predictions[ptcp.id+':'+mid]=pred; cnt++; });
    setData(d);
    document.getElementById('a-import-code').value='';
    toast(`✅ ${pl.n}: ${cnt} palpite(s) importado(s)!`);
    aRenderPtcp();
  } catch(e){ toast('❌ Código inválido: '+e.message,3500); }
}

// ─────────────────────────────────────────────
// ADMIN: PARTICIPANTS
// ─────────────────────────────────────────────
function aRenderPtcp(){
  const d=getData();
  const el=document.getElementById('a-ptcp-list');
  if(!d.participants.length){
    el.innerHTML='<div class="empty" style="padding:20px 0"><span class="empty-ico">👥</span>Nenhum participante</div>';
    return;
  }
  const sc=d.participants.map(p=>({...p,...calcScore(p.id)}));
  el.innerHTML=sc.map(p=>`<div class="p-item">
    <div class="p-av">${p.name[0].toUpperCase()}</div>
    <div class="p-info">
      <div class="p-name">${esc(p.name)}</div>
      <div class="p-sub">${p.pts} pts · ${p.preds}/${p.total} palpites</div>
    </div>
    <div class="p-acts">
      <button class="btn btn-out btn-sm" onclick="aResetPin('${esc(p.id)}','${esc(p.name)}')">PIN</button>
      <button class="btn btn-r btn-sm" onclick="aDel('${esc(p.id)}')">×</button>
    </div>
  </div>`).join('');
}
function aAddPtcp(){
  const name=document.getElementById('a-newname').value.trim();
  const pin=document.getElementById('a-newpin').value.trim();
  if(!name){ toast('Digite o nome!'); return; }
  if(!/^\d{4}$/.test(pin)){ toast('PIN deve ser 4 dígitos!'); return; }
  const d=getData();
  if(d.participants.find(p=>p.name.toLowerCase()===name.toLowerCase())){ toast('Nome já existe!'); return; }
  d.participants.push({id:uid(),name,pin:H(pin)});
  setData(d);
  document.getElementById('a-newname').value='';
  document.getElementById('a-newpin').value='';
  toast('✅ '+name+' adicionado!');
  aRenderPtcp();
}
function aDel(id){
  if(!confirm('Remover participante e todos os palpites?')) return;
  save(d=>{
    d.participants=d.participants.filter(p=>p.id!==id);
    Object.keys(d.predictions).filter(k=>k.startsWith(id+':')).forEach(k=>delete d.predictions[k]);
  });
  toast('Participante removido.');
  aRenderPtcp();
}
function aResetPin(id,name){
  const np=prompt('Novo PIN (4 dígitos) para '+name+':');
  if(!np||!/^\d{4}$/.test(np)){ toast('PIN inválido!'); return; }
  save(d=>{ const p=d.participants.find(x=>x.id===id); if(p) p.pin=H(np); });
  toast('✅ PIN de '+name+' alterado!');
}

// ─────────────────────────────────────────────
// ADMIN: RESULTS
// ─────────────────────────────────────────────
function aSetPhase(ph,btn){
  APF=ph;
  document.querySelectorAll('#a-phase-pills .pill').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  aRenderMatches();
}
function aRenderMatches(){
  const d=getData();
  let ms=
    APF==='all'?ALL:
    APF==='r1'?ALL.filter(m=>m.phase==='group'&&m.round===1):
    APF==='r2'?ALL.filter(m=>m.phase==='group'&&m.round===2):
    APF==='r3'?ALL.filter(m=>m.phase==='group'&&m.round===3):
    ALL.filter(m=>m.phase===APF);
  if(_aHojeOnly) ms=ms.filter(m=>isToday(m.date));
  if(APF==='all'){
    const gms=[...ms.filter(m=>m.phase==='group')].sort((a,b)=>a.round-b.round||a.date.localeCompare(b.date));
    ms=[...gms,...ms.filter(m=>m.phase!=='group')];
  }
  const el=document.getElementById('a-matches');
  let html='',lastSec='';
  ms.forEach(m=>{
    const sec=APF==='all'&&m.phase==='group'?'Rodada '+m.round:m.group?'Grupo '+m.group:(PHASE_NAMES[m.phase]||m.phase);
    if(sec!==lastSec){ html+=`<div class="sec-lbl">${esc(sec)}</div>`; lastSec=sec; }
    const r=d.results[m.id];
    const h=mHome(m,d), aw=mAway(m,d);
    const isKO=m.phase!=='group';
    html+=`<div class="adm-match">
      <div class="adm-match-meta">
        <span class="match-date">${fmtD(m.date)} · ${m.time}</span>
        ${r?'<span class="adm-status-ok">✓ Salvo</span>':'<span class="adm-status-w">⏳ Aguardando</span>'}
      </div>
      ${isKO?`<div style="display:flex;gap:6px;margin-bottom:8px">
        <input class="adm-ko-inp" id="koh-${m.id}" placeholder="Time da casa" value="${esc(h)}">
        <span style="padding:6px 4px;color:var(--muted);font-size:11px;flex-shrink:0">vs</span>
        <input class="adm-ko-inp" id="koa-${m.id}" placeholder="Time visitante" value="${esc(aw)}">
      </div>`:''}
      <div class="adm-teams-row">
        <div class="adm-tm"><div class="adm-flag">${flag(h)}</div><div class="adm-tname">${esc(h)}</div></div>
        <div class="score-area">
          <input class="si" type="tel" inputmode="numeric" id="rh-${m.id}" value="${r?r.home:''}" placeholder="0" maxlength="2">
          <span class="score-sep">:</span>
          <input class="si" type="tel" inputmode="numeric" id="ra-${m.id}" value="${r?r.away:''}" placeholder="0" maxlength="2">
        </div>
        <div class="adm-tm"><div class="adm-flag">${flag(aw)}</div><div class="adm-tname">${esc(aw)}</div></div>
      </div>
      <div class="adm-acts">
        <button class="btn btn-g btn-sm" onclick="aSaveRes(${m.id},${isKO})">Salvar</button>
        ${r?`<button class="btn btn-r btn-sm" onclick="aClearRes(${m.id})">Limpar</button>`:''}
      </div>
    </div>`;
  });
  el.innerHTML=html||'<div class="empty"><span class="empty-ico">⚽</span>Nenhum jogo</div>';
}
function aSaveRes(mid,isKO){
  const hv=document.getElementById('rh-'+mid).value.trim();
  const av=document.getElementById('ra-'+mid).value.trim();
  if(!hv||!av){ toast('Preencha os dois placares!'); return; }
  const h=parseInt(hv),a=parseInt(av);
  if(isNaN(h)||isNaN(a)||h<0||a<0){ toast('Valores inválidos!'); return; }
  save(d=>{
    d.results[mid]={home:h,away:a};
    if(isKO){
      if(!d.koTeams) d.koTeams={};
      const m=getMatch(mid);
      const homeName=(document.getElementById('koh-'+mid)||{}).value||'';
      const awayName=(document.getElementById('koa-'+mid)||{}).value||'';
      d.koTeams[mid]={home:homeName||m.home,away:awayName||m.away};
    }
  });
  toast('✅ Resultado salvo!');
  aRenderMatches();
}
function aClearRes(mid){
  if(!confirm('Remover este resultado?')) return;
  save(d=>{ delete d.results[mid]; });
  toast('Resultado removido.');
  aRenderMatches();
}
function aRenderRank(){
  document.getElementById('a-rank-tbl').innerHTML=buildRankTable();
}

// ─────────────────────────────────────────────
// ADMIN: CONFIG
// ─────────────────────────────────────────────
function aChangePw(){
  const old=document.getElementById('cfg-old').value;
  const nw=document.getElementById('cfg-new').value;
  const d=getData();
  if(H(old)!==d.adminPin){ toast('Senha atual incorreta!'); return; }
  if(nw.length<4){ toast('Nova senha muito curta!'); return; }
  d.adminPin=H(nw); setData(d);
  document.getElementById('cfg-old').value='';
  document.getElementById('cfg-new').value='';
  toast('✅ Senha alterada!');
}
function aExport(){
  const blob=new Blob([JSON.stringify(getData(),null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='bolao2026_'+new Date().toISOString().slice(0,10)+'.json';
  a.click(); URL.revokeObjectURL(url);
  toast('✅ Exportado!');
}
function aImportFile(){
  const inp=document.createElement('input');
  inp.type='file'; inp.accept='.json';
  inp.onchange=e=>{
    const f=e.target.files[0]; if(!f) return;
    const r=new FileReader();
    r.onload=ev=>{
      try{
        const data=JSON.parse(ev.target.result);
        if(!data.v||!Array.isArray(data.participants)) throw new Error('Formato inválido');
        setData(data); toast('✅ Dados importados!'); aRenderPtcp();
      }catch(e){ toast('❌ Arquivo inválido: '+e.message); }
    };
    r.readAsText(f);
  };
  inp.click();
}
function aClearResults(){
  if(!confirm('Limpar todos os resultados? Participantes e palpites serão mantidos.')) return;
  save(d=>{ d.results={}; d.koTeams={}; });
  toast('✅ Resultados limpos!');
}
function aReset(){
  if(!confirm('⚠️ ATENÇÃO: Apagar TODOS os dados?')) return;
  if(!confirm('Confirme novamente — ação irreversível.')) return;
  localStorage.removeItem(SK);
  if(_fbEnabled&&_db) _db.collection('bolao').doc('main').delete().catch(console.warn);
  toast('Dados apagados. Recarregando...');
  setTimeout(()=>location.reload(),1500);
}

// ─────────────────────────────────────────────
// AUTO-REFRESH
// ─────────────────────────────────────────────
let _refreshTimer=null;
let _lastRefreshTs=null;
let _prevRanking={};
let _aHojeOnly=false;

function startAutoRefresh(){
  stopAutoRefresh();
  _refreshTimer=setInterval(autoRefreshTick,60000);
}
function stopAutoRefresh(){
  if(_refreshTimer){clearInterval(_refreshTimer);_refreshTimer=null;}
}
function autoRefreshTick(){
  refreshCurrentPage();
  _lastRefreshTs=new Date();
  updateTimeIndicators();
}
function manualRefresh(){
  refreshCurrentPage();
  _lastRefreshTs=new Date();
  updateTimeIndicators();
  toast('✅ Atualizado!');
}
function refreshCurrentPage(){
  const pid=document.querySelector('.page.show')?.id?.replace('p-','');
  if(!pid) return;
  if(pid==='dash')    renderDash();
  if(pid==='rank')    renderRank();
  if(pid==='mygames') renderMyGames();
  if(pid==='welcome') renderWelcome();
}
function updateTimeIndicators(){
  if(!_lastRefreshTs) return;
  const fmt=_lastRefreshTs.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  const msg='Atualizado às '+fmt;
  const e1=document.getElementById('rk-upd-time');
  const e2=document.getElementById('dash-upd-time');
  if(e1) e1.textContent=msg;
  if(e2) e2.textContent=msg;
}
window.addEventListener('storage',e=>{ if(e.key===SK){ refreshCurrentPage(); toast('📊 Dados atualizados!'); } });

// ─────────────────────────────────────────────
// API: FETCH RESULTS
// ─────────────────────────────────────────────
function getApiKey(){
  const el=document.getElementById('cfg-apikey');
  if(el&&el.value.trim()) return el.value.trim();
  const d=getData(); return d.apiKey||'';
}
function aSaveApiKey(){
  const key=document.getElementById('cfg-apikey').value.trim();
  if(!key){ toast('Digite a chave de API!'); return; }
  save(d=>{ d.apiKey=key; });
  toast('✅ Chave salva!');
}
function setApiStatus(elId,type,msg){
  const el=document.getElementById(elId);
  if(!el) return;
  el.className='api-status api-'+type;
  el.textContent=msg;
  el.style.display='block';
}
async function aFetchResults(){
  const key=getApiKey();
  if(!key){
    openModal('Configurar API',`
      <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Para buscar resultados, você precisa de uma chave gratuita da <strong>football-data.org</strong>.</p>
      <div class="fg"><label class="fl">Chave de API</label><input class="fi" type="text" id="modal-apikey" placeholder="Cole sua chave aqui..." autocomplete="off"></div>
      <div class="btn-row" style="margin-top:4px">
        <button class="btn btn-g" onclick="modalSaveAndFetch()">Salvar e Buscar</button>
        <button class="btn btn-out" onclick="closeModal()">Cancelar</button>
      </div>
      <p style="font-size:11px;color:var(--muted);margin-top:10px;text-align:center">Chave gratuita em: <strong style="color:var(--y)">football-data.org/client/register</strong></p>
    `);
    return;
  }
  await doFetchResults(key);
}
async function modalSaveAndFetch(){
  const key=document.getElementById('modal-apikey').value.trim();
  if(!key){ toast('Digite a chave!'); return; }
  save(d=>{ d.apiKey=key; });
  const cfgEl=document.getElementById('cfg-apikey');
  if(cfgEl) cfgEl.value=key;
  closeModal();
  await doFetchResults(key);
}
async function doFetchResults(apiKey){
  setApiStatus('api-status-res','loading','⏳ Buscando resultados...');
  setApiStatus('api-status-cfg','loading','⏳ Buscando resultados...');
  try{
    const res=await fetch('https://api.football-data.org/v4/competitions/WC/matches?status=FINISHED',{headers:{'X-Auth-Token':apiKey}});
    if(res.status===401||res.status===403) throw new Error('Chave de API inválida.');
    if(res.status===429) throw new Error('Limite atingido. Tente em 1 min.');
    if(!res.ok) throw new Error('Erro HTTP '+res.status);
    const data=await res.json();
    const matches=data.matches||[];
    if(!matches.length){
      setApiStatus('api-status-res','ok','✅ Nenhum jogo encerrado ainda.');
      setApiStatus('api-status-cfg','ok','✅ Nenhum jogo encerrado ainda.');
      return;
    }
    const d=getData();
    const updates=[]; const skipped=[];
    matches.forEach(apiM=>{
      if(!apiM.score||apiM.score.fullTime.home===null) return;
      const apiH=TEAM_MAP[apiM.homeTeam.name]||apiM.homeTeam.name;
      const apiA=TEAM_MAP[apiM.awayTeam.name]||apiM.awayTeam.name;
      const found=findMatchByTeams(apiH,apiA);
      if(!found){ skipped.push(apiH+' x '+apiA); return; }
      const rh=found.reversed?apiM.score.fullTime.away:apiM.score.fullTime.home;
      const ra=found.reversed?apiM.score.fullTime.home:apiM.score.fullTime.away;
      const alreadySaved=d.results[found.match.id];
      const changed=!alreadySaved||alreadySaved.home!==rh||alreadySaved.away!==ra;
      updates.push({match:found.match,home:rh,away:ra,homeTeam:found.reversed?apiA:apiH,awayTeam:found.reversed?apiH:apiA,alreadySaved:!!alreadySaved,changed});
    });
    const newCount=updates.filter(u=>!u.alreadySaved||u.changed).length;
    setApiStatus('api-status-res','ok',`✅ ${matches.length} jogo(s). ${newCount} novo(s).`);
    setApiStatus('api-status-cfg','ok',`✅ ${matches.length} jogo(s). ${newCount} novo(s).`);
    if(!updates.length){ toast('Nenhum resultado mapeado.'); return; }
    showResultsPreview(updates,skipped);
  }catch(e){
    const msg='❌ '+e.message;
    setApiStatus('api-status-res','err',msg);
    setApiStatus('api-status-cfg','err',msg);
    toast(msg,3500);
  }
}
function findMatchByTeams(team1,team2){
  const t1=team1.toLowerCase().trim(), t2=team2.toLowerCase().trim();
  for(const m of ALL){
    const mh=m.home.toLowerCase(), ma=m.away.toLowerCase();
    if(mh===t1&&ma===t2) return{match:m,reversed:false};
    if(mh===t2&&ma===t1) return{match:m,reversed:true};
  }
  return null;
}
function showResultsPreview(updates,skipped=[]){
  const toSave=updates.filter(u=>!u.alreadySaved||u.changed);
  const already=updates.filter(u=>u.alreadySaved&&!u.changed);
  window._pendingResults=updates;
  openModal('Resultados Encontrados',`
    <div style="font-size:13px;color:var(--muted);margin-bottom:10px">
      <strong style="color:var(--y)">${toSave.length}</strong> novo(s) &nbsp;·&nbsp; <span style="color:#16a34a">${already.length} já salvos</span>
      ${skipped.length?`<br><span style="font-size:11px;color:var(--orange)">⚠️ ${skipped.length} não mapeado(s)</span>`:''}
    </div>
    <div class="fetch-preview">
      ${updates.map(u=>{
        const f1=flag(u.homeTeam),f2=flag(u.awayTeam);
        const status=u.alreadySaved&&!u.changed
          ?'<span class="badge bsv">já salvo</span>'
          :'<span class="badge b3">novo</span>';
        return`<div class="fetch-row"><div class="fetch-teams">${f1} ${esc(u.homeTeam)} <strong style="font-family:\'Courier New\';color:var(--y)">${u.home}–${u.away}</strong> ${esc(u.awayTeam)} ${f2}</div>${status}</div>`;
      }).join('')}
    </div>
    <div class="btn-row" style="margin-top:4px">
      <button class="btn btn-g" onclick="confirmFetchedResults()">Salvar ${toSave.length} resultado(s)</button>
      <button class="btn btn-out" onclick="closeModal()">Cancelar</button>
    </div>
  `);
}
function confirmFetchedResults(){
  const updates=window._pendingResults;
  if(!updates){ closeModal(); return; }
  const d=getData(); let count=0;
  updates.forEach(u=>{
    const cur=d.results[u.match.id];
    if(!cur||cur.home!==u.home||cur.away!==u.away){ d.results[u.match.id]={home:u.home,away:u.away}; count++; }
  });
  setData(d); closeModal();
  toast(`✅ ${count} resultado(s) salvo(s)!`);
  aRenderMatches(); refreshCurrentPage();
  _lastRefreshTs=new Date(); updateTimeIndicators();
}
function aToggleHoje(btn){
  _aHojeOnly=!_aHojeOnly;
  btn.classList.toggle('on',_aHojeOnly);
  aRenderMatches();
}
function isToday(dateStr){
  if(!dateStr) return false;
  return dateStr===new Date().toISOString().slice(0,10);
}
function getMatchDeadline(m){
  const d=new Date(`${m.date}T${m.time}:00`);
  return new Date(d.getTime()-60000); // 1 min antes do apito
}
function isMatchLocked(m){
  return new Date()>=getMatchDeadline(m);
}
function openApiHelp(){
  openModal('Como obter a chave gratuita',`
    <ol style="font-size:13px;color:var(--text);line-height:2.2;padding-left:16px">
      <li>Acesse: <strong style="color:var(--y)">football-data.org</strong></li>
      <li>Clique em <strong>"Get API Key"</strong> ou Register</li>
      <li>Cadastre-se com seu e-mail (gratuito)</li>
      <li>Confirme o e-mail</li>
      <li>Copie a chave e cole aqui</li>
    </ol>
    <p style="font-size:11px;color:var(--muted);margin-top:10px">Tier gratuito: 10 req/min · Sem cartão de crédito.</p>
    <button class="btn btn-g" style="margin-top:12px" onclick="closeModal()">Entendi ✓</button>
  `);
}

// ─────────────────────────────────────────────
// TEMA CLARO / ESCURO
// ─────────────────────────────────────────────
const THEME_KEY='BOLAO2026_THEME';
function toggleTheme(){
  const isLight=document.body.classList.toggle('light');
  localStorage.setItem(THEME_KEY,isLight?'light':'dark');
  document.querySelectorAll('.theme-btn').forEach(b=>b.textContent=isLight?'🌙':'☀️');
}
function initTheme(){
  if(localStorage.getItem(THEME_KEY)==='light'){
    document.body.classList.add('light');
    document.querySelectorAll('.theme-btn').forEach(b=>b.textContent='🌙');
  }
}

// ─────────────────────────────────────────────
// PWA
// ─────────────────────────────────────────────
let _deferredInstall=null;
function initPWA(){
  window.addEventListener('beforeinstallprompt',e=>{
    e.preventDefault();
    _deferredInstall=e;
    const b=document.getElementById('pwa-banner');
    if(b) b.classList.add('show');
  });
  window.addEventListener('appinstalled',()=>{
    const b=document.getElementById('pwa-banner');
    if(b) b.classList.remove('show');
    _deferredInstall=null;
    toast('✅ App instalado com sucesso!');
  });
}
async function installPWA(){
  if(!_deferredInstall){
    openModal('Instalar App',`
      <p style="font-size:13px;color:var(--muted);line-height:1.8;margin-bottom:14px">
        Para instalar no celular:
      </p>
      <ol style="font-size:13px;color:var(--text);line-height:2.2;padding-left:16px">
        <li><strong>Chrome/Edge:</strong> Menu ⋮ → "Instalar app" ou "Adicionar à tela inicial"</li>
        <li><strong>Safari iOS:</strong> Botão compartilhar → "Adicionar à Tela Inicial"</li>
        <li><strong>Firefox:</strong> Menu → "Instalar"</li>
      </ol>
      <p style="font-size:11px;color:var(--muted);margin-top:10px">O app precisa ser servido via HTTPS para instalação automática.</p>
      <button class="btn btn-g" style="margin-top:12px" onclick="closeModal()">Entendi ✓</button>
    `);
    return;
  }
  _deferredInstall.prompt();
  const res=await _deferredInstall.userChoice;
  if(res.outcome==='accepted') toast('✅ App instalado!');
  _deferredInstall=null;
  const b=document.getElementById('pwa-banner');
  if(b) b.classList.remove('show');
}

// ─────────────────────────────────────────────
// NOTIFICAÇÕES
// ─────────────────────────────────────────────
function initNotifications(){
  if(Notification&&Notification.permission==='granted') scheduleNotifications();
}
async function requestNotifications(){
  if(!('Notification' in window)){
    toast('⚠️ Notificações não suportadas neste browser.');
    return;
  }
  const p=await Notification.requestPermission();
  if(p==='granted'){
    toast('✅ Notificações ativadas!');
    scheduleNotifications();
  } else if(p==='denied'){
    toast('❌ Permissão negada. Altere nas configurações do browser.');
  }
  updateNotifStatus();
}
function scheduleNotifications(){
  if(!('Notification' in window)||Notification.permission!=='granted') return;
  const now=Date.now();
  ALL.forEach(m=>{
    const lockMs=getMatchDeadline(m).getTime();
    const alertMs=lockMs-10*60*1000; // 10 min antes do travamento = 11 min antes do jogo
    if(alertMs>now){
      setTimeout(()=>{
        if(Notification.permission==='granted'){
          try{
            new Notification('⚽ Bolão Copa 2026',{
              body:`⏰ ${m.home} × ${m.away} — fecha em 10 min!`,
              tag:'bolao-'+m.id
            });
          }catch(e){}
        }
      },alertMs-now);
    }
  });
}
function updateNotifStatus(){
  const el=document.getElementById('notif-status');
  if(!el) return;
  if(!('Notification' in window)){el.textContent='⚠️ Não suportado neste browser';return;}
  const p=Notification.permission;
  if(p==='granted') el.textContent='✅ Notificações ativadas — você será avisado 10 min antes de cada jogo fechar';
  else if(p==='denied') el.textContent='❌ Permissão negada — altere nas configurações do browser';
  else el.textContent='Toque em Ativar para receber alertas antes dos jogos fecharem';
}

// ─────────────────────────────────────────────
// PERFIL
// ─────────────────────────────────────────────
function renderProfile(){
  if(!CU||CU.admin) return;
  const el=document.getElementById('profile-content');
  const sc=calcScore(CU.id);
  const rank=getRanking();
  const pos=rank.findIndex(p=>p.id===CU.id)+1;
  const d=getData();
  const medals=['🥇','🥈','🥉'];

  // Pontos por checkpoint
  const cpPts={r1:0,r2:0,r3:0,ko:0};
  const cpExact={r1:0,r2:0,r3:0,ko:0};
  ALL.forEach(m=>{
    const r=d.results[m.id];
    const pr=d.predictions[CU.id+':'+m.id];
    const pts=calcPts(pr,r);
    if(pts===null) return;
    const k=m.phase==='group'?(m.round===1?'r1':m.round===2?'r2':'r3'):'ko';
    cpPts[k]+=pts;
    if(pts===4) cpExact[k]++;
  });

  const played=ALL.filter(m=>d.results[m.id]).length;
  const accPct=played?Math.round(sc.correct/played*100):0;
  const predPct=sc.total?Math.round(sc.preds/sc.total*100):0;

  el.innerHTML=`
    <div class="card prof-header">
      <div class="prof-av-wrap" onclick="uploadProfilePhoto()" title="Trocar foto">
        ${CU.photo
          ? `<img class="prof-av-img" src="${CU.photo}" alt="foto">`
          : `<div class="prof-av">${CU.name[0].toUpperCase()}</div>`}
        <div class="prof-av-edit">✏️</div>
      </div>
      <div class="prof-name">${esc(CU.name)}</div>
      <div class="prof-sub">${medals[pos-1]||pos+'º'} lugar &nbsp;·&nbsp; ${sc.pts} pontos</div>
      <div style="font-size:11px;color:var(--muted);margin-top:6px">Toque na foto para alterar</div>
    </div>

    <div class="stats">
      <div class="stat"><div class="stat-val">${sc.pts}</div><div class="stat-lbl">Pontos</div></div>
      <div class="stat"><div class="stat-val">${sc.exact}</div><div class="stat-lbl">Exatos</div></div>
      <div class="stat"><div class="stat-val">${accPct}%</div><div class="stat-lbl">% Acerto</div></div>
    </div>

    <div class="card">
      <div class="card-title">Pontos por Rodada</div>
      <div class="prof-breakdown">
        <div class="prof-box">
          <div class="prof-box-val">${cpPts.r1}</div>
          <div class="prof-box-lbl">Rodada 1</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px">${cpExact.r1} exatos</div>
        </div>
        <div class="prof-box">
          <div class="prof-box-val">${cpPts.r2}</div>
          <div class="prof-box-lbl">Rodada 2</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px">${cpExact.r2} exatos</div>
        </div>
        <div class="prof-box">
          <div class="prof-box-val">${cpPts.r3}</div>
          <div class="prof-box-lbl">Rodada 3</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px">${cpExact.r3} exatos</div>
        </div>
        <div class="prof-box">
          <div class="prof-box-val">${cpPts.ko}</div>
          <div class="prof-box-lbl">Fase KO</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px">${cpExact.ko} exatos</div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Palpites preenchidos</div>
      <div class="prog-bar"><div class="prog-fill" style="width:${predPct}%"></div></div>
      <div class="prog-lbl">${sc.preds} de ${sc.total} (${predPct}%)</div>
    </div>

    <div class="card">
      <div class="card-title">🔔 Notificações de Jogos</div>
      <p style="font-size:12px;color:var(--muted);margin-bottom:10px">
        Receba um aviso 10 minutos antes de cada jogo fechar para palpites.
      </p>
      <button class="btn btn-b btn-sm" onclick="requestNotifications()">Ativar Notificações</button>
      <div class="notif-status" id="notif-status"></div>
    </div>
  `;
  updateNotifStatus();
}

// ─────────────────────────────────────────────
// UPLOAD DE FOTOS
// ─────────────────────────────────────────────
function uploadProfilePhoto(){
  if(!CU||CU.admin) return;
  const inp=document.createElement('input');
  inp.type='file'; inp.accept='image/*';
  inp.onchange=e=>{
    const f=e.target.files[0]; if(!f) return;
    if(f.size>1024*1024){toast('⚠️ Imagem muito grande. Máx. 1MB.');return;}
    const r=new FileReader();
    r.onload=ev=>{
      const photo=ev.target.result;
      save(d=>{
        const p=d.participants.find(p=>p.id===CU.id);
        if(p) p.photo=photo;
      });
      CU.photo=photo;
      renderProfile();
      renderWelcome();
      toast('✅ Foto atualizada! Aparece na tela inicial para todos.');
    };
    r.readAsDataURL(f);
  };
  inp.click();
}

function renderAdminCfg(){
  const d=getData();
  const prev=document.getElementById('cfg-banner-preview');
  if(prev) prev.innerHTML=d.banner
    ?`<img src="${d.banner}" style="width:100%;max-height:120px;object-fit:cover;border-radius:10px">`
    :'<div style="color:var(--muted);font-size:12px">Sem banner</div>';
}

function aUploadBanner(){
  const inp=document.createElement('input');
  inp.type='file'; inp.accept='image/*';
  inp.onchange=e=>{
    const f=e.target.files[0]; if(!f) return;
    if(f.size>1024*1024){toast('⚠️ Imagem muito grande. Máx. 1MB.');return;}
    const r=new FileReader();
    r.onload=ev=>{
      save(d=>d.banner=ev.target.result);
      renderAdminCfg();
      toast('✅ Banner atualizado!');
    };
    r.readAsDataURL(f);
  };
  inp.click();
}

function aClearBanner(){
  save(d=>d.banner=null);
  renderAdminCfg();
  toast('Banner removido.');
}

// ─────────────────────────────────────────────
// GRÁFICO DE EVOLUÇÃO
// ─────────────────────────────────────────────
function buildRankingChart(){
  const d=getData();
  const participants=d.participants;
  if(!participants.length) return '<div class="empty" style="padding:20px 0"><span class="empty-ico">📊</span>Nenhum participante ainda</div>';

  const CHECKPOINTS=[
    {label:'Início',matches:[]},
    {label:'Após R1',matches:ALL.filter(m=>m.phase==='group'&&m.round===1)},
    {label:'Após R2',matches:ALL.filter(m=>m.phase==='group'&&m.round===2)},
    {label:'Após R3',matches:ALL.filter(m=>m.phase==='group'&&m.round===3)},
    {label:'KO',matches:ALL.filter(m=>m.phase!=='group')},
  ];

  const COLORS=['#b45309','#16a34a','#3860BE','#dc2626','#7c3aed','#CF4500','#0d9488','#9d174d'];

  const series=participants.map((p,pi)=>{
    let cum=0;
    const pts=[0];
    CHECKPOINTS.slice(1).forEach(cp=>{
      cp.matches.forEach(m=>{
        const r=d.results[m.id];
        const pr=d.predictions[p.id+':'+m.id];
        const v=calcPts(pr,r);
        if(v!==null) cum+=v;
      });
      pts.push(cum);
    });
    return{name:p.name,pts,color:COLORS[pi%COLORS.length]};
  });

  const W=320,H=170,PL=32,PR=10,PT=10,PB=28;
  const cW=W-PL-PR, cH=H-PT-PB;
  const maxPts=Math.max(...series.map(s=>Math.max(...s.pts)),1);
  const xPos=i=>PL+(i/(CHECKPOINTS.length-1))*cW;
  const yPos=v=>PT+cH-(v/maxPts)*cH;

  let svg=`<svg class="chart-svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="overflow:visible">`;

  // Grid
  const gridVals=[0,.25,.5,.75,1];
  gridVals.forEach(pct=>{
    const y=PT+cH*(1-pct);
    const lbl=Math.round(maxPts*pct);
    svg+=`<line x1="${PL}" y1="${y}" x2="${W-PR}" y2="${y}" stroke="rgba(20,20,19,0.08)" stroke-width="1"/>`;
    if(lbl>0) svg+=`<text x="${PL-4}" y="${y+3.5}" font-size="7" fill="rgba(20,20,19,0.45)" text-anchor="end">${lbl}</text>`;
  });

  // X labels
  CHECKPOINTS.forEach((cp,i)=>{
    svg+=`<text x="${xPos(i)}" y="${H-6}" font-size="7.5" fill="rgba(20,20,19,0.55)" text-anchor="middle">${cp.label}</text>`;
  });

  // Lines and dots
  series.forEach(s=>{
    const pathD=s.pts.map((v,i)=>(i===0?'M':'L')+xPos(i).toFixed(1)+' '+yPos(v).toFixed(1)).join(' ');
    svg+=`<path d="${pathD}" fill="none" stroke="${s.color}" stroke-width="2.2" stroke-linejoin="round" opacity="0.88"/>`;
    s.pts.forEach((v,i)=>{
      svg+=`<circle cx="${xPos(i).toFixed(1)}" cy="${yPos(v).toFixed(1)}" r="3.5" fill="${s.color}" opacity="0.9"/>`;
    });
    // Last point label
    const lastIdx=s.pts.length-1;
    const lastY=yPos(s.pts[lastIdx]);
    svg+=`<text x="${(xPos(lastIdx)+5).toFixed(1)}" y="${(lastY+3.5).toFixed(1)}" font-size="8" fill="${s.color}" font-weight="700">${s.pts[lastIdx]}</text>`;
  });

  svg+='</svg>';

  const legend=`<div class="chart-legend">${series.map(s=>`<div class="chart-leg-item"><div class="chart-leg-dot" style="background:${s.color}"></div>${esc(s.name)}</div>`).join('')}</div>`;

  return `<div class="chart-wrap">${svg}</div>${legend}`;
}

// ─────────────────────────────────────────────
// TABELA DE GRUPOS
// ─────────────────────────────────────────────
let _selGroup='A';
function renderGroupsPage(){
  const tabsEl=document.getElementById('grp-tabs');
  tabsEl.innerHTML=GROUPS.map(g=>`<button class="grp-tab${g.id===_selGroup?' on':''}" onclick="selectGroup('${g.id}',this)">Grupo ${g.id}</button>`).join('');
  renderGroupTable(_selGroup);
}
function selectGroup(gId,btn){
  _selGroup=gId;
  document.querySelectorAll('.grp-tab').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  renderGroupTable(gId);
}
function renderGroupTable(gId){
  const el=document.getElementById('groups-content');
  const d=getData();
  const group=GROUPS.find(g=>g.id===gId);
  if(!group){el.innerHTML='';return;}

  const teams=group.t.map(name=>({name,j:0,v:0,e:0,der:0,gf:0,gc:0,pts:0}));
  const gMatches=ALL.filter(m=>m.group===gId&&m.phase==='group');
  const hasResults=gMatches.some(m=>d.results[m.id]);

  gMatches.forEach(m=>{
    const r=d.results[m.id]; if(!r) return;
    const hi=teams.findIndex(t=>t.name===m.home);
    const ai=teams.findIndex(t=>t.name===m.away);
    if(hi<0||ai<0) return;
    teams[hi].j++;teams[ai].j++;
    teams[hi].gf+=r.home;teams[hi].gc+=r.away;
    teams[ai].gf+=r.away;teams[ai].gc+=r.home;
    if(r.home>r.away){teams[hi].v++;teams[hi].pts+=3;teams[ai].der++;}
    else if(r.home<r.away){teams[ai].v++;teams[ai].pts+=3;teams[hi].der++;}
    else{teams[hi].e++;teams[hi].pts++;teams[ai].e++;teams[ai].pts++;}
  });
  teams.sort((a,b)=>b.pts-a.pts||(b.gf-b.gc)-(a.gf-a.gc)||b.gf-a.gf);

  const rows=teams.map((t,i)=>{
    const gd=t.gf-t.gc;
    const q=i<2;
    const pos=q?`<span class="g-pos-q">${i+1}</span>`:`<span class="g-pos-x">${i+1}</span>`;
    return `<tr>
      <td>${pos}</td>
      <td class="g-name">${flag(t.name)}<span>${esc(t.name)}</span></td>
      <td>${t.j}</td><td>${t.v}</td><td>${t.e}</td><td>${t.der}</td>
      <td>${t.gf}</td><td>${t.gc}</td>
      <td style="font-weight:700;color:${gd>0?'#16a34a':gd<0?'#dc2626':'var(--muted)'}">${gd>0?'+':''}${gd}</td>
      <td><strong style="color:var(--y)">${t.pts}</strong></td>
    </tr>`;
  }).join('');

  el.innerHTML=`
    ${!hasResults?`<div style="font-size:11px;color:var(--orange);text-align:center;padding:8px;margin-bottom:6px;background:rgba(246,166,35,.1);border-radius:8px">⚠️ Ainda sem resultados para o Grupo ${gId}</div>`:''}
    <table class="gtable">
      <thead><tr>
        <th>#</th><th style="text-align:left;min-width:100px">Time</th>
        <th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>Pts</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="gt-legend">
      <span class="g-pos-q">Q</span> Classificado às oitavas
    </div>
  `;
}

// ─────────────────────────────────────────────
// PRÓXIMOS JOGOS
// ─────────────────────────────────────────────
function renderNextGames(){
  const el=document.getElementById('d-next-games');
  if(!el) return;
  const now=new Date();
  const d=getData();
  const upcoming=ALL
    .filter(m=>!d.results[m.id])
    .map(m=>({m,start:new Date(`${m.date}T${m.time}:00`)}))
    .filter(x=>x.start>now)
    .sort((a,b)=>a.start-b.start)
    .slice(0,3);

  if(!upcoming.length){
    el.innerHTML='<div style="color:var(--muted);font-size:12px;text-align:center;padding:10px 0">Nenhum jogo futuro agendado</div>';
    return;
  }
  el.innerHTML=upcoming.map(({m,start})=>{
    const locked=isMatchLocked(m);
    const h=mHome(m,d),aw=mAway(m,d);
    const diffMs=start-now;
    const diffH=Math.floor(diffMs/3600000);
    const diffM=Math.floor((diffMs%3600000)/60000);
    let timeStr,cdClass;
    if(locked){timeStr='🔒 Travado';cdClass='locked';}
    else if(diffH>48){timeStr=Math.ceil(diffH/24)+'d';cdClass='open';}
    else if(diffH>0){timeStr=`${diffH}h ${diffM}m`;cdClass=diffH<2?'soon':'open';}
    else{timeStr=`${diffM}min`;cdClass='soon';}
    const phase=m.phase==='group'?'Rodada '+m.round:(PHASE_NAMES[m.phase]||m.phase);
    return `<div class="ng-row">
      <div class="ng-teams">
        <div class="ng-match">${flag(h)} ${esc(h)} <span style="color:var(--dim)">×</span> ${esc(aw)} ${flag(aw)}</div>
        <div class="ng-meta">${fmtD(m.date)} ${m.time} · ${phase}</div>
      </div>
      <div class="ng-cd ${cdClass}">${timeStr}</div>
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────────
// EXPORTAR RANKING
// ─────────────────────────────────────────────
function exportRanking(){
  const r=getRanking();
  if(!r.length){toast('Nenhum participante no ranking.');return;}
  const medals=['🥇','🥈','🥉'];
  const lines=[
    '🏆 Bolão Copa do Mundo 2026',
    '📊 Ranking — '+new Date().toLocaleDateString('pt-BR'),
    '─────────────────────────',
  ];
  r.forEach((p,i)=>{
    const m=medals[i]||(i+1)+'º';
    lines.push(`${m} ${p.name} — ${p.pts}pts (${p.exact} exatos, ${p.correct} acertos)`);
  });
  lines.push('─────────────────────────');
  lines.push('⚽ bolão feito com Bolão Copa 2026');
  const text=lines.join('\n');
  if(navigator.share){
    navigator.share({title:'Bolão Copa 2026 — Ranking',text}).catch(()=>_copyRankText(text));
  } else { _copyRankText(text); }
}
function _copyRankText(text){
  if(navigator.clipboard){
    navigator.clipboard.writeText(text).then(()=>toast('✅ Ranking copiado para a área de transferência!')).catch(()=>_copyFallback(text));
  } else { _copyFallback(text); }
}
function _copyFallback(text){
  const a=document.createElement('textarea');
  a.value=text;a.style.cssText='position:fixed;opacity:0';
  document.body.appendChild(a);a.select();
  document.execCommand('copy');
  document.body.removeChild(a);
  toast('✅ Ranking copiado!');
}

// ─────────────────────────────────────────────
// TESTE: DADOS INICIAIS (3 jogadores + palpites aleatórios)
// ─────────────────────────────────────────────
function initTestData(){
  // Versão do dataset — mude para forçar reset completo na próxima carga
  const TEST_VER='v4-12players-yanteste';
  const d=getData();
  if(d._testVer===TEST_VER) return; // já na versão correta, não faz nada

  // ── Reset completo ──
  const fresh=initData();
  fresh._testVer=TEST_VER;

  const JOGADORES_TESTE=[
    {name:'Teste Alpha',  pin:H('1111')},
    {name:'Teste Beta',   pin:H('2222')},
    {name:'Teste Gama',   pin:H('3333')},
    {name:'Teste Delta',  pin:H('4444')},
    {name:'Teste Épsilon',pin:H('5555')},
    {name:'Teste Zeta',   pin:H('6666')},
    {name:'Teste Eta',    pin:H('7777')},
    {name:'Teste Teta',   pin:H('8888')},
    {name:'Teste Iota',   pin:H('9999')},
    {name:'Teste Kappa',  pin:H('0000')},
    {name:'Teste Lambda', pin:H('1212')},
    {name:'YANTESTE',     pin:H('9192')},
  ];

  const rnd=()=>Math.floor(Math.random()*4);
  JOGADORES_TESTE.forEach(j=>{
    const p={id:uid(),...j};
    fresh.participants.push(p);
    ALL.forEach(m=>{
      fresh.predictions[p.id+':'+m.id]={home:rnd(),away:rnd()};
    });
  });

  setData(fresh);
  console.log('[TESTE] Reset completo. 12 jogadores criados. YANTESTE=9192');
}

// ─────────────────────────────────────────────
// LEITOR DE XML DE RESULTADOS
// ─────────────────────────────────────────────
/*
  Formato esperado do XML:
  <?xml version="1.0" encoding="UTF-8"?>
  <resultados copa="2026">
    <partida id="1" golsCasa="2" golsVisitante="1"/>
    <partida id="2" golsCasa="0" golsVisitante="0"/>
  </resultados>
  — id = número interno do jogo (veja no Template XML)
  — Suporta também tags filhas: <golsCasa>2</golsCasa>
*/
function importXML(){
  const inp=document.createElement('input');
  inp.type='file'; inp.accept='.xml,text/xml,application/xml';
  inp.onchange=e=>{
    const f=e.target.files[0]; if(!f) return;
    const r=new FileReader();
    r.onload=ev=>parseAndPreviewXML(ev.target.result);
    r.readAsText(f,'UTF-8');
  };
  inp.click();
}

function parseAndPreviewXML(xmlStr){
  try{
    const parser=new DOMParser();
    const doc=parser.parseFromString(xmlStr,'text/xml');
    if(doc.querySelector('parsererror')) throw new Error('XML mal formado — verifique a sintaxe');
    const partidas=[...doc.querySelectorAll('partida')];
    if(!partidas.length) throw new Error('Nenhuma tag <partida> encontrada');
    const d=getData();
    const updates=[],skipped=[];
    partidas.forEach(p=>{
      // suporta atributos (id="1") ou elementos filhos (<id>1</id>)
      const get=(attr,tag)=>p.getAttribute(attr)??p.querySelector(tag)?.textContent??'';
      const id=parseInt(get('id','id'));
      const home=parseInt(get('golsCasa','golsCasa'));
      const away=parseInt(get('golsVisitante','golsVisitante'));
      if(isNaN(id)||isNaN(home)||isNaN(away)||home<0||away<0){
        skipped.push('ID '+(isNaN(id)?'?':id)+': valores inválidos');return;
      }
      const match=getMatch(id);
      if(!match){skipped.push('ID '+id+': jogo não encontrado no sistema');return;}
      const mh=mHome(match,d),ma=mAway(match,d);
      const already=d.results[id];
      updates.push({match,home,away,homeTeam:mh,awayTeam:ma,
        alreadySaved:!!already,
        changed:!already||already.home!==home||already.away!==away});
    });
    if(!updates.length){toast('⚠️ Nenhum resultado válido encontrado no XML.');return;}
    showResultsPreview(updates,skipped);
  }catch(e){
    toast('❌ Erro ao ler XML: '+e.message,3500);
  }
}

function downloadXMLTemplate(){
  const d=getData();
  const lines=[
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<!-- Preencha golsCasa e golsVisitante para cada partida -->',
    '<resultados copa="2026">',
  ];
  ALL.forEach(m=>{
    const h=mHome(m,d),a=mAway(m,d);
    lines.push(`  <!-- [ID:${m.id}] ${h} x ${a} | ${fmtD(m.date)} ${m.time} -->`);
    lines.push(`  <partida id="${m.id}" golsCasa="" golsVisitante=""/>`);
  });
  lines.push('</resultados>');
  const blob=new Blob([lines.join('\n')],{type:'text/xml;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='copa2026_resultados_template.xml';
  a.click(); URL.revokeObjectURL(url);
  toast('✅ Template XML baixado!');
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
getData();
initTestData();
initTheme();
initPWA();
initNotifications();
initFirebase();
renderWelcome();
_lastRefreshTs=new Date();
updateTimeIndicators();
