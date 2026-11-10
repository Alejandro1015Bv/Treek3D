/* Treek · núcleo compartido (datos, utilidades, cabecera y pie) */
const $=s=>document.querySelector(s),KEY='treek3d';
const PH=()=>'data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#8b35f5" opacity=".12"/><g fill="none" stroke="#8b35f5" opacity=".55" stroke-width="8" stroke-linejoin="round"><path d="M200 90l70 40v80l-70 40-70-40v-80z"/><path d="M200 170l70-40M200 170v80M200 170l-70-40"/></g></svg>');
/* ===== Capa de datos: Supabase. Lectura pública por REST con la clave publicable (segura por diseño; la protección real son las políticas RLS). ===== */
const SB={url:'https://vemusvslurzojwjgorhn.supabase.co',key:'sb_publishable_jsbbiLrtqHy45UpDdVvaXw_GwkY54o5'};
let S={cfg:{wa:'59170847407',cur:'Bs'},items:[],err:false};
try{const c=JSON.parse(localStorage.getItem('treek-cfg'));if(c&&c.wa)S.cfg=c}catch(e){}
const rowToItem=r=>({id:r.id,n:r.nombre,p:+r.precio,m:r.material,c:r.categoria,d:r.descripcion,i:r.imagen_url||''});
async function api(path){const r=await fetch(SB.url+'/rest/v1/'+path,{headers:{apikey:SB.key}});if(!r.ok)throw new Error('HTTP '+r.status);return r.json()}
async function loadData(){S.err=false;try{const[p,a]=await Promise.all([api('productos?select=*&order=creado_en.desc'),api('ajustes?select=whatsapp,moneda&id=eq.1')]);
S.items=p.map(rowToItem);if(a[0]){S.cfg={wa:a[0].whatsapp||S.cfg.wa,cur:a[0].moneda||'Bs'};try{localStorage.setItem('treek-cfg',JSON.stringify(S.cfg))}catch(e){}}}catch(e){S.err=true}return S}
const DATA=loadData();
/* ===== Utilidades ===== */
const cur=()=>S.cfg.cur||'Bs',fm=n=>cur()+' '+(+n||0).toLocaleString('es-BO',{minimumFractionDigits:2,maximumFractionDigits:2});
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let tt;function toast(m,e){const t=$('#toast');t.textContent=m;t.className='on'+(e?' err':'');clearTimeout(tt);tt=setTimeout(()=>t.className='',2800)}
function wa(txt){const n=(S.cfg.wa||'').replace(/\D/g,'');if(!n){toast('El WhatsApp aún no está configurado','err');return}
window.open('https://wa.me/'+n+'?text='+encodeURIComponent(txt),'_blank','noopener')}
const card=i=>`<article class="card pc"><img src="${i.i||PH()}" alt="${esc(i.n)}${i.i?'':' (imagen de referencia)'}" loading="lazy"><div class="b"><span class="chip">${esc(i.m)}</span><h3>${esc(i.n)}</h3><p class="mu">${esc(i.d)}</p><span class="pr">${fm(i.p)}</span></div><button class="btn s" data-q="${i.id}" aria-label="Cotizar ${esc(i.n)}">Cotizar</button></article>`;
const skel=(el,n=4)=>{el.setAttribute('aria-busy','true');el.innerHTML=Array(n).fill('<div class="card pc" aria-hidden="true"><div class="sk" style="aspect-ratio:4/3;border-radius:0"></div><div class="b"><div class="sk" style="height:16px;width:70%"></div><div class="sk" style="height:12px;width:40%"></div><div class="sk" style="height:18px;width:30%"></div></div></div>').join('')};
const errBox=(el,retry)=>{el.setAttribute('aria-busy','false');el.innerHTML='<div class="empty"><b>No pudimos cargar los datos</b>Revisa tu conexión e inténtalo de nuevo.<br><button class="btn s" id="rt" style="margin-top:12px">Reintentar</button></div>';$('#rt').onclick=retry};
function withData(el,render,again){skel(el);(again?loadData():DATA).then(()=>{el.setAttribute('aria-busy','false');if(S.err)errBox(el,()=>withData(el,render,true));else render()})}
function bindQ(el){el.onclick=e=>{const b=e.target.closest('[data-q]');if(!b)return;const i=S.items.find(x=>x.id==b.dataset.q);wa(`Hola Treek, me interesa: ${i.n} (${i.m}) - ${fm(i.p)}. ¿Está disponible?`)}}
/* ===== Cabecera, navegación y pie ===== */
const NAV=[['index.html','Inicio','home'],['calculadora.html','Calculadora','calc'],['catalogo.html','Catálogo','cat'],['cotizar.html','Cotizar','quote']];
function shell(a){const adm=a==='admin';
document.body.insertAdjacentHTML('afterbegin',`<header><div class="w"><a class="brand" href="index.html" aria-label="Treek, inicio"><img class="lt" src="assets/logo-h.png" alt="Treek" width="83" height="34"><img class="dk" src="assets/logo-hw.png" alt="" width="83" height="34"></a>${adm?'':'<nav aria-label="Principal">'+NAV.map(n=>`<a href="${n[0]}"${n[2]===a?' class="on" aria-current="page"':''}>${n[1]}</a>`).join('')+'</nav>'}<span class="sp"></span>${adm?'<a class="btn g s" href="index.html">Ver sitio</a>':''}<button class="btn g s" id="th" aria-label="Cambiar modo oscuro" aria-pressed="false">Tema</button></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer class="mu"><img class="lt" src="assets/simbolo.png" alt="" width="23" height="36"><img class="dk" src="assets/simbolo-w.png" alt="" width="23" height="36"><span>© ${new Date().getFullYear()} Treek · Diseño, modelado e impresión 3D</span></footer><div id="toast" role="status"></div>`);
if(adm)document.body.classList.add('noav');
let dark=document.documentElement.dataset.t==='dark';
const setT=()=>{document.documentElement.dataset.t=dark?'dark':'light';$('#th').setAttribute('aria-pressed',dark);$('#th').textContent=dark?'Claro':'Oscuro';try{localStorage.setItem('t3d-th',dark?'d':'l')}catch(e){}};
$('#th').onclick=()=>{dark=!dark;setT()};setT()}
