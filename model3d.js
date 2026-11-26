/* Modelo 3D del inicio: el símbolo de Treek extruido (vectorizado del PNG original), se "imprime" de abajo hacia arriba (three.js r128) */
(function(){
const LG={"w":505.8,"h":809.8,"s":[{"o":[[-136.9,-114.9],[-138.9,-125.6],[-138.9,-180.1],[-137.9,-187.4],[-134.6,-195.9],[-130.9,-201.6],[-125.4,-207.4],[-116.6,-213.9],[-0.6,-278.1],[1.4,-277.9],[116.6,-213.9],[125.1,-207.6],[130.9,-201.6],[134.9,-195.4],[137.9,-187.4],[138.9,-179.6],[138.9,-125.9],[137.9,-118.4],[133.9,-108.6],[130.9,-104.4],[125.6,-99.1],[118.6,-94.4],[64.4,-71.6],[63.4,-71.6],[63.4,-133.9],[64.4,-134.9],[86.1,-143.9],[88.1,-145.4],[88.1,-170.6],[86.9,-172.1],[0.6,-220.4],[-1.1,-220.1],[-86.9,-172.1],[-88.1,-170.6],[-88.1,-145.4],[-86.1,-143.9],[-63.9,-134.6],[-63.4,-133.9],[-63.4,-71.6],[-66.4,-72.4],[-102.1,-87.1],[-120.4,-95.4],[-125.6,-99.1],[-130.9,-104.4],[-134.6,-109.9]],"h":[]},{"o":[[-63.9,44.6],[-180.1,-2.1],[-197.4,-10.1],[-210.9,-18.4],[-222.4,-27.4],[-228.9,-33.6],[-237.6,-44.4],[-243.9,-54.6],[-248.9,-66.6],[-251.9,-78.6],[-252.9,-86.6],[-252.9,-193.1],[-251.9,-202.9],[-248.9,-218.1],[-245.9,-227.9],[-240.9,-240.1],[-233.9,-252.9],[-228.9,-260.4],[-219.9,-271.6],[-209.9,-281.9],[-197.4,-292.6],[-179.6,-304.9],[0.4,-404.9],[178.4,-305.6],[194.4,-294.9],[204.4,-286.9],[216.9,-274.9],[225.9,-264.4],[234.6,-251.6],[242.6,-236.1],[245.9,-227.9],[248.9,-217.9],[251.9,-202.6],[252.9,-192.9],[252.9,-86.6],[251.9,-78.6],[249.9,-69.9],[246.6,-60.6],[242.9,-52.9],[237.6,-44.4],[227.4,-32.1],[217.4,-23.1],[209.1,-17.1],[197.4,-10.1],[183.1,-3.4],[66.1,43.9],[63.4,44.4],[63.6,-14.9],[164.4,-55.9],[172.6,-60.1],[181.1,-65.9],[186.4,-70.9],[190.9,-77.1],[193.1,-81.9],[195.1,-90.6],[195.1,-190.4],[194.1,-197.6],[190.1,-211.9],[186.9,-218.9],[181.9,-227.1],[174.1,-236.6],[166.4,-244.1],[160.1,-249.1],[151.4,-255.1],[-0.1,-340.1],[-143.4,-259.9],[-160.1,-249.1],[-166.4,-244.1],[-174.1,-236.6],[-181.9,-227.1],[-185.1,-222.1],[-190.1,-211.9],[-194.1,-197.6],[-195.1,-190.4],[-195.1,-90.6],[-193.1,-81.9],[-190.9,-77.1],[-186.1,-70.6],[-181.1,-65.9],[-172.6,-60.1],[-164.4,-55.9],[-63.6,-14.9],[-63.4,44.4]],"h":[]},{"o":[[238.6,195.9],[220.9,194.9],[206.4,192.9],[187.4,188.9],[177.1,185.9],[165.6,181.9],[148.9,174.6],[132.6,165.9],[114.6,153.9],[99.6,141.9],[89.9,132.4],[105.6,97.9],[123.9,101.1],[146.9,108.4],[164.4,116.4],[183.6,128.4],[199.1,141.1],[215.6,158.9],[228.6,177.1],[234.9,187.9]],"h":[]},{"o":[[-238.6,195.9],[-234.9,187.9],[-227.9,175.9],[-214.6,157.6],[-200.1,142.1],[-184.6,129.1],[-166.1,117.4],[-157.9,113.1],[-143.6,107.1],[-131.4,103.1],[-119.4,100.1],[-105.6,97.9],[-90.1,131.6],[-90.1,133.1],[-99.6,141.9],[-114.6,153.9],[-125.9,161.6],[-139.6,169.9],[-155.9,177.9],[-171.1,183.9],[-186.6,188.6],[-205.9,192.9],[-220.9,194.9]],"h":[]},{"o":[[143.9,272.6],[0.1,132.9],[-143.9,272.6],[-143.9,203.1],[-26.1,86.6],[-26.1,-115.9],[-25.1,-115.9],[-15.1,-107.6],[-5.1,-97.6],[4.9,-85.1],[9.9,-77.4],[15.9,-65.9],[18.9,-58.6],[22.6,-46.6],[24.9,-35.6],[26.1,-22.4],[26.1,86.6],[143.6,202.6]],"h":[]},{"o":[[-0.4,404.9],[-52.6,354.1],[-52.6,277.1],[-0.4,226.4],[0.4,226.4],[52.6,277.1],[52.6,354.1],[0.4,404.9]],"h":[]}]};
const box=document.getElementById('m3');if(!box)return;
const fallback=()=>{box.innerHTML='<img src="assets/simbolo.png" alt="Símbolo de Treek" style="height:80%;width:auto;margin:auto;display:block;position:relative;top:10%">'};
const sc=document.createElement('script');
sc.src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
sc.onerror=fallback;sc.onload=()=>{try{init()}catch(e){fallback()}};document.head.appendChild(sc);
function init(){
const T=THREE,still=matchMedia('(prefers-reduced-motion:reduce)').matches;
const R=new T.WebGLRenderer({antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio||1,2));R.localClippingEnabled=true;
const S=new T.Scene(),C=new T.PerspectiveCamera(34,1,.1,50);C.position.set(0,1.8,6.4);C.lookAt(0,1.35,0);
S.add(new T.AmbientLight(0xffffff,.62));
const dl=new T.DirectionalLight(0xffffff,.85);dl.position.set(3,5,4);S.add(dl);
const pl=new T.PointLight(0xc4a5ff,.9,24);pl.position.set(-4,2,-3);S.add(pl);
const G=new T.Group();S.add(G);
const HG=2.5,DEP=90,plane=new T.Plane(new T.Vector3(0,-1,0),0);
const face=new T.MeshStandardMaterial({color:0x8b35f5,roughness:.38,metalness:.08,side:T.DoubleSide,clippingPlanes:[plane]});
const edge=new T.MeshStandardMaterial({color:0x5b21b6,roughness:.45,metalness:.1,side:T.DoubleSide,clippingPlanes:[plane]});
const L=new T.Group(),v=p=>new T.Vector2(p[0],p[1]);
LG.s.forEach(s=>{const sh=new T.Shape(s.o.map(v));s.h.forEach(h=>sh.holes.push(new T.Path(h.map(v))));
const g=new T.ExtrudeGeometry(sh,{depth:DEP,bevelEnabled:true,bevelSize:5,bevelThickness:5,bevelSegments:2,curveSegments:1});g.translate(0,0,-DEP/2);L.add(new T.Mesh(g,[face,edge]))});
L.scale.setScalar(HG/LG.h);L.position.y=HG/2+.12;G.add(L);
const bed=new T.Mesh(new T.CylinderGeometry(1.35,1.35,.08,64),new T.MeshStandardMaterial({color:0x1a1824,roughness:.7}));bed.position.y=-.04;G.add(bed);
const ring=new T.Mesh(new T.RingGeometry(.86,.9,64),new T.MeshBasicMaterial({color:0xc4a5ff,side:T.DoubleSide}));ring.rotation.x=-Math.PI/2;S.add(ring);
G.rotation.y=-.5;
const sk=box.querySelector('.sk');if(sk)sk.remove();box.appendChild(R.domElement);R.domElement.setAttribute('aria-hidden','true');
function size(){const w=box.clientWidth,h=box.clientHeight;if(!w||!h)return;R.setSize(w,h,false);C.aspect=w/h;C.position.z=w/h<.95?7.8:6.4;C.updateProjectionMatrix()}
new ResizeObserver(()=>{size();draw(performance.now())}).observe(box);size();
let drag=false,lx=0,on=true;const t0=performance.now(),BUILD=4200;
box.addEventListener('pointerdown',e=>{drag=true;lx=e.clientX;box.setPointerCapture(e.pointerId)});
box.addEventListener('pointermove',e=>{if(!drag)return;G.rotation.y+=(e.clientX-lx)*.01;lx=e.clientX;if(still)draw()});
['pointerup','pointercancel'].forEach(ev=>box.addEventListener(ev,()=>drag=false));
new IntersectionObserver(es=>{on=es[0].isIntersecting;if(on&&!still)loop()}).observe(box);
function draw(now){
let k=1;if(!still){k=Math.min(1,((now||performance.now())-t0)/BUILD);if(!drag)G.rotation.y+=.006}
const c=-.05+(1-Math.pow(1-k,3))*(HG+.4);plane.constant=k>=1?99:c;ring.visible=k<1;ring.position.y=c;
R.render(S,C)}
function loop(){if(!on||document.hidden)return;draw(performance.now());requestAnimationFrame(loop)}
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&on&&!still)loop()});
if(still)draw();else loop()}
})();
