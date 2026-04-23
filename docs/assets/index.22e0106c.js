const oi=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};oi();function qn(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ai="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",li=qn(ai);function Qs(e){return!!e||e===""}function Bt(e){if(k(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=oe(s)?fi(s):Bt(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(oe(e))return e;if(ee(e))return e}}const ci=/;(?![^(]*\))/g,ui=/:(.+)/;function fi(e){const t={};return e.split(ci).forEach(n=>{if(n){const s=n.split(ui);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function fe(e){let t="";if(oe(e))t=e;else if(k(e))for(let n=0;n<e.length;n++){const s=fe(e[n]);s&&(t+=s+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const X=e=>oe(e)?e:e==null?"":k(e)||ee(e)&&(e.toString===sr||!O(e.toString))?JSON.stringify(e,er,2):String(e),er=(e,t)=>t&&t.__v_isRef?er(e,t.value):Tt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:tr(t)?{[`Set(${t.size})`]:[...t.values()]}:ee(t)&&!k(t)&&!rr(t)?String(t):t,q={},vt=[],De=()=>{},di=()=>!1,hi=/^on[^a-z]/,sn=e=>hi.test(e),zn=e=>e.startsWith("onUpdate:"),le=Object.assign,Vn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},pi=Object.prototype.hasOwnProperty,B=(e,t)=>pi.call(e,t),k=Array.isArray,Tt=e=>rn(e)==="[object Map]",tr=e=>rn(e)==="[object Set]",O=e=>typeof e=="function",oe=e=>typeof e=="string",Gn=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",nr=e=>ee(e)&&O(e.then)&&O(e.catch),sr=Object.prototype.toString,rn=e=>sr.call(e),mi=e=>rn(e).slice(8,-1),rr=e=>rn(e)==="[object Object]",jn=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qt=qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),on=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},gi=/-(\w)/g,Oe=on(e=>e.replace(gi,(t,n)=>n?n.toUpperCase():"")),vi=/\B([A-Z])/g,At=on(e=>e.replace(vi,"-$1").toLowerCase()),an=on(e=>e.charAt(0).toUpperCase()+e.slice(1)),yn=on(e=>e?`on${an(e)}`:""),Jt=(e,t)=>!Object.is(e,t),zt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Yt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Xt=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ps;const Ti=()=>ps||(ps=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let xe;class yi{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&xe&&(this.parent=xe,this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Ci(e,t=xe){t&&t.active&&t.effects.push(e)}const Jn=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ir=e=>(e.w&Ye)>0,or=e=>(e.n&Ye)>0,Si=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ye},bi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];ir(r)&&!or(r)?r.delete(e):t[n++]=r,r.w&=~Ye,r.n&=~Ye}t.length=n}},Dn=new WeakMap;let Mt=0,Ye=1;const En=30;let Re;const it=Symbol(""),Mn=Symbol("");class Yn{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ci(this,s)}run(){if(!this.active)return this.fn();let t=Re,n=je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Re,Re=this,je=!0,Ye=1<<++Mt,Mt<=En?Si(this):ms(this),this.fn()}finally{Mt<=En&&bi(this),Ye=1<<--Mt,Re=this.parent,je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Re===this?this.deferStop=!0:this.active&&(ms(this),this.onStop&&this.onStop(),this.active=!1)}}function ms(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let je=!0;const ar=[];function _t(){ar.push(je),je=!1}function wt(){const e=ar.pop();je=e===void 0?!0:e}function Se(e,t,n){if(je&&Re){let s=Dn.get(e);s||Dn.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Jn()),lr(r)}}function lr(e,t){let n=!1;Mt<=En?or(e)||(e.n|=Ye,n=!ir(e)):n=!e.has(Re),n&&(e.add(Re),Re.deps.push(e))}function $e(e,t,n,s,r,i){const o=Dn.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&k(e))o.forEach((c,f)=>{(f==="length"||f>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":k(e)?jn(n)&&a.push(o.get("length")):(a.push(o.get(it)),Tt(e)&&a.push(o.get(Mn)));break;case"delete":k(e)||(a.push(o.get(it)),Tt(e)&&a.push(o.get(Mn)));break;case"set":Tt(e)&&a.push(o.get(it));break}if(a.length===1)a[0]&&Ln(a[0]);else{const c=[];for(const f of a)f&&c.push(...f);Ln(Jn(c))}}function Ln(e,t){for(const n of k(e)?e:[...e])(n!==Re||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ai=qn("__proto__,__v_isRef,__isVue"),cr=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Gn)),_i=Xn(),wi=Xn(!1,!0),Ri=Xn(!0),gs=Di();function Di(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=K(this);for(let i=0,o=this.length;i<o;i++)Se(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(K)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_t();const s=K(this)[t].apply(this,n);return wt(),s}}),e}function Xn(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?Ui:pr:t?hr:dr).get(s))return s;const o=k(s);if(!e&&o&&B(gs,r))return Reflect.get(gs,r,i);const a=Reflect.get(s,r,i);return(Gn(r)?cr.has(r):Ai(r))||(e||Se(s,"get",r),t)?a:de(a)?!o||!jn(r)?a.value:a:ee(a)?e?mr(a):cn(a):a}}const Ei=ur(),Mi=ur(!0);function ur(e=!1){return function(n,s,r,i){let o=n[s];if(Ot(o)&&de(o)&&!de(r))return!1;if(!e&&!Ot(r)&&(gr(r)||(r=K(r),o=K(o)),!k(n)&&de(o)&&!de(r)))return o.value=r,!0;const a=k(n)&&jn(s)?Number(s)<n.length:B(n,s),c=Reflect.set(n,s,r,i);return n===K(i)&&(a?Jt(r,o)&&$e(n,"set",s,r):$e(n,"add",s,r)),c}}function Li(e,t){const n=B(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&$e(e,"delete",t,void 0),s}function ki(e,t){const n=Reflect.has(e,t);return(!Gn(t)||!cr.has(t))&&Se(e,"has",t),n}function xi(e){return Se(e,"iterate",k(e)?"length":it),Reflect.ownKeys(e)}const fr={get:_i,set:Ei,deleteProperty:Li,has:ki,ownKeys:xi},Fi={get:Ri,set(e,t){return!0},deleteProperty(e,t){return!0}},Oi=le({},fr,{get:wi,set:Mi}),Zn=e=>e,ln=e=>Reflect.getPrototypeOf(e);function $t(e,t,n=!1,s=!1){e=e.__v_raw;const r=K(e),i=K(t);t!==i&&!n&&Se(r,"get",t),!n&&Se(r,"get",i);const{has:o}=ln(r),a=s?Zn:n?ns:ts;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function Wt(e,t=!1){const n=this.__v_raw,s=K(n),r=K(e);return e!==r&&!t&&Se(s,"has",e),!t&&Se(s,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function Nt(e,t=!1){return e=e.__v_raw,!t&&Se(K(e),"iterate",it),Reflect.get(e,"size",e)}function vs(e){e=K(e);const t=K(this);return ln(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function Ts(e,t){t=K(t);const n=K(this),{has:s,get:r}=ln(n);let i=s.call(n,e);i||(e=K(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?Jt(t,o)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function ys(e){const t=K(this),{has:n,get:s}=ln(t);let r=n.call(t,e);r||(e=K(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&$e(t,"delete",e,void 0),i}function Cs(){const e=K(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function Kt(e,t){return function(s,r){const i=this,o=i.__v_raw,a=K(o),c=t?Zn:e?ns:ts;return!e&&Se(a,"iterate",it),o.forEach((f,h)=>s.call(r,c(f),c(h),i))}}function Ut(e,t,n){return function(...s){const r=this.__v_raw,i=K(r),o=Tt(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,f=r[e](...s),h=n?Zn:t?ns:ts;return!t&&Se(i,"iterate",c?Mn:it),{next(){const{value:T,done:p}=f.next();return p?{value:T,done:p}:{value:a?[h(T[0]),h(T[1])]:h(T),done:p}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:this}}function Pi(){const e={get(i){return $t(this,i)},get size(){return Nt(this)},has:Wt,add:vs,set:Ts,delete:ys,clear:Cs,forEach:Kt(!1,!1)},t={get(i){return $t(this,i,!1,!0)},get size(){return Nt(this)},has:Wt,add:vs,set:Ts,delete:ys,clear:Cs,forEach:Kt(!1,!0)},n={get(i){return $t(this,i,!0)},get size(){return Nt(this,!0)},has(i){return Wt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Kt(!0,!1)},s={get(i){return $t(this,i,!0,!0)},get size(){return Nt(this,!0)},has(i){return Wt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Kt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ut(i,!1,!1),n[i]=Ut(i,!0,!1),t[i]=Ut(i,!1,!0),s[i]=Ut(i,!0,!0)}),[e,n,t,s]}const[Ii,Bi,Hi,$i]=Pi();function Qn(e,t){const n=t?e?$i:Hi:e?Bi:Ii;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(B(n,r)&&r in s?n:s,r,i)}const Wi={get:Qn(!1,!1)},Ni={get:Qn(!1,!0)},Ki={get:Qn(!0,!1)},dr=new WeakMap,hr=new WeakMap,pr=new WeakMap,Ui=new WeakMap;function qi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zi(e){return e.__v_skip||!Object.isExtensible(e)?0:qi(mi(e))}function cn(e){return Ot(e)?e:es(e,!1,fr,Wi,dr)}function Vi(e){return es(e,!1,Oi,Ni,hr)}function mr(e){return es(e,!0,Fi,Ki,pr)}function es(e,t,n,s,r){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=zi(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function yt(e){return Ot(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ot(e){return!!(e&&e.__v_isReadonly)}function gr(e){return!!(e&&e.__v_isShallow)}function vr(e){return yt(e)||Ot(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function Tr(e){return Yt(e,"__v_skip",!0),e}const ts=e=>ee(e)?cn(e):e,ns=e=>ee(e)?mr(e):e;function Gi(e){je&&Re&&(e=K(e),lr(e.dep||(e.dep=Jn())))}function ji(e,t){e=K(e),e.dep&&Ln(e.dep)}function de(e){return!!(e&&e.__v_isRef===!0)}function Ji(e){return de(e)?e.value:e}const Yi={get:(e,t,n)=>Ji(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return de(r)&&!de(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function yr(e){return yt(e)?e:new Proxy(e,Yi)}class Xi{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Yn(t,()=>{this._dirty||(this._dirty=!0,ji(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=K(this);return Gi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Zi(e,t,n=!1){let s,r;const i=O(e);return i?(s=e,r=De):(s=e.get,r=e.set),new Xi(s,r,i||!r,n)}function Je(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){un(i,t,n)}return r}function _e(e,t,n,s){if(O(e)){const i=Je(e,t,n,s);return i&&nr(i)&&i.catch(o=>{un(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(_e(e[i],t,n,s));return r}function un(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const f=i.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Je(c,null,10,[e,o,a]);return}}Qi(e,n,r,s)}function Qi(e,t,n,s=!0){console.error(e)}let Zt=!1,kn=!1;const Ce=[];let He=0;const kt=[];let Lt=null,pt=0;const xt=[];let Ve=null,mt=0;const Cr=Promise.resolve();let ss=null,xn=null;function eo(e){const t=ss||Cr;return e?t.then(this?e.bind(this):e):t}function to(e){let t=He+1,n=Ce.length;for(;t<n;){const s=t+n>>>1;Pt(Ce[s])<e?t=s+1:n=s}return t}function Sr(e){(!Ce.length||!Ce.includes(e,Zt&&e.allowRecurse?He+1:He))&&e!==xn&&(e.id==null?Ce.push(e):Ce.splice(to(e.id),0,e),br())}function br(){!Zt&&!kn&&(kn=!0,ss=Cr.then(wr))}function no(e){const t=Ce.indexOf(e);t>He&&Ce.splice(t,1)}function Ar(e,t,n,s){k(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),br()}function so(e){Ar(e,Lt,kt,pt)}function ro(e){Ar(e,Ve,xt,mt)}function rs(e,t=null){if(kt.length){for(xn=t,Lt=[...new Set(kt)],kt.length=0,pt=0;pt<Lt.length;pt++)Lt[pt]();Lt=null,pt=0,xn=null,rs(e,t)}}function _r(e){if(xt.length){const t=[...new Set(xt)];if(xt.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((n,s)=>Pt(n)-Pt(s)),mt=0;mt<Ve.length;mt++)Ve[mt]();Ve=null,mt=0}}const Pt=e=>e.id==null?1/0:e.id;function wr(e){kn=!1,Zt=!0,rs(e),Ce.sort((n,s)=>Pt(n)-Pt(s));const t=De;try{for(He=0;He<Ce.length;He++){const n=Ce[He];n&&n.active!==!1&&Je(n,null,14)}}finally{He=0,Ce.length=0,_r(),Zt=!1,ss=null,(Ce.length||kt.length||xt.length)&&wr(e)}}function io(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||q;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:T,trim:p}=s[h]||q;p?r=n.map(w=>w.trim()):T&&(r=n.map(Xt))}let a,c=s[a=yn(t)]||s[a=yn(Oe(t))];!c&&i&&(c=s[a=yn(At(t))]),c&&_e(c,e,6,r);const f=s[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,_e(f,e,6,r)}}function Rr(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!O(e)){const c=f=>{const h=Rr(f,t,!0);h&&(a=!0,le(o,h))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(s.set(e,null),null):(k(i)?i.forEach(c=>o[c]=null):le(o,i),s.set(e,o),o)}function fn(e,t){return!e||!sn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,At(t))||B(e,t))}let Ae=null,Dr=null;function Qt(e){const t=Ae;return Ae=e,Dr=e&&e.type.__scopeId||null,t}function Er(e,t=Ae,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ks(-1);const i=Qt(t),o=e(...r);return Qt(i),s._d&&ks(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Cn(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:f,render:h,renderCache:T,data:p,setupState:w,ctx:L,inheritAttrs:I}=e;let P,H;const he=Qt(e);try{if(n.shapeFlag&4){const j=r||s;P=Fe(h.call(j,j,T,i,w,p,L)),H=c}else{const j=t;P=Fe(j.length>1?j(i,{attrs:c,slots:a,emit:f}):j(i,null)),H=t.props?c:oo(c)}}catch(j){Ft.length=0,un(j,e,1),P=W(Ee)}let Z=P;if(H&&I!==!1){const j=Object.keys(H),{shapeFlag:pe}=Z;j.length&&pe&7&&(o&&j.some(zn)&&(H=ao(H,o)),Z=lt(Z,H))}return n.dirs&&(Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&(Z.transition=n.transition),P=Z,Qt(he),P}const oo=e=>{let t;for(const n in e)(n==="class"||n==="style"||sn(n))&&((t||(t={}))[n]=e[n]);return t},ao=(e,t)=>{const n={};for(const s in e)(!zn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function lo(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ss(s,o,f):!!o;if(c&8){const h=t.dynamicProps;for(let T=0;T<h.length;T++){const p=h[T];if(o[p]!==s[p]&&!fn(f,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ss(s,o,f):!0:!!o;return!1}function Ss(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!fn(n,i))return!0}return!1}function co({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const uo=e=>e.__isSuspense;function fo(e,t){t&&t.pendingBranch?k(e)?t.effects.push(...e):t.effects.push(e):ro(e)}function ho(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function Sn(e,t,n=!1){const s=ie||Ae;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&O(t)?t.call(s.proxy):t}}const bs={};function bn(e,t,n){return Mr(e,t,n)}function Mr(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=q){const a=ie;let c,f=!1,h=!1;if(de(e)?(c=()=>e.value,f=gr(e)):yt(e)?(c=()=>e,s=!0):k(e)?(h=!0,f=e.some(yt),c=()=>e.map(H=>{if(de(H))return H.value;if(yt(H))return rt(H);if(O(H))return Je(H,a,2)})):O(e)?t?c=()=>Je(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return T&&T(),_e(e,a,3,[p])}:c=De,t&&s){const H=c;c=()=>rt(H())}let T,p=H=>{T=P.onStop=()=>{Je(H,a,4)}};if(It)return p=De,t?n&&_e(t,a,3,[c(),h?[]:void 0,p]):c(),De;let w=h?[]:bs;const L=()=>{if(!!P.active)if(t){const H=P.run();(s||f||(h?H.some((he,Z)=>Jt(he,w[Z])):Jt(H,w)))&&(T&&T(),_e(t,a,3,[H,w===bs?void 0:w,p]),w=H)}else P.run()};L.allowRecurse=!!t;let I;r==="sync"?I=L:r==="post"?I=()=>ve(L,a&&a.suspense):I=()=>{!a||a.isMounted?so(L):L()};const P=new Yn(c,I);return t?n?L():w=P.run():r==="post"?ve(P.run.bind(P),a&&a.suspense):P.run(),()=>{P.stop(),a&&a.scope&&Vn(a.scope.effects,P)}}function po(e,t,n){const s=this.proxy,r=oe(e)?e.includes(".")?Lr(s,e):()=>s[e]:e.bind(s,s);let i;O(t)?i=t:(i=t.handler,n=t);const o=ie;bt(this);const a=Mr(r,i.bind(s),n);return o?bt(o):at(),a}function Lr(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function rt(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),de(e))rt(e.value,t);else if(k(e))for(let n=0;n<e.length;n++)rt(e[n],t);else if(tr(e)||Tt(e))e.forEach(n=>{rt(n,t)});else if(rr(e))for(const n in e)rt(e[n],t);return e}function mo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pr(()=>{e.isMounted=!0}),Ir(()=>{e.isUnmounting=!0}),e}const be=[Function,Array],go={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:be,onEnter:be,onAfterEnter:be,onEnterCancelled:be,onBeforeLeave:be,onLeave:be,onAfterLeave:be,onLeaveCancelled:be,onBeforeAppear:be,onAppear:be,onAfterAppear:be,onAppearCancelled:be},setup(e,{slots:t}){const n=ta(),s=mo();let r;return()=>{const i=t.default&&Fr(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const I of i)if(I.type!==Ee){o=I;break}}const a=K(e),{mode:c}=a;if(s.isLeaving)return An(o);const f=As(o);if(!f)return An(o);const h=Fn(f,a,s,n);On(f,h);const T=n.subTree,p=T&&As(T);let w=!1;const{getTransitionKey:L}=f.type;if(L){const I=L();r===void 0?r=I:I!==r&&(r=I,w=!0)}if(p&&p.type!==Ee&&(!nt(f,p)||w)){const I=Fn(p,a,s,n);if(On(p,I),c==="out-in")return s.isLeaving=!0,I.afterLeave=()=>{s.isLeaving=!1,n.update()},An(o);c==="in-out"&&f.type!==Ee&&(I.delayLeave=(P,H,he)=>{const Z=xr(s,p);Z[String(p.key)]=p,P._leaveCb=()=>{H(),P._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=he})}return o}}},kr=go;function xr(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Fn(e,t,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:T,onLeave:p,onAfterLeave:w,onLeaveCancelled:L,onBeforeAppear:I,onAppear:P,onAfterAppear:H,onAppearCancelled:he}=t,Z=String(e.key),j=xr(n,e),pe=(N,te)=>{N&&_e(N,s,9,te)},Pe={mode:i,persisted:o,beforeEnter(N){let te=a;if(!n.isMounted)if(r)te=I||a;else return;N._leaveCb&&N._leaveCb(!0);const J=j[Z];J&&nt(e,J)&&J.el._leaveCb&&J.el._leaveCb(),pe(te,[N])},enter(N){let te=c,J=f,ge=h;if(!n.isMounted)if(r)te=P||c,J=H||f,ge=he||h;else return;let ue=!1;const E=N._enterCb=Q=>{ue||(ue=!0,Q?pe(ge,[N]):pe(J,[N]),Pe.delayedLeave&&Pe.delayedLeave(),N._enterCb=void 0)};te?(te(N,E),te.length<=1&&E()):E()},leave(N,te){const J=String(e.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return te();pe(T,[N]);let ge=!1;const ue=N._leaveCb=E=>{ge||(ge=!0,te(),E?pe(L,[N]):pe(w,[N]),N._leaveCb=void 0,j[J]===e&&delete j[J])};j[J]=e,p?(p(N,ue),p.length<=1&&ue()):ue()},clone(N){return Fn(N,t,n,s)}};return Pe}function An(e){if(dn(e))return e=lt(e),e.children=null,e}function As(e){return dn(e)?e.children?e.children[0]:void 0:e}function On(e,t){e.shapeFlag&6&&e.component?On(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Fr(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ne?(o.patchFlag&128&&r++,s=s.concat(Fr(o.children,t,a))):(t||o.type!==Ee)&&s.push(a!=null?lt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function We(e){return O(e)?{setup:e,name:e.name}:e}const Pn=e=>!!e.type.__asyncLoader,dn=e=>e.type.__isKeepAlive;function vo(e,t){Or(e,"a",t)}function To(e,t){Or(e,"da",t)}function Or(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(hn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)dn(r.parent.vnode)&&yo(s,t,n,r),r=r.parent}}function yo(e,t,n,s){const r=hn(t,e,s,!0);Br(()=>{Vn(s[t],r)},n)}function hn(e,t,n=ie,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;_t(),bt(n);const a=_e(t,n,e,o);return at(),wt(),a});return s?r.unshift(i):r.push(i),i}}const Ne=e=>(t,n=ie)=>(!It||e==="sp")&&hn(e,t,n),Co=Ne("bm"),Pr=Ne("m"),So=Ne("bu"),bo=Ne("u"),Ir=Ne("bum"),Br=Ne("um"),Ao=Ne("sp"),_o=Ne("rtg"),wo=Ne("rtc");function Ro(e,t=ie){hn("ec",e,t)}let In=!0;function Do(e){const t=$r(e),n=e.proxy,s=e.ctx;In=!1,t.beforeCreate&&_s(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:f,created:h,beforeMount:T,mounted:p,beforeUpdate:w,updated:L,activated:I,deactivated:P,beforeDestroy:H,beforeUnmount:he,destroyed:Z,unmounted:j,render:pe,renderTracked:Pe,renderTriggered:N,errorCaptured:te,serverPrefetch:J,expose:ge,inheritAttrs:ue,components:E,directives:Q,filters:Me}=t;if(f&&Eo(f,s,null,e.appContext.config.unwrapInjectedRef),o)for(const Y in o){const z=o[Y];O(z)&&(s[Y]=z.bind(n))}if(r){const Y=r.call(n,n);ee(Y)&&(e.data=cn(Y))}if(In=!0,i)for(const Y in i){const z=i[Y],Ie=O(z)?z.bind(n,n):O(z.get)?z.get.bind(n,n):De,gn=!O(z)&&O(z.set)?z.set.bind(n):De,Rt=la({get:Ie,set:gn});Object.defineProperty(s,Y,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:ut=>Rt.value=ut})}if(a)for(const Y in a)Hr(a[Y],s,n,Y);if(c){const Y=O(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(z=>{ho(z,Y[z])})}h&&_s(h,e,"c");function ae(Y,z){k(z)?z.forEach(Ie=>Y(Ie.bind(n))):z&&Y(z.bind(n))}if(ae(Co,T),ae(Pr,p),ae(So,w),ae(bo,L),ae(vo,I),ae(To,P),ae(Ro,te),ae(wo,Pe),ae(_o,N),ae(Ir,he),ae(Br,j),ae(Ao,J),k(ge))if(ge.length){const Y=e.exposed||(e.exposed={});ge.forEach(z=>{Object.defineProperty(Y,z,{get:()=>n[z],set:Ie=>n[z]=Ie})})}else e.exposed||(e.exposed={});pe&&e.render===De&&(e.render=pe),ue!=null&&(e.inheritAttrs=ue),E&&(e.components=E),Q&&(e.directives=Q)}function Eo(e,t,n=De,s=!1){k(e)&&(e=Bn(e));for(const r in e){const i=e[r];let o;ee(i)?"default"in i?o=Sn(i.from||r,i.default,!0):o=Sn(i.from||r):o=Sn(i),de(o)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function _s(e,t,n){_e(k(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Hr(e,t,n,s){const r=s.includes(".")?Lr(n,s):()=>n[s];if(oe(e)){const i=t[e];O(i)&&bn(r,i)}else if(O(e))bn(r,e.bind(n));else if(ee(e))if(k(e))e.forEach(i=>Hr(i,t,n,s));else{const i=O(e.handler)?e.handler.bind(n):t[e.handler];O(i)&&bn(r,i,e)}}function $r(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(f=>en(c,f,o,!0)),en(c,t,o)),i.set(t,c),c}function en(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&en(e,i,n,!0),r&&r.forEach(o=>en(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=Mo[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Mo={data:ws,props:tt,emits:tt,methods:tt,computed:tt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:tt,directives:tt,watch:ko,provide:ws,inject:Lo};function ws(e,t){return t?e?function(){return le(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function Lo(e,t){return tt(Bn(e),Bn(t))}function Bn(e){if(k(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function tt(e,t){return e?le(le(Object.create(null),e),t):t}function ko(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const s in t)n[s]=me(e[s],t[s]);return n}function xo(e,t,n,s=!1){const r={},i={};Yt(i,pn,1),e.propsDefaults=Object.create(null),Wr(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Vi(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Fo(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=K(r),[c]=e.propsOptions;let f=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=e.vnode.dynamicProps;for(let T=0;T<h.length;T++){let p=h[T];if(fn(e.emitsOptions,p))continue;const w=t[p];if(c)if(B(i,p))w!==i[p]&&(i[p]=w,f=!0);else{const L=Oe(p);r[L]=Hn(c,a,L,w,e,!1)}else w!==i[p]&&(i[p]=w,f=!0)}}}else{Wr(e,t,r,i)&&(f=!0);let h;for(const T in a)(!t||!B(t,T)&&((h=At(T))===T||!B(t,h)))&&(c?n&&(n[T]!==void 0||n[h]!==void 0)&&(r[T]=Hn(c,a,T,void 0,e,!0)):delete r[T]);if(i!==a)for(const T in i)(!t||!B(t,T)&&!0)&&(delete i[T],f=!0)}f&&$e(e,"set","$attrs")}function Wr(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(qt(c))continue;const f=t[c];let h;r&&B(r,h=Oe(c))?!i||!i.includes(h)?n[h]=f:(a||(a={}))[h]=f:fn(e.emitsOptions,c)||(!(c in s)||f!==s[c])&&(s[c]=f,o=!0)}if(i){const c=K(n),f=a||q;for(let h=0;h<i.length;h++){const T=i[h];n[T]=Hn(r,c,T,f[T],e,!B(f,T))}}return o}function Hn(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=B(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&O(c)){const{propsDefaults:f}=r;n in f?s=f[n]:(bt(r),s=f[n]=c.call(null,t),at())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===At(n))&&(s=!0))}return s}function Nr(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!O(e)){const h=T=>{c=!0;const[p,w]=Nr(T,t,!0);le(o,p),w&&a.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!i&&!c)return s.set(e,vt),vt;if(k(i))for(let h=0;h<i.length;h++){const T=Oe(i[h]);Rs(T)&&(o[T]=q)}else if(i)for(const h in i){const T=Oe(h);if(Rs(T)){const p=i[h],w=o[T]=k(p)||O(p)?{type:p}:p;if(w){const L=Ms(Boolean,w.type),I=Ms(String,w.type);w[0]=L>-1,w[1]=I<0||L<I,(L>-1||B(w,"default"))&&a.push(T)}}}const f=[o,a];return s.set(e,f),f}function Rs(e){return e[0]!=="$"}function Ds(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Es(e,t){return Ds(e)===Ds(t)}function Ms(e,t){return k(t)?t.findIndex(n=>Es(n,e)):O(t)&&Es(t,e)?0:-1}const Kr=e=>e[0]==="_"||e==="$stable",is=e=>k(e)?e.map(Fe):[Fe(e)],Oo=(e,t,n)=>{const s=Er((...r)=>is(t(...r)),n);return s._c=!1,s},Ur=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Kr(r))continue;const i=e[r];if(O(i))t[r]=Oo(r,i,s);else if(i!=null){const o=is(i);t[r]=()=>o}}},qr=(e,t)=>{const n=is(t);e.slots.default=()=>n},Po=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),Yt(t,"_",n)):Ur(t,e.slots={})}else e.slots={},t&&qr(e,t);Yt(e.slots,pn,1)},Io=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=q;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(le(r,t),!n&&a===1&&delete r._):(i=!t.$stable,Ur(t,r)),o=t}else t&&(qr(e,t),o={default:1});if(i)for(const a in r)!Kr(a)&&!(a in o)&&delete r[a]};function Bo(e,t){const n=Ae;if(n===null)return e;const s=mn(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,f=q]=t[i];O(o)&&(o={mounted:o,updated:o}),o.deep&&rt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:f})}return e}function Ze(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(_t(),_e(c,n,8,[e.el,a,e,t]),wt())}}function zr(){return{app:null,config:{isNativeTag:di,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ho=0;function $o(e,t){return function(s,r=null){O(s)||(s=Object.assign({},s)),r!=null&&!ee(r)&&(r=null);const i=zr(),o=new Set;let a=!1;const c=i.app={_uid:Ho++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ua,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&O(f.install)?(o.add(f),f.install(c,...h)):O(f)&&(o.add(f),f(c,...h))),c},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),c},component(f,h){return h?(i.components[f]=h,c):i.components[f]},directive(f,h){return h?(i.directives[f]=h,c):i.directives[f]},mount(f,h,T){if(!a){const p=W(s,r);return p.appContext=i,h&&t?t(p,f):e(p,f,T),a=!0,c._container=f,f.__vue_app__=c,mn(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,h){return i.provides[f]=h,c}};return c}}function $n(e,t,n,s,r=!1){if(k(e)){e.forEach((p,w)=>$n(p,t&&(k(t)?t[w]:t),n,s,r));return}if(Pn(s)&&!r)return;const i=s.shapeFlag&4?mn(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=e,f=t&&t.r,h=a.refs===q?a.refs={}:a.refs,T=a.setupState;if(f!=null&&f!==c&&(oe(f)?(h[f]=null,B(T,f)&&(T[f]=null)):de(f)&&(f.value=null)),O(c))Je(c,a,12,[o,h]);else{const p=oe(c),w=de(c);if(p||w){const L=()=>{if(e.f){const I=p?h[c]:c.value;r?k(I)&&Vn(I,i):k(I)?I.includes(i)||I.push(i):p?(h[c]=[i],B(T,c)&&(T[c]=h[c])):(c.value=[i],e.k&&(h[e.k]=c.value))}else p?(h[c]=o,B(T,c)&&(T[c]=o)):de(c)&&(c.value=o,e.k&&(h[e.k]=o))};o?(L.id=-1,ve(L,n)):L()}}}const ve=fo;function Wo(e){return No(e)}function No(e,t){const n=Ti();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:f,setElementText:h,parentNode:T,nextSibling:p,setScopeId:w=De,cloneNode:L,insertStaticContent:I}=e,P=(l,u,d,g=null,m=null,C=null,A=!1,y=null,S=!!u.dynamicChildren)=>{if(l===u)return;l&&!nt(l,u)&&(g=Ht(l),Ke(l,m,C,!0),l=null),u.patchFlag===-2&&(S=!1,u.dynamicChildren=null);const{type:v,ref:R,shapeFlag:_}=u;switch(v){case os:H(l,u,d,g);break;case Ee:he(l,u,d,g);break;case Vt:l==null&&Z(u,d,g,A);break;case ne:Q(l,u,d,g,m,C,A,y,S);break;default:_&1?Pe(l,u,d,g,m,C,A,y,S):_&6?Me(l,u,d,g,m,C,A,y,S):(_&64||_&128)&&v.process(l,u,d,g,m,C,A,y,S,ft)}R!=null&&m&&$n(R,l&&l.ref,C,u||l,!u)},H=(l,u,d,g)=>{if(l==null)s(u.el=a(u.children),d,g);else{const m=u.el=l.el;u.children!==l.children&&f(m,u.children)}},he=(l,u,d,g)=>{l==null?s(u.el=c(u.children||""),d,g):u.el=l.el},Z=(l,u,d,g)=>{[l.el,l.anchor]=I(l.children,u,d,g,l.el,l.anchor)},j=({el:l,anchor:u},d,g)=>{let m;for(;l&&l!==u;)m=p(l),s(l,d,g),l=m;s(u,d,g)},pe=({el:l,anchor:u})=>{let d;for(;l&&l!==u;)d=p(l),r(l),l=d;r(u)},Pe=(l,u,d,g,m,C,A,y,S)=>{A=A||u.type==="svg",l==null?N(u,d,g,m,C,A,y,S):ge(l,u,m,C,A,y,S)},N=(l,u,d,g,m,C,A,y)=>{let S,v;const{type:R,props:_,shapeFlag:D,transition:x,patchFlag:$,dirs:G}=l;if(l.el&&L!==void 0&&$===-1)S=l.el=L(l.el);else{if(S=l.el=o(l.type,C,_&&_.is,_),D&8?h(S,l.children):D&16&&J(l.children,S,null,g,m,C&&R!=="foreignObject",A,y),G&&Ze(l,null,g,"created"),_){for(const V in _)V!=="value"&&!qt(V)&&i(S,V,null,_[V],C,l.children,g,m,Be);"value"in _&&i(S,"value",null,_.value),(v=_.onVnodeBeforeMount)&&ke(v,g,l)}te(S,l,l.scopeId,A,g)}G&&Ze(l,null,g,"beforeMount");const U=(!m||m&&!m.pendingBranch)&&x&&!x.persisted;U&&x.beforeEnter(S),s(S,u,d),((v=_&&_.onVnodeMounted)||U||G)&&ve(()=>{v&&ke(v,g,l),U&&x.enter(S),G&&Ze(l,null,g,"mounted")},m)},te=(l,u,d,g,m)=>{if(d&&w(l,d),g)for(let C=0;C<g.length;C++)w(l,g[C]);if(m){let C=m.subTree;if(u===C){const A=m.vnode;te(l,A,A.scopeId,A.slotScopeIds,m.parent)}}},J=(l,u,d,g,m,C,A,y,S=0)=>{for(let v=S;v<l.length;v++){const R=l[v]=y?Ge(l[v]):Fe(l[v]);P(null,R,u,d,g,m,C,A,y)}},ge=(l,u,d,g,m,C,A)=>{const y=u.el=l.el;let{patchFlag:S,dynamicChildren:v,dirs:R}=u;S|=l.patchFlag&16;const _=l.props||q,D=u.props||q;let x;d&&Qe(d,!1),(x=D.onVnodeBeforeUpdate)&&ke(x,d,u,l),R&&Ze(u,l,d,"beforeUpdate"),d&&Qe(d,!0);const $=m&&u.type!=="foreignObject";if(v?ue(l.dynamicChildren,v,y,d,g,$,C):A||Ie(l,u,y,null,d,g,$,C,!1),S>0){if(S&16)E(y,u,_,D,d,g,m);else if(S&2&&_.class!==D.class&&i(y,"class",null,D.class,m),S&4&&i(y,"style",_.style,D.style,m),S&8){const G=u.dynamicProps;for(let U=0;U<G.length;U++){const V=G[U],we=_[V],dt=D[V];(dt!==we||V==="value")&&i(y,V,we,dt,m,l.children,d,g,Be)}}S&1&&l.children!==u.children&&h(y,u.children)}else!A&&v==null&&E(y,u,_,D,d,g,m);((x=D.onVnodeUpdated)||R)&&ve(()=>{x&&ke(x,d,u,l),R&&Ze(u,l,d,"updated")},g)},ue=(l,u,d,g,m,C,A)=>{for(let y=0;y<u.length;y++){const S=l[y],v=u[y],R=S.el&&(S.type===ne||!nt(S,v)||S.shapeFlag&70)?T(S.el):d;P(S,v,R,null,g,m,C,A,!0)}},E=(l,u,d,g,m,C,A)=>{if(d!==g){for(const y in g){if(qt(y))continue;const S=g[y],v=d[y];S!==v&&y!=="value"&&i(l,y,v,S,A,u.children,m,C,Be)}if(d!==q)for(const y in d)!qt(y)&&!(y in g)&&i(l,y,d[y],null,A,u.children,m,C,Be);"value"in g&&i(l,"value",d.value,g.value)}},Q=(l,u,d,g,m,C,A,y,S)=>{const v=u.el=l?l.el:a(""),R=u.anchor=l?l.anchor:a("");let{patchFlag:_,dynamicChildren:D,slotScopeIds:x}=u;x&&(y=y?y.concat(x):x),l==null?(s(v,d,g),s(R,d,g),J(u.children,d,R,m,C,A,y,S)):_>0&&_&64&&D&&l.dynamicChildren?(ue(l.dynamicChildren,D,d,m,C,A,y),(u.key!=null||m&&u===m.subTree)&&Vr(l,u,!0)):Ie(l,u,d,R,m,C,A,y,S)},Me=(l,u,d,g,m,C,A,y,S)=>{u.slotScopeIds=y,l==null?u.shapeFlag&512?m.ctx.activate(u,d,g,A,S):ct(u,d,g,m,C,A,S):ae(l,u,S)},ct=(l,u,d,g,m,C,A)=>{const y=l.component=ea(l,g,m);if(dn(l)&&(y.ctx.renderer=ft),na(y),y.asyncDep){if(m&&m.registerDep(y,Y),!l.el){const S=y.subTree=W(Ee);he(null,S,u,d)}return}Y(y,l,u,d,m,C,A)},ae=(l,u,d)=>{const g=u.component=l.component;if(lo(l,u,d))if(g.asyncDep&&!g.asyncResolved){z(g,u,d);return}else g.next=u,no(g.update),g.update();else u.component=l.component,u.el=l.el,g.vnode=u},Y=(l,u,d,g,m,C,A)=>{const y=()=>{if(l.isMounted){let{next:R,bu:_,u:D,parent:x,vnode:$}=l,G=R,U;Qe(l,!1),R?(R.el=$.el,z(l,R,A)):R=$,_&&zt(_),(U=R.props&&R.props.onVnodeBeforeUpdate)&&ke(U,x,R,$),Qe(l,!0);const V=Cn(l),we=l.subTree;l.subTree=V,P(we,V,T(we.el),Ht(we),l,m,C),R.el=V.el,G===null&&co(l,V.el),D&&ve(D,m),(U=R.props&&R.props.onVnodeUpdated)&&ve(()=>ke(U,x,R,$),m)}else{let R;const{el:_,props:D}=u,{bm:x,m:$,parent:G}=l,U=Pn(u);if(Qe(l,!1),x&&zt(x),!U&&(R=D&&D.onVnodeBeforeMount)&&ke(R,G,u),Qe(l,!0),_&&Tn){const V=()=>{l.subTree=Cn(l),Tn(_,l.subTree,l,m,null)};U?u.type.__asyncLoader().then(()=>!l.isUnmounted&&V()):V()}else{const V=l.subTree=Cn(l);P(null,V,d,g,l,m,C),u.el=V.el}if($&&ve($,m),!U&&(R=D&&D.onVnodeMounted)){const V=u;ve(()=>ke(R,G,V),m)}u.shapeFlag&256&&l.a&&ve(l.a,m),l.isMounted=!0,u=d=g=null}},S=l.effect=new Yn(y,()=>Sr(l.update),l.scope),v=l.update=S.run.bind(S);v.id=l.uid,Qe(l,!0),v()},z=(l,u,d)=>{u.component=l;const g=l.vnode.props;l.vnode=u,l.next=null,Fo(l,u.props,g,d),Io(l,u.children,d),_t(),rs(void 0,l.update),wt()},Ie=(l,u,d,g,m,C,A,y,S=!1)=>{const v=l&&l.children,R=l?l.shapeFlag:0,_=u.children,{patchFlag:D,shapeFlag:x}=u;if(D>0){if(D&128){Rt(v,_,d,g,m,C,A,y,S);return}else if(D&256){gn(v,_,d,g,m,C,A,y,S);return}}x&8?(R&16&&Be(v,m,C),_!==v&&h(d,_)):R&16?x&16?Rt(v,_,d,g,m,C,A,y,S):Be(v,m,C,!0):(R&8&&h(d,""),x&16&&J(_,d,g,m,C,A,y,S))},gn=(l,u,d,g,m,C,A,y,S)=>{l=l||vt,u=u||vt;const v=l.length,R=u.length,_=Math.min(v,R);let D;for(D=0;D<_;D++){const x=u[D]=S?Ge(u[D]):Fe(u[D]);P(l[D],x,d,null,m,C,A,y,S)}v>R?Be(l,m,C,!0,!1,_):J(u,d,g,m,C,A,y,S,_)},Rt=(l,u,d,g,m,C,A,y,S)=>{let v=0;const R=u.length;let _=l.length-1,D=R-1;for(;v<=_&&v<=D;){const x=l[v],$=u[v]=S?Ge(u[v]):Fe(u[v]);if(nt(x,$))P(x,$,d,null,m,C,A,y,S);else break;v++}for(;v<=_&&v<=D;){const x=l[_],$=u[D]=S?Ge(u[D]):Fe(u[D]);if(nt(x,$))P(x,$,d,null,m,C,A,y,S);else break;_--,D--}if(v>_){if(v<=D){const x=D+1,$=x<R?u[x].el:g;for(;v<=D;)P(null,u[v]=S?Ge(u[v]):Fe(u[v]),d,$,m,C,A,y,S),v++}}else if(v>D)for(;v<=_;)Ke(l[v],m,C,!0),v++;else{const x=v,$=v,G=new Map;for(v=$;v<=D;v++){const Te=u[v]=S?Ge(u[v]):Fe(u[v]);Te.key!=null&&G.set(Te.key,v)}let U,V=0;const we=D-$+1;let dt=!1,fs=0;const Dt=new Array(we);for(v=0;v<we;v++)Dt[v]=0;for(v=x;v<=_;v++){const Te=l[v];if(V>=we){Ke(Te,m,C,!0);continue}let Le;if(Te.key!=null)Le=G.get(Te.key);else for(U=$;U<=D;U++)if(Dt[U-$]===0&&nt(Te,u[U])){Le=U;break}Le===void 0?Ke(Te,m,C,!0):(Dt[Le-$]=v+1,Le>=fs?fs=Le:dt=!0,P(Te,u[Le],d,null,m,C,A,y,S),V++)}const ds=dt?Ko(Dt):vt;for(U=ds.length-1,v=we-1;v>=0;v--){const Te=$+v,Le=u[Te],hs=Te+1<R?u[Te+1].el:g;Dt[v]===0?P(null,Le,d,hs,m,C,A,y,S):dt&&(U<0||v!==ds[U]?ut(Le,d,hs,2):U--)}}},ut=(l,u,d,g,m=null)=>{const{el:C,type:A,transition:y,children:S,shapeFlag:v}=l;if(v&6){ut(l.component.subTree,u,d,g);return}if(v&128){l.suspense.move(u,d,g);return}if(v&64){A.move(l,u,d,ft);return}if(A===ne){s(C,u,d);for(let _=0;_<S.length;_++)ut(S[_],u,d,g);s(l.anchor,u,d);return}if(A===Vt){j(l,u,d);return}if(g!==2&&v&1&&y)if(g===0)y.beforeEnter(C),s(C,u,d),ve(()=>y.enter(C),m);else{const{leave:_,delayLeave:D,afterLeave:x}=y,$=()=>s(C,u,d),G=()=>{_(C,()=>{$(),x&&x()})};D?D(C,$,G):G()}else s(C,u,d)},Ke=(l,u,d,g=!1,m=!1)=>{const{type:C,props:A,ref:y,children:S,dynamicChildren:v,shapeFlag:R,patchFlag:_,dirs:D}=l;if(y!=null&&$n(y,null,d,l,!0),R&256){u.ctx.deactivate(l);return}const x=R&1&&D,$=!Pn(l);let G;if($&&(G=A&&A.onVnodeBeforeUnmount)&&ke(G,u,l),R&6)ii(l.component,d,g);else{if(R&128){l.suspense.unmount(d,g);return}x&&Ze(l,null,u,"beforeUnmount"),R&64?l.type.remove(l,u,d,m,ft,g):v&&(C!==ne||_>0&&_&64)?Be(v,u,d,!1,!0):(C===ne&&_&384||!m&&R&16)&&Be(S,u,d),g&&cs(l)}($&&(G=A&&A.onVnodeUnmounted)||x)&&ve(()=>{G&&ke(G,u,l),x&&Ze(l,null,u,"unmounted")},d)},cs=l=>{const{type:u,el:d,anchor:g,transition:m}=l;if(u===ne){ri(d,g);return}if(u===Vt){pe(l);return}const C=()=>{r(d),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:A,delayLeave:y}=m,S=()=>A(d,C);y?y(l.el,C,S):S()}else C()},ri=(l,u)=>{let d;for(;l!==u;)d=p(l),r(l),l=d;r(u)},ii=(l,u,d)=>{const{bum:g,scope:m,update:C,subTree:A,um:y}=l;g&&zt(g),m.stop(),C&&(C.active=!1,Ke(A,l,u,d)),y&&ve(y,u),ve(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Be=(l,u,d,g=!1,m=!1,C=0)=>{for(let A=C;A<l.length;A++)Ke(l[A],u,d,g,m)},Ht=l=>l.shapeFlag&6?Ht(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el),us=(l,u,d)=>{l==null?u._vnode&&Ke(u._vnode,null,null,!0):P(u._vnode||null,l,u,null,null,null,d),_r(),u._vnode=l},ft={p:P,um:Ke,m:ut,r:cs,mt:ct,mc:J,pc:Ie,pbc:ue,n:Ht,o:e};let vn,Tn;return t&&([vn,Tn]=t(ft)),{render:us,hydrate:vn,createApp:$o(us,vn)}}function Qe({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Vr(e,t,n=!1){const s=e.children,r=t.children;if(k(s)&&k(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ge(r[i]),a.el=o.el),n||Vr(o,a))}}function Ko(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const f=e[s];if(f!==0){if(r=n[n.length-1],e[r]<f){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<f?i=a+1:o=a;f<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Uo=e=>e.__isTeleport,Gr="components";function re(e,t){return zo(Gr,e,!0,t)||e}const qo=Symbol();function zo(e,t,n=!0,s=!1){const r=Ae||ie;if(r){const i=r.type;if(e===Gr){const a=oa(i);if(a&&(a===t||a===Oe(t)||a===an(Oe(t))))return i}const o=Ls(r[e]||i[e],t)||Ls(r.appContext[e],t);return!o&&s?i:o}}function Ls(e,t){return e&&(e[t]||e[Oe(t)]||e[an(Oe(t))])}const ne=Symbol(void 0),os=Symbol(void 0),Ee=Symbol(void 0),Vt=Symbol(void 0),Ft=[];let ot=null;function M(e=!1){Ft.push(ot=e?null:[])}function Vo(){Ft.pop(),ot=Ft[Ft.length-1]||null}let tn=1;function ks(e){tn+=e}function jr(e){return e.dynamicChildren=tn>0?ot||vt:null,Vo(),tn>0&&ot&&ot.push(e),e}function F(e,t,n,s,r,i){return jr(b(e,t,n,s,r,i,!0))}function Jr(e,t,n,s,r){return jr(W(e,t,n,s,r,!0))}function Wn(e){return e?e.__v_isVNode===!0:!1}function nt(e,t){return e.type===t.type&&e.key===t.key}const pn="__vInternal",Yr=({key:e})=>e!=null?e:null,Gt=({ref:e,ref_key:t,ref_for:n})=>e!=null?oe(e)||de(e)||O(e)?{i:Ae,r:e,k:t,f:!!n}:e:null;function b(e,t=null,n=null,s=0,r=null,i=e===ne?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yr(t),ref:t&&Gt(t),scopeId:Dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(as(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),tn>0&&!o&&ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ot.push(c),c}const W=Go;function Go(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===qo)&&(e=Ee),Wn(e)){const a=lt(e,t,!0);return n&&as(a,n),a}if(aa(e)&&(e=e.__vccOpts),t){t=jo(t);let{class:a,style:c}=t;a&&!oe(a)&&(t.class=fe(a)),ee(c)&&(vr(c)&&!k(c)&&(c=le({},c)),t.style=Bt(c))}const o=oe(e)?1:uo(e)?128:Uo(e)?64:ee(e)?4:O(e)?2:0;return b(e,t,n,s,r,o,i,!0)}function jo(e){return e?vr(e)||pn in e?le({},e):e:null}function lt(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?Yo(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Yr(a),ref:t&&t.ref?n&&r?k(r)?r.concat(Gt(t)):[r,Gt(t)]:Gt(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ne?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lt(e.ssContent),ssFallback:e.ssFallback&&lt(e.ssFallback),el:e.el,anchor:e.anchor}}function Xe(e=" ",t=0){return W(os,null,e,t)}function Jo(e,t){const n=W(Vt,null,e);return n.staticCount=t,n}function ye(e="",t=!1){return t?(M(),Jr(Ee,null,e)):W(Ee,null,e)}function Fe(e){return e==null||typeof e=="boolean"?W(Ee):k(e)?W(ne,null,e.slice()):typeof e=="object"?Ge(e):W(os,null,String(e))}function Ge(e){return e.el===null||e.memo?e:lt(e)}function as(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(k(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),as(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(pn in t)?t._ctx=Ae:r===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),s&64?(n=16,t=[Xe(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yo(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=fe([t.class,s.class]));else if(r==="style")t.style=Bt([t.style,s.style]);else if(sn(r)){const i=t[r],o=s[r];o&&i!==o&&!(k(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function ke(e,t,n,s=null){_e(e,t,7,[n,s])}function St(e,t,n,s){let r;const i=n&&n[s];if(k(e)||oe(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(ee(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const f=o[a];r[a]=t(e[f],f,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Nn=e=>e?Xr(e)?mn(e)||e.proxy:Nn(e.parent):null,nn=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nn(e.parent),$root:e=>Nn(e.root),$emit:e=>e.emit,$options:e=>$r(e),$forceUpdate:e=>()=>Sr(e.update),$nextTick:e=>eo.bind(e.proxy),$watch:e=>po.bind(e)}),Xo={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let f;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(s!==q&&B(s,t))return o[t]=1,s[t];if(r!==q&&B(r,t))return o[t]=2,r[t];if((f=e.propsOptions[0])&&B(f,t))return o[t]=3,i[t];if(n!==q&&B(n,t))return o[t]=4,n[t];In&&(o[t]=0)}}const h=nn[t];let T,p;if(h)return t==="$attrs"&&Se(e,"get",t),h(e);if((T=a.__cssModules)&&(T=T[t]))return T;if(n!==q&&B(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,B(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return r!==q&&B(r,t)?(r[t]=n,!0):s!==q&&B(s,t)?(s[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==q&&B(e,o)||t!==q&&B(t,o)||(a=i[0])&&B(a,o)||B(s,o)||B(nn,o)||B(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Zo=zr();let Qo=0;function ea(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Zo,i={uid:Qo++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new yi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nr(s,r),emitsOptions:Rr(s,r),emit:null,emitted:null,propsDefaults:q,inheritAttrs:s.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=io.bind(null,i),e.ce&&e.ce(i),i}let ie=null;const ta=()=>ie||Ae,bt=e=>{ie=e,e.scope.on()},at=()=>{ie&&ie.scope.off(),ie=null};function Xr(e){return e.vnode.shapeFlag&4}let It=!1;function na(e,t=!1){It=t;const{props:n,children:s}=e.vnode,r=Xr(e);xo(e,n,r,t),Po(e,s);const i=r?sa(e,t):void 0;return It=!1,i}function sa(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Tr(new Proxy(e.ctx,Xo));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?ia(e):null;bt(e),_t();const i=Je(s,e,0,[e.props,r]);if(wt(),at(),nr(i)){if(i.then(at,at),t)return i.then(o=>{xs(e,o,t)}).catch(o=>{un(o,e,0)});e.asyncDep=i}else xs(e,i,t)}else Zr(e,t)}function xs(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=yr(t)),Zr(e,n)}let Fs;function Zr(e,t,n){const s=e.type;if(!e.render){if(!t&&Fs&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,f=le(le({isCustomElement:i,delimiters:a},o),c);s.render=Fs(r,f)}}e.render=s.render||De}bt(e),_t(),Do(e),wt(),at()}function ra(e){return new Proxy(e.attrs,{get(t,n){return Se(e,"get","$attrs"),t[n]}})}function ia(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=ra(e))},slots:e.slots,emit:e.emit,expose:t}}function mn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yr(Tr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nn)return nn[n](e)}}))}function oa(e){return O(e)&&e.displayName||e.name}function aa(e){return O(e)&&"__vccOpts"in e}const la=(e,t)=>Zi(e,t,It);function ca(e,t,n){const s=arguments.length;return s===2?ee(t)&&!k(t)?Wn(t)?W(e,null,[t]):W(e,t):W(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Wn(n)&&(n=[n]),W(e,t,n))}const ua="3.2.33",fa="http://www.w3.org/2000/svg",st=typeof document!="undefined"?document:null,Os=st&&st.createElement("template"),da={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?st.createElementNS(fa,e):st.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Os.innerHTML=s?`<svg>${e}</svg>`:e;const a=Os.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ha(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function pa(e,t,n){const s=e.style,r=oe(n);if(n&&!r){for(const i in n)Kn(s,i,n[i]);if(t&&!oe(t))for(const i in t)n[i]==null&&Kn(s,i,"")}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const Ps=/\s*!important$/;function Kn(e,t,n){if(k(n))n.forEach(s=>Kn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=ma(e,t);Ps.test(n)?e.setProperty(At(s),n.replace(Ps,""),"important"):e[s]=n}}const Is=["Webkit","Moz","ms"],_n={};function ma(e,t){const n=_n[t];if(n)return n;let s=Oe(t);if(s!=="filter"&&s in e)return _n[t]=s;s=an(s);for(let r=0;r<Is.length;r++){const i=Is[r]+s;if(i in e)return _n[t]=i}return t}const Bs="http://www.w3.org/1999/xlink";function ga(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Bs,t.slice(6,t.length)):e.setAttributeNS(Bs,t,n);else{const i=li(t);n==null||i&&!Qs(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function va(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Qs(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}const[Qr,Ta]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Un=0;const ya=Promise.resolve(),Ca=()=>{Un=0},Sa=()=>Un||(ya.then(Ca),Un=Qr());function gt(e,t,n,s){e.addEventListener(t,n,s)}function ba(e,t,n,s){e.removeEventListener(t,n,s)}function Aa(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=_a(t);if(s){const f=i[t]=wa(s,r);gt(e,a,f,c)}else o&&(ba(e,a,o,c),i[t]=void 0)}}const Hs=/(?:Once|Passive|Capture)$/;function _a(e){let t;if(Hs.test(e)){t={};let n;for(;n=e.match(Hs);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[At(e.slice(2)),t]}function wa(e,t){const n=s=>{const r=s.timeStamp||Qr();(Ta||r>=n.attached-1)&&_e(Ra(s,n.value),t,5,[s])};return n.value=e,n.attached=Sa(),n}function Ra(e,t){if(k(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const $s=/^on[a-z]/,Da=(e,t,n,s,r=!1,i,o,a,c)=>{t==="class"?ha(e,s,r):t==="style"?pa(e,n,s):sn(t)?zn(t)||Aa(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ea(e,t,s,r))?va(e,t,s,i,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ga(e,t,s,r))};function Ea(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&$s.test(t)&&O(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||$s.test(t)&&oe(n)?!1:t in e}const qe="transition",Et="animation",ls=(e,{slots:t})=>ca(kr,Ma(e),t);ls.displayName="Transition";const ei={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ls.props=le({},kr.props,ei);const et=(e,t=[])=>{k(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ws=e=>e?k(e)?e.some(t=>t.length>1):e.length>1:!1;function Ma(e){const t={};for(const E in e)E in ei||(t[E]=e[E]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:f=o,appearToClass:h=a,leaveFromClass:T=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,L=La(r),I=L&&L[0],P=L&&L[1],{onBeforeEnter:H,onEnter:he,onEnterCancelled:Z,onLeave:j,onLeaveCancelled:pe,onBeforeAppear:Pe=H,onAppear:N=he,onAppearCancelled:te=Z}=t,J=(E,Q,Me)=>{ht(E,Q?h:a),ht(E,Q?f:o),Me&&Me()},ge=(E,Q)=>{ht(E,w),ht(E,p),Q&&Q()},ue=E=>(Q,Me)=>{const ct=E?N:he,ae=()=>J(Q,E,Me);et(ct,[Q,ae]),Ns(()=>{ht(Q,E?c:i),ze(Q,E?h:a),Ws(ct)||Ks(Q,s,I,ae)})};return le(t,{onBeforeEnter(E){et(H,[E]),ze(E,i),ze(E,o)},onBeforeAppear(E){et(Pe,[E]),ze(E,c),ze(E,f)},onEnter:ue(!1),onAppear:ue(!0),onLeave(E,Q){const Me=()=>ge(E,Q);ze(E,T),Fa(),ze(E,p),Ns(()=>{ht(E,T),ze(E,w),Ws(j)||Ks(E,s,P,Me)}),et(j,[E,Me])},onEnterCancelled(E){J(E,!1),et(Z,[E])},onAppearCancelled(E){J(E,!0),et(te,[E])},onLeaveCancelled(E){ge(E),et(pe,[E])}})}function La(e){if(e==null)return null;if(ee(e))return[wn(e.enter),wn(e.leave)];{const t=wn(e);return[t,t]}}function wn(e){return Xt(e)}function ze(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function ht(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ns(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ka=0;function Ks(e,t,n,s){const r=e._endId=++ka,i=()=>{r===e._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=xa(e,t);if(!o)return s();const f=o+"end";let h=0;const T=()=>{e.removeEventListener(f,p),i()},p=w=>{w.target===e&&++h>=c&&T()};setTimeout(()=>{h<c&&T()},a+1),e.addEventListener(f,p)}function xa(e,t){const n=window.getComputedStyle(e),s=L=>(n[L]||"").split(", "),r=s(qe+"Delay"),i=s(qe+"Duration"),o=Us(r,i),a=s(Et+"Delay"),c=s(Et+"Duration"),f=Us(a,c);let h=null,T=0,p=0;t===qe?o>0&&(h=qe,T=o,p=i.length):t===Et?f>0&&(h=Et,T=f,p=c.length):(T=Math.max(o,f),h=T>0?o>f?qe:Et:null,p=h?h===qe?i.length:c.length:0);const w=h===qe&&/\b(transform|all)(,|$)/.test(n[qe+"Property"]);return{type:h,timeout:T,propCount:p,hasTransform:w}}function Us(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>qs(n)+qs(e[s])))}function qs(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Fa(){return document.body.offsetHeight}const zs=e=>{const t=e.props["onUpdate:modelValue"];return k(t)?n=>zt(t,n):t};function Oa(e){e.target.composing=!0}function Vs(e){const t=e.target;t.composing&&(t.composing=!1,Pa(t,"input"))}function Pa(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Ia={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=zs(r);const i=s||r.props&&r.props.type==="number";gt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n?a=a.trim():i&&(a=Xt(a)),e._assign(a)}),n&&gt(e,"change",()=>{e.value=e.value.trim()}),t||(gt(e,"compositionstart",Oa),gt(e,"compositionend",Vs),gt(e,"change",Vs))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=zs(i),e.composing||document.activeElement===e&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&Xt(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Ba=["ctrl","shift","alt","meta"],Ha={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ba.some(n=>e[`${n}Key`]&&!t.includes(n))},Ct=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const i=Ha[t[r]];if(i&&i(n,t))return}return e(n,...s)},$a=le({patchProp:Da},da);let Gs;function Wa(){return Gs||(Gs=Wo($a))}const Na=(...e)=>{const t=Wa().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Ka(s);if(!r)return;const i=t._component;!O(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Ka(e){return oe(e)?document.querySelector(e):e}const Ua={class:"markdown-body"},qa=Jo('<h2>What is it?</h2><p>The Project Diablo 2 Runewizard lets you check easily what runewords you can make in Project Diablo 2, including all updated stats and requirements.</p><p>Click on the runes to mark which ones you have found. The available runewords will be highlighted automatically.</p><p>The table can be sorted : try clicking on the table headings, you may find it useful!</p><p>You can easily search through runeword stats, item types, runes and names of runewords.</p><h2>Runes</h2><p>The runes are listed in order of rarity, from top to bottom, and left to right. The runes upgrade formula in Project Diablo 2 has been changed to the following:</p><p><strong>El - Pul: 3 runes + Key</strong></p><p><strong>Um - Zod: 2 runes + Key</strong></p><h2>Runewords</h2><p><strong>Season 13 New and Updated Runewords</strong> have a small <span class="rw-Table-tdTitlePatch">S13 New/Upd</span> icon next to the name.</p><h2>Note about storage</h2><p>Your selection of runes is saved in the browser\u2019s <em>local storage</em>. Keep in mind that manually clearing your browser cache may reset the selected runes.</p>',13),za=[qa],Va={setup(e,{expose:t}){return t({frontmatter:{}}),(s,r)=>(M(),F("div",Ua,za))}};var ce=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n};const Ga=We({name:"HelpBox",components:{HelpText:Va}}),ja={class:"rw-Help text-md"};function Ja(e,t,n,s,r,i){const o=re("HelpText");return M(),F("div",ja,[W(o,{class:""})])}var Ya=ce(Ga,[["render",Ja]]);const Xa={name:"PhChatsBold"},Za={width:"1em",height:"1em",viewBox:"0 0 256 256"},Qa=b("path",{d:"M236 96a20.023 20.023 0 0 0-20-20h-27.999V48a20.023 20.023 0 0 0-20-20h-128a20.023 20.023 0 0 0-20 20v128a12 12 0 0 0 19.544 9.332L68 162.328V184a20.023 20.023 0 0 0 20 20h92.173l36.283 29.332A12 12 0 0 0 236.001 224zM44.001 150.868V52h120v35.981l-.001.02l.001.019V132H71.583a11.999 11.999 0 0 0-7.544 2.668zm147.96 31.8a11.999 11.999 0 0 0-7.543-2.668H92.001v-24h76a20.023 20.023 0 0 0 20-20v-36H212l.001 98.868z",fill:"currentColor"},null,-1),el=[Qa];function tl(e,t,n,s,r,i){return M(),F("svg",Za,el)}var nl=ce(Xa,[["render",tl]]);const sl={name:"FaSolidChevronDown"},rl={width:"0.88em",height:"1em",viewBox:"0 0 448 512"},il=b("path",{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",fill:"currentColor"},null,-1),ol=[il];function al(e,t,n,s,r,i){return M(),F("svg",rl,ol)}var ll=ce(sl,[["render",al]]),cl="/pd2-runewizard/assets/logo-rune.d95a8cd0.png",ul="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAAAgCAMAAABw1N62AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFdQTFRFt6+XAAAAubOWubGWurGXubCXurCXu7GXv6+furGXurCWurGYu6+XurCWubGXurGWurCXubGXurKXuq+Vu7KWurKWu7KYurCXubGXubCWurCWubGWubGW27u9qQAAAB10Uk5TIABQoP/fv38QkO9vQOCAwJ+wYDBwP0/w0K/Pj19U6DckAAAF80lEQVR4nO2a63ajOAyAHTAJoQQKpANN9v2fcyUbX3RxmnTndOfsWf1KAFvyJ1mWDcYc/penxVS13aU5ntp/25w/XCC0zjZK9/YzWvs/rqPnBGhV1l6GYahH5PX+I1qn39XR8NxsqH6TOqDVWzu63y1G2Uxut8MJZeHNru5yMKJ3/7J5XLn/V9LE9+Tk3YbuT7F7438a3r2/3BcUDc2JCVW6N+sUqG0w6O1D3u2zHn+l2zktsBImI0v7QHBUdEFArunJ9mLtOb9tVmuZQ20usSFmTe8LM8HPoAl+rzuhzdotTjhUVGedDpaLRmu0g3I1S0EyYaOiKJ9BP6UF/fJBwl1VVdbIW01TyJiIxAYKLffgHs7tFsAdDsfUX2PXLLTPVJGglRsVZIEVTBsCDO0yjuOKK5woDUDRNu53rT16nIzWVbB5mhZ1qkYr9tOv6bKx9pZUHeOvEEEz1c/cMgzZMNsu4c6lFgmGmoQBfuP3oiJTYQw2rmNGqxfeeZoWNfQhrUM+mc5pKFOwEEIrUIDQyqcJp5VrmHRTwR+rHlzxeeFsqmiBqO9ccqWEZpZ/XqHV5bge08rH36ahmD24+mQFCy055YmlF22JrO1aiQTDTLqIKUwVgUtxpWC0zt+fiRTXY1rcrhBctTfxFuOpbezlwSBygUfVWzA/z0DjqI4hmDTZTlqV9za53EBpQT60LN89TWskuF6gJYIri6eBZ5wyLbijlnEDDmlWmyU9Z2EuUwRGwn9Cy9zo+ozy/JpY5+UHo2VaQovmYh5cKVVBXNDQKtMCR6/aPIQucEirhjKZNNqN3eOKKkSTaLUfd1hTNq7xhQoCl5bQnNHq52KWF8H1KLTKtEa91ApRNYhJc8hoLTJKhCI00tOKIt3zSr2V4eK0mjfYVX14ebuzlDokHRigD0KrSOuql1oxf7eSR6JlGslSqyAXQmtVtl0vVadjxMVpPa4hLzbsTTA/xCAZ5FJWoFUqtTC0fHTWSnB5B/7COSXqMaEIL3hasKuGkkLFUqaVJ4K9byzHPa7XaNHJF+LJKPFSoFUotXDfdImdiSeSQbJ4FYrmSGv0A1UrXlGBOWn1Eht7cccYnNaGWbLfZRAQUnANaZtSK2R0WqVSC2+EQB2t2FsHVpNyJCoUXXNaRVx6Quh1WhHX4ywv+Mfgwim1W6GFlk6rVGqhGTETK5PEOXDL1qZHimpCq4TrIkqRvbOK/t37xsTzLmi1tIKQvgzB5crcJpr39SD2i/qJ2ZJPjIvY/jiTWh2XUASP0fMtFddZzZ9TOl1hfS8O1wvVqZM9uAysgvumTQ0tlVap1GKpfRaD8zp1XFxRix4h1amKK50M0IvEm2QPCriGV2mh64wb3tz6ODuqXtJolUotBJ6XDWJvHc4gNFxc0YRk6M5HxaUYIxIF6Rtxda/Scoc0Pp5cnPVagaTSKpZafC6LgiQmSwUXU1S5pZrtqjVcvTxQrbmBtO+FnfgR00oCTjH78DC4jlrxrdEqllo4ebr8EPrOZ0k0ScFFFUGGQNKMlooLF3Wyw7yLBZsNYv6ClnZ8gjN+twSaf+qhpdBipZZZ8meFkMappcRFFFXdnlb5CaCGCw8f77GvHqbhyrzJBzE/psW3sE7GNBp3KK6+Fxa0eKk1pDN82EKNVFi2zUwSuDJFLbjO+86/IcunlcPFXpQhrub+1wJb7xM25bCeO5c/hlc+N60mcfX+bshsC6Ellypw3Wc22Y7p9lXm25H4gJT3HBcoesNN7emzsXEz5t++krVCwzWvZOMi1tuaJ9CNVhiH4lsMOpbgha1UE0xM0dlyiRHRyT7o+l4RlzhcieWU9xmKfVNhrNjb6UDbQSgRPe0QXxlNYgnv79ggf5/4DheO9MX317RMMr7Xl4RdURrTUspMfd1p4QmDaM6+eXvCoLmnweCwu7u/2b/H/i7jNc4kNTnobl0GlOq730pktht+DrNLnbn2m2ra6Mu+Vja42zqoI35Sfu4TG/Ke58unv/39SpWCxUy8dJye/BKgJP/tD5I4m3862r8BDNFq5mSmfvcAAAAASUVORK5CYII=";const fl=We({name:"AppHeader",components:{HelpBox:Ya,IconChat:nl,IconChevronDown:ll},data(){return{isHelpVisible:!1,envGameName:"Project Diablo 2",envGameVersion:"Season 13 Betrayal",envGithubRepoUrl:"https://github.com/kvothed2/pd2-runewizard/"}}}),dl={class:"rw-Layout-rowContainer h-[106px] flex"},hl=b("div",{class:"pr-[20px] pt-[17px]"},[b("img",{src:cl,alt:"Rune icon original art (c) BLIZZARD ENTERTAINMENT",class:"w-[69px] h-[67px]"})],-1),pl={class:"flex-1"},ml=b("h1",{class:"text-black text-[0px] mt-[19px] mb-[5px] w-[301px] h-[32px]"},[b("img",{src:ul,alt:"PD2 Runewizard",class:"block w-full h-full"})],-1),gl={class:"flex justify-between items-center"},vl={class:"text-lg text-[#e9bf40]"},Tl=Xe(" for "),yl={class:"text-[#e9bf40] font-bold"},Cl={class:"ml-2 text-[#90b7ff]"},Sl={class:"flex items-center text-[#514f4a]"},bl=b("span",{class:"ml-1"},X("Help"),-1),Al=["href"],_l=b("span",null,X("Discord"),-1),wl=b("div",{class:"rw-Layout-goldBarSeparator mb-2"},null,-1),Rl={key:0,class:"rw-Layout-rowContainer mb-4"};function Dl(e,t,n,s,r,i){const o=re("icon-chevron-down"),a=re("icon-chat"),c=re("help-box");return M(),F("header",null,[b("div",dl,[hl,b("div",pl,[ml,b("div",gl,[b("div",vl,[Tl,b("span",yl,X(e.envGameName),1),b("span",Cl,X(e.envGameVersion),1)]),b("div",Sl,[b("a",{href:"#",class:"rw-HelpLink mr-6",onClick:t[0]||(t[0]=Ct(f=>e.isHelpVisible=!e.isHelpVisible,["prevent"]))},[W(o,{class:fe(["ux-icon ux-icon--fw",{"transform rotate-180":e.isHelpVisible}])},null,8,["class"]),bl]),b("a",{href:"https://discord.gg/DWYBG2qd3u",class:"rw-Header-link"},[W(a,{class:"ux-icon ux-icon--fw ux-icon--lg mr-1"}),_l],8,Al)])])])]),wl,W(ls,{name:"fadein"},{default:Er(()=>[e.isHelpVisible?(M(),F("div",Rl,[W(c)])):ye("",!0)]),_:1})])}var El=ce(fl,[["render",Dl]]);const Ml={name:"FaGithub"},Ll={width:"1.03em",height:"1em",viewBox:"0 0 1536 1504"},kl=b("path",{d:"M768 0q209 0 385.5 103T1433 382.5T1536 768q0 251-146.5 451.5T1011 1497q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142q57-6 102.5-18t94-39t81-66.5t53-105T1258 728q0-119-79-206q37-91-8-204q-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T450 331.5T365 318q-45 113-8 204q-79 87-79 206q0 85 20.5 150T351 983t80.5 67t94 39t102.5 18q-39 36-49 103q-21 10-45 15t-57 5t-65.5-21.5T356 1146q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5t9 14t13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30t69.5 7t55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5T0 768q0-209 103-385.5T382.5 103T768 0zM291 1103q3-7-7-12q-10-3-13 2q-3 7 7 12q9 6 13-2zm31 34q7-5-2-16q-10-9-16-3q-7 5 2 16q10 10 16 3zm30 45q9-7 0-19q-8-13-17-6q-9 5 0 18t17 7zm42 42q8-8-4-19q-12-12-20-3q-9 8 4 19q12 12 20 3zm57 25q3-11-13-16q-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11q-16 0-16 11q0 13 17 11q16 0 16-11zm58-10q-2-11-18-9q-16 3-14 15t18 8t14-14z",fill:"currentColor"},null,-1),xl=[kl];function Fl(e,t,n,s,r,i){return M(),F("svg",Ll,xl)}var Ol=ce(Ml,[["render",Fl]]);const Pl=We({name:"AppFooter",components:{IconGithub:Ol},data(){return{envGithubRepoUrl:"https://github.com/kvothed2/pd2-runewizard/",envMainSiteUrl:"https://kvothed2.github.io/pd2-runewizard/"}}}),Il={class:"rw-Footer min-h-[200px]"},Bl=b("div",{class:"rw-Layout-goldBarSeparator opacity-50 mb-6"},null,-1),Hl={class:"text-center text-lg text-gold leading-1"},$l=Xe(" Maintenance "),Wl=["href"],Nl=b("span",{class:""},X("kvothed2/pd2-runewizard"),-1),Kl=b("br",null,null,-1),Ul=Xe(" Original "),ql=["href"],zl=b("span",{class:""},X("fabd/diablo2-runewizard"),-1);function Vl(e,t,n,s,r,i){const o=re("icon-github");return M(),F("footer",Il,[Bl,b("div",Hl,[b("div",null,[$l,b("a",{href:e.envGithubRepoUrl,class:"rw-Footer-link ml-2"},[W(o,{class:"ux-icon ux-icon--fw mr-1 mt-[-0.2em]"}),Nl],8,Wl)]),Kl,b("div",null,[Ul,b("a",{href:"https://github.com/fabd/diablo2-runewizard",class:"rw-Footer-link ml-2"},[W(o,{class:"ux-icon ux-icon--fw mr-1 mt-[-0.2em]"}),zl],8,ql)])])])}var Gl=ce(Pl,[["render",Vl]]),jt=(e=>(e[e.COMMON=1]="COMMON",e[e.SEMIRARE=2]="SEMIRARE",e[e.RARE=3]="RARE",e))(jt||{});const ti=[{name:"El",tier:1},{name:"Eld",tier:1},{name:"Tir",tier:1},{name:"Nef",tier:1},{name:"Eth",tier:1},{name:"Ith",tier:1},{name:"Tal",tier:1},{name:"Ral",tier:1},{name:"Ort",tier:1},{name:"Thul",tier:1},{name:"Amn",tier:1},{name:"Sol",tier:2},{name:"Shael",tier:2},{name:"Dol",tier:2},{name:"Hel",tier:2},{name:"Io",tier:2},{name:"Lum",tier:2},{name:"Ko",tier:2},{name:"Fal",tier:2},{name:"Lem",tier:2},{name:"Pul",tier:2},{name:"Um",tier:2},{name:"Mal",tier:3},{name:"Ist",tier:3},{name:"Gul",tier:3},{name:"Vex",tier:3},{name:"Ohm",tier:3},{name:"Lo",tier:3},{name:"Sur",tier:3},{name:"Ber",tier:3},{name:"Jah",tier:3},{name:"Cham",tier:3},{name:"Zod",tier:3}];function jl(){return ti.map(e=>e.name)}const js="runewizard",se={state:cn({haveRunes:[],pinned:new Set}),storage:null,initialize(){this.storage=window.localStorage,se.reset()},clearRunes(){this.setRunes(jl(),!1)},getRunes(){const e=[];for(const t of Object.keys(this.state.haveRunes))this.state.haveRunes[t]&&e.push(t);return e},setRunes(e,t=!0){for(const n of e)this.state.haveRunes[n]=t},hasRune(e){return this.state.haveRunes[e]||!1},reset(){this.clearRunes()},getPinned(){return Array.from(this.state.pinned.values())},isPinned(e){return this.state.pinned.has(e)},setPinned(e,t=!0){const n=t?"add":"delete";e.forEach(s=>{this.state.pinned[n](s)})},loadState(){if(!this.storage)return;const e=this.storage.getItem(js);if(!e)return;const t=JSON.parse(e);this.setRunes(t.selectedRunes),this.setPinned(t.pinnedRunewords||[])},saveState(){let e="";if(!this.storage)return;const t={selectedRunes:this.getRunes(),pinnedRunewords:this.getPinned()};try{e=JSON.stringify(t)}catch{}this.storage.setItem(js,e)}},Jl={name:"TopcoatCancel"},Yl={width:"1em",height:"1em",viewBox:"0 0 42 42"},Xl=b("path",{fillRule:"evenodd",d:"M21.002 26.588l10.357 10.604c1.039 1.072 1.715 1.083 2.773 0l2.078-2.128c1.018-1.042 1.087-1.726 0-2.839L25.245 21L36.211 9.775c1.027-1.055 1.047-1.767 0-2.84l-2.078-2.127c-1.078-1.104-1.744-1.053-2.773 0L21.002 15.412L10.645 4.809c-1.029-1.053-1.695-1.104-2.773 0L5.794 6.936c-1.048 1.073-1.029 1.785 0 2.84L16.759 21L5.794 32.225c-1.087 1.113-1.029 1.797 0 2.839l2.077 2.128c1.049 1.083 1.725 1.072 2.773 0l10.358-10.604z",fill:"currentColor"},null,-1),Zl=[Xl];function Ql(e,t,n,s,r,i){return M(),F("svg",Yl,Zl)}var ni=ce(Jl,[["render",Ql]]);const ec=We({name:"Runes",components:{IconCancel:ni},data(){return{haveRunes:se.state.haveRunes,runes:ti}},computed:{isAnyRuneSelected(){return se.getRunes().length>0},runesByTier(){return[this.runes.filter(t=>t.tier===jt.COMMON),this.runes.filter(t=>t.tier===jt.SEMIRARE),this.runes.filter(t=>t.tier===jt.RARE)]}},methods:{onClearRunes(){se.clearRunes(),se.saveState()},onToggleRune(e){const t=se.hasRune(e);se.setRunes([e],!t),se.saveState()}}}),tc={class:"relative"},nc={class:"flex justify-between items-center mb-2"},sc=b("h2",{class:"rw-Title-h2 mb-0"},"Runes",-1),rc={key:0,class:"-mt-2px"},ic=Xe("clear "),oc={class:"rw-Runes flex justify-between w-[130px] select-none"},ac=["onClick"],lc={class:"mx-auto my-auto"};function cc(e,t,n,s,r,i){const o=re("icon-cancel");return M(),F("div",tc,[b("div",nc,[sc,e.isAnyRuneSelected?(M(),F("div",rc,[b("a",{class:"rw-Runes-clear",href:"#",onClick:t[0]||(t[0]=Ct((...a)=>e.onClearRunes&&e.onClearRunes(...a),["prevent"]))},[W(o,{class:"ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"}),ic])])):ye("",!0)]),b("div",oc,[(M(!0),F(ne,null,St(e.runesByTier,(a,c)=>(M(),F("div",{key:c,class:"w-1/3"},[(M(!0),F(ne,null,St(a,f=>(M(),F("div",{key:f.name,class:fe(["rw-Rune mx-auto",{"is-selected":e.haveRunes[f.name]}]),onClick:h=>e.onToggleRune(f.name)},[b("span",lc,X(f.name),1)],10,ac))),128))]))),128))])])}var uc=ce(ec,[["render",cc]]);const Js=[{title:"Ancient's Pledge",runes:["Ral","Ort","Tal"],level:21,ttypes:["Shields"]},{title:"Black",runes:["Thul","Io","Nef"],level:35,ttypes:["Clubs","Hammers","Maces","Claws"],version:""},{title:"Fury",runes:["Jah","Gul","Eth"],level:65,ttypes:["Melee Weapons","Throwing Weapons"],version:"S13 Upd"},{title:"Holy Thunder",runes:["Eth","Ral","Ort","Tal"],level:21,ttypes:["Scepters"]},{title:"Honor",runes:["Amn","El","Ith","Tir","Sol"],level:27,ttypes:["Melee Weapons"],version:""},{title:"King's Grace",runes:["Amn","Ral","Thul"],level:25,ttypes:["Swords","Scepters","Claws","Throwing Weapons"],version:""},{title:"Leaf",runes:["Tir","Ral"],level:19,ttypes:["Staves"],tinfos:""},{title:"Lionheart",runes:["Hel","Lum","Fal"],level:41,ttypes:["Body Armors"]},{title:"Lore",runes:["Ort","Sol"],level:27,ttypes:["Helms"],version:""},{title:"Malice",runes:["Ith","El","Eth"],level:15,ttypes:["Melee Weapons","Throwing Weapons"],version:""},{title:"Melody",runes:["Shael","Ko","Nef"],level:39,ttypes:["Missile Weapons"]},{title:"Memory",runes:["Lum","Io","Sol","Eth"],level:37,ttypes:["Staves"],tinfos:"",version:""},{title:"Nadir",runes:["Nef","Tir"],level:13,ttypes:["Helms"],version:""},{title:"Radiance",runes:["Nef","Sol","Ith"],level:27,ttypes:["Helms"]},{title:"Rhyme",runes:["Shael","Eth"],level:29,ttypes:["Shields"]},{title:"Silence",runes:["Dol","Eld","Hel","Ist","Tir","Vex"],level:55,ttypes:["Weapons"]},{title:"Smoke",runes:["Nef","Lum"],level:37,ttypes:["Body Armors"]},{title:"Stealth",runes:["Tal","Eth"],level:17,ttypes:["Body Armors"]},{title:"Steel",runes:["Tir","El"],level:13,ttypes:["Swords","Axes","Maces","Claws","Throwing Weapons"],version:""},{title:"Strength",runes:["Amn","Tir"],level:25,ttypes:["Melee Weapons","Throwing Weapons"],version:""},{title:"Venom",runes:["Tal","Dol","Mal"],level:49,ttypes:["Weapons","Throwing Weapons"],version:""},{title:"Wealth",runes:["Lem","Ko","Tir"],level:43,ttypes:["Body Armors"]},{title:"White",runes:["Dol","Io"],level:35,ttypes:["Wands"],version:""},{title:"Zephyr",runes:["Ort","Eth"],level:21,ttypes:["Missile Weapons","Throwing Weapons"],version:""},{title:"Beast",runes:["Ber","Tir","Um","Mal","Lum"],level:63,ttypes:["Axes","Scepters","Hammers","Staves"],version:"S13 Upd"},{title:"Bramble",runes:["Ral","Ohm","Sur","Eth"],level:61,ttypes:["Body Armors"],version:""},{title:"Breath of the Dying",runes:["Vex","Hel","El","Eld","Zod","Eth"],level:69,ttypes:["Weapons"],version:""},{title:"Call to Arms",runes:["Amn","Ral","Mal","Ist","Ohm"],level:57,ttypes:["Melee Weapons"],version:"S13 Upd"},{title:"Chaos",runes:["Fal","Ohm","Um"],level:57,ttypes:["Claws"],version:""},{title:"Chains of Honor",runes:["Dol","Um","Ber","Ist"],level:63,ttypes:["Body Armors"],version:"S13 Upd"},{title:"Crescent Moon",runes:["Shael","Um","Tir"],level:47,ttypes:["Axes","Swords","Polearms","Spears","Claws","Throwing Weapons","Scepters"],version:""},{title:"Delirium",runes:["Lem","Ist","Io"],level:51,ttypes:["Helms"]},{title:"Doom",runes:["Hel","Ohm","Um","Lo","Cham"],level:67,ttypes:["Axes","Polearms","Hammers","Spears","Swords","Staves","Scepters"],version:""},{title:"Duress",runes:["Shael","Um","Thul"],level:47,ttypes:["Body Armors"]},{title:"Enigma",runes:["Jah","Ith","Ber"],level:65,ttypes:["Body Armors"],version:""},{title:"Eternity",runes:["Amn","Ber","Ist","Sol","Sur"],level:63,ttypes:["Melee Weapons"]},{title:"Exile",runes:["Vex","Ohm","Ist","Dol"],level:57,ttypes:["Shields"],version:""},{title:"Famine",runes:["Fal","Ohm","Ort","Jah"],level:65,ttypes:["Axes","Hammers","Swords"]},{title:"Gloom",runes:["Fal","Um","Pul"],level:47,ttypes:["Body Armors"],version:""},{title:"Hand of Justice",runes:["Sur","Cham","Amn","Lo"],level:67,ttypes:["Weapons"]},{title:"Heart of the Oak",runes:["Ko","Vex","Pul","Thul"],level:55,ttypes:["Staves","Maces"]},{title:"Kingslayer",runes:["Mal","Um","Gul","Fal"],level:53,ttypes:["Swords","Axes"],version:""},{title:"Passion",runes:["Dol","Ort","Eld","Lem"],level:43,ttypes:["Weapons"],version:""},{title:"Prudence",runes:["Mal","Tir"],level:49,ttypes:["Body Armors"],version:""},{title:"Sanctuary",runes:["Ko","Ko","Mal"],level:49,ttypes:["Shields"],version:""},{title:"Splendor",runes:["Eth","Lum"],level:37,ttypes:["Shields"]},{title:"Stone",runes:["Shael","Um","Pul","Lum"],level:47,ttypes:["Body Armors"],version:""},{title:"Wind",runes:["Sur","El"],level:61,ttypes:["Melee Weapons","Throwing Weapons"],version:""},{title:"Brand",runes:["Jah","Lo","Mal","Gul"],level:65,ttypes:["Missile Weapons"],version:""},{title:"Death",runes:["Hel","El","Vex","Ort","Gul"],level:55,ttypes:["Swords","Axes"],version:""},{title:"Destruction",runes:["Vex","Lo","Ber","Jah","Ko"],level:65,ttypes:["Polearms","Swords","Spears","Staves"],version:""},{title:"Dragon",runes:["Sur","Lo","Sol"],level:61,ttypes:["Body Armors","Shields"],version:""},{title:"Dream",runes:["Io","Jah","Pul"],level:65,ttypes:["Helms","Shields"],version:""},{title:"Edge",runes:["Tir","Tal","Amn"],level:25,ttypes:["Missile Weapons"],version:""},{title:"Faith",runes:["Ohm","Jah","Lem","Eld"],level:65,ttypes:["Missile Weapons"],version:""},{title:"Fortitude",runes:["El","Sol","Dol","Lo"],level:59,ttypes:["Weapons","Body Armors"],version:""},{title:"Grief",runes:["Eth","Tir","Lo","Mal","Ral"],level:59,ttypes:["Swords","Axes","Polearms"],version:""},{title:"Harmony",runes:["Tir","Ith","Sol","Ko"],level:39,ttypes:["Missile Weapons"],version:""},{title:"Ice",runes:["Amn","Shael","Jah","Lo"],level:65,ttypes:["Missile Weapons"]},{title:"Infinity",runes:["Ber","Mal","Ber","Ist"],level:63,ttypes:["Polearms","Spears","Staves"],version:"S13 Upd"},{title:"Insight",runes:["Ral","Tir","Tal","Sol"],level:27,ttypes:["Polearms","Staves","Spears"],version:"S13 Upd"},{title:"Last Wish",runes:["Jah","Mal","Jah","Sur","Jah","Ber"],level:65,ttypes:["Swords","Hammers","Axes","Staves"],version:"S13 Upd"},{title:"Lawbringer",runes:["Amn","Lem","Ko"],level:43,ttypes:["Swords","Hammers","Scepters","Claws","Throwing Weapons"],version:""},{title:"Oath",runes:["Shael","Pul","Mal","Lum"],level:49,ttypes:["Swords","Axes","Maces"],version:""},{title:"Obedience",runes:["Hel","Ko","Thul","Eth","Fal"],level:41,ttypes:["Polearms","Spears","Hammers"]},{title:"Phoenix",runes:["Vex","Vex","Lo","Jah"],level:65,ttypes:["Weapons","Shields"],version:"S13 Upd"},{title:"Pride",runes:["Cham","Sur","Io","Lo"],level:67,ttypes:["Polearms","Spears","Staves"],version:""},{title:"Rift",runes:["Hel","Ko","Lem","Gul"],level:53,ttypes:["Polearms","Scepters","Swords","Spears"],version:""},{title:"Spirit",runes:["Tal","Thul","Ort","Amn"],level:25,ttypes:["Swords","Shields","Staves"],version:""},{title:"Voice of Reason",runes:["Lem","Ko","El","Eld"],level:43,ttypes:["Swords","Maces","Missile Weapons","Scepters"],version:""},{title:"Wrath",runes:["Pul","Lum","Ber","Mal"],level:63,ttypes:["Missile Weapons"]},{title:"Bone",runes:["Sol","Um","Um"],level:47,ttypes:["Body Armors"],tinfos:""},{title:"Enlightenment",runes:["Pul","Ral","Sol"],level:45,ttypes:["Body Armors"],tinfos:"",version:""},{title:"Myth",runes:["Hel","Amn","Nef"],level:25,ttypes:["Body Armors"],tinfos:"",version:""},{title:"Peace",runes:["Shael","Thul","Amn"],level:29,ttypes:["Body Armors"],tinfos:"",version:"S13 Upd"},{title:"Principle",runes:["Ral","Gul","Eld"],level:53,ttypes:["Body Armors"],version:"S13 Upd"},{title:"Rain",runes:["Ort","Mal","Ith"],level:49,ttypes:["Body Armors"],tinfos:"",version:""},{title:"Treachery",runes:["Shael","Thul","Lem"],level:43,ttypes:["Body Armors"],tinfos:""},{title:"Plague",runes:["Cham","Fal","Um"],level:67,ttypes:["Weapons","Throwing Weapons"],version:""},{title:"Flickering Flame",runes:["Nef","Pul","Vex"],level:55,ttypes:["Helms"],version:""},{title:"Pattern",runes:["Tal","Ort","Tir"],level:21,ttypes:["Claws"]},{title:"Unbending Will",runes:["Fal","Io","Ith","Eld","El","Hel"],level:41,ttypes:["Swords"]},{title:"Wisdom",runes:["Pul","Ith","Eld"],level:45,ttypes:["Helms"]},{title:"Obsession",runes:["Zod","Ist","Lem","Lum","Io","Nef"],level:69,ttypes:["Staves"],version:""},{title:"Mist",runes:["Cham","Shael","Gul","Thul","Ith"],level:67,ttypes:["Missile Weapons"],version:""},{title:"Shattered Wall",runes:["Zod","Jah","Ral","Cham"],level:69,ttypes:["Paladin Shields"],version:""},{title:"Ferocity",runes:["Zod","Cham","Shael"],level:69,ttypes:["Helms"],version:""},{title:"Neophyte",runes:["Thul","Tir"],level:23,ttypes:["Orbs","Claws","Scepters","Clubs","Staves"],version:""},{title:"Rampage",runes:["Shael","El","Ith","Eth"],level:29,ttypes:["Polearms","Spears","Staves"],version:""},{title:"Dominion",runes:["Cham","Ohm"],level:67,ttypes:["Wands"]},{title:"Zenith",runes:["Jah","Zod","Ort","Thul","Ral"],level:69,ttypes:["2-H Swords","Polearms","Spears","Missile Weapons","Staves"],version:""},{title:"Asylum",runes:["Gul","Cham","Hel","Jah","Dol","Um"],level:67,ttypes:["Staves","Hammers","Missile Weapons","Polearms","Spears","2-H Swords"],version:"S13 Upd"},{title:"Hustle",runes:["Shael","Ko","Eld"],level:39,ttypes:["Body Armors"],version:""},{title:"Innocence",runes:["Gul","Lem","Zod","Hel"],level:69,ttypes:["Body Armors"],version:""},{title:"Rapture",runes:["Vex","Jah","Lo","Ral","Ko","Mal"],level:65,ttypes:["Hammers"],version:"S13 Upd"},{title:"Purity",runes:["Amn","Eth","Thul"],level:25,ttypes:["Polearms","Spears","Staves","Missile Weapons"],version:""},{title:"Loyalty",runes:["Pul","Tir","Dol"],level:45,ttypes:["Spears","Missile Weapons"],version:""},{title:"Epiphany",runes:["Lo","Ith","Lo","Ist"],level:59,ttypes:["Shields"],version:""},{title:"Ancient's Foresight",runes:["Ral","Thul"],level:25,ttypes:["Quivers"],version:""},{title:"Ancient's Scripture",runes:["Tal","Ort"],level:25,ttypes:["Quivers"],version:""},{title:"Echo",runes:["Sol","Dol"],level:31,ttypes:["Quivers","Throwing Weapons"],version:""}],si={"Ancient's Pledge":`
  +50% Enhanced Defense
  Cold Resist +43%
  Fire Resist +48%
  Lightning Resist +48%
  Poison Resist +48%
  10% Damage Taken Goes To Mana
  `,Black:`
  15% Increased Attack Speed
  +100% Enhanced Damage
  40% Chance Of Crushing Blow
  Damage +20-30
  +200 To Attack Rating
  Adds 3-14 Cold Damage
  +10 To Vitality
  Knockback
  Magic Damage Reduced By 2
  Level 4 Corpse Explosion (12 Charges)
  `,Fury:`
  Indestructible
  40% Increased Attack Speed
  +239-299% Enhanced Damage (varies)
  Ignore Target's Defense
  -25% Target Defense
  50% Bonus To Attack Rating
  6% Life Stolen Per Hit
  50% Deadly Strike
  +5 To Frenzy (Barbarian Only)
  +5 To Deep Wounds (Barbarian Only)
  `,"Holy Thunder":`
  +60% Enhanced Damage
  -25% Target Defense
  Adds 5-30 Fire Damage
  Adds 21-110 Lightning Damage
  +75 Poison Damage Over 5 Seconds
  +10 To Maximum Damage
  Lightning Resistance +60%
  +5% To Maximum Lightning Resistance
  +3 To Holy Shock (Paladin Only)
  Level 7 Chain Lightning (60 Charges)
  `,Honor:`
  +1 to All Skills
  +160-200% Enhanced Damage (varies)
  +9 To Minimum Damage
  +9 To Maximum Damage
  25% Deadly Strike
  +250 To Attack Rating
  7% Life Stolen Per Hit
  Replenish Life +10
  +10 To Strength
  +1 To Light Radius
  +2 To Mana After Each Kill
  `,"King's Grace":`
  +100% Enhanced Damage
  +100% Damage To Demons
  +50% Damage To Undead
  Adds 10-60 Fire Damage
  Adds 20-40 Cold Damage
  +150 To Attack Rating
  +100 To Attack Rating Against Demons
  +100 To Attack Rating Against Undead
  7% Life Stolen Per Hit
  `,Leaf:`
  +3 To Fire Skills
  Adds 5-30 Fire Damage
  +3 To Fire Bolt (Sorceress Only)
  +1-2 To Inferno (Sorceress Only) (varies)
  +3 To Warmth (Sorceress Only)
  +2 To Mana After Each Kill
  +2-198 To Defense (2 per Character Level) 
  Cold Resist +33%
  `,Lionheart:`
  +80-110% Enhanced Damage (varies)
  +10-25 To Strength (varies)
	+10-15 To Dexterity (varies)
  +10-20 To Vitality (varies)
	+10 To Energy
  +50 To Life
	All Resistances +20-30 (varies)
  Requirements -15%
  `,Lore:`
  +1 To All Skills
  +5-10 To Energy (varies)
  Lightning Resist +30%
  Physical Damage Taken Reduced By 7
  +1-2 To Mana After Each Kill (varies)
  +2 To Light Radius
  `,Malice:`
  +33% Enhanced Damage
  +9 To Maximum Damage
  100% Chance Of Open Wounds
  +6 Open Wounds Damage Per Second
  -25% Target Defense
  +50 To Attack Rating
  -100 To Monster Defense Per Hit
  Prevent Monster Heal
  Drain Life -5
  `,Melody:`
  +3 To Bow and Crossbow Skills (Amazon Only)
  20% Increased Attack Speed
  +100-150% Enhanced Damage
  +300% Damage To Undead
  +3 To Critical Strike (Amazon Only)
  +3 To Dodge (Amazon Only)
  +3 To Slow Movement (Amazon Only)
  +10 To Dexterity
  Knockback
  `,Memory:`
  +4 To All Skills
  33% Faster Cast Rate
  Increase Maximum Mana 25-40% (varies)
  +2 To Energy Shield (Sorceress Only)
  +2 To Static Field (Sorceress Only)
  +10 To Energy
  +10 To Vitality
  +9 To Minimum Damage
  -25% Target Defense
  Magic Damage Reduced By 7
  +50% Enhanced Defense
  `,Nadir:`
  +50% Enhanced Defense
  +10 Defense
  +30 Defense vs. Missile
  +4-6 To Mana After Each Kill (varies)
  +5 To Strength
  -33% Extra Gold From Monsters
  -3 To Light Radius
  Level 13 Cloak of Shadows (9 Charges)
  `,Radiance:`
  +20-40% Enhanced Damage (varies)
  +75% Enhanced Defense
  +30 Defense Vs. Missile
  +10 To Energy
  +10 To Vitality
  +33 To Mana
  Physical Damage Taken Reduced By 7
  15% Damage Taken Goes To Mana
  +5 To Light Radius
  `,Rhyme:`
  20% Increased Chance of Blocking
  40% Faster Block Rate
  All Resistances +25
  Regenerate Mana 15%
  Cannot Be Frozen
  50% Extra Gold From Monsters
  25% Better Chance Of Getting Magic Items
  `,Silence:`
  Level 23-25 Thorns Aura When Equipped (varies)
  +2 To All Skills
	20% Increased Attack Speed
	20% Faster Hit Recovery
	+295-395% Enhanced Damage
	+75% Damage To Undead
	+50 To Attack Rating Against Undead
  11% Mana Stolen Per Hit
  Hit Blinds Target +33
  All Resistances +50
	+2 To Mana After Each Kill
	30% Better Chance Of Getting Magic Items
  Requirements -20%
  `,Smoke:`
  20% Faster Hit Recovery
  +75% Enhanced Defense
  +280 Defense Vs. Missile
  All Resistances +30-50 (varies)
  +10 To Energy
  -1 To Light Radius
  Level 6 Weaken (18 Charges)
  `,Stealth:`
  10% Faster Run/Walk
	20% Faster Cast Rate
	20% Faster Hit Recovery 
	+6 To Dexterity
	Regenerate Mana 15%
	+15 To Maximum Stamina
	Poison Resist +30%
	Magic Damage Taken Reduced By 3
  `,Steel:`
  25% Increased Attack Speed
	20% Enhanced Damage
	+3 To Minimum Damage
	+3 To Maximum Damage
	+50 To Attack Rating
	50% Chance Of Open Wounds
	+2 To Mana After Each Kill
	+1 To Light Radius
  `,Strength:`
  65-95% Enhanced Damage (varies)
  25% Chance Of Crushing Blow
  7% Life Stolen Per Hit
  +20 To Strength
  +10 To Vitality
  +2 To Mana After Each Kill
  `,Venom:`
  20% Chance To Cast Level 28 Poison Nova On Striking
	Ignore Target's Defense
	+400 Poison Damage Over 3 seconds
	7% Mana Stolen Per Hit
	-20-30% To Enemy Poison Resistance (varies)
  +6 To Poison Strike
	Prevent Monster Heal
	+20% Enhanced Damage
	Level 15 Desecrate (27 Charges)
  `,Wealth:`
  +10 To Dexterity
	+4 To Mana After Each Kill
	300% Extra Gold From Monsters
	100% Better Chance Of Getting Magic Items
  `,White:`
  +2 To Poison And Bone Skills (Necromancer Only)
  20% Faster Cast Rate
  +2-3 To Bone Armor (Necromancer Only) (varies)
	+4 To Skeleton Mastery (Necromancer Only)
  +20% Enhanced Damage
  Replenish Life +15
	+10 To Vitality
	+13 To Mana
  Magic Damage Reduced By 4
  `,Zephyr:`
  7% Chance To Cast Level 10 Twister When Struck
	25% Faster Run/Walk
	25% Increased Attack Speed
	+33-66% Enhanced Damage (varies)
	-25% Target Defense
	+66 To Attack Rating
	Adds 1-50 Lightning Damage
	+25 Defense	
  `,Beast:`
  Level 8-10 Fanaticism Aura When Equipped (varies)
	+40% Increased Attack Speed
	+275-325% Enhanced Damage (varies)
	20% Chance of Crushing Blow
	10% Chance of Open Wounds
  +120 Open Wounds Damage Per Second
	Prevent Monster Heal
	+6 To Hunger
	+6 To Maul
	+6 To Werebear
	+10 To Energy
	+2 To Mana After Each Kill
	Level 13 Summon Grizzly (35 Charges)
  `,Bramble:`
  Level 18-21 Thorns Aura When Equipped (varies)
	+50% Faster Hit Recovery
	+40-50% To Poison Skill Damage (varies)
	+300 Defense
	Increase Maximum Mana 5%
	Regenerate Mana 15%
	+4% To Maximum Cold Resist
	Fire Resist +30%
	Poison Resist +100%
	+4-6 Life After Each Kill (varies)
	Level 13 Spirit of Barbs (33 Charges)
  `,"Breath of the Dying":`
  35% Chance To Cast Level 40 Poison Nova On Striking
	Indestructible
	+60% Increased Attack Speed
	+350-400% Enhanced Damage (varies)
	+200% Damage To Undead
	-25% Target Defense
	+50 To Attack Rating
	+50 To Attack Rating Against Undead
	7% Mana Stolen Per Hit
	8-12% Life Stolen Per Hit (varies)
	Prevent Monster Heal
	+30 To All Attributes
	+1 To Light Radius
	Requirements -20%
  `,"Call to Arms":`
  +1 To All Skills
	+40% Increased Attack Speed
	+245-285% Enhanced Damage (varies)
	Adds 5-30 Fire Damage
	7% Life Stolen Per Hit
	+2-6 To Battle Command (varies)
	+2-6 To Battle Orders (varies)
	+1-3 To Battle Cry (varies)
	Prevent Monster Heal
	Replenish Life +12
	30% Better Chance of Getting Magic Items
  `,Chaos:`
  20% Chance To Cast Level 30 Frozen Orb On Striking
	18% Chance To Cast Level 40 Charged Bolt On Striking
	Indestructible
	+245-295% Enhanced Damage (varies)
	Adds 200-400 Magic Damage
	10% Chance of Open Wounds
  +120 Open Wounds Damage Per Second
	+2 To Blade Dance
	+10 To Strength
	+15 Life After Each Demon Kill
  <i>Blade Dance is the same as Whirlwind except 
  the animation takes 1 less frame - it uses 4 frames 
  instead of 5 (single weapon) or 
  5 frames instead of 6 (dual wielding)</i>
  `,"Chains of Honor":`
  +2 To All Skills
  +200% Damage To Demons
  +200% Damage To Undead
  8-12% Life Stolen Per Hit (varies)
  +70% Enhanced Defense
  +20 To Strength
  Replenish Life +20
	All Resistances +50-60 (varies)
	Physical Damage Taken Reduced By 6%
  30% Better Chance of Getting Magic Items
  `,"Crescent Moon":`
  10% Chance To Cast Level 27 Lightning On Striking
	12% Chance To Cast Level 13 Static Field On Striking (24% Chance in Polearms/Spears)
	+20% Increased Attack Speed
	+180-220% Enhanced Damage (varies)
	Ignore Target's Defense
	-10-15% To Enemy Lightning Resistance (varies)
	10% Chance of Open Wounds
  +120 Open Wounds Damage Per Second
	+3-5 Magic Absorb (varies)
	+2 To Mana After Each Kill
	Level 18 Summon Spirit Wolf (30 Charges)
  `,Delirium:`
  6% Chance To Cast Level 14 Mind Blast When Struck
	11% Chance To Cast Level 18 Confuse On Striking
  14% Chance To Cast Level 13 Terror When Struck
	+2 To All Skills
	+261 Defense
	+10 To Vitality
	50% Extra Gold From Monsters
	30% Better Chance of Getting Magic Items
	Level 17 Attract (60 Charges)
  `,Doom:`
  10% Chance To Cast Level 18 Molten Boulder On Striking (Non-Staves Only)
  10% Chance To Cast Level 28 Molten Boulder On Casting (Staves Only)
	Level 16 Holy Freeze Aura When Equipped
	+2 To All Skills
  +30% Faster Cast Rate (Staves Only)
	Prevent Monster Heal (Non-Staves Only)
  +45% Increased Attack Speed
	+335-375% Enhanced Damage (varies)
	-30-50% To Enemy Cold Resistance (varies)
	20% Deadly Strike
	10% Chance of Open Wounds
  +120 Open Wounds Damage Per Second
	Freezes Target +3
	Requirements -20%
  `,Duress:`
  +40% Faster Hit Recovery
  +40-80% Enhanced Damage (varies)
	Adds 37-133 Cold Damage
  15% Chance of Crushing Blow
  33% Chance of Open Wounds
  +150-200% Enhanced Defense (varies)
  -20% Slower Stamina Drain
  Cold Resist +45%
  Lightning Resist +15%
  Fire Resist +15%
  Poison Resist +15%
  `,Enigma:`
  +2 To All Skills
	+25% Faster Run/Walk
	Blink Charges 5/5 (Replenish 1 Charge in 3 sec)
	+500-775 Defense (varies)
	+0-74 To Strength (0.5-0.75 per Character Level) (varies)
	Increase Maximum Life 5%
	Physical Damage Taken Reduced by 6%
	15% Damage Taken Goes To Mana
	+0-74% Better Chance of Getting Magic Items (0.5-0.75% per Character Level)
  <i>Blink is the same as Teleport, except it costs 
  no mana and doesn't temporarily reduce spell damage.</i>
  `,Eternity:`
  Indestructible
	+260-310% Enhanced Damage (varies)
	Adds 70-71 Damage
	7% Life Stolen Per Hit
	20% Chance of Crushing Blow
  +4 To Revive
	+4 Life After Each Kill
	You May Now Summon 6 Additional Revives
	10% Reanimate As: Wraith
  Cannot Be Frozen
	30% Better Chance Of Getting Magic Items
  `,Exile:`
  25% Chance to Cast level 18 Decrepify on Striking
	Level 13-16 Defiance Aura When Equipped (varies)
	+2 To Offensive Auras (Paladin Only)
	+30% Faster Block Rate
	Freezes Target
	+220-260% Enhanced Defense (varies)
	Replenish Life +30
	+4% To Maximum Cold Resist
	+4% To Maximum Fire Resist
	30% Better Chance Of Getting Magic Items
	Repairs 1 Durability in 4 Seconds
  `,Famine:`
  +30% Increased Attack Speed
	+325-375% Enhanced Damage (varies)
	Ignore Target's Defense
	Adds 125-250 Fire Damage
	Adds 101-275 Lightning Damage
	Adds 100-225 Cold Damage
	-10-15% To Enemy Lightning Resistance (varies)
	-10-15% To Enemy Cold Resistance (varies)
	-10-15% To Enemy Fire Resistance (varies)
	+10 To Strength
  `,"Flickering Flame":`
  Level 1-6 Resist Fire Aura When Equipped (varies)
  +2 To Fire Skills
  -5-10% To Enemy Fire Resistance (varies)
  +50% Enhanced Defense
  +30 Defense vs. Missile
  +65-75 To Mana (varies)
  +4% To Maximum Fire Resist
  Half Freeze Duration
  `,Gloom:`
  15% Chance To Cast Level 9 Dim Vision When Struck
	+20-40% Faster Hit Recovery (varies)
	+220-280% Enhanced Defense (varies)
	+10 To Strength
	All Resistances +45
	Half Freeze Duration
	5% Damage Taken Goes To Mana
	+20% Curse Resistance
  `,"Hand of Justice":`
  100% Chance To Cast Level 36 Blaze When You Level-Up
	100% Chance To Cast Level 48 Meteor When You Die
	Level 12 Holy Fire Aura When Equipped
	+33% Increased Attack Speed
	+280-330% Enhanced Damage (varies)
	Ignore Target's Defense
	7% Life Stolen Per Hit
	-10-20% To Enemy Fire Resistance (varies)
	20% Deadly Strike
	+4 Life After Each Kill
	Freezes Target +3
  `,"Heart of the Oak":`
  +3 To All Skills
	+30% Faster Cast Rate
	+75% Damage To Demons
	+100 To Attack Rating Against Demons
	Adds 3-14 Cold Damage
	7% Mana Stolen Per Hit
	+10 To Dexterity
	Replenish Life +20
	Increase Maximum Mana 15%
	All Resistances +20-30 (varies)
  Level 4 Oak Sage (25 Charges)
	Level 14 Raven (60 Charges)
  `,Kingslayer:`
  +30% Increased Attack Speed
	+230-270% Enhanced Damage (varies)
	-25% Target Defense
	50% Bonus To Attack Rating
	33% Chance of Crushing Blow
	10% Chance of Open Wounds
  +120 Open Wounds Damage Per Second
  Adds +250-500 Cold Damage
	Prevent Monster Heal
	+10 To Vengeance
  +10 To Strength
	Repairs 1 Durability In 10 Seconds
  `,Passion:`
  +25% Increased Attack Speed
  +180-230% Enhanced Damage (varies)
  50-80% Bonus To Attack Rating (varies)
  +75% Damage To Undead
  +50 To Attack Rating Against Undead
  Adds 1-50 Lightning Damage
  +10 To Concentrate
  +10 To Zeal
  Hit Blinds Target +10
	75% Extra Gold From Monsters
	Level 8 Heart of Wolverine (36 Charges)
  `,Prudence:`
  +25% Faster Hit Recovery
	+40% Faster Cast Rate
	+140-170% Enhanced Defense (varies)
	All Resistances +25-35 (varies)
	Physical Damage Taken Reduced by 5-13 (varies)
	Magic Damage Taken Reduced by 13-17 (varies)
	+2 To Mana After Each Kill
	Repairs Durability 1 In 4 Seconds
  `,Sanctuary:`
  +20% Faster Hit Recovery
	+20% Faster Block Rate
	20% Increased Chance of Blocking
	+130-160% Enhanced Defense (varies)
	+20 To Dexterity
	All Resistances +40-50 (varies)
	Magic Damage Reduced By 9
	Cannot Be Frozen
  Level 12 Slow Movement (60 Charges)
  `,Splendor:`
  +1 To All Skills
	+20-35% Faster Cast Rate (varies)
	+20% Faster Block Rate
	+60-100% Enhanced Defense (varies)
	+10 To Energy
	Regenerate Mana 15%
	50% Extra Gold From Monsters
	20-30% Better Chance of Getting Magic Items (varies)
	+3 To Light Radius
  `,Stone:`
  Indestructible
	+1 To All Skills
	+60% Faster Hit Recovery
	+250-340% Enhanced Defense (varies)
	+10-16 To Strength (varies)
	+10-16 To Vitality (varies)
	+10 To Energy
	All Resistances +15
	Level 16 Clay Golem (36 Charges)
  Replenish 1 Charge in 3 Seconds
  `,Wind:`
  18% Chance To Cast Level 35 Tornado On Striking (On Casting in Staves)
	18% Chance To Cast Level 35 Twister On Striking (On Casting in Staves)
  5% Chance To Cast Level 9 Cyclone Armor When Struck (On Casting in Staves)
	+20-30% Faster Run/Walk (varies)
  +40% Increased Attack Speed
	+320-380% Enhanced Damage in Melee Weapons (varies) 
  +220-280% Enhanced Damage in Throwing Weapons (varies)
	-50% Target Defense
	+50 To Attack Rating
	+4 Life After Each Kill
	+1 To Light Radius	
  `,Brand:`
  65% Chance To Cast Level 31 Amplify Damage When Struck
	50% Chance To Cast Level 45 Bone Spear On Striking
  You May Now Summon 8 Additional Sekeleton Archers
	+260-340% Enhanced Damage (varies)
	Ignore Target's Defense
	50% Bonus to Attack Rating
	+280-330% Damage To Demons (varies)
	20% Deadly Strike
	Prevent Monster Heal
	Knockback
	Fires Explosive Arrows or Bolts (Level 15)
  `,Death:`
  100% Chance To Cast Level 44 Chain Lightning When You Die
	25% Chance To Cast Level 18 Glacial Spike On Attack
	Indestructible
	+275-320% Enhanced Damage (varies)
	50% Bonus To Attack Rating
	+50 To Attack Rating
	Adds 1-50 Lightning Damage
	7% Mana Stolen Per Hit
	50% Chance of Crushing Blow
	+0-24% Deadly Strike (0.25 per Character Level)
	+1 To Light Radius
	+18 To Blood Golem
	Requirements -20%
  `,Destruction:`
  20% Chance To Cast Level 35 Frost Nova On Striking (On Casting in Staves)
	8% Chance To Cast Level 35 Molten Boulder On Striking (On Casting in Staves)
	15% Chance To Cast Level 45 Meteor On Striking (On Casting in Staves)
	15% Chance To Cast Level 40 Nova On Attack (On Casting in Staves)
	30-40% Increased Attack Speed (varies)
	+300% Enhanced Damage
	Ignore Target's Defense
	7% Mana Stolen Per Hit
	20% Chance Of Crushing Blow
	20% Deadly Strike
	+10 To Dexterity
  `,Dragon:`
  You May Summon 1 Additional Hydra
  20% Chance to Cast Level 18 Venom When Struck
	12% Chance To Cast Level 40 Hydra On Striking
	Level 12 Holy Fire Aura When Equipped
  +4-5 To Hydra (Sorceress Only)
	+400-550 Defense (varies)
	+0-37 To Strength (0.375 per Character Level)
	Increase Maximum Mana 5% (Armor Only)
	+75 To Mana (Shields Only)
	+4% To Maximum Lightning Resist
	Physical Damage Taken Reduced by 7 (9 in Shields)
  
  `,Dream:`
  10% Chance To Cast Level 15 Confuse When Struck
	Level 14 Holy Shock Aura When Equipped
	+20-30% Faster Hit Recovery (varies)
	+50% Enhanced Defense
	+150-220 Defense (varies)
	+10 To Vitality
	Increase Maximum Life 5% (Helms Only)
	+75 To Life (Shields Only)
	+0-61 To Mana (0.625 per Character Level)
	All Resistances +10-20 (varies)
	20-30% Better Chance of Getting Magic Items (varies)
  `,Edge:`
  Level 15 Thorns Aura When Equipped
  +35% Increased Attack Speed
  +320-380% Damage To Demons (varies)
  +280% Damage To Undead
  +75 Poison Damage Over 5 Seconds
  7% Life Stolen Per Hit
  Prevent Monster Heal
  +5-10 To All Attributes (varies)
  +2 To Mana After Each Kill
  `,Faith:`
  Level 12-15 Fanaticism Aura When Equipped (varies)
	+325-345% Enhanced Damage (varies)
	Ignore Target's Defense
	300% Bonus To Attack Rating
	+75% Damage To Undead
	+50 To Attack Rating Against Undead
	+120 Fire Damage
	All Resistances +15
	6-8% Reanimate As: Returned
	75% Extra Gold From Monsters
  `,Fortitude:`
  #### Weapons
  +25% Faster Cast Rate
	+325-375% Enhanced Damage (varies)
	+200% Enhanced Defense
	+9 To Minimum Damage
	+50 To Attack Rating
	20% Deadly Strike
	+1-148 To Life (1-1.5 per Character Level) (varies)
	All Resistances +25-30 (varies)
	12% Damage Taken Goes To Mana
	+1 To Light Radius

  #### Body Armor
  +25% Faster Cast Rate
	+250-300% Enhanced Damage (varies)
	+200% Enhanced Defense
	+15 Defense
	+1-148 To Life (1-1.5 per Character Level) (varies)
	Replenish Life +20
	+4% To Maximum Lightning Resist
	All Resistances +25-30 (varies)
	Physical Damage Taken Reduced By 7
	12% Damage Taken Goes To Mana
	+1 To Light Radius
  `,Grief:`
  35% Chance To Cast Level 15 Venom On Striking
	+30-40% Increased Attack Speed (varies)
	280 to 320-360 Damage (varies)
	-25% Target Defense
	+1-185% Damage To Demons (1.875% per Character Level)  
	Adds 5-30 Fire Damage
	-15-20% To Enemy Poison Resistance (varies)
	20% Deadly Strike
	Prevent Monster Heal
	+2 To Mana After Each Kill
	+10-15 Life After Each Kill (varies)
  `,Harmony:`
  Level 10 Vigor Aura When Equipped
  +200-275% Enhanced Damage (varies)
  +9 To Minimum Damage
  +9 To Maximum Damage
  Adds 55-160 Lightning Damage
  Adds 55-160 Fire Damage
  Adds 55-160 Cold Damage
  +3-6 To Valkyrie (Amazon Only)
  +10 To Dexterity
  Regenerate Mana 20%
  +2 To Mana After Each Kill
  +2 To Light Radius
  Level 20 Revive (25 Charges)
  `,Ice:`
  100% Chance To Cast Level 40 Blizzard When You Level-up
  20% Chance To Cast Level 32 Frost Nova On Striking
  Level 18 Holy Freeze Aura When Equipped
  +20% Increased Attack Speed
  +140-210% Enhanced Damage (varies)
  Ignore Target's Defense
  +25-30% To Cold Skill Damage (varies)
  -20% To Enemy Cold Resistance
  7% Life Stolen Per Hit
  20% Deadly Strike
  3-309 Extra Gold From Monsters (3.125 per Character Level)
  `,Infinity:`
  25% Chance To Cast Level 20 Chain Lightning on Striking (Non-Staves Only)
  15% Chance To Cast Level 20 Chain Lightning on Casting (Staves Only)
  Level 12 Conviction Aura When Equipped
  2% Chance To Cast Level 15 Cyclone Armor On Casting (Staves Only)
  +3 To Cyclone Armor (Non-Staves Only)
  +35% Faster Run/Walk
  +255-325% Enhanced Damage (varies)
  -40-50% To Enemy Lightning Resistance (varies)
  40% Chance of Crushing Blow
  Prevent Monster Heal
  0-49 To Vitality (0.5 per Character Level)
  30% Better Chance of Getting Magic Items
  `,Insight:`
  Level 12-17 Meditation Aura When Equipped (varies)
	+35% Faster Cast Rate
	+180-240% Enhanced Damage (varies)
	+9 To Minimum Damage
	180-250% Bonus to Attack Rating (varies)
	Adds 5-30 Fire Damage
	+75 Poison Damage Over 5 Seconds
	+15-25% Critical Strike Chance
	+10-20 To All Attributes (varies)
	+2 To Mana After Each Kill
	23% Better Chance of Getting Magic Items
  `,"Last Wish":`
  6% Chance To Cast Level 11 Fade When Struck
	10% Chance To Cast Level 11 Life Tap On Striking
	Level 20 Might Aura When Equipped
	+375-425% Enhanced Damage (varies)
	Ignore Target's Defense
	60-70% Chance of Crushing Blow (varies)
	Prevent Monster Heal
	+4 Life After Each Kill
	+0-49% Chance of Getting Magic Items (0.5% per Character Level)
  You May Apply An Additional Curse
  `,Lawbringer:`
  20% Chance To Cast Level 15 Decrepify On Striking
  +150-200% Enhanced Damage
  -50% Target Defense
  Adds 150-210 Fire Damage
  Adds 130-180 Cold Damage
  7% Life Stolen Per Hit
  Slain Monsters Rest In Peace
  +200-250 Defense Vs. Missile (varies)
  +10 To Dexterity
  75% Extra Gold From Monsters
  `,Oath:`
  30% Chance To Cast Level 20 Bone Spirit On Striking
	Indestructible
	+50% Increased Attack Speed
	+210-340% Enhanced Damage (varies)
	+75% Damage To Demons
	+100 To Attack Rating Against Demons
	Prevent Monster Heal
	+10 To Energy
	+10-15 Magic Absorb (varies)
	Level 16 Heart of Wolverine (20 Charges)
  Replenish 1 Charge in 3 Sec
  `,Obedience:`
  30% Chance To Cast Level 21 Enchant Fire When You Kill An Enemy
  40% Faster Hit Recovery
  +280-320% Enhanced Damage (varies)
  -25% Target Defense
  Adds 3-14 Cold Damage
  -25% To Enemy Fire Resistance
  40% Chance of Crushing Blow
  +200-300 Defense (varies)
  +10 To Strength
  +10 To Dexterity
  All Resistances +20-30 (varies)
  Requirements -20%
  `,Phoenix:`
  #### Weapons
  100% Chance To Cast level 40 Blaze When You Level-up
	33% Chance To Cast Level 40 Firestorm On Attack (On Casting in Staves)
	Level 10-12 Redemption Aura When Equipped (varies)
	+400-450% Enhanced Damage (varies)
	Ignores Target's Defense
	14% Mana Stolen Per Hit
	-28% To Enemy Fire Resistance
	20% Deadly Strike
	+350-400 Defense Vs. Missile (varies)
  +15-21 Fire Absorb (varies)

  #### Shields
  100% Chance To Cast level 40 Blaze When You Level-up
	33% Chance To Cast Level 40 Firestorm On Attack
	Level 10-12 Redemption Aura When Equipped (varies)
	+250-300% Enhanced Damage (varies)
  +350-400 Defense Vs. Missile (varies)
	-28% To Enemy Fire Resistance
	+75 To Life
	+4% To Maximum Lightning Resist
	+8% To Maximum Fire Resist
  `,Pride:`
  25% Chance To Cast Level 30 Fire Wall When Struck
	Level 18-20 Concentration Aura When Equipped (varies)
	260-300% Bonus To Attack Rating (varies)
	+4-396% Damage To Demons (4% per Character Level)
	Adds 50-280 Lightning Damage
	20% Deadly Strike
	+4 Life After Each Kill
	Freezes Target +3
	+10 To Vitality
	Replenish Life +8
	1-185% Extra Gold From Monsters (1.875% per Character Level)
  `,Rift:`
  26% Chance To Cast Level 30 Tornado On Striking
  24% Chance To Cast Level 25 Frozen Orb On Striking
  +60% Increased Attack Speed
  50% Bonus To Attack Rating
  Adds 160-250 Magic Damage
  Adds 60-180 Fire Damage
  +15-20 To Strength
  +25-30 To Dexterity
  +15-20 To Vitality
  +15-20 To Energy
  38% Damage Taken Goes To Mana
  75% Extra Gold From Monsters
  Requirements -20%
  `,Spirit:`
  #### Swords, Staves
  +1 To All Skills (+2 in Staves)
	+25-35% Faster Cast Rate (varies)
	+25% Faster Hit Recovery (+55% in Staves)
	Adds 1-50 Lightning Damage
	Adds 3-14 Cold Damage
	+75 Poison Damage Over 5 Seconds
	7% Life Stolen Per Hit
	+11-22 To Vitality (varies)
	+59-82 To Mana (varies)
	+3-8 Magic Absorb (varies)
	Requirements -15%

  #### Shields
  +1 To All Skills
	+25-35% Faster Cast Rate (varies)
	+25% Faster Hit Recovery
	+11-22 To Vitality (varies)
	+59-82 To Mana (varies)
	Cold Resist +35%
	Lightning Resist +35%
	Poison Resist +35%
	+3-8 Magic Absorb (varies)
	Attacker Takes Damage of 24
	Requirements -15%
  `,"Voice of Reason":`
  15% Chance To Cast Level 16 Frozen Orb On Striking
  18% Chance To Cast Level 20 Ice Blast On Striking
  +50 To Attack Rating
  +240-300% Damage To Demons (varies)
	+280-325% Damage To Undead (varies)
  +50 To Attack Rating Against Undead
  Adds 200-320 Cold Damage
  -24% To Enemy Cold Resistance
  +10 To Dexterity
  Cannot Be Frozen
  75% Extra Gold From Monsters
  +1 To Light Radius
  `,Wrath:`
  60% Chance To Cast Level 31 Amplify Damage On Striking
	30-45% Increased Attack Speed (varies)
	+375% Damage To Demons
	+100 To Attack Rating Against Demons
	+250-300% Damage To Undead (varies)
	Adds 85-120 Magic Damage
	Adds 41-240 Lightning Damage
	20% Chance of Crushing Blow
	Prevent Monster Heal
	+10 To Energy
	Cannot Be Frozen
  `,Bone:`
  10% Chance To Cast level 15 Bone Armor When Struck
  30% Chance To Cast level 25 Bone Spear On Striking
  +2 To Necromancer Skill Levels
  +100-150 To Mana (varies)
  All Resistances +30
  Physical Damage Taken Reduced by 7
  `,Enlightenment:`
  35% Chance To Cast Level 25 Blaze When Struck
	25% Chance To Cast level 28 Fire Ball On Casting
	+2 To Sorceress Skill Levels
	20% Faster Cast Rate
  +5-8 To Warmth (varies)
	+50% Enhanced Defense
	Fire Resist +30%
	Physical Damage Taken Reduced by 7
  `,Myth:`
  3% Chance To Cast Level 1 Howl When Struck
	5% Chance To Cast Level 1 Taunt On Striking
	+1-2 To Barbarian Skill Levels (varies)
	+30 Defense Vs. Missile
	Replenish Life +10
	Attacker Takes Damage of 2-3 to 198-297 (2-3 per Character Level) (varies)
	+3-4 To Mana After Each Kill (varies)
  Requirements -15%
  `,Peace:`
  You May Summon 1 Additional Valkyrie
  8% Chance To Cast level 12 Slow Movement When Struck
	+1 to Amazon Skill Levels
	+20% Faster Hit Recovery
	+2-3 To Critical Strike (Amazon Only)
	Cold Resist +30%
	Attacker Takes Damage of 20
  `,Principle:`
  40% Chance To Cast Level 30 Holy Bolt On Striking
	+2 To Paladin Skill Levels
	+100-150% Damage to Demons (varies)
	+100-150% Damage to Undead (varies)
	+100-150 To Life (varies)
	15% Slower Stamina Drain
	+4% To Maximum Poison Resist
	Fire Resist +30%
  `,Rain:`
  8% Chance To Cast Level 15 Cyclone Armor When Struck
	20% Chance To Cast Level 25 Twister On Striking
	+2 To Druid Skill Levels
	+100-150 To Mana (varies)
	Lightning Resist +30%
	Magic Damage Taken Reduced By 7
	15% Damage Taken Goes to Mana
  `,Treachery:`
  15% Chance to Cast level 21 Mind Blast When Struck
	25% Chance To Cast level 15 Venom On Striking
	+2 To Assassin Skills
	+45% Increased Attack Speed
	+20% Faster Hit Recovery
	Cold Resist +30%
	50% Extra Gold From Monsters
	`,Plague:`
  25% Chance to Cast Level 35 Poison Nova On Striking
	30% Chance to Cast Level 35 Lower Resist When Struck
	Level 15-17 Cleansing Aura When Equipped (varies)
	+1-2 to All Skills (varies)
  +20% Faster Cast Rate
	+340-380% Damage to Demons (varies)
	-20% To Enemy Poison Resistance
	+0-37% Deadly Strike (0.375% per Character Level)
	10% Chance of Open Wounds
  +120 Open Wounds Damage Per Second
	Freezes Target +3
	+10 to Strength
  `,Pattern:`
  +30% Faster Block Rate
  10% Bonus to Attack Rating
	+80-120% Enhanced Damage (varies)
	Adds 12-32 Fire Damage
  Adds 1-50 Lightning Damage
  +75 Poison Damage Over 5 Seconds
	+6 To Strength
	+6 To Dexterity
  All Resistances +15
	+2 To Mana After Each Kill
  `,"Unbending Will":`
  8% Chance to cast Level 18 Taunt on striking
  +3 To Combat Skills (Barbarian Only)
  +20-30% Increased Attack Speed (varies)
  +300-350% Enhanced Damage (varies)
  +9 To Maximum Damage
  +50 To Attack Rating
  +75% Damage to Undead
  +50 Attack Rating Against Undead
  8-10% Life Stolen Per Hit (varies)
  +10 To Strength
  +10 To Vitality
  Physical Damage Taken Reduced by 8
  +1 Light Radius
  Requirements -20%
  `,Wisdom:`
  +33% Chance to Pierce
  +15-25% Bonus to Attack Rating (varies)
  4-8% Mana Stolen Per Hit (varies)
  +50% Enhanced Defense
  +10 To Energy
  15% Slower Stamina Drain
  Cannot Be Frozen
  +5 Mana After Each Kill
  15% Damage Taken Goes to Mana
  `,Obsession:`
  24% Chance to cast level 18 Weaken on Casting
  Indestructible
  +4 To All Skills
  +15% Faster Cast Rate
  +60% Faster Hit Recovery
  Knockback
  +10 To Vitality
  +10 To Energy
  Increase Maximum Life 15-25% (varies)
  Regenerate Mana 15-30% (varies)
  All Resistances +60-70 (varies)
  75% Extra Gold from Monsters
  30% Better Chance of Getting Magic Items
  `,Mist:`
  Level 12-14 Concentration Aura When Equipped (varies)
  +2 To All Skills
  20% Increased Attack Speed
  +100% Chance to Pierce
  +325-375% Enhanced Damage (varies)
  +9 To Maximum Damage
  50% Bonus to Attack Rating
  Adds 3-14 Cold Damage
  Freeze Target +3
  +20-30 To Vitality
  All Resistances +40
  `,"Shattered Wall":`
  Indestructible
  Level 16 Holy Freeze Aura When Equipped
  +60% Faster Block Rate
  Adds 200-250 Cold Damage
  +160-200% Enhanced Defense (varies)
  +125-175 To Life (varies)
  Fire Resist +35%
  Cannot Be Frozen
  +5 To Mana After Each Kill
  `,Asylum:`
  28% Chance To Cast Level 40 Fist of the Heavens on Striking (on Casting in Staves)
  Level 17-20 Sanctuary Aura When Equipped (varies)
  +4 To All Skills
  +285-335% Enhanced Damage (varies)
  Ignore Target's Defense
  50% Bonus To Attack Rating
  30% Chance Of Open Wounds
  +120 Open Wounds Damage Per Second
  Freezes Target +3
  +20 To Dexterity
  100% Extra Gold From Monsters
  Requirements -20%
  `,Zenith:`
  Indestructible
  Level 10-12 Salvation Aura When Equipped (varies)
  +3 to All Skills
  +20% Faster Run/Walk
  +40% Increased Attack Speed
  +225-300% Enhanced Damage
  Ignore Target's Defense
  Adds 430-500 Fire Damage
  Adds 430-500 Lightning Damage
  Adds 430-500 Cold Damage
  `,Ferocity:`
  8% Chance to Cast Level 10 Taunt on Striking
  Indestructible
  +20% Faster Hit Recovery
  10-12% Life Stolen Per Hit (varies)
  +18 To Zeal
  +150-200% Enhanced Defense
  Magic Damage Taken Reduced by 6-12 (varies)
  Cannot Be Frozen
  Attacker Takes Damage of 200-250 (varies)
  `,Neophyte:`
  +30% Faster Cast Rate (+40% in Staves)
  Adds 3-14 Cold Damage
  Physical Damage Taken Reduced by 2-4 (varies)
  Half Freeze Duration
  Poison Length Reduced by 25%
  +2 To Mana After Each Kill
  `,Rampage:`
  +65% Increased Attack Speed
  +20% Faster Hit Recovery
  +120-145% Enhanced Damage
  +9 To Maximum Damage
  -25% Target Defense
  +50 To Attack Rating
  Fire Resist +25%
  +1 To Light Radius
  `,Dominion:`
  You May Summon 1 Additional Golem
  +2 to Necromancer Skill Levels
  +25% Faster Cast Rate
  +45% Enhanced Damage
  +2-3 To Golem Mastery (Necromancer Only) (varies)
  Freezes Target +3
  +300-450 Defense (varies)
  Cold Resist +30%
  Physical Damage Taken Reduced by 5-7 (varies)
  +50% Damage to Undead
  `,Hustle:`
  Level 6 Burst Of Speed When Equipped
  +20% Increased Attack Speed
  +20% Faster Hit Recovery
  +10 To Dexterity
  50% Slower Stamina Drain
  All Resistances +10
  Half Freeze Duration
  `,Innocence:`
  Indestructible
  Level 8-12 Blade Shield When Equipped (varies)
  +2 To All Skills
  20% Chance Of Crushing Blow
  +200-275% Enhanced Defense (varies)
  +4% To Maximum Poison Resist
  Poison Length Reduced by 50%
  Attacker Takes Damage of 600-800 (varies)
  50% Extra Gold From Monsters
  Requirements -25%
  `,Rapture:`
  14% Chance to Cast Level 46 Fissure on Striking
  47% Chance to Cast Level 35 Lower Resist on Striking
  20% Increased Attack Speed
  +240-280% Enhanced Damage (varies)
  Ignore Target's Defense
  Adds 5-30 Fire Damage
  7% Mana Stolen per Hit
  40% Deadly Strike
  Prevent Monster Heal
  +10 to Dexterity
  Cold Resist +40-60 (varies)
  80-120% Extra Gold from Monsters (varies)
  `,Purity:`
  Level 10-12 Prayer Aura When Equipped (varies)
  45% Increased Attack Speed
  +110-145% Enhanced Damage (varies)
  -25% Target Defence
  +80-120% Damage to Demons (varies)
  +200 to Attack Rating Against Demons
  30% Reduced Curse Duration
  Adds 3-14 Cold Damage
  7% Life Stolen per Hit
  `,Loyalty:`
  +2 To Passive and Magic Skills (Amazon Only)
  60% Faster Cast rate
  +200-245% Enhanced Damage (varies)
  +75% Damage to Demons
  +100 to Attack Rating Against Demons
  +20% Chance to Pierce (Bows Only)
  +20% Chance of Crushing Blow (Spears Only)
  +2-3 To Decoy (Amazon Only)
  +2-3 To Strafe (Amazon Only) (Bows Only)
  +2-3 To Power Strike (Amazon Only) (Spears Only)
  +4 To Mana After Each Kill
  `,Epiphany:`
  25% Chance To Cast Level 27 Static Field When Struck
  Level 18 Energy Shield When Equipped
  20% Faster Cast Rate
  Adds 1-750 Lightning Damage
  +10-15 To All Attributes (varies)
  Increase Maximum Mana 28-35% (varies)
  +8% To Maximum Lightning Resistance
  Poison Resist +40-55% (varies)
  15% Damage Taken Goes To Mana
  30% Better Chance Of Getting Magic Items
  `,"Ancient's Foresight":`
  +10-20% Enhanced Damage (varies)
  +20 To Mana
  Regenerate Mana 20%
  Cold Resist +40-50% (varies)
  Fire Resist +40-50% (varies)
  `,"Ancient's Scripture":`
  +10-20% Enhanced Damage (varies)
  +20 To Life
  Heal Stamina Plus 20%
  Lightning Resist +40-50% (varies)
  Poison Resist +40-50% (varies)
  `,Echo:`
  #### Quivers  
  +20-30% Chance To Pierce (varies)
  +20-30% Enhanced Damage (varies)
  50% Bonus To Attack Rating
  Replenish Life +30
  Physical Damage Taken Reduced By 9
  +2 To Life After Each Kill

  #### Throwing Weapons
  +20-30% Chance To Pierce (varies)
  +65-85% Enhanced Damage (varies)
  +9 To Minimum Damage
  50% Bonus To Attack Rating
  +2 To Life After Each Kill
  `},Rn={Axes:6,Claws:3,Clubs:3,Daggers:3,Hammers:6,Maces:3,"Melee Weapons":6,"Missile Weapons":6,"Throwing Weapons":3,Orbs:3,"Paladin Shields":4,Polearms:6,Scepters:5,Shields:4,Spears:6,Staves:6,Swords:6,Wands:2,Weapons:6,"2-H Swords":6,Quivers:2,"Body Armors":4,Helms:3},Ys={Axes:{url:"https://diablo2.diablowiki.net/Axes"},"Body Armors":{url:"https://diablo2.diablowiki.net/Body_Armor"},Claws:{url:"https://diablo2.diablowiki.net/Assassin_Items"},Clubs:{url:"https://diablo2.diablowiki.net/Clubs"},Daggers:{url:"https://diablo2.diablowiki.net/Daggers"},Hammers:{url:"https://diablo2.diablowiki.net/Hammers"},Helms:{url:"https://diablo2.diablowiki.net/Helms"},Maces:{url:"https://diablo2.diablowiki.net/Maces"},"Melee Weapons":{},"Missile Weapons":{},"Throwing Weapons":{},Orbs:{url:"http://classic.battle.net/diablo2exp/items/normal/orbs.shtml"},"Paladin Shields":{url:"https://diablo2.diablowiki.net/Paladin_Items"},Polearms:{url:"https://diablo2.diablowiki.net/Polearms"},Scepters:{url:"https://diablo2.diablowiki.net/Scepters"},Shields:{url:"https://diablo2.diablowiki.net/Shields"},Spears:{url:"https://diablo2.diablowiki.net/Spears"},Staves:{url:"https://diablo2.diablowiki.net/Staves"},Swords:{url:"https://diablo2.diablowiki.net/Swords"},Wands:{url:"https://diablo2.diablowiki.net/Wands"},Weapons:{},"2-H Swords":{},Quivers:{}},fc={name:"FaSolidLongArrowAltUp"},dc={width:"0.5em",height:"1em",viewBox:"0 0 256 512"},hc=b("path",{d:"M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z",fill:"currentColor"},null,-1),pc=[hc];function mc(e,t,n,s,r,i){return M(),F("svg",dc,pc)}var gc=ce(fc,[["render",mc]]);const vc={name:"FaSolidLongArrowAltDown"},Tc={width:"0.5em",height:"1em",viewBox:"0 0 256 512"},yc=b("path",{d:"M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z",fill:"currentColor"},null,-1),Cc=[yc];function Sc(e,t,n,s,r,i){return M(),F("svg",Tc,Cc)}var bc=ce(vc,[["render",Sc]]);const Ac={name:"PhDiamondFill"},_c={width:"1em",height:"1em",viewBox:"0 0 256 256"},wc=b("path",{d:"M236 139.3L139.3 236a15.9 15.9 0 0 1-22.6 0L20 139.3a16.1 16.1 0 0 1 0-22.6L116.7 20a16.1 16.1 0 0 1 22.6 0l96.7 96.7a16.1 16.1 0 0 1 0 22.6z",fill:"currentColor"},null,-1),Rc=[wc];function Dc(e,t,n,s,r,i){return M(),F("svg",_c,Rc)}var Ec=ce(Ac,[["render",Dc]]);const Mc={name:"PhDiamondBold"},Lc={width:"1em",height:"1em",viewBox:"0 0 256 256"},kc=b("path",{d:"M238.8 113.9l-96.7-96.7a19.8 19.8 0 0 0-28.2 0l-96.7 96.7a19.8 19.8 0 0 0 0 28.2l96.7 96.7a19.8 19.8 0 0 0 28.2 0l96.7-96.7a19.8 19.8 0 0 0 0-28.2zM128 219l-91-91l91-91l91 91z",fill:"currentColor"},null,-1),xc=[kc];function Fc(e,t,n,s,r,i){return M(),F("svg",Lc,xc)}var Oc=ce(Mc,[["render",Fc]]);const Pc=We({name:"RunewordPopup",data(){return{isVisible:!1,position:{x:0,y:0},runeword:{title:"",ttypes:[],level:0}}},computed:{formatBody(){const e=this.runeword.title;let t=e&&si[e]||"---";return t=t.trim(),t=t.replace(/\+?[0-9]+(-[0-9]+)?%?/g,'<span class="is-mod">$&</span>'),t=t.replace(/####\s(.*)\n+/g,'<h4 class="is-title">$1</h4>'),t=t.replace(/\n/g,"<br/>"),t}},methods:{unitPx(e){return`${e}px`},moveTo(e){let{x:n,y:s}=e.getBoundingClientRect();n=n+50,s=s+window.pageYOffset+e.offsetHeight+4;const i=this.$refs.root.offsetHeight,o=s+i,a=document.documentElement.clientHeight;let c=window.scrollY+a;c-=10,o>c&&(s=c-i,s=Math.max(window.scrollY+10,s)),this.position={x:n,y:s}},showRuneword(e,t){this.runeword=e,this.$nextTick(()=>{this.moveTo(t),this.isVisible=!0})},setVisible(e){this.isVisible=e}}}),Ic={class:"rw-RunewordPopup-title"},Bc=["innerHTML"],Hc=["innerHTML"];function $c(e,t,n,s,r,i){return M(),F("div",{ref:"root",class:"rw-RunewordPopup absolute",style:Bt({visibility:e.isVisible?"visible":"hidden",left:e.unitPx(e.position.x),top:e.unitPx(e.position.y)}),onClick:t[0]||(t[0]=o=>e.setVisible(!1))},[b("h3",Ic,X(e.runeword.title),1),b("div",{class:"rw-RunewordPopup-type",innerHTML:e.runeword.ttypes},null,8,Bc),b("div",{class:"rw-RunewordPopup-body",innerHTML:e.formatBody},null,8,Hc)],4)}var Wc=ce(Pc,[["render",$c]]);const Nc=We({name:"RunewordsTable",components:{IconArrowDown:bc,IconArrowUp:gc,IconCancel:ni,IconCheckOn:Ec,IconCheckOff:Oc,RunewordPopup:Wc},props:{items:{type:Array,required:!0}},data(){return{haveRunes:se.state.haveRunes,pinnedRunewords:se.state.pinned,sortKey:"level",sortAsc:!0,tableHeads:[{key:"title",label:"Runeword",textLeft:!0},{key:"rune0",label:"Rune"},{key:"rune1",label:"Rune"},{key:"rune2",label:"Rune"},{key:"rune3",label:"Rune"},{key:"rune4",label:"Rune"},{key:"rune5",label:"Rune"},{key:"ttypes",label:"Item Types"},{key:"level",label:"Level"}]}},computed:{runewordIsComplete(){const e=new Map;return this.items.forEach(t=>{e.set(t.title,t.runes.every(n=>this.haveRunes[n]))}),e},itemsBySort(){const e=this.items.slice();let t;if(this.sortKey==="title")t=({title:r},{title:i})=>r===i?0:r>i?1:-1;else if(this.sortKey==="level")t=({level:r},{level:i})=>r===i?0:r>i?1:-1;else if(this.sortKey==="ttypes")t=({ttypes:r},{ttypes:i})=>r[0]===i[0]?0:r[0]>i[0]?1:-1;else if(/rune(\d)/.test(this.sortKey)){const r=parseInt(RegExp.$1);t=({runes:i},{runes:o})=>{const a=i[r],c=o[r];return a===c?0:a>c?1:-1}}t&&e.sort(t),!this.sortAsc&&e.reverse();const n=[...e.filter(r=>this.runewordIsComplete.get(r.title)),...e.filter(r=>!this.runewordIsComplete.get(r.title))];return[...n.filter(r=>this.pinnedRunewords.has(r.title)),...n.filter(r=>!this.pinnedRunewords.has(r.title))]},refPopup(){return this.$refs.popup}},methods:{cssActiveRune(e){return this.haveRunes[e]?"is-active":""},cssCompleteRuneword(e){return this.runewordIsComplete.get(e.title)?"is-complete":""},getTypeCellHtml(e){let t=e.ttypes.map(n=>{const s=n.replace(" ","&nbsp;");return Ys[n].url?`<a href="${Ys[n].url}" target="_blank">${s}</a>`:s}).join("&nbsp;/&nbsp;");return e.tinfos&&(t+=`<br><span class="rw-Table-tdTypeClass">${e.tinfos}</span>`),t},isSortKey(e){return e===this.sortKey},onEnterRuneword(e,t){!e.target||this.refPopup.showRuneword(t,e.target)},onLeaveRuneword(){this.refPopup.setVisible(!1)},onSortBy(e){this.sortAsc=this.sortKey===e?!this.sortAsc:!0,this.sortKey=e},onTogglePin(e){const t=se.isPinned(e);se.setPinned([e],!t),se.saveState()},unpinAll(){const e=se.getPinned();se.setPinned(e,!1),se.saveState()}}}),Kc={class:"rw-Table w-full"},Uc=["onClick"],qc={key:0,class:"rw-Table-thIcon"},zc={key:1,class:"rw-Table-thIcon"},Vc={key:0,class:"rw-Table-tr"},Gc={class:"rw-Table-td",colspan:"9"},jc={class:"text-center mt-6 py-2 relative"},Jc=b("span",{class:"text-md text-gold tracking-[.2em]"},"PINNED RUNEWORDS",-1),Yc=Xe("unpin all "),Xc={key:1,class:"rw-Table-tr"},Zc=b("td",{class:"rw-Table-td",colspan:"9"},[b("div",{class:"text-center text-md text-gold tracking-[.2em] mt-6 py-2"},"ALL RUNEWORDS")],-1),Qc=[Zc],eu={class:"rw-Table-td rw-Table-tdTitle p-0 text-left relative min-w-[10em]"},tu=["onMouseenter","onClick"],nu={key:0,class:"rw-Md-ladder",title:"Ladder Only"},su={key:1,class:"rw-Table-tdTitlePatch",title:"Patch version"},ru=["onClick"],iu=["onClick"],ou=["innerHTML"],au={class:"rw-Table-td"};function lu(e,t,n,s,r,i){const o=re("runeword-popup"),a=re("icon-arrow-down"),c=re("icon-arrow-up"),f=re("icon-cancel"),h=re("icon-check-on"),T=re("icon-check-off");return M(),F(ne,null,[W(o,{ref:"popup"},null,512),b("table",Kc,[b("thead",null,[b("tr",null,[(M(!0),F(ne,null,St(e.tableHeads,p=>(M(),F("th",{key:p.key,class:fe(["rw-Table-th cursor-pointer",{"is-sortCol":e.isSortKey(p.key),"text-left":p.textLeft}]),onClick:w=>e.onSortBy(p.key)},[Xe(X(p.label)+" ",1),e.isSortKey(p.key)&&e.sortAsc?(M(),F("span",qc,[W(a,{class:"ux-icon ux-icon--fw"})])):ye("",!0),e.isSortKey(p.key)&&!e.sortAsc?(M(),F("span",zc,[W(c,{class:"ux-icon ux-icon--fw"})])):ye("",!0)],10,Uc))),128))])]),b("tbody",null,[(M(!0),F(ne,null,St(e.itemsBySort,(p,w)=>(M(),F(ne,{key:w},[e.pinnedRunewords.size&&w===0?(M(),F("tr",Vc,[b("td",Gc,[b("div",jc,[Jc,b("a",{class:"rw-Runes-clear absolute right-0 top-1",href:"#",onClick:t[0]||(t[0]=Ct((...L)=>e.unpinAll&&e.unpinAll(...L),["prevent"]))},[W(f,{class:"ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1"}),Yc])])])])):ye("",!0),e.pinnedRunewords.size&&w===e.pinnedRunewords.size?(M(),F("tr",Xc,Qc)):ye("",!0),b("tr",{class:fe(["rw-Table-tr",e.cssCompleteRuneword(p)]),style:Bt({display:p.filterMatch?"":"none"})},[b("td",eu,[b("span",{class:"rw-Table-tdTitleSpan cursor-pointer",onMouseenter:L=>e.onEnterRuneword(L,p),onMouseleave:t[1]||(t[1]=L=>e.onLeaveRuneword()),onClick:L=>e.onEnterRuneword(L,p)},X(p.title),41,tu),p.ladder?(M(),F("span",nu,"L")):ye("",!0),p.version?(M(),F("span",su,X(p.version),1)):ye("",!0),e.pinnedRunewords.has(p.title)?(M(),F("div",{key:2,class:"rw-Table-pin is-pinned",onClick:L=>e.onTogglePin(p.title)},[W(h,{class:"rw-Table-pinIcon"})],8,ru)):(M(),F("div",{key:3,class:"rw-Table-pin",onClick:L=>e.onTogglePin(p.title)},[W(T,{class:"rw-Table-pinIcon"})],8,iu))]),b("td",{class:fe(["rw-Table-td is-rune",e.cssActiveRune(p.runes[0])])},X(p.runes[0]),3),b("td",{class:fe(["rw-Table-td is-rune",e.cssActiveRune(p.runes[1])])},X(p.runes[1]),3),b("td",{class:fe(["rw-Table-td is-rune",e.cssActiveRune(p.runes[2])])},X(p.runes[2]),3),b("td",{class:fe(["rw-Table-td is-rune",e.cssActiveRune(p.runes[3])])},X(p.runes[3]),3),b("td",{class:fe(["rw-Table-td is-rune",e.cssActiveRune(p.runes[4])])},X(p.runes[4]),3),b("td",{class:fe(["rw-Table-td is-rune",e.cssActiveRune(p.runes[5])])},X(p.runes[5]),3),b("td",{class:"rw-Table-td rw-Table-tdType min-w-[10em]",innerHTML:e.getTypeCellHtml(p)},null,8,ou),b("td",au,X(p.level),1)],6)],64))),128))])])],64)}var cu=ce(Nc,[["render",lu]]);const Xs=["Axes","Claws","Clubs","Daggers","Hammers","Maces","Orbs","Polearms","Scepters","Spears","Staves","Swords","2-H Swords","Wands"],Zs=[{id:"melee",label:"Melee Weapons",expandable:!0,subtypes:Xs,matches:["Melee Weapons","Weapons",...Xs]},{id:"missile",label:"Missile Weapons",expandable:!1,subtypes:[],matches:["Missile Weapons","Weapons"]},{id:"throwing",label:"Throwing Weapons",expandable:!1,subtypes:[],matches:["Throwing Weapons","Weapons"]},{id:"armor",label:"Body Armors",expandable:!1,subtypes:[],matches:["Body Armors"]},{id:"helms",label:"Helms",expandable:!1,subtypes:[],matches:["Helms"]},{id:"shields",label:"Shields",expandable:!1,subtypes:[],matches:["Shields","Paladin Shields"]},{id:"quivers",label:"Quivers",expandable:!1,subtypes:[],matches:["Quivers"]}],uu=We({name:"RunewordFilters",props:{availableTtypes:{type:Array,default:()=>[]}},emits:["filter-change"],data(){return{TOP_CATEGORIES:Zs,activeTop:null,activeSubs:new Set}},computed:{activeCat(){return Zs.find(e=>e.id===this.activeTop)},availableSubtypes(){return this.activeCat?this.activeCat.subtypes.filter(e=>this.availableTtypes.includes(e)):[]}},methods:{toggleTop(e){this.activeTop===e?(this.activeTop=null,this.activeSubs=new Set):(this.activeTop=e,this.activeSubs=new Set),this.emit()},selectSubExclusive(e){this.activeSubs.size===1&&this.activeSubs.has(e)?this.activeSubs=new Set:this.activeSubs=new Set([e]),this.emit()},selectSubAdditive(e){const t=new Set(this.activeSubs);t.has(e)?t.delete(e):t.add(e),this.activeSubs=t,this.emit()},clearFilters(){this.activeTop=null,this.activeSubs=new Set,this.emit()},emit(){var e,t;this.$emit("filter-change",{activeTop:this.activeTop,activeSubs:new Set(this.activeSubs),activeCatMatches:(t=(e=this.activeCat)==null?void 0:e.matches)!=null?t:[]})}}}),fu={class:"rwf-wrap"},du={class:"rwf-top-row"},hu=["onClick"],pu={key:0,class:"rwf-sub-row"},mu=b("span",{class:"rwf-sub-label"},null,-1),gu=["onClick"],vu={key:0,class:"rwf-sub-hint"};function Tu(e,t,n,s,r,i){return M(),F("div",fu,[b("div",du,[(M(!0),F(ne,null,St(e.TOP_CATEGORIES,o=>(M(),F("button",{key:o.id,class:fe(["rwf-btn",{"rwf-btn--active":e.activeTop===o.id}]),onClick:a=>e.toggleTop(o.id)},[Xe(X(o.label)+" ",1),o.expandable?(M(),F("span",{key:0,class:fe(["rwf-arrow",{"rwf-arrow--open":e.activeTop===o.id}])},"\u25BE",2)):ye("",!0)],10,hu))),128)),e.activeTop!==null?(M(),F("button",{key:0,class:"rwf-clear",onClick:t[0]||(t[0]=(...o)=>e.clearFilters&&e.clearFilters(...o))},"Clear")):ye("",!0)]),e.activeCat&&e.activeCat.expandable?(M(),F("div",pu,[mu,(M(!0),F(ne,null,St(e.availableSubtypes,o=>(M(),F("button",{key:o,class:fe(["rwf-btn rwf-btn--sub",{"rwf-btn--active":e.activeSubs.has(o)}]),onClick:[Ct(a=>e.selectSubExclusive(o),["exact"]),Ct(a=>e.selectSubAdditive(o),["ctrl","exact"]),Ct(a=>e.selectSubAdditive(o),["meta","exact"])]},X(o),11,gu))),128)),e.availableSubtypes.length>1?(M(),F("span",vu,"Ctrl+click to select multiple")):ye("",!0)])):ye("",!0)])}var yu=ce(uu,[["render",Tu]]);const Cu=We({name:"Runewords",components:{RunewordsTable:cu,RunewordFilters:yu},data(){return{isHelpVisible:!1,runewordsList:[],searchText:"",filterState:{activeTop:null,activeSubs:new Set,activeCatMatches:[]}}},computed:{availableTtypes(){const e=Js.flatMap(t=>t.ttypes);return[...new Set(e)]}},created(){this.runewordsList=Js.slice(),this.updateFilter()},methods:{onSearchInput(){this.updateFilter()},onFilterChange(e){this.filterState=e,this.updateFilter()},runewordMatchesSlotFilter(e){const{activeTop:t,activeSubs:n,activeCatMatches:s}=this.filterState;if(!t)return!0;const r=e.runes.length,i=["Weapons","Melee Weapons"],o=s.filter(f=>!i.includes(f)),a=o.length>0?Math.max(...o.map(f=>{var h;return(h=Rn[f])!=null?h:6})):6;if(!e.ttypes.some(f=>{var T;return s.includes(f)?(i.includes(f)?a:(T=Rn[f])!=null?T:6)>=r:!1}))return!1;if(n.size>0){const f=["Weapons","Melee Weapons"];return[...n].some(h=>{var p;return((p=Rn[h])!=null?p:6)<r?!1:e.ttypes.includes(h)||e.ttypes.some(w=>f.includes(w))})}return!0},updateFilter(){const e=this.searchText.toLowerCase(),t=n=>{const s=n.title.toLowerCase().includes(e),r=n.ttypes.some(h=>h.toLowerCase().includes(e)),i=n.runes.some(h=>h.toLowerCase().includes(e)),o=si[n.title],a=o?o.toLowerCase().includes(e):!1,c=e===""||s||r||a||i,f=this.runewordMatchesSlotFilter(n);return c&&f};this.runewordsList.forEach(n=>{n.filterMatch=t(n)})}}}),Su={class:"rw-Search flex items-center mb-8"},bu=b("label",{class:"text-gold whitespace-nowrap mr-4"},X("Search"),-1);function Au(e,t,n,s,r,i){const o=re("runeword-filters"),a=re("runewords-table");return M(),F("div",null,[b("div",Su,[bu,Bo(b("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>e.searchText=c),type:"text",class:"rw-Search-input",onInput:t[1]||(t[1]=(...c)=>e.onSearchInput&&e.onSearchInput(...c))},null,544),[[Ia,e.searchText]])]),W(o,{"available-ttypes":e.availableTtypes,class:"mb-8",onFilterChange:e.onFilterChange},null,8,["available-ttypes","onFilterChange"]),b("div",null,[W(a,{items:e.runewordsList},null,8,["items"])])])}var _u=ce(Cu,[["render",Au]]);const wu=We({name:"App",components:{AppHeader:El,AppFooter:Gl,Runes:uc,Runewords:_u},computed:{useLayoutHeader(){return!0}}}),Ru={class:"rw-Layout-rowContainer rw-Main py-4 flex mb-24"},Du={class:"mr-16"},Eu={class:"overflow-auto flex-1"};function Mu(e,t,n,s,r,i){const o=re("app-header"),a=re("runes"),c=re("runewords"),f=re("app-footer");return M(),F(ne,null,[e.useLayoutHeader?(M(),Jr(o,{key:0})):ye("",!0),b("main",Ru,[b("div",Du,[W(a)]),b("div",Eu,[W(c)])]),W(f)],64)}var Lu=ce(wu,[["render",Mu]]);const ku=()=>{se.initialize(),se.loadState()};ku();Na(Lu).mount("#app");
