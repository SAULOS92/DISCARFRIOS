"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7324:(O,_,r)=>{r.d(_,{c:()=>s});var h=r(661),a=r(7864),g=r(1898);const s=(i,n)=>{let t,e;const o=(l,f,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(l,f);E&&n(E)?E!==t&&(u(),c(E,p)):u()},c=(l,f)=>{t=l,e||(e=t);const p=t;(0,h.w)(()=>p.classList.add("ion-activated")),f()},u=(l=!1)=>{if(!t)return;const f=t;(0,h.w)(()=>f.classList.remove("ion-activated")),l&&e!==t&&t.click(),t=void 0};return(0,g.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>o(l.currentX,l.currentY,a.a),onMove:l=>o(l.currentX,l.currentY,a.b),onEnd:()=>{u(!0),(0,a.h)(),e=void 0}})}},2225:(O,_,r)=>{r.d(_,{g:()=>h});const h=(n,t,e,o,c)=>g(n[1],t[1],e[1],o[1],c).map(u=>a(n[0],t[0],e[0],o[0],u)),a=(n,t,e,o,c)=>c*(3*t*Math.pow(c-1,2)+c*(-3*e*c+3*e+o*c))-n*Math.pow(c-1,3),g=(n,t,e,o,c)=>i((o-=c)-3*(e-=c)+3*(t-=c)-(n-=c),3*e-6*t+3*n,3*t-3*n,n).filter(l=>l>=0&&l<=1),i=(n,t,e,o)=>{if(0===n)return((n,t,e)=>{const o=t*t-4*n*e;return o<0?[]:[(-t+Math.sqrt(o))/(2*n),(-t-Math.sqrt(o))/(2*n)]})(t,e,o);const c=(3*(e/=n)-(t/=n)*t)/3,u=(2*t*t*t-9*t*e+27*(o/=n))/27;if(0===c)return[Math.pow(-u,1/3)];if(0===u)return[Math.sqrt(-c),-Math.sqrt(-c)];const l=Math.pow(u/2,2)+Math.pow(c/3,3);if(0===l)return[Math.pow(u/2,.5)-t/3];if(l>0)return[Math.pow(-u/2+Math.sqrt(l),1/3)-Math.pow(u/2+Math.sqrt(l),1/3)-t/3];const f=Math.sqrt(Math.pow(-c/3,3)),p=Math.acos(-u/(2*Math.sqrt(Math.pow(-c/3,3)))),E=2*Math.pow(f,1/3);return[E*Math.cos(p/3)-t/3,E*Math.cos((p+2*Math.PI)/3)-t/3,E*Math.cos((p+4*Math.PI)/3)-t/3]}},5062:(O,_,r)=>{r.d(_,{i:()=>h});const h=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5321:(O,_,r)=>{r.r(_),r.d(_,{startFocusVisible:()=>s});const h="ion-focused",g=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=i=>{let n=[],t=!0;const e=i?i.shadowRoot:document,o=i||document.body,c=y=>{n.forEach(v=>v.classList.remove(h)),y.forEach(v=>v.classList.add(h)),n=y},u=()=>{t=!1,c([])},l=y=>{t=g.includes(y.key),t||c([])},f=y=>{if(t&&void 0!==y.composedPath){const v=y.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));c(v)}},p=()=>{e.activeElement===o&&c([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",f),e.addEventListener("focusout",p),e.addEventListener("touchstart",u,{passive:!0}),e.addEventListener("mousedown",u),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",f),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",u),e.removeEventListener("mousedown",u)},setFocus:c}}},6555:(O,_,r)=>{r.d(_,{c:()=>a});var h=r(6655);const a=n=>{const t=n;let e;return{hasLegacyControl:()=>{if(void 0===e){const c=void 0!==t.label||g(t),u=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,l=(0,h.h)(t);e=!0===t.legacy||!c&&!u&&null!==l}return e}}},g=n=>null!==n.shadowRoot&&!!(s.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||i.includes(n.tagName)&&""!==n.textContent),s=["ION-RANGE"],i=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(O,_,r)=>{r.d(_,{a:()=>s,b:()=>i,c:()=>g,d:()=>t,h:()=>n});const h={getEngine(){var e;const o=window;return o.TapticEngine||(null===(e=o.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&o.Capacitor.Plugins.Haptics},available(){var e;const o=window;return!!this.getEngine()&&("web"!==(null===(e=o.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const o=this.getEngine();if(!o)return;const c=this.isCapacitor()?e.style.toUpperCase():e.style;o.impact({style:c})},notification(e){const o=this.getEngine();if(!o)return;const c=this.isCapacitor()?e.style.toUpperCase():e.style;o.notification({style:c})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},a=()=>h.available(),g=()=>{a()&&h.selection()},s=()=>{a()&&h.selectionStart()},i=()=>{a()&&h.selectionChanged()},n=()=>{a()&&h.selectionEnd()},t=e=>{a()&&h.impact(e)}},7366:(O,_,r)=>{r.d(_,{a:()=>h,b:()=>f,c:()=>t,d:()=>p,e:()=>D,f:()=>n,g:()=>E,h:()=>g,i:()=>a,j:()=>M,k:()=>d,l:()=>e,m:()=>u,n:()=>y,o:()=>c,p:()=>i,q:()=>s,r:()=>m,s:()=>C,t:()=>l,u:()=>v,v:()=>w,w:()=>o});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4862:(O,_,r)=>{r.d(_,{I:()=>n,a:()=>c,b:()=>i,c:()=>f,d:()=>E,f:()=>u,g:()=>o,i:()=>e,p:()=>p,r:()=>y,s:()=>l});var h=r(5861),a=r(6655),g=r(1178);const i="ion-content",n=".ion-content-scroll-host",t=`${i}, ${n}`,e=v=>"ION-CONTENT"===v.tagName,o=function(){var v=(0,h.Z)(function*(w){return e(w)?(yield new Promise(m=>(0,a.c)(w,m)),w.getScrollElement()):w});return function(m){return v.apply(this,arguments)}}(),c=v=>v.querySelector(n)||v.querySelector(t),u=v=>v.closest(t),l=(v,w)=>e(v)?v.scrollToTop(w):Promise.resolve(v.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),f=(v,w,m,M)=>e(v)?v.scrollByPoint(w,m,M):Promise.resolve(v.scrollBy({top:m,left:w,behavior:M>0?"smooth":"auto"})),p=v=>(0,g.b)(v,i),E=v=>{if(e(v)){const m=v.scrollY;return v.scrollY=!1,m}return v.style.setProperty("overflow","hidden"),!0},y=(v,w)=>{e(v)?v.scrollY=w:v.style.removeProperty("overflow")}},9240:(O,_,r)=>{r.d(_,{g:()=>a});var h=r(1178);const a=(s,i,n)=>{const t=null==s?0:s.toString().length,e=g(t,i);if(void 0===n)return e;try{return n(t,i)}catch(o){return(0,h.a)("Exception in provided `counterFormatter`.",o),e}},g=(s,i)=>`${s} / ${i}`},5699:(O,_,r)=>{r.r(_),r.d(_,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>g,copyVisualViewport:()=>M,keyboardDidClose:()=>y,keyboardDidOpen:()=>p,keyboardDidResize:()=>E,resetKeyboardAssist:()=>o,setKeyboardClose:()=>f,setKeyboardOpen:()=>l,startKeyboardAssist:()=>c,trackViewportChanges:()=>m});var h=r(4963);r(4110);const g="ionKeyboardDidShow",s="ionKeyboardDidHide";let n={},t={},e=!1;const o=()=>{n={},t={},e=!1},c=d=>{if(void 0!==h.K.getEngine())u(d);else{if(!d.visualViewport)return;t=M(d.visualViewport),d.visualViewport.onresize=()=>{m(d),p()||E(d)?l(d):y(d)&&f(d)}}},u=d=>{d.addEventListener("keyboardDidShow",C=>l(d,C)),d.addEventListener("keyboardDidHide",()=>f(d))},l=(d,C)=>{v(d,C),e=!0},f=d=>{w(d),e=!1},p=()=>!e&&n.width===t.width&&(n.height-t.height)*t.scale>150,E=d=>e&&!y(d),y=d=>e&&t.height===d.innerHeight,v=(d,C)=>{const L=new CustomEvent(g,{detail:{keyboardHeight:C?C.keyboardHeight:d.innerHeight-t.height}});d.dispatchEvent(L)},w=d=>{const C=new CustomEvent(s);d.dispatchEvent(C)},m=d=>{n=Object.assign({},t),t=M(d.visualViewport)},M=d=>({width:Math.round(d.width),height:Math.round(d.height),offsetTop:d.offsetTop,offsetLeft:d.offsetLeft,pageTop:d.pageTop,pageLeft:d.pageLeft,scale:d.scale})},4963:(O,_,r)=>{r.d(_,{K:()=>g,a:()=>a});var h=r(4110),a=(()=>((a=a||{}).Body="body",a.Ionic="ionic",a.Native="native",a.None="none",a))();const g={getEngine(){var s;return(null===(s=null==h.w?void 0:h.w.Capacitor)||void 0===s?void 0:s.isPluginAvailable("Keyboard"))&&(null==h.w?void 0:h.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(i=>{if("UNIMPLEMENTED"!==i.code)throw i}):Promise.resolve(void 0)}}},2952:(O,_,r)=>{r.d(_,{c:()=>n});var h=r(5861),a=r(4110),g=r(4963);const s=t=>{if(void 0===a.d||t===g.a.None||void 0===t)return null;const e=a.d.querySelector("ion-app");return null!=e?e:a.d.body},i=t=>{const e=s(t);return null===e?0:e.clientHeight},n=function(){var t=(0,h.Z)(function*(e){let o,c,u,l;const f=function(){var w=(0,h.Z)(function*(){const m=yield g.K.getResizeMode(),M=void 0===m?void 0:m.mode;o=()=>{void 0===l&&(l=i(M)),u=!0,p(u,M)},c=()=>{u=!1,p(u,M)},null==a.w||a.w.addEventListener("keyboardWillShow",o),null==a.w||a.w.addEventListener("keyboardWillHide",c)});return function(){return w.apply(this,arguments)}}(),p=(w,m)=>{e&&e(w,E(m))},E=w=>{if(0===l||l===i(w))return;const m=s(w);return null!==m?new Promise(M=>{const C=new ResizeObserver(()=>{m.clientHeight===l&&(C.disconnect(),M())});C.observe(m)}):void 0};return yield f(),{init:f,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",o),null==a.w||a.w.removeEventListener("keyboardWillHide",c),o=c=void 0},isKeyboardVisible:()=>u}});return function(o){return t.apply(this,arguments)}}()},6690:(O,_,r)=>{r.d(_,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(g,s,i)=>{const n=g*s/i-g+"ms",t=2*Math.PI*s/i;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(g,s,i)=>{const n=s/i,t=g*n-g+"ms",e=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(g,s)=>({r:6,style:{left:32-32*s+"%","animation-delay":-110*s+"ms"}})},lines:{dur:1e3,lines:8,fn:(g,s,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*s+(s<i/2?180:-180)}deg)`,"animation-delay":g*s/i-g+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(g,s,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*s+(s<i/2?180:-180)}deg)`,"animation-delay":g*s/i-g+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(g,s,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":g*s/i-g+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(g,s,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":g*s/i-g+"ms"}})}}},4805:(O,_,r)=>{r.r(_),r.d(_,{createSwipeBackGesture:()=>i});var h=r(6655),a=r(5062),g=r(1898);r(4349);const i=(n,t,e,o,c)=>{const u=n.ownerDocument.defaultView;let l=(0,a.i)(n);const p=m=>l?-m.deltaX:m.deltaX;return(0,g.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:m=>(l=(0,a.i)(n),(m=>{const{startX:d}=m;return l?d>=u.innerWidth-50:d<=50})(m)&&t()),onStart:e,onMove:m=>{const d=p(m)/u.innerWidth;o(d)},onEnd:m=>{const M=p(m),d=u.innerWidth,C=M/d,D=(m=>l?-m.velocityX:m.velocityX)(m),b=D>=0&&(D>.2||M>d/2),P=(b?1-C:C)*d;let S=0;if(P>5){const A=P/Math.abs(D);S=Math.min(A,540)}c(b,C<=0?.01:(0,h.l)(0,C,.9999),S)}})}},9467:(O,_,r)=>{r.d(_,{w:()=>h});const h=(s,i,n)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{n(a(e,i))});return t.observe(s,{childList:!0,subtree:!0}),t},a=(s,i)=>{let n;return s.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)n=g(t.addedNodes[e],i)||n}),n},g=(s,i)=>1!==s.nodeType?void 0:(s.tagName===i.toUpperCase()?[s]:Array.from(s.querySelectorAll(i))).find(t=>t.value===s.value)},7735:(O,_,r)=>{r.d(_,{q:()=>n});var h=r(5698),a=r(3900),g=r(4004),s=r(2223),i=r(7407);let n=(()=>{class t{constructor(o){this.bd=o,this.itemsCollection=o.collection("Rutero")}create(o){return this.itemsCollection.doc(o.codigo).set(o)}cargaMasiva(o){const u=[];for(let f=0;f<o.length;f+=500)u.push(o.slice(f,f+500));const l=u.map(f=>new Promise((p,E)=>{const y=this.bd.firestore.batch();f.forEach(v=>{y.set(this.itemsCollection.doc(v.Codigo).ref,v)}),y.commit().then(()=>{p("Carga masiva completada")}).catch(v=>{E(v)})}));return Promise.all(l)}getRutero(o){return this.bd.collection("Rutero",c=>c.where("VD","==",o+" ").orderBy("Dias","desc")).valueChanges()}eliminarDocumentos(){return new Promise((o,c)=>{this.itemsCollection.snapshotChanges().pipe((0,h.q)(1),(0,a.w)(u=>{const l=this.chunkArray(u,500),f=[];return l.forEach(p=>{const E=this.bd.firestore.batch();p.forEach(y=>{E.delete(y.payload.doc.ref)}),f.push(E.commit())}),Promise.all(f)})).toPromise().then(()=>{o()}).catch(u=>{c(u)})})}chunkArray(o,c){const u=[];for(let l=0;l<o.length;l+=c)u.push(o.slice(l,l+c));return u}update(o){return this.itemsCollection.doc(o.codigo).update(o)}getRuteroCompleto(){return this.itemsCollection.snapshotChanges().pipe((0,g.U)(o=>o.map(c=>c.payload.doc.data())))}}return t.\u0275fac=function(o){return new(o||t)(s.LFG(i.ST))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},9044:(O,_,r)=>{r.d(_,{f:()=>i});var h=r(2223),a=r(7407),g=r(1205),s=r(7957);let i=(()=>{class n{constructor(e,o,c,u){this.afStore=e,this.ngFireAuth=o,this.router=c,this.ngZone=u,this.ngFireAuth.authState.subscribe(f=>{f?localStorage.setItem("user",JSON.stringify(f)):localStorage.setItem("user","null")})}SignIn(e,o){return this.ngFireAuth.signInWithEmailAndPassword(e,o)}RegisterUser(e,o){return this.ngFireAuth.createUserWithEmailAndPassword(e,o)}SendVerificationMail(){return this.ngFireAuth.currentUser.then(e=>e.sendEmailVerification().then(()=>{}))}PasswordRecover(e){return this.ngFireAuth.sendPasswordResetEmail(e).then(()=>{window.alert("Password reset email has been sent, please check your inbox.")}).catch(o=>{window.alert(o)})}get isLoggedIn(){const e=JSON.parse(localStorage.getItem("user")||"{}");return null!==e&&!1!==e.emailVerified}get isEmailVerified(){return!1!==JSON.parse(localStorage.getItem("user")||"{}").emailVerified}}return n.\u0275fac=function(e){return new(e||n)(h.LFG(a.ST),h.LFG(g.zQ),h.LFG(s.F0),h.LFG(h.R0b))},n.\u0275prov=h.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);