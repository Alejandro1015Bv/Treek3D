/* Modelo 3D del inicio: jarrón hexagonal retorcido que se imprime capa por capa (three.js r128) */
(function(){
const box=document.getElementById('m3');if(!box)return;
const fallback=()=>{box.innerHTML='<img src="assets/simbolo.png" alt="Símbolo de Treek" style="height:80%;width:auto;margin:auto;display:block;position:relative;top:10%">'};
const sc=document.createElement('script');
sc.src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
sc.onerror=fallback;sc.onload=()=>{try{init()}catch(e){fallback()}};document.head.appendChild(sc);
function init(){
const T=THREE,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
const R=new T.WebGLRenderer({antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio||1,2));
const S=new T.Scene(),C=new T.PerspectiveCamera(34,1,.1,50);C.position.set(0,1.9,6.4);C.lookAt(0,1.05,0);
S.add(new T.AmbientLight(0xffffff,.6));
const dl=new T.DirectionalLight(0xffffff,.9);dl.position.set(3,5,4);S.add(dl);
const pl=new T.PointLight(0xc4a5ff,.9,24);pl.position.set(-4,2,-3);S.add(pl);
const G=new T.Group();S.add(G);
const N=84,H=2.3,hl=H/N;
const mat=new T.MeshStandardMaterial({color:0xffffff,roughness:.4,metalness:.1});
const V=new T.InstancedMesh(new T.CylinderGeometry(1,1,1,6,1),mat,N);
const m=new T.Matrix4(),q=new T.Quaternion(),ax=new T.Vector3(0,1,0),sv=new T.Vector3(),pv=new T.Vector3(),col=new T.Color(),rads=[];
for(let i=0;i<N;i++){const t=i/(N-1),r=.55+.36*Math.sin(Math.PI*Math.pow(t,.8))+.05*Math.sin(t*Math.PI*8);rads.push(r);
q.setFromAxisAngle(ax,t*1.6);sv.set(r,hl*1.18,r);pv.set(0,i*hl+hl/2,0);m.compose(pv,q,sv);V.setMatrixAt(i,m);
col.set(0x8b35f5).offsetHSL(0,0,i%2?.035:-.015);V.setColorAt(i,col)}
G.add(V);
const bed=new T.Mesh(new T.CylinderGeometry(1.55,1.55,.08,64),new T.MeshStandardMaterial({color:0x1a1824,roughness:.7}));bed.position.y=-.04;G.add(bed);
const nz=new T.Group(),nm=new T.MeshStandardMaterial({color:0xc4a5ff,roughness:.3,metalness:.4});
const cone=new T.Mesh(new T.CylinderGeometry(.15,.03,.3,20),nm);cone.position.y=.15;
const blk=new T.Mesh(new T.BoxGeometry(.34,.26,.34),new T.MeshStandardMaterial({color:0x5b21b6,roughness:.5}));blk.position.y=.43;
nz.add(cone,blk);G.add(nz);
G.rotation.x=.08;
const sk=box.querySelector('.sk');if(sk)sk.remove();box.appendChild(R.domElement);R.domElement.setAttribute('aria-hidden','true');
function size(){const w=box.clientWidth,h=box.clientHeight;if(!w||!h)return;R.setSize(w,h,false);C.aspect=w/h;C.position.z=w/h<.95?7.6:6.4;C.updateProjectionMatrix()}
new ResizeObserver(()=>{size();draw(performance.now())}).observe(box);size();
let drag=false,lx=0,on=true,a=0;const t0=performance.now(),BUILD=5200,HOLD=4800;
box.addEventListener('pointerdown',e=>{drag=true;lx=e.clientX;box.setPointerCapture(e.pointerId)});
box.addEventListener('pointermove',e=>{if(!drag)return;G.rotation.y+=(e.clientX-lx)*.01;lx=e.clientX;if(still)draw()});
['pointerup','pointercancel'].forEach(ev=>box.addEventListener(ev,()=>drag=false));
new IntersectionObserver(es=>{on=es[0].isIntersecting;if(on&&!still)loop()}).observe(box);
function draw(now){
let n=N;
if(!still){const t=((now||performance.now())-t0)%(BUILD+HOLD);if(t<BUILD){const k=t/BUILD;n=Math.max(1,Math.floor(N*(k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2)))}
if(!drag)G.rotation.y+=.0045}
V.count=n;V.instanceMatrix.needsUpdate=true;
nz.visible=!still&&n<N;
if(nz.visible){a+=.35;const r=rads[n-1]*.92;nz.position.set(r*Math.cos(a),n*hl,r*Math.sin(a))}
R.render(S,C)}
function loop(){if(!on||document.hidden)return;draw(performance.now());requestAnimationFrame(loop)}
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&on&&!still)loop()});
if(still)draw();else loop()}
})();
