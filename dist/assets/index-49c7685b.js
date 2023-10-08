(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function fl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ie={},Vr=[],bt=()=>{},D_=()=>!1,O_=/^on[^a-z]/,jo=t=>O_.test(t),pl=t=>t.startsWith("onUpdate:"),Fe=Object.assign,ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},V_=Object.prototype.hasOwnProperty,oe=(t,e)=>V_.call(t,e),W=Array.isArray,Mr=t=>qo(t)==="[object Map]",df=t=>qo(t)==="[object Set]",X=t=>typeof t=="function",Ve=t=>typeof t=="string",gl=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",ff=t=>Re(t)&&X(t.then)&&X(t.catch),pf=Object.prototype.toString,qo=t=>pf.call(t),M_=t=>qo(t).slice(8,-1),mf=t=>qo(t)==="[object Object]",_l=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zi=fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},x_=/-(\w)/g,Yt=Ho(t=>t.replace(x_,(e,n)=>n?n.toUpperCase():"")),L_=/\B([A-Z])/g,is=Ho(t=>t.replace(L_,"-$1").toLowerCase()),Ko=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),$a=Ho(t=>t?`on${Ko(t)}`:""),zs=(t,e)=>!Object.is(t,e),eo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},po=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xu;const _c=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ve(r)?B_(r):yl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ve(t))return t;if(Re(t))return t}}const F_=/;(?![^(]*\))/g,U_=/:([^]+)/,$_=/\/\*[^]*?\*\//g;function B_(t){const e={};return t.replace($_,"").split(F_).forEach(n=>{if(n){const r=n.split(U_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vl(t){let e="";if(Ve(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=vl(t[n]);r&&(e+=r+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const j_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",q_=fl(j_);function gf(t){return!!t||t===""}const Rt=t=>Ve(t)?t:t==null?"":W(t)||Re(t)&&(t.toString===pf||!X(t.toString))?JSON.stringify(t,_f,2):String(t),_f=(t,e)=>e&&e.__v_isRef?_f(t,e.value):Mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:df(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!W(e)&&!mf(e)?String(e):e;let At;class H_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function K_(t,e=At){e&&e.active&&e.effects.push(t)}function z_(){return At}const El=t=>{const e=new Set(t);return e.w=0,e.n=0,e},yf=t=>(t.w&Vn)>0,vf=t=>(t.n&Vn)>0,W_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Vn},G_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];yf(s)&&!vf(s)?s.delete(t):e[n++]=s,s.w&=~Vn,s.n&=~Vn}e.length=n}},yc=new WeakMap;let Rs=0,Vn=1;const vc=30;let Ct;const nr=Symbol(""),Ec=Symbol("");class Il{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,K_(this,r)}run(){if(!this.active)return this.fn();let e=Ct,n=Pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,Pn=!0,Vn=1<<++Rs,Rs<=vc?W_(this):Zu(this),this.fn()}finally{Rs<=vc&&G_(this),Vn=1<<--Rs,Ct=this.parent,Pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(Zu(this),this.onStop&&this.onStop(),this.active=!1)}}function Zu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Pn=!0;const Ef=[];function os(){Ef.push(Pn),Pn=!1}function as(){const t=Ef.pop();Pn=t===void 0?!0:t}function dt(t,e,n){if(Pn&&Ct){let r=yc.get(t);r||yc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=El()),If(s)}}function If(t,e){let n=!1;Rs<=vc?vf(t)||(t.n|=Vn,n=!yf(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function an(t,e,n,r,s,i){const o=yc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?_l(n)&&a.push(o.get("length")):(a.push(o.get(nr)),Mr(t)&&a.push(o.get(Ec)));break;case"delete":W(t)||(a.push(o.get(nr)),Mr(t)&&a.push(o.get(Ec)));break;case"set":Mr(t)&&a.push(o.get(nr));break}if(a.length===1)a[0]&&Ic(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ic(El(c))}}function Ic(t,e){const n=W(t)?t:[...t];for(const r of n)r.computed&&eh(r);for(const r of n)r.computed||eh(r)}function eh(t,e){(t!==Ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Q_=fl("__proto__,__v_isRef,__isVue"),wf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gl)),Y_=wl(),J_=wl(!1,!0),X_=wl(!0),th=Z_();function Z_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ue(this);for(let i=0,o=this.length;i<o;i++)dt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ue)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){os();const r=ue(this)[e].apply(this,n);return as(),r}}),t}function ey(t){const e=ue(this);return dt(e,"has",t),e.hasOwnProperty(t)}function wl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?gy:Pf:e?Cf:Rf).get(r))return r;const o=W(r);if(!t){if(o&&oe(th,s))return Reflect.get(th,s,i);if(s==="hasOwnProperty")return ey}const a=Reflect.get(r,s,i);return(gl(s)?wf.has(s):Q_(s))||(t||dt(r,"get",s),e)?a:Xe(a)?o&&_l(s)?a:a.value:Re(a)?t?bf(a):Wo(a):a}}const ty=Tf(),ny=Tf(!0);function Tf(t=!1){return function(n,r,s,i){let o=n[r];if(Hr(o)&&Xe(o)&&!Xe(s))return!1;if(!t&&(!mo(s)&&!Hr(s)&&(o=ue(o),s=ue(s)),!W(n)&&Xe(o)&&!Xe(s)))return o.value=s,!0;const a=W(n)&&_l(r)?Number(r)<n.length:oe(n,r),c=Reflect.set(n,r,s,i);return n===ue(i)&&(a?zs(s,o)&&an(n,"set",r,s):an(n,"add",r,s)),c}}function ry(t,e){const n=oe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&an(t,"delete",e,void 0),r}function sy(t,e){const n=Reflect.has(t,e);return(!gl(e)||!wf.has(e))&&dt(t,"has",e),n}function iy(t){return dt(t,"iterate",W(t)?"length":nr),Reflect.ownKeys(t)}const Af={get:Y_,set:ty,deleteProperty:ry,has:sy,ownKeys:iy},oy={get:X_,set(t,e){return!0},deleteProperty(t,e){return!0}},ay=Fe({},Af,{get:J_,set:ny}),Tl=t=>t,zo=t=>Reflect.getPrototypeOf(t);function Fi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ue(t),i=ue(e);n||(e!==i&&dt(s,"get",e),dt(s,"get",i));const{has:o}=zo(s),a=r?Tl:n?Cl:Ws;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ui(t,e=!1){const n=this.__v_raw,r=ue(n),s=ue(t);return e||(t!==s&&dt(r,"has",t),dt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function $i(t,e=!1){return t=t.__v_raw,!e&&dt(ue(t),"iterate",nr),Reflect.get(t,"size",t)}function nh(t){t=ue(t);const e=ue(this);return zo(e).has.call(e,t)||(e.add(t),an(e,"add",t,t)),this}function rh(t,e){e=ue(e);const n=ue(this),{has:r,get:s}=zo(n);let i=r.call(n,t);i||(t=ue(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?zs(e,o)&&an(n,"set",t,e):an(n,"add",t,e),this}function sh(t){const e=ue(this),{has:n,get:r}=zo(e);let s=n.call(e,t);s||(t=ue(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&an(e,"delete",t,void 0),i}function ih(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&an(t,"clear",void 0,void 0),n}function Bi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ue(o),c=e?Tl:t?Cl:Ws;return!t&&dt(a,"iterate",nr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ji(t,e,n){return function(...r){const s=this.__v_raw,i=ue(s),o=Mr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Tl:e?Cl:Ws;return!e&&dt(i,"iterate",c?Ec:nr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function _n(t){return function(...e){return t==="delete"?!1:this}}function cy(){const t={get(i){return Fi(this,i)},get size(){return $i(this)},has:Ui,add:nh,set:rh,delete:sh,clear:ih,forEach:Bi(!1,!1)},e={get(i){return Fi(this,i,!1,!0)},get size(){return $i(this)},has:Ui,add:nh,set:rh,delete:sh,clear:ih,forEach:Bi(!1,!0)},n={get(i){return Fi(this,i,!0)},get size(){return $i(this,!0)},has(i){return Ui.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Bi(!0,!1)},r={get(i){return Fi(this,i,!0,!0)},get size(){return $i(this,!0)},has(i){return Ui.call(this,i,!0)},add:_n("add"),set:_n("set"),delete:_n("delete"),clear:_n("clear"),forEach:Bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ji(i,!1,!1),n[i]=ji(i,!0,!1),e[i]=ji(i,!1,!0),r[i]=ji(i,!0,!0)}),[t,n,e,r]}const[ly,uy,hy,dy]=cy();function Al(t,e){const n=e?t?dy:hy:t?uy:ly;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(oe(n,s)&&s in r?n:r,s,i)}const fy={get:Al(!1,!1)},py={get:Al(!1,!0)},my={get:Al(!0,!1)},Rf=new WeakMap,Cf=new WeakMap,Pf=new WeakMap,gy=new WeakMap;function _y(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yy(t){return t.__v_skip||!Object.isExtensible(t)?0:_y(M_(t))}function Wo(t){return Hr(t)?t:Rl(t,!1,Af,fy,Rf)}function Sf(t){return Rl(t,!1,ay,py,Cf)}function bf(t){return Rl(t,!0,oy,my,Pf)}function Rl(t,e,n,r,s){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=yy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function xr(t){return Hr(t)?xr(t.__v_raw):!!(t&&t.__v_isReactive)}function Hr(t){return!!(t&&t.__v_isReadonly)}function mo(t){return!!(t&&t.__v_isShallow)}function kf(t){return xr(t)||Hr(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Nf(t){return po(t,"__v_skip",!0),t}const Ws=t=>Re(t)?Wo(t):t,Cl=t=>Re(t)?bf(t):t;function Df(t){Pn&&Ct&&(t=ue(t),If(t.dep||(t.dep=El())))}function Of(t,e){t=ue(t);const n=t.dep;n&&Ic(n)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function vy(t){return Vf(t,!1)}function Ey(t){return Vf(t,!0)}function Vf(t,e){return Xe(t)?t:new Iy(t,e)}class Iy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Ws(e)}get value(){return Df(this),this._value}set value(e){const n=this.__v_isShallow||mo(e)||Hr(e);e=n?e:ue(e),zs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ws(e),Of(this))}}function Lr(t){return Xe(t)?t.value:t}const wy={get:(t,e,n)=>Lr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Xe(s)&&!Xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Mf(t){return xr(t)?t:new Proxy(t,wy)}class Ty{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Il(e,()=>{this._dirty||(this._dirty=!0,Of(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ue(this);return Df(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ay(t,e,n=!1){let r,s;const i=X(t);return i?(r=t,s=bt):(r=t.get,s=t.set),new Ty(r,s,i||!s,n)}function Sn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Go(i,e,n)}return s}function kt(t,e,n,r){if(X(t)){const i=Sn(t,e,n,r);return i&&ff(i)&&i.catch(o=>{Go(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(kt(t[i],e,n,r));return s}function Go(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Sn(c,null,10,[t,o,a]);return}}Ry(t,n,s,r)}function Ry(t,e,n,r=!0){console.error(t)}let Gs=!1,wc=!1;const Ye=[];let $t=0;const Fr=[];let tn=null,Yn=0;const xf=Promise.resolve();let Pl=null;function Lf(t){const e=Pl||xf;return t?e.then(this?t.bind(this):t):e}function Cy(t){let e=$t+1,n=Ye.length;for(;e<n;){const r=e+n>>>1;Qs(Ye[r])<t?e=r+1:n=r}return e}function Sl(t){(!Ye.length||!Ye.includes(t,Gs&&t.allowRecurse?$t+1:$t))&&(t.id==null?Ye.push(t):Ye.splice(Cy(t.id),0,t),Ff())}function Ff(){!Gs&&!wc&&(wc=!0,Pl=xf.then($f))}function Py(t){const e=Ye.indexOf(t);e>$t&&Ye.splice(e,1)}function Sy(t){W(t)?Fr.push(...t):(!tn||!tn.includes(t,t.allowRecurse?Yn+1:Yn))&&Fr.push(t),Ff()}function oh(t,e=Gs?$t+1:0){for(;e<Ye.length;e++){const n=Ye[e];n&&n.pre&&(Ye.splice(e,1),e--,n())}}function Uf(t){if(Fr.length){const e=[...new Set(Fr)];if(Fr.length=0,tn){tn.push(...e);return}for(tn=e,tn.sort((n,r)=>Qs(n)-Qs(r)),Yn=0;Yn<tn.length;Yn++)tn[Yn]();tn=null,Yn=0}}const Qs=t=>t.id==null?1/0:t.id,by=(t,e)=>{const n=Qs(t)-Qs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $f(t){wc=!1,Gs=!0,Ye.sort(by);const e=bt;try{for($t=0;$t<Ye.length;$t++){const n=Ye[$t];n&&n.active!==!1&&Sn(n,null,14)}}finally{$t=0,Ye.length=0,Uf(),Gs=!1,Pl=null,(Ye.length||Fr.length)&&$f()}}function ky(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ie;d&&(s=n.map(m=>Ve(m)?m.trim():m)),h&&(s=n.map(gc))}let a,c=r[a=$a(e)]||r[a=$a(Yt(e))];!c&&i&&(c=r[a=$a(is(e))]),c&&kt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(l,t,6,s)}}function Bf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=Bf(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Re(t)&&r.set(t,null),null):(W(i)?i.forEach(c=>o[c]=null):Fe(o,i),Re(t)&&r.set(t,o),o)}function Qo(t,e){return!t||!jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),oe(t,e[0].toLowerCase()+e.slice(1))||oe(t,is(e))||oe(t,e))}let Et=null,Yo=null;function go(t){const e=Et;return Et=t,Yo=t&&t.type.__scopeId||null,e}function pr(t){Yo=t}function mr(){Yo=null}function Ne(t,e=Et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_h(-1);const i=go(e);let o;try{o=t(...s)}finally{go(i),r._d&&_h(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ba(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:E,inheritAttrs:T}=t;let C,b;const V=go(t);try{if(n.shapeFlag&4){const x=s||r;C=Ut(u.call(x,x,h,i,m,d,E)),b=c}else{const x=e;C=Ut(x.length>1?x(i,{attrs:c,slots:a,emit:l}):x(i,null)),b=e.props?c:Ny(c)}}catch(x){xs.length=0,Go(x,t,1),C=ie(or)}let H=C;if(b&&T!==!1){const x=Object.keys(b),{shapeFlag:ve}=H;x.length&&ve&7&&(o&&x.some(pl)&&(b=Dy(b,o)),H=Kr(H,b))}return n.dirs&&(H=Kr(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),C=H,go(V),C}const Ny=t=>{let e;for(const n in t)(n==="class"||n==="style"||jo(n))&&((e||(e={}))[n]=t[n]);return e},Dy=(t,e)=>{const n={};for(const r in t)(!pl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Oy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ah(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Qo(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ah(r,o,l):!0:!!o;return!1}function ah(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Qo(n,i))return!0}return!1}function Vy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const My=t=>t.__isSuspense;function xy(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Sy(t)}const qi={};function to(t,e,n){return jf(t,e,n)}function jf(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){var a;const c=z_()===((a=qe)==null?void 0:a.scope)?qe:null;let l,u=!1,h=!1;if(Xe(t)?(l=()=>t.value,u=mo(t)):xr(t)?(l=()=>t,r=!0):W(t)?(h=!0,u=t.some(x=>xr(x)||mo(x)),l=()=>t.map(x=>{if(Xe(x))return x.value;if(xr(x))return Xn(x);if(X(x))return Sn(x,c,2)})):X(t)?e?l=()=>Sn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),kt(t,c,3,[m])}:l=bt,e&&r){const x=l;l=()=>Xn(x())}let d,m=x=>{d=V.onStop=()=>{Sn(x,c,4)}},E;if(Js)if(m=bt,e?n&&kt(e,c,3,[l(),h?[]:void 0,m]):l(),s==="sync"){const x=kv();E=x.__watcherHandles||(x.__watcherHandles=[])}else return bt;let T=h?new Array(t.length).fill(qi):qi;const C=()=>{if(V.active)if(e){const x=V.run();(r||u||(h?x.some((ve,Ee)=>zs(ve,T[Ee])):zs(x,T)))&&(d&&d(),kt(e,c,3,[x,T===qi?void 0:h&&T[0]===qi?[]:T,m]),T=x)}else V.run()};C.allowRecurse=!!e;let b;s==="sync"?b=C:s==="post"?b=()=>lt(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),b=()=>Sl(C));const V=new Il(l,b);e?n?C():T=V.run():s==="post"?lt(V.run.bind(V),c&&c.suspense):V.run();const H=()=>{V.stop(),c&&c.scope&&ml(c.scope.effects,V)};return E&&E.push(H),H}function Ly(t,e,n){const r=this.proxy,s=Ve(t)?t.includes(".")?qf(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=qe;zr(this);const a=jf(s,i.bind(r),n);return o?zr(o):rr(),a}function qf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Xn(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Xe(t))Xn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(df(t)||Mr(t))t.forEach(n=>{Xn(n,e)});else if(mf(t))for(const n in t)Xn(t[n],e);return t}function Ht(t,e){const n=Et;if(n===null)return t;const r=ea(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ie]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Xn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Wn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(os(),kt(c,n,8,[t.el,a,t,e]),as())}}function Hf(t,e){return X(t)?(()=>Fe({name:t.name},e,{setup:t}))():t}const no=t=>!!t.type.__asyncLoader,Kf=t=>t.type.__isKeepAlive;function Fy(t,e){zf(t,"a",e)}function Uy(t,e){zf(t,"da",e)}function zf(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Jo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Kf(s.parent.vnode)&&$y(r,e,n,s),s=s.parent}}function $y(t,e,n,r){const s=Jo(e,t,r,!0);Wf(()=>{ml(r[e],s)},n)}function Jo(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;os(),zr(n);const a=kt(e,n,t,o);return rr(),as(),a});return r?s.unshift(i):s.push(i),i}}const dn=t=>(e,n=qe)=>(!Js||t==="sp")&&Jo(t,(...r)=>e(...r),n),By=dn("bm"),jy=dn("m"),qy=dn("bu"),Hy=dn("u"),Ky=dn("bum"),Wf=dn("um"),zy=dn("sp"),Wy=dn("rtg"),Gy=dn("rtc");function Qy(t,e=qe){Jo("ec",t,e)}const Gf="components";function Mn(t,e){return Jy(Gf,t,!0,e)||t}const Yy=Symbol.for("v-ndc");function Jy(t,e,n=!0,r=!1){const s=Et||qe;if(s){const i=s.type;if(t===Gf){const a=Pv(i,!1);if(a&&(a===e||a===Yt(e)||a===Ko(Yt(e))))return i}const o=ch(s[t]||i[t],e)||ch(s.appContext[t],e);return!o&&r?i:o}}function ch(t,e){return t&&(t[e]||t[Yt(e)]||t[Ko(Yt(e))])}function Tc(t,e,n,r){let s;const i=n&&n[r];if(W(t)||Ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Re(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ac=t=>t?ip(t)?ea(t)||t.proxy:Ac(t.parent):null,Ms=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ac(t.parent),$root:t=>Ac(t.root),$emit:t=>t.emit,$options:t=>bl(t),$forceUpdate:t=>t.f||(t.f=()=>Sl(t.update)),$nextTick:t=>t.n||(t.n=Lf.bind(t.proxy)),$watch:t=>Ly.bind(t)}),ja=(t,e)=>t!==Ie&&!t.__isScriptSetup&&oe(t,e),Xy={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ja(r,e))return o[e]=1,r[e];if(s!==Ie&&oe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&oe(l,e))return o[e]=3,i[e];if(n!==Ie&&oe(n,e))return o[e]=4,n[e];Rc&&(o[e]=0)}}const u=Ms[e];let h,d;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&oe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,oe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ja(s,e)?(s[e]=n,!0):r!==Ie&&oe(r,e)?(r[e]=n,!0):oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&oe(t,o)||ja(e,o)||(a=i[0])&&oe(a,o)||oe(r,o)||oe(Ms,o)||oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lh(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rc=!0;function Zy(t){const e=bl(t),n=t.proxy,r=t.ctx;Rc=!1,e.beforeCreate&&uh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:E,activated:T,deactivated:C,beforeDestroy:b,beforeUnmount:V,destroyed:H,unmounted:x,render:ve,renderTracked:Ee,renderTriggered:Ke,errorCaptured:gt,serverPrefetch:_t,expose:st,inheritAttrs:mn,components:zn,directives:Mt,filters:ys}=e;if(l&&ev(l,r,null),o)for(const ge in o){const he=o[ge];X(he)&&(r[ge]=he.bind(n))}if(s){const ge=s.call(n,n);Re(ge)&&(t.data=Wo(ge))}if(Rc=!0,i)for(const ge in i){const he=i[ge],Zt=X(he)?he.bind(n,n):X(he.get)?he.get.bind(n,n):bt,gn=!X(he)&&X(he.set)?he.set.bind(n):bt,xt=Pt({get:Zt,set:gn});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>xt.value,set:ct=>xt.value=ct})}if(a)for(const ge in a)Qf(a[ge],r,n,ge);if(c){const ge=X(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(he=>{ro(he,ge[he])})}u&&uh(u,t,"c");function xe(ge,he){W(he)?he.forEach(Zt=>ge(Zt.bind(n))):he&&ge(he.bind(n))}if(xe(By,h),xe(jy,d),xe(qy,m),xe(Hy,E),xe(Fy,T),xe(Uy,C),xe(Qy,gt),xe(Gy,Ee),xe(Wy,Ke),xe(Ky,V),xe(Wf,x),xe(zy,_t),W(st))if(st.length){const ge=t.exposed||(t.exposed={});st.forEach(he=>{Object.defineProperty(ge,he,{get:()=>n[he],set:Zt=>n[he]=Zt})})}else t.exposed||(t.exposed={});ve&&t.render===bt&&(t.render=ve),mn!=null&&(t.inheritAttrs=mn),zn&&(t.components=zn),Mt&&(t.directives=Mt)}function ev(t,e,n=bt){W(t)&&(t=Cc(t));for(const r in t){const s=t[r];let i;Re(s)?"default"in s?i=on(s.from||r,s.default,!0):i=on(s.from||r):i=on(s),Xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function uh(t,e,n){kt(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qf(t,e,n,r){const s=r.includes(".")?qf(n,r):()=>n[r];if(Ve(t)){const i=e[t];X(i)&&to(s,i)}else if(X(t))to(s,t.bind(n));else if(Re(t))if(W(t))t.forEach(i=>Qf(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&to(s,i,t)}}function bl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>_o(c,l,o,!0)),_o(c,e,o)),Re(e)&&i.set(e,c),c}function _o(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_o(t,i,n,!0),s&&s.forEach(o=>_o(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=tv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tv={data:hh,props:dh,emits:dh,methods:Cs,computed:Cs,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Cs,directives:Cs,watch:rv,provide:hh,inject:nv};function hh(t,e){return e?t?function(){return Fe(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function nv(t,e){return Cs(Cc(t),Cc(e))}function Cc(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Cs(t,e){return t?Fe(Object.create(null),t,e):e}function dh(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Fe(Object.create(null),lh(t),lh(e??{})):e}function rv(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const r in e)n[r]=it(t[r],e[r]);return n}function Yf(){return{app:null,config:{isNativeTag:D_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sv=0;function iv(t,e){return function(r,s=null){X(r)||(r=Fe({},r)),s!=null&&!Re(s)&&(s=null);const i=Yf(),o=new Set;let a=!1;const c=i.app={_uid:sv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Nv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ie(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ea(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){yo=c;try{return l()}finally{yo=null}}};return c}}let yo=null;function ro(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function on(t,e,n=!1){const r=qe||Et;if(r||yo){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:yo._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e}}function ov(t,e,n,r=!1){const s={},i={};po(i,Zo,1),t.propsDefaults=Object.create(null),Jf(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Sf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function av(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ue(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Qo(t.emitsOptions,d))continue;const m=e[d];if(c)if(oe(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const E=Yt(d);s[E]=Pc(c,a,E,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Jf(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!oe(e,h)&&((u=is(h))===h||!oe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Pc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!oe(e,h))&&(delete i[h],l=!0)}l&&an(t,"set","$attrs")}function Jf(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Zi(c))continue;const l=e[c];let u;s&&oe(s,u=Yt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Qo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ue(n),l=a||Ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Pc(s,c,h,l[h],t,!oe(l,h))}}return o}function Pc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=oe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(zr(s),r=l[n]=c.call(null,e),rr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===is(n))&&(r=!0))}return r}function Xf(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[d,m]=Xf(h,e,!0);Fe(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Re(t)&&r.set(t,Vr),Vr;if(W(i))for(let u=0;u<i.length;u++){const h=Yt(i[u]);fh(h)&&(o[h]=Ie)}else if(i)for(const u in i){const h=Yt(u);if(fh(h)){const d=i[u],m=o[h]=W(d)||X(d)?{type:d}:Fe({},d);if(m){const E=gh(Boolean,m.type),T=gh(String,m.type);m[0]=E>-1,m[1]=T<0||E<T,(E>-1||oe(m,"default"))&&a.push(h)}}}const l=[o,a];return Re(t)&&r.set(t,l),l}function fh(t){return t[0]!=="$"}function ph(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function mh(t,e){return ph(t)===ph(e)}function gh(t,e){return W(e)?e.findIndex(n=>mh(n,t)):X(e)&&mh(e,t)?0:-1}const Zf=t=>t[0]==="_"||t==="$stable",kl=t=>W(t)?t.map(Ut):[Ut(t)],cv=(t,e,n)=>{if(e._n)return e;const r=Ne((...s)=>kl(e(...s)),n);return r._c=!1,r},ep=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Zf(s))continue;const i=t[s];if(X(i))e[s]=cv(s,i,r);else if(i!=null){const o=kl(i);e[s]=()=>o}}},tp=(t,e)=>{const n=kl(e);t.slots.default=()=>n},lv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),po(e,"_",n)):ep(e,t.slots={})}else t.slots={},e&&tp(t,e);po(t.slots,Zo,1)},uv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Fe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ep(e,s)),o=e}else e&&(tp(t,e),o={default:1});if(i)for(const a in s)!Zf(a)&&!(a in o)&&delete s[a]};function Sc(t,e,n,r,s=!1){if(W(t)){t.forEach((d,m)=>Sc(d,e&&(W(e)?e[m]:e),n,r,s));return}if(no(r)&&!s)return;const i=r.shapeFlag&4?ea(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,oe(h,l)&&(h[l]=null)):Xe(l)&&(l.value=null)),X(c))Sn(c,a,12,[o,u]);else{const d=Ve(c),m=Xe(c);if(d||m){const E=()=>{if(t.f){const T=d?oe(h,c)?h[c]:u[c]:c.value;s?W(T)&&ml(T,i):W(T)?T.includes(i)||T.push(i):d?(u[c]=[i],oe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,oe(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,lt(E,n)):E()}}}const lt=xy;function hv(t){return dv(t)}function dv(t,e){const n=_c();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=bt,insertStaticContent:E}=t,T=(f,p,g,_=null,v=null,A=null,O=!1,S=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Es(f,p)&&(_=y(f),ct(f,v,A,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:P,ref:B,shapeFlag:F}=p;switch(P){case Xo:C(f,p,g,_);break;case or:b(f,p,g,_);break;case qa:f==null&&V(p,g,_,O);break;case yt:zn(f,p,g,_,v,A,O,S,k);break;default:F&1?ve(f,p,g,_,v,A,O,S,k):F&6?Mt(f,p,g,_,v,A,O,S,k):(F&64||F&128)&&P.process(f,p,g,_,v,A,O,S,k,N)}B!=null&&v&&Sc(B,f&&f.ref,A,p||f,!p)},C=(f,p,g,_)=>{if(f==null)r(p.el=a(p.children),g,_);else{const v=p.el=f.el;p.children!==f.children&&l(v,p.children)}},b=(f,p,g,_)=>{f==null?r(p.el=c(p.children||""),g,_):p.el=f.el},V=(f,p,g,_)=>{[f.el,f.anchor]=E(f.children,p,g,_,f.el,f.anchor)},H=({el:f,anchor:p},g,_)=>{let v;for(;f&&f!==p;)v=d(f),r(f,g,_),f=v;r(p,g,_)},x=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),s(f),f=g;s(p)},ve=(f,p,g,_,v,A,O,S,k)=>{O=O||p.type==="svg",f==null?Ee(p,g,_,v,A,O,S,k):_t(f,p,v,A,O,S,k)},Ee=(f,p,g,_,v,A,O,S)=>{let k,P;const{type:B,props:F,shapeFlag:j,transition:Q,dirs:te}=f;if(k=f.el=o(f.type,A,F&&F.is,F),j&8?u(k,f.children):j&16&&gt(f.children,k,null,_,v,A&&B!=="foreignObject",O,S),te&&Wn(f,null,_,"created"),Ke(k,f,f.scopeId,O,_),F){for(const me in F)me!=="value"&&!Zi(me)&&i(k,me,null,F[me],A,f.children,_,v,ze);"value"in F&&i(k,"value",null,F.value),(P=F.onVnodeBeforeMount)&&Ft(P,_,f)}te&&Wn(f,null,_,"beforeMount");const _e=(!v||v&&!v.pendingBranch)&&Q&&!Q.persisted;_e&&Q.beforeEnter(k),r(k,p,g),((P=F&&F.onVnodeMounted)||_e||te)&&lt(()=>{P&&Ft(P,_,f),_e&&Q.enter(k),te&&Wn(f,null,_,"mounted")},v)},Ke=(f,p,g,_,v)=>{if(g&&m(f,g),_)for(let A=0;A<_.length;A++)m(f,_[A]);if(v){let A=v.subTree;if(p===A){const O=v.vnode;Ke(f,O,O.scopeId,O.slotScopeIds,v.parent)}}},gt=(f,p,g,_,v,A,O,S,k=0)=>{for(let P=k;P<f.length;P++){const B=f[P]=S?En(f[P]):Ut(f[P]);T(null,B,p,g,_,v,A,O,S)}},_t=(f,p,g,_,v,A,O)=>{const S=p.el=f.el;let{patchFlag:k,dynamicChildren:P,dirs:B}=p;k|=f.patchFlag&16;const F=f.props||Ie,j=p.props||Ie;let Q;g&&Gn(g,!1),(Q=j.onVnodeBeforeUpdate)&&Ft(Q,g,p,f),B&&Wn(p,f,g,"beforeUpdate"),g&&Gn(g,!0);const te=v&&p.type!=="foreignObject";if(P?st(f.dynamicChildren,P,S,g,_,te,A):O||he(f,p,S,null,g,_,te,A,!1),k>0){if(k&16)mn(S,p,F,j,g,_,v);else if(k&2&&F.class!==j.class&&i(S,"class",null,j.class,v),k&4&&i(S,"style",F.style,j.style,v),k&8){const _e=p.dynamicProps;for(let me=0;me<_e.length;me++){const Se=_e[me],Tt=F[Se],Ar=j[Se];(Ar!==Tt||Se==="value")&&i(S,Se,Tt,Ar,v,f.children,g,_,ze)}}k&1&&f.children!==p.children&&u(S,p.children)}else!O&&P==null&&mn(S,p,F,j,g,_,v);((Q=j.onVnodeUpdated)||B)&&lt(()=>{Q&&Ft(Q,g,p,f),B&&Wn(p,f,g,"updated")},_)},st=(f,p,g,_,v,A,O)=>{for(let S=0;S<p.length;S++){const k=f[S],P=p[S],B=k.el&&(k.type===yt||!Es(k,P)||k.shapeFlag&70)?h(k.el):g;T(k,P,B,null,_,v,A,O,!0)}},mn=(f,p,g,_,v,A,O)=>{if(g!==_){if(g!==Ie)for(const S in g)!Zi(S)&&!(S in _)&&i(f,S,g[S],null,O,p.children,v,A,ze);for(const S in _){if(Zi(S))continue;const k=_[S],P=g[S];k!==P&&S!=="value"&&i(f,S,P,k,O,p.children,v,A,ze)}"value"in _&&i(f,"value",g.value,_.value)}},zn=(f,p,g,_,v,A,O,S,k)=>{const P=p.el=f?f.el:a(""),B=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:Q}=p;Q&&(S=S?S.concat(Q):Q),f==null?(r(P,g,_),r(B,g,_),gt(p.children,g,B,v,A,O,S,k)):F>0&&F&64&&j&&f.dynamicChildren?(st(f.dynamicChildren,j,g,v,A,O,S),(p.key!=null||v&&p===v.subTree)&&np(f,p,!0)):he(f,p,g,B,v,A,O,S,k)},Mt=(f,p,g,_,v,A,O,S,k)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?v.ctx.activate(p,g,_,O,k):ys(p,g,_,v,A,O,k):Ir(f,p,k)},ys=(f,p,g,_,v,A,O)=>{const S=f.component=wv(f,_,v);if(Kf(f)&&(S.ctx.renderer=N),Tv(S),S.asyncDep){if(v&&v.registerDep(S,xe),!f.el){const k=S.subTree=ie(or);b(null,k,p,g)}return}xe(S,f,p,g,v,A,O)},Ir=(f,p,g)=>{const _=p.component=f.component;if(Oy(f,p,g))if(_.asyncDep&&!_.asyncResolved){ge(_,p,g);return}else _.next=p,Py(_.update),_.update();else p.el=f.el,_.vnode=p},xe=(f,p,g,_,v,A,O)=>{const S=()=>{if(f.isMounted){let{next:B,bu:F,u:j,parent:Q,vnode:te}=f,_e=B,me;Gn(f,!1),B?(B.el=te.el,ge(f,B,O)):B=te,F&&eo(F),(me=B.props&&B.props.onVnodeBeforeUpdate)&&Ft(me,Q,B,te),Gn(f,!0);const Se=Ba(f),Tt=f.subTree;f.subTree=Se,T(Tt,Se,h(Tt.el),y(Tt),f,v,A),B.el=Se.el,_e===null&&Vy(f,Se.el),j&&lt(j,v),(me=B.props&&B.props.onVnodeUpdated)&&lt(()=>Ft(me,Q,B,te),v)}else{let B;const{el:F,props:j}=p,{bm:Q,m:te,parent:_e}=f,me=no(p);if(Gn(f,!1),Q&&eo(Q),!me&&(B=j&&j.onVnodeBeforeMount)&&Ft(B,_e,p),Gn(f,!0),F&&de){const Se=()=>{f.subTree=Ba(f),de(F,f.subTree,f,v,null)};me?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Se()):Se()}else{const Se=f.subTree=Ba(f);T(null,Se,g,_,f,v,A),p.el=Se.el}if(te&&lt(te,v),!me&&(B=j&&j.onVnodeMounted)){const Se=p;lt(()=>Ft(B,_e,Se),v)}(p.shapeFlag&256||_e&&no(_e.vnode)&&_e.vnode.shapeFlag&256)&&f.a&&lt(f.a,v),f.isMounted=!0,p=g=_=null}},k=f.effect=new Il(S,()=>Sl(P),f.scope),P=f.update=()=>k.run();P.id=f.uid,Gn(f,!0),P()},ge=(f,p,g)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,av(f,p.props,_,g),uv(f,p.children,g),os(),oh(),as()},he=(f,p,g,_,v,A,O,S,k=!1)=>{const P=f&&f.children,B=f?f.shapeFlag:0,F=p.children,{patchFlag:j,shapeFlag:Q}=p;if(j>0){if(j&128){gn(P,F,g,_,v,A,O,S,k);return}else if(j&256){Zt(P,F,g,_,v,A,O,S,k);return}}Q&8?(B&16&&ze(P,v,A),F!==P&&u(g,F)):B&16?Q&16?gn(P,F,g,_,v,A,O,S,k):ze(P,v,A,!0):(B&8&&u(g,""),Q&16&&gt(F,g,_,v,A,O,S,k))},Zt=(f,p,g,_,v,A,O,S,k)=>{f=f||Vr,p=p||Vr;const P=f.length,B=p.length,F=Math.min(P,B);let j;for(j=0;j<F;j++){const Q=p[j]=k?En(p[j]):Ut(p[j]);T(f[j],Q,g,null,v,A,O,S,k)}P>B?ze(f,v,A,!0,!1,F):gt(p,g,_,v,A,O,S,k,F)},gn=(f,p,g,_,v,A,O,S,k)=>{let P=0;const B=p.length;let F=f.length-1,j=B-1;for(;P<=F&&P<=j;){const Q=f[P],te=p[P]=k?En(p[P]):Ut(p[P]);if(Es(Q,te))T(Q,te,g,null,v,A,O,S,k);else break;P++}for(;P<=F&&P<=j;){const Q=f[F],te=p[j]=k?En(p[j]):Ut(p[j]);if(Es(Q,te))T(Q,te,g,null,v,A,O,S,k);else break;F--,j--}if(P>F){if(P<=j){const Q=j+1,te=Q<B?p[Q].el:_;for(;P<=j;)T(null,p[P]=k?En(p[P]):Ut(p[P]),g,te,v,A,O,S,k),P++}}else if(P>j)for(;P<=F;)ct(f[P],v,A,!0),P++;else{const Q=P,te=P,_e=new Map;for(P=te;P<=j;P++){const ft=p[P]=k?En(p[P]):Ut(p[P]);ft.key!=null&&_e.set(ft.key,P)}let me,Se=0;const Tt=j-te+1;let Ar=!1,Qu=0;const vs=new Array(Tt);for(P=0;P<Tt;P++)vs[P]=0;for(P=Q;P<=F;P++){const ft=f[P];if(Se>=Tt){ct(ft,v,A,!0);continue}let Lt;if(ft.key!=null)Lt=_e.get(ft.key);else for(me=te;me<=j;me++)if(vs[me-te]===0&&Es(ft,p[me])){Lt=me;break}Lt===void 0?ct(ft,v,A,!0):(vs[Lt-te]=P+1,Lt>=Qu?Qu=Lt:Ar=!0,T(ft,p[Lt],g,null,v,A,O,S,k),Se++)}const Yu=Ar?fv(vs):Vr;for(me=Yu.length-1,P=Tt-1;P>=0;P--){const ft=te+P,Lt=p[ft],Ju=ft+1<B?p[ft+1].el:_;vs[P]===0?T(null,Lt,g,Ju,v,A,O,S,k):Ar&&(me<0||P!==Yu[me]?xt(Lt,g,Ju,2):me--)}}},xt=(f,p,g,_,v=null)=>{const{el:A,type:O,transition:S,children:k,shapeFlag:P}=f;if(P&6){xt(f.component.subTree,p,g,_);return}if(P&128){f.suspense.move(p,g,_);return}if(P&64){O.move(f,p,g,N);return}if(O===yt){r(A,p,g);for(let F=0;F<k.length;F++)xt(k[F],p,g,_);r(f.anchor,p,g);return}if(O===qa){H(f,p,g);return}if(_!==2&&P&1&&S)if(_===0)S.beforeEnter(A),r(A,p,g),lt(()=>S.enter(A),v);else{const{leave:F,delayLeave:j,afterLeave:Q}=S,te=()=>r(A,p,g),_e=()=>{F(A,()=>{te(),Q&&Q()})};j?j(A,te,_e):_e()}else r(A,p,g)},ct=(f,p,g,_=!1,v=!1)=>{const{type:A,props:O,ref:S,children:k,dynamicChildren:P,shapeFlag:B,patchFlag:F,dirs:j}=f;if(S!=null&&Sc(S,null,g,f,!0),B&256){p.ctx.deactivate(f);return}const Q=B&1&&j,te=!no(f);let _e;if(te&&(_e=O&&O.onVnodeBeforeUnmount)&&Ft(_e,p,f),B&6)Li(f.component,g,_);else{if(B&128){f.suspense.unmount(g,_);return}Q&&Wn(f,null,p,"beforeUnmount"),B&64?f.type.remove(f,p,g,v,N,_):P&&(A!==yt||F>0&&F&64)?ze(P,p,g,!1,!0):(A===yt&&F&384||!v&&B&16)&&ze(k,p,g),_&&wr(f)}(te&&(_e=O&&O.onVnodeUnmounted)||Q)&&lt(()=>{_e&&Ft(_e,p,f),Q&&Wn(f,null,p,"unmounted")},g)},wr=f=>{const{type:p,el:g,anchor:_,transition:v}=f;if(p===yt){Tr(g,_);return}if(p===qa){x(f);return}const A=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:O,delayLeave:S}=v,k=()=>O(g,A);S?S(f.el,A,k):k()}else A()},Tr=(f,p)=>{let g;for(;f!==p;)g=d(f),s(f),f=g;s(p)},Li=(f,p,g)=>{const{bum:_,scope:v,update:A,subTree:O,um:S}=f;_&&eo(_),v.stop(),A&&(A.active=!1,ct(O,f,p,g)),S&&lt(S,p),lt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ze=(f,p,g,_=!1,v=!1,A=0)=>{for(let O=A;O<f.length;O++)ct(f[O],p,g,_,v)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),M=(f,p,g)=>{f==null?p._vnode&&ct(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,g),oh(),Uf(),p._vnode=f},N={p:T,um:ct,m:xt,r:wr,mt:ys,mc:gt,pc:he,pbc:st,n:y,o:t};let U,de;return e&&([U,de]=e(N)),{render:M,hydrate:U,createApp:iv(M,U)}}function Gn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function np(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=En(s[i]),a.el=o.el),n||np(o,a)),a.type===Xo&&(a.el=o.el)}}function fv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const pv=t=>t.__isTeleport,yt=Symbol.for("v-fgt"),Xo=Symbol.for("v-txt"),or=Symbol.for("v-cmt"),qa=Symbol.for("v-stc"),xs=[];let St=null;function Z(t=!1){xs.push(St=t?null:[])}function mv(){xs.pop(),St=xs[xs.length-1]||null}let Ys=1;function _h(t){Ys+=t}function rp(t){return t.dynamicChildren=Ys>0?St||Vr:null,mv(),Ys>0&&St&&St.push(t),t}function ee(t,e,n,r,s,i){return rp(w(t,e,n,r,s,i,!0))}function gv(t,e,n,r,s){return rp(ie(t,e,n,r,s,!0))}function bc(t){return t?t.__v_isVNode===!0:!1}function Es(t,e){return t.type===e.type&&t.key===e.key}const Zo="__vInternal",sp=({key:t})=>t??null,so=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||Xe(t)||X(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function w(t,e=null,n=null,r=0,s=null,i=t===yt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sp(e),ref:e&&so(e),scopeId:Yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Et};return a?(Nl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),Ys>0&&!o&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const ie=_v;function _v(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Yy)&&(t=or),bc(t)){const a=Kr(t,e,!0);return n&&Nl(a,n),Ys>0&&!i&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(Sv(t)&&(t=t.__vccOpts),e){e=yv(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=vl(a)),Re(c)&&(kf(c)&&!W(c)&&(c=Fe({},c)),e.style=yl(c))}const o=Ve(t)?1:My(t)?128:pv(t)?64:Re(t)?4:X(t)?2:0;return w(t,e,n,r,s,o,i,!0)}function yv(t){return t?kf(t)||Zo in t?Fe({},t):t:null}function Kr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?vv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sp(a),ref:e&&e.ref?n&&s?W(s)?s.concat(so(e)):[s,so(e)]:so(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kr(t.ssContent),ssFallback:t.ssFallback&&Kr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function le(t=" ",e=0){return ie(Xo,null,t,e)}function ut(t="",e=!1){return e?(Z(),gv(or,null,t)):ie(or,null,t)}function Ut(t){return t==null||typeof t=="boolean"?ie(or):W(t)?ie(yt,null,t.slice()):typeof t=="object"?En(t):ie(Xo,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kr(t)}function Nl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Nl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Zo in e)?e._ctx=Et:s===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),r&64?(n=16,e=[le(e)]):n=8);t.children=e,t.shapeFlag|=n}function vv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vl([e.class,r.class]));else if(s==="style")e.style=yl([e.style,r.style]);else if(jo(s)){const i=e[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ft(t,e,n,r=null){kt(t,e,7,[n,r])}const Ev=Yf();let Iv=0;function wv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ev,i={uid:Iv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new H_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xf(r,s),emitsOptions:Bf(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ky.bind(null,i),t.ce&&t.ce(i),i}let qe=null,Dl,Rr,yh="__VUE_INSTANCE_SETTERS__";(Rr=_c()[yh])||(Rr=_c()[yh]=[]),Rr.push(t=>qe=t),Dl=t=>{Rr.length>1?Rr.forEach(e=>e(t)):Rr[0](t)};const zr=t=>{Dl(t),t.scope.on()},rr=()=>{qe&&qe.scope.off(),Dl(null)};function ip(t){return t.vnode.shapeFlag&4}let Js=!1;function Tv(t,e=!1){Js=e;const{props:n,children:r}=t.vnode,s=ip(t);ov(t,n,s,e),lv(t,r);const i=s?Av(t,e):void 0;return Js=!1,i}function Av(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Nf(new Proxy(t.ctx,Xy));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Cv(t):null;zr(t),os();const i=Sn(r,t,0,[t.props,s]);if(as(),rr(),ff(i)){if(i.then(rr,rr),e)return i.then(o=>{vh(t,o,e)}).catch(o=>{Go(o,t,0)});t.asyncDep=i}else vh(t,i,e)}else op(t,e)}function vh(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=Mf(e)),op(t,n)}let Eh;function op(t,e,n){const r=t.type;if(!t.render){if(!e&&Eh&&!r.render){const s=r.template||bl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Fe(Fe({isCustomElement:i,delimiters:a},o),c);r.render=Eh(s,l)}}t.render=r.render||bt}zr(t),os(),Zy(t),as(),rr()}function Rv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}}))}function Cv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Rv(t)},slots:t.slots,emit:t.emit,expose:e}}function ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Mf(Nf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ms)return Ms[n](t)},has(e,n){return n in e||n in Ms}}))}function Pv(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function Sv(t){return X(t)&&"__vccOpts"in t}const Pt=(t,e)=>Ay(t,e,Js);function ap(t,e,n){const r=arguments.length;return r===2?Re(e)&&!W(e)?bc(e)?ie(t,null,[e]):ie(t,e):ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&bc(n)&&(n=[n]),ie(t,e,n))}const bv=Symbol.for("v-scx"),kv=()=>on(bv),Nv="3.3.4",Dv="http://www.w3.org/2000/svg",Jn=typeof document<"u"?document:null,Ih=Jn&&Jn.createElement("template"),Ov={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Jn.createElementNS(Dv,t):Jn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Jn.createTextNode(t),createComment:t=>Jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ih.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ih.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Vv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Mv(t,e,n){const r=t.style,s=Ve(n);if(n&&!s){if(e&&!Ve(e))for(const i in e)n[i]==null&&kc(r,i,"");for(const i in n)kc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const wh=/\s*!important$/;function kc(t,e,n){if(W(n))n.forEach(r=>kc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xv(t,e);wh.test(n)?t.setProperty(is(r),n.replace(wh,""),"important"):t[r]=n}}const Th=["Webkit","Moz","ms"],Ha={};function xv(t,e){const n=Ha[e];if(n)return n;let r=Yt(e);if(r!=="filter"&&r in t)return Ha[e]=r;r=Ko(r);for(let s=0;s<Th.length;s++){const i=Th[s]+r;if(i in t)return Ha[e]=i}return e}const Ah="http://www.w3.org/1999/xlink";function Lv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ah,e.slice(6,e.length)):t.setAttributeNS(Ah,e,n);else{const i=q_(e);n==null||i&&!gf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Fv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=gf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Pr(t,e,n,r){t.addEventListener(e,n,r)}function Uv(t,e,n,r){t.removeEventListener(e,n,r)}function $v(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Bv(e);if(r){const l=i[e]=Hv(r,s);Pr(t,a,l,c)}else o&&(Uv(t,a,o,c),i[e]=void 0)}}const Rh=/(?:Once|Passive|Capture)$/;function Bv(t){let e;if(Rh.test(t)){e={};let r;for(;r=t.match(Rh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):is(t.slice(2)),e]}let Ka=0;const jv=Promise.resolve(),qv=()=>Ka||(jv.then(()=>Ka=0),Ka=Date.now());function Hv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kt(Kv(r,n.value),e,5,[r])};return n.value=t,n.attached=qv(),n}function Kv(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ch=/^on[a-z]/,zv=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Vv(t,r,s):e==="style"?Mv(t,n,r):jo(e)?pl(e)||$v(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wv(t,e,r,s))?Fv(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Lv(t,e,r,s))};function Wv(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ch.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ch.test(e)&&Ve(n)?!1:e in t}const Ph=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>eo(e,n):e};function Gv(t){t.target.composing=!0}function Sh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ph(s);const i=r||s.props&&s.props.type==="number";Pr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=gc(a)),t._assign(a)}),n&&Pr(t,"change",()=>{t.value=t.value.trim()}),e||(Pr(t,"compositionstart",Gv),Pr(t,"compositionend",Sh),Pr(t,"change",Sh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ph(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&gc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Qv=["ctrl","shift","alt","meta"],Yv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Qv.some(n=>t[`${n}Key`]&&!e.includes(n))},cp=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Yv[e[s]];if(i&&i(n,e))return}return t(n,...r)},Jv=Fe({patchProp:zv},Ov);let bh;function Xv(){return bh||(bh=hv(Jv))}const Zv=(...t)=>{const e=Xv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=eE(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function eE(t){return Ve(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new nE;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const E=l<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rE=function(t){const e=lp(t);return up.encodeByteArray(e,!0)},vo=function(t){return rE(t).replace(/\./g,"")},hp=function(t){try{return up.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=()=>sE().__FIREBASE_DEFAULTS__,oE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hp(t[1]);return e&&JSON.parse(e)},Ol=()=>{try{return iE()||oE()||aE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dp=t=>{var e,n;return(n=(e=Ol())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cE=t=>{const e=dp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fp=()=>{var t;return(t=Ol())===null||t===void 0?void 0:t.config},pp=t=>{var e;return(e=Ol())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vo(JSON.stringify(n)),vo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function dE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pE(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mE(){try{return typeof indexedDB=="object"}catch{return!1}}function gE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_E,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new fn(s,a,r)}}function yE(t,e){return t.replace(vE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vE=/\{\$([^}]+)}/g;function EE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kh(i)&&kh(o)){if(!Eo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function IE(t,e){const n=new wE(t,e);return n.subscribe.bind(n)}class wE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=za),s.error===void 0&&(s.error=za),s.complete===void 0&&(s.complete=za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function za(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CE(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RE(t){return t===Qn?void 0:t}function CE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const SE={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},bE=re.INFO,kE={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},NE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vl{constructor(e){this.name=e,this._logLevel=bE,this._logHandler=NE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const DE=(t,e)=>e.some(n=>t instanceof n);let Nh,Dh;function OE(){return Nh||(Nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VE(){return Dh||(Dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mp=new WeakMap,Nc=new WeakMap,gp=new WeakMap,Wa=new WeakMap,Ml=new WeakMap;function ME(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mp.set(n,t)}).catch(()=>{}),Ml.set(e,t),e}function xE(t){if(Nc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Nc.set(t,e)}let Dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LE(t){Dc=t(Dc)}function FE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ga(this),e,...n);return gp.set(r,e.sort?e.sort():[e]),bn(r)}:VE().includes(t)?function(...e){return t.apply(Ga(this),e),bn(mp.get(this))}:function(...e){return bn(t.apply(Ga(this),e))}}function UE(t){return typeof t=="function"?FE(t):(t instanceof IDBTransaction&&xE(t),DE(t,OE())?new Proxy(t,Dc):t)}function bn(t){if(t instanceof IDBRequest)return ME(t);if(Wa.has(t))return Wa.get(t);const e=UE(t);return e!==t&&(Wa.set(t,e),Ml.set(e,t)),e}const Ga=t=>Ml.get(t);function $E(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=bn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(bn(o.result),c.oldVersion,c.newVersion,bn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const BE=["get","getKey","getAll","getAllKeys","count"],jE=["put","add","delete","clear"],Qa=new Map;function Oh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qa.get(e))return Qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Qa.set(e,i),i}LE(t=>({...t,get:(e,n,r)=>Oh(e,n)||t.get(e,n,r),has:(e,n)=>!!Oh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oc="@firebase/app",Vh="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Vl("@firebase/app"),KE="@firebase/app-compat",zE="@firebase/analytics-compat",WE="@firebase/analytics",GE="@firebase/app-check-compat",QE="@firebase/app-check",YE="@firebase/auth",JE="@firebase/auth-compat",XE="@firebase/database",ZE="@firebase/database-compat",eI="@firebase/functions",tI="@firebase/functions-compat",nI="@firebase/installations",rI="@firebase/installations-compat",sI="@firebase/messaging",iI="@firebase/messaging-compat",oI="@firebase/performance",aI="@firebase/performance-compat",cI="@firebase/remote-config",lI="@firebase/remote-config-compat",uI="@firebase/storage",hI="@firebase/storage-compat",dI="@firebase/firestore",fI="@firebase/firestore-compat",pI="firebase",mI="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="[DEFAULT]",gI={[Oc]:"fire-core",[KE]:"fire-core-compat",[WE]:"fire-analytics",[zE]:"fire-analytics-compat",[QE]:"fire-app-check",[GE]:"fire-app-check-compat",[YE]:"fire-auth",[JE]:"fire-auth-compat",[XE]:"fire-rtdb",[ZE]:"fire-rtdb-compat",[eI]:"fire-fn",[tI]:"fire-fn-compat",[nI]:"fire-iid",[rI]:"fire-iid-compat",[sI]:"fire-fcm",[iI]:"fire-fcm-compat",[oI]:"fire-perf",[aI]:"fire-perf-compat",[cI]:"fire-rc",[lI]:"fire-rc-compat",[uI]:"fire-gcs",[hI]:"fire-gcs-compat",[dI]:"fire-fst",[fI]:"fire-fst-compat","fire-js":"fire-js",[pI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map,Mc=new Map;function _I(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wr(t){const e=t.name;if(Mc.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,t);for(const n of Io.values())_I(n,t);return!0}function xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kn=new _i("app","Firebase",yI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=mI;function _p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw kn.create("bad-app-name",{appName:String(s)});if(n||(n=fp()),!n)throw kn.create("no-options");const i=Io.get(s);if(i){if(Eo(n,i.options)&&Eo(r,i.config))return i;throw kn.create("duplicate-app",{appName:s})}const o=new PE(s);for(const c of Mc.values())o.addComponent(c);const a=new vI(n,r,o);return Io.set(s,a),a}function yp(t=Vc){const e=Io.get(t);if(!e&&t===Vc&&fp())return _p();if(!e)throw kn.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let s=(r=gI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(a.join(" "));return}Wr(new ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="firebase-heartbeat-database",II=1,Xs="firebase-heartbeat-store";let Ya=null;function vp(){return Ya||(Ya=$E(EI,II,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xs)}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),Ya}async function wI(t){try{return await(await vp()).transaction(Xs).objectStore(Xs).get(Ep(t))}catch(e){if(e instanceof fn)cr.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function Mh(t,e){try{const r=(await vp()).transaction(Xs,"readwrite");await r.objectStore(Xs).put(e,Ep(t)),await r.done}catch(n){if(n instanceof fn)cr.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function Ep(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=1024,AI=30*24*60*60*1e3;class RI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=AI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xh(),{heartbeatsToSend:n,unsentEntries:r}=CI(this._heartbeatsCache.heartbeats),s=vo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xh(){return new Date().toISOString().substring(0,10)}function CI(t,e=TI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Lh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mE()?gE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Lh(t){return vo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){Wr(new ar("platform-logger",e=>new qE(e),"PRIVATE")),Wr(new ar("heartbeat",e=>new RI(e),"PRIVATE")),Nn(Oc,Vh,t),Nn(Oc,Vh,"esm2017"),Nn("fire-js","")}SI("");function Ll(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Fh(t){return t!==void 0&&t.enterprise!==void 0}class bI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Ip(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kI=Ip,wp=new _i("auth","Firebase",Ip());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new Vl("@firebase/auth");function NI(t,...e){wo.logLevel<=re.WARN&&wo.warn(`Auth (${cs}): ${t}`,...e)}function io(t,...e){wo.logLevel<=re.ERROR&&wo.error(`Auth (${cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw Fl(t,...e)}function zt(t,...e){return Fl(t,...e)}function DI(t,e,n){const r=Object.assign(Object.assign({},kI()),{[e]:n});return new _i("auth","Firebase",r).create(e,{appName:t.name})}function Fl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wp.create(t,...e)}function K(t,e,...n){if(!t)throw Fl(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw io(e),new Error(e)}function cn(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OI(){return Uh()==="http:"||Uh()==="https:"}function Uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OI()||dE()||"connection"in navigator)?navigator.onLine:!0}function MI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=hE()||fE()}get(){return VI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new vi(3e4,6e4);function gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,s={}){return Ap(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=yi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Tp.fetch()(Rp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ap(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xI),e);try{const s=new FI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Hi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Hi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Hi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw DI(t,u,l);Nt(t,u)}}catch(s){if(s instanceof fn)throw s;Nt(t,"network-request-failed",{message:String(s)})}}async function Ei(t,e,n,r,s={}){const i=await Bn(t,e,n,r,s);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ul(t.config,s):`${t.config.apiScheme}://${s}`}class FI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),LI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zt(t,e,r);return s.customData._tokenResponse=n,s}async function UI(t,e){return Bn(t,"GET","/v2/recaptchaConfig",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function BI(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jI(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=$l(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ls(Ja(s.auth_time)),issuedAtTime:Ls(Ja(s.iat)),expirationTime:Ls(Ja(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ja(t){return Number(t)*1e3}function $l(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const s=hp(n);return s?JSON.parse(s):(io("Failed to decode base64 JWT payload"),null)}catch(s){return io("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qI(t){const e=$l(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&HI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Gr(t,BI(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?GI(i.providerUserInfo):[],a=WI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Cp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function zI(t){const e=Me(t);await To(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function GI(t){return t.map(e=>{var{providerId:n}=e,r=Ll(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,e){const n=await Ap(t,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rp(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await QI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Zs;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ll(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jI(this,e)}reload(){return zI(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await To(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gr(this,$I(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:x,isAnonymous:ve,providerData:Ee,stsTokenManager:Ke}=n;K(H&&Ke,e,"internal-error");const gt=Zs.fromJSON(this.name,Ke);K(typeof H=="string",e,"internal-error"),yn(h,e.name),yn(d,e.name),K(typeof x=="boolean",e,"internal-error"),K(typeof ve=="boolean",e,"internal-error"),yn(m,e.name),yn(E,e.name),yn(T,e.name),yn(C,e.name),yn(b,e.name),yn(V,e.name);const _t=new sr({uid:H,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:ve,photoURL:E,phoneNumber:m,tenantId:T,stsTokenManager:gt,createdAt:b,lastLoginAt:V});return Ee&&Array.isArray(Ee)&&(_t.providerData=Ee.map(st=>Object.assign({},st))),C&&(_t._redirectEventId=C),_t}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zs;s.updateFromServerResponse(n);const i=new sr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await To(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new Map;function rn(t){cn(t instanceof Function,"Expected a class definition");let e=$h.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$h.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pp.type="NONE";const Bh=Pp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ur{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=oo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ur(rn(Bh),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rn(Bh);const o=oo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=sr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ur(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ur(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dp(e))return"Blackberry";if(Op(e))return"Webos";if(Bl(e))return"Safari";if((e.includes("chrome/")||bp(e))&&!e.includes("edge/"))return"Chrome";if(Np(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sp(t=nt()){return/firefox\//i.test(t)}function Bl(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bp(t=nt()){return/crios\//i.test(t)}function kp(t=nt()){return/iemobile/i.test(t)}function Np(t=nt()){return/android/i.test(t)}function Dp(t=nt()){return/blackberry/i.test(t)}function Op(t=nt()){return/webos/i.test(t)}function ta(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YI(t=nt()){var e;return ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JI(){return pE()&&document.documentMode===10}function Vp(t=nt()){return ta(t)||Np(t)||Op(t)||Dp(t)||/windows phone/i.test(t)||kp(t)}function XI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(t,e=[]){let n;switch(t){case"Browser":n=jh(nt());break;case"Worker":n=`${jh(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(t,e={}){return Bn(t,"GET","/v2/passwordPolicy",gr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=6;class nw{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qh(this),this.idTokenSubscription=new qh(this),this.beforeStateQueue=new ZI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await To(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ew(this),n=new nw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _r(t){return Me(t)}class qh{constructor(e){this.auth=e,this.observer=null,this.addObserver=IE(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",sw().appendChild(r)})}function iw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ow="https://www.google.com/recaptcha/enterprise.js?render=",aw="recaptcha-enterprise",cw="NO_RECAPTCHA";class lw{constructor(e){this.type=aw,this.auth=_r(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{UI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new bI(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Fh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(cw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Fh(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}xp(ow+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ao(t,e,n,r=!1){const s=new lw(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t,e){const n=xl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Eo(i,e??{}))return s;Nt(s,"already-initialized")}return n.initialize({options:e})}function hw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dw(t,e,n){const r=_r(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Lp(e),{host:o,port:a}=fw(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||pw()}function Lp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fw(t){const e=Lp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Hh(o)}}}function Hh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}async function mw(t,e){return Bn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(t,e){return Ei(t,"POST","/v1/accounts:signInWithPassword",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t,e){return Ei(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}async function _w(t,e){return Ei(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends jl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ei(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ei(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ao(e,r,"signInWithPassword");return Xa(e,s)}else return Xa(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ao(e,r,"signInWithPassword");return Xa(e,i)}else return Promise.reject(s)});case"emailLink":return gw(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return mw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _w(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t,e){return Ei(t,"POST","/v1/accounts:signInWithIdp",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="http://localhost";class lr extends jl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ll(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new lr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}buildRequest(){const e={requestUri:yw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ew(t){const e=Ps(Ss(t)).link,n=e?Ps(Ss(e)).deep_link_id:null,r=Ps(Ss(t)).deep_link_id;return(r?Ps(Ss(r)).link:null)||r||n||e||t}class ql{constructor(e){var n,r,s,i,o,a;const c=Ps(Ss(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=vw((s=c.mode)!==null&&s!==void 0?s:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ew(e);try{return new ql(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.providerId=ls.PROVIDER_ID}static credential(e,n){return ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ql.parseLink(n);return K(r,"argument-error"),ei._fromEmailAndCode(e,r.code,r.tenantId)}}ls.PROVIDER_ID="password";ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Fp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ii{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ii{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ii{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(t,e){return Ei(t,"POST","/v1/accounts:signUp",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sr._fromIdTokenResponse(e,r,s),o=Kh(r);return new ur({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kh(r);return new ur({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ro.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ro(e,n,r,s)}}function Up(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ro._fromErrorAndOperation(t,i,e,r):i})}async function Iw(t,e,n=!1){const r=await Gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ur._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Gr(t,Up(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=$l(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),ur._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(t,e,n=!1){const r="signIn",s=await Up(t,r,e),i=await ur._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Tw(t,e){return $p(_r(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(t){const e=_r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Aw(t,e,n){var r;const s=_r(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Ao(s,i,"signUpPassword");o=Za(s,l)}else o=Za(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ao(s,i,"signUpPassword");return Za(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bp(t),l}),c=await ur._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Rw(t,e,n){return Tw(Me(t),ls.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bp(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t,e){return Bn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Me(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Gr(r,Cw(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Sw(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function bw(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function Hl(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function kw(t){return Me(t).signOut()}const Co="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Co,"1"),this.storage.removeItem(Co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(){const t=nt();return Bl(t)||ta(t)}const Dw=1e3,Ow=10;class qp extends jp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nw()&&XI(),this.fallbackToPolling=Vp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);JI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ow):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qp.type="LOCAL";const Vw=qp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp extends jp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hp.type="SESSION";const Kp=Hp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Mw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Kl("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function Lw(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function Fw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $w(){return zp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="firebaseLocalStorageDb",Bw=1,Po="firebaseLocalStorage",Gp="fbase_key";class wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ra(t,e){return t.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function jw(){const t=indexedDB.deleteDatabase(Wp);return new wi(t).toPromise()}function Lc(){const t=indexedDB.open(Wp,Bw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Po,{keyPath:Gp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Po)?e(r):(r.close(),await jw(),e(await Lc()))})})}async function zh(t,e,n){const r=ra(t,!0).put({[Gp]:e,value:n});return new wi(r).toPromise()}async function qw(t,e){const n=ra(t,!1).get(e),r=await new wi(n).toPromise();return r===void 0?null:r.value}function Wh(t,e){const n=ra(t,!0).delete(e);return new wi(n).toPromise()}const Hw=800,Kw=3;class Qp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Kw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance($w()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fw(),!this.activeServiceWorker)return;this.sender=new xw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lc();return await zh(e,Co,"1"),await Wh(e,Co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ra(s,!1).getAll();return new wi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qp.type="LOCAL";const zw=Qp;new vi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e){return e?rn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends jl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gw(t){return $p(t.auth,new zl(t),t.bypassAuthState)}function Qw(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),ww(n,new zl(t),t.bypassAuthState)}async function Yw(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Iw(n,new zl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gw;case"linkViaPopup":case"linkViaRedirect":return Yw;case"reauthViaPopup":case"reauthViaRedirect":return Qw;default:Nt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=new vi(2e3,1e4);class Dr extends Yp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jw.get())};e()}}Dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="pendingRedirect",ao=new Map;class Zw extends Yp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const r=await eT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eT(t,e){const n=rT(e),r=nT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tT(t,e){ao.set(t._key(),e)}function nT(t){return rn(t._redirectPersistence)}function rT(t){return oo(Xw,t.config.apiKey,t.name)}async function sT(t,e,n=!1){const r=_r(t),s=Ww(r,e),o=await new Zw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=10*60*1e3;class oT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Jp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gh(e))}saveEventToCache(e){this.cachedEventUids.add(Gh(e)),this.lastProcessedEventTime=Date.now()}}function Gh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uT=/^https?/;async function hT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cT(t);for(const n of e)try{if(dT(n))return}catch{}Nt(t,"unauthorized-domain")}function dT(t){const e=xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uT.test(n))return!1;if(lT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=new vi(3e4,6e4);function Qh(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pT(t){return new Promise((e,n)=>{var r,s,i;function o(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),n(zt(t,"network-request-failed"))},timeout:fT.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const a=iw("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},xp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw co=null,e})}let co=null;function mT(t){return co=co||pT(t),co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new vi(5e3,15e3),_T="__/auth/iframe",yT="emulator/auth/iframe",vT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ET=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IT(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ul(e,yT):`https://${t.config.authDomain}/${_T}`,r={apiKey:e.apiKey,appName:t.name,v:cs},s=ET.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yi(r).slice(1)}`}async function wT(t){const e=await mT(t),n=Wt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:IT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Wt().setTimeout(()=>{i(o)},gT.get());function c(){Wt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AT=500,RT=600,CT="_blank",PT="http://localhost";class Yh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ST(t,e,n,r=AT,s=RT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},TT),{width:r.toString(),height:s.toString(),top:i,left:o}),l=nt().toLowerCase();n&&(a=bp(l)?CT:n),Sp(l)&&(e=e||PT,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,E])=>`${d}${m}=${E},`,"");if(YI(l)&&a!=="_self")return bT(e||"",a),new Yh(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Yh(h)}function bT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="__/auth/handler",NT="emulator/auth/handler",DT=encodeURIComponent("fac");async function Jh(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cs,eventId:s};if(e instanceof Fp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ii){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${DT}=${encodeURIComponent(c)}`:"";return`${OT(t)}?${yi(a).slice(1)}${l}`}function OT({config:t}){return t.emulator?Ul(t,NT):`https://${t.authDomain}/${kT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="webStorageSupport";class VT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kp,this._completeRedirectFn=sT,this._overrideRedirectResult=tT}async _openPopup(e,n,r,s){var i;cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Jh(e,n,r,xc(),s);return ST(e,o,Kl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jh(e,n,r,xc(),s);return Lw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wT(e),r=new oT(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ec,{type:ec},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ec];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vp()||Bl()||ta()}}const MT=VT;var Xh="@firebase/auth",Zh="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FT(t){Wr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mp(t)},l=new rw(r,s,i,c);return hw(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new ar("auth-internal",e=>{const n=_r(e.getProvider("auth").getImmediate());return(r=>new xT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(Xh,Zh,LT(t)),Nn(Xh,Zh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=5*60,$T=pp("authIdTokenMaxAge")||UT;let ed=null;const BT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$T)return;const s=n==null?void 0:n.token;ed!==s&&(ed=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jT(t=yp()){const e=xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uw(t,{popupRedirectResolver:MT,persistence:[zw,Vw,Kp]}),r=pp("authTokenSyncURL");if(r){const i=BT(r);bw(n,i,()=>i(n.currentUser)),Sw(n,o=>i(o))}const s=dp("auth");return s&&dw(n,`http://${s}`),n}FT("Browser");const pn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qT={props:["user"],data(){return{}}},HT={key:0,id:"userid"},KT={class:"nav-list"},zT={class:"list-items"},WT={key:0,class:"list-items"},GT={key:1,class:"list-items"},QT={key:2,class:"list-items"},YT={key:3,class:"list-items"},JT={key:4,class:"list-items"};function XT(t,e,n,r,s,i){const o=Mn("router-link");return Z(),ee("header",null,[w("nav",null,[w("h1",null,[ie(o,{to:"/"},{default:Ne(()=>[le("videoconnect.io")]),_:1}),n.user?(Z(),ee("span",HT,Rt(n.user.uid),1)):ut("",!0)]),w("ul",KT,[w("li",zT,[ie(o,{to:"/"},{default:Ne(()=>[le("Home")]),_:1})]),n.user?ut("",!0):(Z(),ee("li",WT,[ie(o,{to:"/login"},{default:Ne(()=>[le("Login")]),_:1})])),n.user?ut("",!0):(Z(),ee("li",GT,[ie(o,{to:"/register"},{default:Ne(()=>[le("Register")]),_:1})])),n.user?(Z(),ee("li",QT,[ie(o,{to:"/rooms"},{default:Ne(()=>[le("Rooms")]),_:1})])):ut("",!0),n.user?(Z(),ee("li",YT,[ie(o,{to:"/checkinclient"},{default:Ne(()=>[le("check in client")]),_:1})])):ut("",!0),n.user?(Z(),ee("li",JT,[w("button",{onClick:e[0]||(e[0]=a=>t.$emit("logout"))},"Logout")])):ut("",!0)])])])}const ZT=pn(qT,[["render",XT],["__scopeId","data-v-20eac44c"]]);var e0="firebase",t0="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(e0,t0,"app");var n0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Wl=Wl||{},G=n0||self;function sa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ti(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function r0(t){return Object.prototype.hasOwnProperty.call(t,tc)&&t[tc]||(t[tc]=++s0)}var tc="closure_uid_"+(1e9*Math.random()>>>0),s0=0;function i0(t,e,n){return t.call.apply(t.bind,arguments)}function o0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=i0:Ze=o0,Ze.apply(null,arguments)}function Ki(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function jn(){this.s=this.s,this.o=this.o}var a0=0;jn.prototype.s=!1;jn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),a0!=0)&&r0(this)};jn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function td(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(sa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var c0=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",()=>{},e),G.removeEventListener("test",()=>{},e)}catch{}return t}();function ti(t){return/^[\s\xa0]*$/.test(t)}function ia(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Bt(t){return ia().indexOf(t)!=-1}function Ql(t){return Ql[" "](t),t}Ql[" "]=function(){};function l0(t,e){var n=tA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var u0=Bt("Opera"),Qr=Bt("Trident")||Bt("MSIE"),Zp=Bt("Edge"),Fc=Zp||Qr,em=Bt("Gecko")&&!(ia().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge"))&&!(Bt("Trident")||Bt("MSIE"))&&!Bt("Edge"),h0=ia().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge");function tm(){var t=G.document;return t?t.documentMode:void 0}var Uc;e:{var nc="",rc=function(){var t=ia();if(em)return/rv:([^\);]+)(\)|;)/.exec(t);if(Zp)return/Edge\/([\d\.]+)/.exec(t);if(Qr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(h0)return/WebKit\/(\S+)/.exec(t);if(u0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(rc&&(nc=rc?rc[1]:""),Qr){var sc=tm();if(sc!=null&&sc>parseFloat(nc)){Uc=String(sc);break e}}Uc=nc}var $c;if(G.document&&Qr){var nd=tm();$c=nd||parseInt(Uc,10)||void 0}else $c=void 0;var d0=$c;function ni(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(em){e:{try{Ql(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:f0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ni.$.h.call(this)}}$e(ni,et);var f0={2:"touch",3:"pen",4:"mouse"};ni.prototype.h=function(){ni.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ai="closure_listenable_"+(1e6*Math.random()|0),p0=0;function m0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++p0,this.fa=this.ia=!1}function oa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Yl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function g0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nm(t){const e={};for(const n in t)e[n]=t[n];return e}const rd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<rd.length;i++)n=rd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function aa(t){this.src=t,this.g={},this.h=0}aa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=jc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new m0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Bc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Xp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(oa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Jl="closure_lm_"+(1e6*Math.random()|0),ic={};function sm(t,e,n,r,s){if(r&&r.once)return om(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)sm(t,e[i],n,r,s);return null}return n=eu(n),t&&t[Ai]?t.O(e,n,Ti(r)?!!r.capture:!!r,s):im(t,e,n,!1,r,s)}function im(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ti(s)?!!s.capture:!!s,a=Zl(t);if(a||(t[Jl]=a=new aa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=_0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)c0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(cm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _0(){function t(n){return e.call(t.src,t.listener,n)}const e=y0;return t}function om(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)om(t,e[i],n,r,s);return null}return n=eu(n),t&&t[Ai]?t.P(e,n,Ti(r)?!!r.capture:!!r,s):im(t,e,n,!0,r,s)}function am(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)am(t,e[i],n,r,s);else r=Ti(r)?!!r.capture:!!r,n=eu(n),t&&t[Ai]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=jc(i,n,r,s),-1<n&&(oa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Zl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jc(e,n,r,s)),(n=-1<t?e[t]:null)&&Xl(n))}function Xl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ai])Bc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Zl(e))?(Bc(n,t),n.h==0&&(n.src=null,e[Jl]=null)):oa(t)}}}function cm(t){return t in ic?ic[t]:ic[t]="on"+t}function y0(t,e){if(t.fa)t=!0;else{e=new ni(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Xl(t),t=n.call(r,e)}return t}function Zl(t){return t=t[Jl],t instanceof aa?t:null}var oc="__closure_events_fn_"+(1e9*Math.random()>>>0);function eu(t){return typeof t=="function"?t:(t[oc]||(t[oc]=function(e){return t.handleEvent(e)}),t[oc])}function Ue(){jn.call(this),this.i=new aa(this),this.S=this,this.J=null}$e(Ue,jn);Ue.prototype[Ai]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){am(this,t,e,n,r)};function He(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var s=e;e=new et(r,t),rm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=zi(o,r,!0,e)&&s}if(o=e.g=t,s=zi(o,r,!0,e)&&s,s=zi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=zi(o,r,!1,e)&&s}Ue.prototype.N=function(){if(Ue.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oa(n[r]);delete t.g[e],t.h--}}this.J=null};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function zi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Bc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var tu=G.JSON.stringify;class v0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function E0(){var t=nu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class I0{constructor(){this.h=this.g=null}add(e,n){const r=lm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var lm=new v0(()=>new w0,t=>t.reset());class w0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function T0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function A0(t){G.setTimeout(()=>{throw t},0)}let ri,si=!1,nu=new I0,um=()=>{const t=G.Promise.resolve(void 0);ri=()=>{t.then(R0)}};var R0=()=>{for(var t;t=E0();){try{t.h.call(t.g)}catch(n){A0(n)}var e=lm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}si=!1};function ca(t,e){Ue.call(this),this.h=t||1,this.g=e||G,this.j=Ze(this.qb,this),this.l=Date.now()}$e(ca,Ue);D=ca.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),He(this,"tick"),this.ga&&(ru(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ru(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){ca.$.N.call(this),ru(this),delete this.g};function su(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function hm(t){t.g=su(()=>{t.g=null,t.i&&(t.i=!1,hm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class C0 extends jn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hm(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(t){jn.call(this),this.h=t,this.g={}}$e(ii,jn);var sd=[];function dm(t,e,n,r){Array.isArray(n)||(n&&(sd[0]=n.toString()),n=sd);for(var s=0;s<n.length;s++){var i=sm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function fm(t){Yl(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xl(e)},t),t.g={}}ii.prototype.N=function(){ii.$.N.call(this),fm(this)};ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function la(){this.g=!0}la.prototype.Ea=function(){this.g=!1};function P0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function S0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Or(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+k0(t,n)+(r?" "+r:"")})}function b0(t,e){t.info(function(){return"TIMEOUT: "+e})}la.prototype.info=function(){};function k0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return tu(n)}catch{return e}}var yr={},id=null;function ua(){return id=id||new Ue}yr.Ta="serverreachability";function pm(t){et.call(this,yr.Ta,t)}$e(pm,et);function oi(t){const e=ua();He(e,new pm(e))}yr.STAT_EVENT="statevent";function mm(t,e){et.call(this,yr.STAT_EVENT,t),this.stat=e}$e(mm,et);function ot(t){const e=ua();He(e,new mm(e,t))}yr.Ua="timingevent";function gm(t,e){et.call(this,yr.Ua,t),this.size=e}$e(gm,et);function Ri(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var ha={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_m={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function iu(){}iu.prototype.h=null;function od(t){return t.h||(t.h=t.i())}function ym(){}var Ci={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ou(){et.call(this,"d")}$e(ou,et);function au(){et.call(this,"c")}$e(au,et);var qc;function da(){}$e(da,iu);da.prototype.g=function(){return new XMLHttpRequest};da.prototype.i=function(){return{}};qc=new da;function Pi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ii(this),this.P=N0,t=Fc?125:void 0,this.V=new ca(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vm}function vm(){this.i=null,this.g="",this.h=!1}var N0=45e3,Hc={},So={};D=Pi.prototype;D.setTimeout=function(t){this.P=t};function Kc(t,e,n){t.L=1,t.v=pa(ln(e)),t.s=n,t.S=!0,Em(t,null)}function Em(t,e){t.G=Date.now(),Si(t),t.A=ln(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Sm(n.i,"t",r),t.C=0,n=t.l.J,t.h=new vm,t.g=Qm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new C0(Ze(t.Pa,t,t.g),t.O)),dm(t.U,t.g,"readystatechange",t.nb),e=t.I?nm(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),oi(),P0(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&jt(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Fc||this.g&&(this.h.h||this.g.ja()||ud(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?oi(3):oi(2)),fa(this);var n=this.g.da();this.ca=n;t:if(Im(this)){var r=ud(this.g);t="";var s=r.length,i=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),Fs(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,S0(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ti(a)){var l=a;break t}}l=null}if(n=l)Or(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zc(this,n);else{this.i=!1,this.o=3,ot(12),Zn(this),Fs(this);break e}}this.S?(wm(this,u,o),Fc&&this.i&&u==3&&(dm(this.U,this.V,"tick",this.mb),this.V.start())):(Or(this.j,this.m,o,null),zc(this,o)),u==4&&Zn(this),this.i&&!this.J&&(u==4?Km(this.l,this):(this.i=!1,Si(this)))}else X0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Zn(this),Fs(this)}}}catch{}finally{}};function Im(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function wm(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=D0(t,n),s==So){e==4&&(t.o=4,ot(14),r=!1),Or(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Hc){t.o=4,ot(15),Or(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Or(t.j,t.m,s,null),zc(t,s);Im(t)&&s!=So&&s!=Hc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),fu(e),e.M=!0,ot(11))):(Or(t.j,t.m,n,"[Invalid Chunked Response]"),Zn(t),Fs(t))}D.mb=function(){if(this.g){var t=jt(this.g),e=this.g.ja();this.C<e.length&&(fa(this),wm(this,t,e),this.i&&t!=4&&Si(this))}};function D0(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?So:(n=Number(e.substring(n,r)),isNaN(n)?Hc:(r+=1,r+n>e.length?So:(e=e.slice(r,r+n),t.C=r+n,e)))}D.cancel=function(){this.J=!0,Zn(this)};function Si(t){t.Y=Date.now()+t.P,Tm(t,t.P)}function Tm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ri(Ze(t.lb,t),e)}function fa(t){t.B&&(G.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(b0(this.j,this.A),this.L!=2&&(oi(),ot(17)),Zn(this),this.o=2,Fs(this)):Tm(this,this.Y-t)};function Fs(t){t.l.H==0||t.J||Km(t.l,t)}function Zn(t){fa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ru(t.V),fm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function zc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Wc(n.i,t))){if(!t.K&&Wc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)No(n),ya(n);else break e;du(n),ot(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ri(Ze(n.ib,n),6e3));if(1>=Nm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else er(n,11)}else if((t.K||n.g==t)&&No(n),!ti(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const E=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(cu(i,i.h),i.h=null))}if(r.F){const T=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,we(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Gm(r,r.J?r.pa:null,r.Y),o.K){Dm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(fa(a),Si(a)),r.g=o}else qm(r);0<n.j.length&&va(n)}else l[0]!="stop"&&l[0]!="close"||er(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?er(n,7):hu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}oi(4)}catch{}}function O0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(sa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function V0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(sa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Am(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(sa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=V0(t),r=O0(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function M0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ir(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ir){this.h=t.h,bo(this,t.j),this.s=t.s,this.g=t.g,ko(this,t.m),this.l=t.l;var e=t.i,n=new ai;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ad(this,n),this.o=t.o}else t&&(e=String(t).match(Rm))?(this.h=!1,bo(this,e[1]||"",!0),this.s=bs(e[2]||""),this.g=bs(e[3]||"",!0),ko(this,e[4]),this.l=bs(e[5]||"",!0),ad(this,e[6]||"",!0),this.o=bs(e[7]||"")):(this.h=!1,this.i=new ai(null,this.h))}ir.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ks(e,cd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ks(e,cd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ks(n,n.charAt(0)=="/"?F0:L0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ks(n,$0)),t.join("")};function ln(t){return new ir(t)}function bo(t,e,n){t.j=n?bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ko(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ad(t,e,n){e instanceof ai?(t.i=e,B0(t.i,t.h)):(n||(e=ks(e,U0)),t.i=new ai(e,t.h))}function we(t,e,n){t.i.set(e,n)}function pa(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,x0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function x0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var cd=/[#\/\?@]/g,L0=/[#\?:]/g,F0=/[#\?]/g,U0=/[#\?@]/g,$0=/#/g;function ai(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qn(t){t.g||(t.g=new Map,t.h=0,t.i&&M0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=ai.prototype;D.add=function(t,e){qn(this),this.i=null,t=us(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Cm(t,e){qn(t),e=us(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Pm(t,e){return qn(t),e=us(t,e),t.g.has(e)}D.forEach=function(t,e){qn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};D.ta=function(){qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};D.Z=function(t){qn(this);let e=[];if(typeof t=="string")Pm(this,t)&&(e=e.concat(this.g.get(us(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return qn(this),this.i=null,t=us(this,t),Pm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Sm(t,e,n){Cm(t,e),0<n.length&&(t.i=null,t.g.set(us(t,e),Gl(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function us(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function B0(t,e){e&&!t.j&&(qn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Cm(this,r),Sm(this,s,n))},t)),t.j=e}var j0=class{constructor(t,e){this.g=t,this.map=e}};function bm(t){this.l=t||q0,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var q0=10;function km(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Nm(t){return t.h?1:t.g?t.g.size:0}function Wc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function cu(t,e){t.g?t.g.add(e):t.h=e}function Dm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bm.prototype.cancel=function(){if(this.i=Om(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Om(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Gl(t.i)}var H0=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function K0(){this.g=new H0}function z0(t,e,n){const r=n||"";try{Am(t,function(s,i){let o=s;Ti(s)&&(o=tu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function W0(t,e){const n=new la;if(G.Image){const r=new Image;r.onload=Ki(Wi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ki(Wi,n,r,"TestLoadImage: error",!1,e),r.onabort=Ki(Wi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ki(Wi,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ma(t){this.l=t.ec||null,this.j=t.ob||!1}$e(ma,iu);ma.prototype.g=function(){return new ga(this.l,this.j)};ma.prototype.i=function(t){return function(){return t}}({});function ga(t,e){Ue.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=lu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(ga,Ue);var lu=0;D=ga.prototype;D.open=function(t,e){if(this.readyState!=lu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ci(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bi(this)),this.readyState=lu};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Vm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?bi(this):ci(this),this.readyState==3&&Vm(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,bi(this))};D.Ya=function(t){this.g&&(this.response=t,bi(this))};D.ka=function(){this.g&&bi(this)};function bi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ci(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ci(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var G0=G.JSON.parse;function Pe(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Mm,this.L=this.M=!1}$e(Pe,Ue);var Mm="",Q0=/^https?$/i,Y0=["POST","PUT"];D=Pe.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qc.g(),this.C=this.u?od(this.u):od(qc),this.g.onreadystatechange=Ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ld(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=G.FormData&&t instanceof G.FormData,!(0<=Xp(Y0,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fm(this),0<this.B&&((this.L=J0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.ua,this)):this.A=su(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ld(this,i)}};function J0(t){return Qr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Wl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function ld(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xm(t),_a(t)}function xm(t){t.F||(t.F=!0,He(t,"complete"),He(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),_a(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_a(this,!0)),Pe.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?Lm(this):this.kb())};D.kb=function(){Lm(this)};function Lm(t){if(t.h&&typeof Wl<"u"&&(!t.C[1]||jt(t)!=4||t.da()!=2)){if(t.v&&jt(t)==4)su(t.La,0,t);else if(He(t,"readystatechange"),jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Rm)[1]||null;!s&&G.self&&G.self.location&&(s=G.self.location.protocol.slice(0,-1)),r=!Q0.test(s?s.toLowerCase():"")}n=r}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var i=2<jt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",xm(t)}}finally{_a(t)}}}}function _a(t,e){if(t.g){Fm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=r}catch{}}}function Fm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function jt(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),G0(e)}};function ud(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Mm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function X0(t){const e={};t=(t.g&&2<=jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ti(t[r]))continue;var n=T0(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}g0(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Um(t){let e="";return Yl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function uu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Um(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $m(t){this.Ga=0,this.j=[],this.l=new la,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Is("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Is("baseRetryDelayMs",5e3,t),this.hb=Is("retryDelaySeedMs",1e4,t),this.eb=Is("forwardChannelMaxRetries",2,t),this.xa=Is("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new bm(t&&t.concurrentRequestLimit),this.Ja=new K0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=$m.prototype;D.ra=8;D.H=1;function hu(t){if(Bm(t),t.H==3){var e=t.W++,n=ln(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),ki(t,n),e=new Pi(t,t.l,e),e.L=2,e.v=pa(ln(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Si(e)}Wm(t)}function ya(t){t.g&&(fu(t),t.g.cancel(),t.g=null)}function Bm(t){ya(t),t.u&&(G.clearTimeout(t.u),t.u=null),No(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function va(t){if(!km(t.i)&&!t.m){t.m=!0;var e=t.Na;ri||um(),si||(ri(),si=!0),nu.add(e,t),t.C=0}}function Z0(t,e){return Nm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ri(Ze(t.Na,t,e),zm(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Pi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=nm(i),rm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jm(this,s,e),n=ln(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),ki(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Um(i)))+"&"+e:this.o&&uu(n,this.o,i)),cu(this.i,s),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),s.aa=!0,Kc(s,n,null)):Kc(s,n,e),this.H=2}}else this.H==3&&(t?hd(this,t):this.j.length==0||km(this.i)||hd(this))};function hd(t,e){var n;e?n=e.m:n=t.W++;const r=ln(t.I);we(r,"SID",t.K),we(r,"RID",n),we(r,"AID",t.V),ki(t,r),t.o&&t.s&&uu(r,t.o,t.s),n=new Pi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=jm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),cu(t.i,n),Kc(n,r,e)}function ki(t,e){t.na&&Yl(t.na,function(n,r){we(e,r,n)}),t.h&&Am({},function(n,r){we(e,r,n)})}function jm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ze(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{z0(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function qm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ri||um(),si||(ri(),si=!0),nu.add(e,t),t.A=0}}function du(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ri(Ze(t.Ma,t),zm(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Hm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ri(Ze(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),ya(this),Hm(this))};function fu(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Hm(t){t.g=new Pi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ln(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),ki(t,e),t.o&&t.s&&uu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=pa(ln(e)),n.s=null,n.S=!0,Em(n,t)}D.ib=function(){this.v!=null&&(this.v=null,ya(this),du(this),ot(19))};function No(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Km(t,e){var n=null;if(t.g==e){No(t),fu(t),t.g=null;var r=2}else if(Wc(t.i,e))n=e.F,Dm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=ua(),He(r,new gm(r,n)),va(t)}else qm(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Z0(t,e)||r==2&&du(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:er(t,5);break;case 4:er(t,10);break;case 3:er(t,6);break;default:er(t,2)}}}function zm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function er(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ze(t.pb,t);n||(n=new ir("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||bo(n,"https"),pa(n)),W0(n.toString(),r)}else ot(2);t.H=0,t.h&&t.h.za(e),Wm(t),Bm(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function Wm(t){if(t.H=0,t.ma=[],t.h){const e=Om(t.i);(e.length!=0||t.j.length!=0)&&(td(t.ma,e),td(t.ma,t.j),t.i.i.length=0,Gl(t.j),t.j.length=0),t.h.ya()}}function Gm(t,e,n){var r=n instanceof ir?ln(n):new ir(n);if(r.g!="")e&&(r.g=e+"."+r.g),ko(r,r.m);else{var s=G.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ir(null);r&&bo(i,r),e&&(i.g=e),s&&ko(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&we(r,n,e),we(r,"VER",t.ra),ki(t,r),r}function Qm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Pe(new ma({ob:!0})):new Pe(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ym(){}D=Ym.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Do(){if(Qr&&!(10<=Number(d0)))throw Error("Environmental error: no available transport.")}Do.prototype.g=function(t,e){return new mt(t,e)};function mt(t,e){Ue.call(this),this.g=new $m(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ti(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ti(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hs(this)}$e(mt,Ue);mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Gm(t,null,t.Y),va(t)};mt.prototype.close=function(){hu(this.g)};mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=tu(t),t=n);e.j.push(new j0(e.fb++,t)),e.H==3&&va(e)};mt.prototype.N=function(){this.g.h=null,delete this.j,hu(this.g),delete this.g,mt.$.N.call(this)};function Jm(t){ou.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(Jm,ou);function Xm(){au.call(this),this.status=1}$e(Xm,au);function hs(t){this.g=t}$e(hs,Ym);hs.prototype.Ba=function(){He(this.g,"a")};hs.prototype.Aa=function(t){He(this.g,new Jm(t))};hs.prototype.za=function(t){He(this.g,new Xm)};hs.prototype.ya=function(){He(this.g,"b")};function eA(){this.blockSize=-1}function Dt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$e(Dt,eA);Dt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ac(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Dt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)ac(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){ac(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){ac(this,r),s=0;break}}this.h=s,this.i+=e};Dt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function pe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var tA={};function pu(t){return-128<=t&&128>t?l0(t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function qt(t){if(isNaN(t)||!isFinite(t))return Br;if(0>t)return je(qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Gc;return new pe(e,0)}function Zm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return je(Zm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=qt(Math.pow(e,8)),r=Br,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=qt(Math.pow(e,i)),r=r.R(i).add(qt(o))):(r=r.R(n),r=r.add(qt(o)))}return r}var Gc=4294967296,Br=pu(0),Qc=pu(1),dd=pu(16777216);D=pe.prototype;D.ea=function(){if(vt(this))return-je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Gc+r)*e,e*=Gc}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(sn(this))return"0";if(vt(this))return"-"+je(this).toString(t);for(var e=qt(Math.pow(t,6)),n=this,r="";;){var s=Vo(n,e).g;n=Oo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,sn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function sn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vt(t){return t.h==-1}D.X=function(t){return t=Oo(this,t),vt(t)?-1:sn(t)?0:1};function je(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new pe(n,~t.h).add(Qc)}D.abs=function(){return vt(this)?je(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function Oo(t,e){return t.add(je(e))}D.R=function(t){if(sn(this)||sn(t))return Br;if(vt(this))return vt(t)?je(this).R(je(t)):je(je(this).R(t));if(vt(t))return je(this.R(je(t)));if(0>this.X(dd)&&0>t.X(dd))return qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Gi(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Gi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Gi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Gi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new pe(n,0)};function Gi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ws(t,e){this.g=t,this.h=e}function Vo(t,e){if(sn(e))throw Error("division by zero");if(sn(t))return new ws(Br,Br);if(vt(t))return e=Vo(je(t),e),new ws(je(e.g),je(e.h));if(vt(e))return e=Vo(t,je(e)),new ws(je(e.g),e.h);if(30<t.g.length){if(vt(t)||vt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Qc,r=e;0>=r.X(t);)n=fd(n),r=fd(r);var s=Cr(n,1),i=Cr(r,1);for(r=Cr(r,2),n=Cr(n,2);!sn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Cr(r,1),n=Cr(n,1)}return e=Oo(t,s.R(e)),new ws(s,e)}for(s=Br;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=qt(n),o=i.R(e);vt(o)||0<o.X(t);)n-=r,i=qt(n),o=i.R(e);sn(i)&&(i=Qc),s=s.add(i),t=Oo(t,o)}return new ws(s,t)}D.gb=function(t){return Vo(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new pe(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new pe(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new pe(n,this.h^t.h)};function fd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new pe(n,t.h)}function Cr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new pe(s,t.h)}Do.prototype.createWebChannel=Do.prototype.g;mt.prototype.send=mt.prototype.u;mt.prototype.open=mt.prototype.m;mt.prototype.close=mt.prototype.close;ha.NO_ERROR=0;ha.TIMEOUT=8;ha.HTTP_ERROR=6;_m.COMPLETE="complete";ym.EventType=Ci;Ci.OPEN="a";Ci.CLOSE="b";Ci.ERROR="c";Ci.MESSAGE="d";Ue.prototype.listen=Ue.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;Dt.prototype.digest=Dt.prototype.l;Dt.prototype.reset=Dt.prototype.reset;Dt.prototype.update=Dt.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=qt;pe.fromString=Zm;var nA=function(){return new Do},rA=function(){return ua()},cc=ha,sA=_m,iA=yr,pd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Qi=ym,oA=Pe,aA=Dt,jr=pe;const md="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new Vl("@firebase/firestore");function Ts(){return hr.logLevel}function L(t,...e){if(hr.logLevel<=re.DEBUG){const n=e.map(mu);hr.debug(`Firestore (${ds}): ${t}`,...n)}}function un(t,...e){if(hr.logLevel<=re.ERROR){const n=e.map(mu);hr.error(`Firestore (${ds}): ${t}`,...n)}}function Yr(t,...e){if(hr.logLevel<=re.WARN){const n=e.map(mu);hr.warn(`Firestore (${ds}): ${t}`,...n)}}function mu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function Te(t,e){t||z()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class lA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uA{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new eg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Ge(e)}}class hA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new fA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=mA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Jr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Oe(0,0))}static max(){return new Y(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return li.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof li?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends li{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const gA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends li{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return gA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new $(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ae.fromString(e))}static fromName(e){return new q(Ae.fromString(e).popFirst(5))}static empty(){return new q(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ae(e.slice()))}}function _A(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new xn(s,q.empty(),e)}function yA(t){return new xn(t.readTime,t.key,-1)}class xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xn(Y.min(),q.empty(),-1)}static max(){return new xn(Y.max(),q.empty(),-1)}}function vA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==EA)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Di(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}gu.ae=-1;function Ea(t){return t==null}function Mo(t){return t===0&&1/t==-1/0}function wA(t){return typeof t=="number"&&Number.isInteger(t)&&!Mo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ng(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yi(this.root,e,this.comparator,!0)}}class Yi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _d(this.data.getIterator())}getIteratorFrom(e){return new _d(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class _d{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new pt([])}unionWith(e){let n=new tt(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rg("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const TA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(t){if(Te(!!t),typeof t=="string"){let e=0;const n=TA.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yu(t){const e=t.mapValue.fields.__previous_value__;return _u(e)?yu(e):e}function ui(t){const e=Ln(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class hi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_u(t)?4:RA(t)?9007199254740991:10:z()}function Jt(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ui(t).isEqual(ui(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ln(s.timestampValue),a=Ln(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return dr(s.bytesValue).isEqual(dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),a=ke(i.doubleValue);return o===a?Mo(o)===Mo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Jr(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(gd(o)!==gd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Jt(o[c],a[c])))return!1;return!0}(t,e);default:return z()}}function di(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function Xr(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ke(i.integerValue||i.doubleValue),c=ke(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return yd(t.timestampValue,e.timestampValue);case 4:return yd(ui(t),ui(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(i,o){const a=dr(i),c=dr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ce(a[l],c[l]);if(u!==0)return u}return ce(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ce(ke(i.latitude),ke(o.latitude));return a!==0?a:ce(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Xr(a[l],c[l]);if(u)return u}return ce(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ji.mapValue&&o===Ji.mapValue)return 0;if(i===Ji.mapValue)return 1;if(o===Ji.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ce(c[h],u[h]);if(d!==0)return d;const m=Xr(a[c[h]],l[u[h]]);if(m!==0)return m}return ce(c.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function yd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=Ln(t),r=Ln(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Zr(t){return Yc(t)}function Yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ln(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Yc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Yc(n.fields[o])}`;return s+"}"}(t.mapValue):z()}function Jc(t){return!!t&&"integerValue"in t}function vu(t){return!!t&&"arrayValue"in t}function vd(t){return!!t&&"nullValue"in t}function Ed(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lo(t){return!!t&&"mapValue"in t}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Us(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];lo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ht(Us(this.value))}}function sg(t){const e=[];return vr(t.fields,(n,r)=>{const s=new Je([n]);if(lo(r)){const i=sg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qe(e,0,Y.min(),Y.min(),Y.min(),ht.empty(),0)}static newFoundDocument(e,n,r,s){return new Qe(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new Qe(e,2,n,Y.min(),Y.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,Y.min(),Y.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.position=e,this.inclusive=n}}function Id(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Xr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n="asc"){this.field=e,this.dir=n}}function CA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{}class De extends ig{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SA(e,n,r):n==="array-contains"?new NA(e,r):n==="in"?new DA(e,r):n==="not-in"?new OA(e,r):n==="array-contains-any"?new VA(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bA(e,r):new kA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xr(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(Xr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Xt extends ig{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Xt(e,n)}matches(e){return og(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function og(t){return t.op==="and"}function ag(t){return PA(t)&&og(t)}function PA(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Xc(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Zr(t.value);if(ag(t))return t.filters.map(e=>Xc(e)).join(",");{const e=t.filters.map(n=>Xc(n)).join(",");return`${t.op}(${e})`}}function cg(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&Jt(r.value,s.value)}(t,e):t instanceof Xt?function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&cg(o,s.filters[a]),!0):!1}(t,e):void z()}function lg(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Zr(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(lg).join(" ,")+"}"}(t):"Filter"}class SA extends De{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class bA extends De{constructor(e,n){super(e,"in",n),this.keys=ug("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kA extends De{constructor(e,n){super(e,"not-in",n),this.keys=ug("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ug(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class NA extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vu(n)&&di(n.arrayValue,this.value)}}class DA extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&di(this.value.arrayValue,n)}}class OA extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!di(this.value.arrayValue,n)}}class VA extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>di(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Td(t,e=null,n=[],r=[],s=null,i=null,o=null){return new MA(t,e,n,r,s,i,o)}function Eu(t){const e=J(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ea(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zr(r)).join(",")),e.he=n}return e.he}function Iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wd(t.startAt,e.startAt)&&wd(t.endAt,e.endAt)}function Zc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function xA(t,e,n,r,s,i,o,a){return new Ia(t,e,n,r,s,i,o,a)}function wa(t){return new Ia(t)}function Ad(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function LA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function FA(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function UA(t){return t.collectionGroup!==null}function Bs(t){const e=J(t);if(e.Pe===null){e.Pe=[];const n=FA(e),r=LA(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new $s(n)),e.Pe.push(new $s(Je.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new $s(Je.keyField(),i))}}}return e.Pe}function Gt(t){const e=J(t);return e.Ie||(e.Ie=$A(e,Bs(t))),e.Ie}function $A(t,e){if(t.limitType==="F")return Td(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $s(s.field,i)});const n=t.endAt?new xo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xo(t.startAt.position,t.startAt.inclusive):null;return Td(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function el(t,e,n){return new Ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ta(t,e){return Iu(Gt(t),Gt(e))&&t.limitType===e.limitType}function hg(t){return`${Eu(Gt(t))}|lt:${t.limitType}`}function Sr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>lg(s)).join(", ")}]`),Ea(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Zr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Zr(s)).join(",")),`Target(${r})`}(Gt(t))}; limitType=${t.limitType})`}function Aa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Bs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Id(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Bs(r),s)||r.endAt&&!function(o,a,c){const l=Id(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Bs(r),s))}(t,e)}function BA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dg(t){return(e,n)=>{let r=!1;for(const s of Bs(t)){const i=jA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jA(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Xr(c,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ng(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new Ce(q.comparator);function hn(){return qA}const fg=new Ce(q.comparator);function Ns(...t){let e=fg;for(const n of t)e=e.insert(n.key,n);return e}function pg(t){let e=fg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function tr(){return js()}function mg(){return js()}function js(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const HA=new Ce(q.comparator),KA=new tt(q.comparator);function ne(...t){let e=KA;for(const n of t)e=e.add(n);return e}const zA=new tt(ce);function WA(){return zA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mo(e)?"-0":e}}function _g(t){return{integerValue:""+t}}function GA(t,e){return wA(e)?_g(e):gg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this._=void 0}}function QA(t,e,n){return t instanceof fi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_u(i)&&(i=yu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof pi?vg(t,e):t instanceof mi?Eg(t,e):function(s,i){const o=yg(s,i),a=Rd(o)+Rd(s.Te);return Jc(o)&&Jc(s.Te)?_g(a):gg(s.serializer,a)}(t,e)}function YA(t,e,n){return t instanceof pi?vg(t,e):t instanceof mi?Eg(t,e):n}function yg(t,e){return t instanceof Lo?function(r){return Jc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class fi extends Ra{}class pi extends Ra{constructor(e){super(),this.elements=e}}function vg(t,e){const n=Ig(e);for(const r of t.elements)n.some(s=>Jt(s,r))||n.push(r);return{arrayValue:{values:n}}}class mi extends Ra{constructor(e){super(),this.elements=e}}function Eg(t,e){let n=Ig(e);for(const r of t.elements)n=n.filter(s=>!Jt(s,r));return{arrayValue:{values:n}}}class Lo extends Ra{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Rd(t){return ke(t.integerValue||t.doubleValue)}function Ig(t){return vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n){this.field=e,this.transform=n}}function XA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof pi&&s instanceof pi||r instanceof mi&&s instanceof mi?Jr(r.elements,s.elements,Jt):r instanceof Lo&&s instanceof Lo?Jt(r.Te,s.Te):r instanceof fi&&s instanceof fi}(t.transform,e.transform)}class ZA{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function wg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wu(t.key,It.none()):new Oi(t.key,t.data,It.none());{const n=t.data,r=ht.empty();let s=new tt(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Hn(t.key,r,new pt(s.toArray()),It.none())}}function eR(t,e,n){t instanceof Oi?function(s,i,o){const a=s.value.clone(),c=Pd(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Hn?function(s,i,o){if(!uo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Pd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Tg(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qs(t,e,n,r){return t instanceof Oi?function(i,o,a,c){if(!uo(i.precondition,o))return a;const l=i.value.clone(),u=Sd(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hn?function(i,o,a,c){if(!uo(i.precondition,o))return a;const l=Sd(i.fieldTransforms,c,o),u=o.data;return u.setAll(Tg(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return uo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function tR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yg(r.transform,s||null);i!=null&&(n===null&&(n=ht.empty()),n.set(r.field,i))}return n||null}function Cd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Jr(r,s,(i,o)=>XA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oi extends Ca{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hn extends Ca{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pd(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,YA(o,a,n[s]))}return r}function Sd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QA(i,o,e))}return r}class wu extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nR extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&eR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=wg(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Jr(this.mutations,e.mutations,(n,r)=>Cd(n,r))&&Jr(this.baseMutations,e.baseMutations,(n,r)=>Cd(n,r))}}class Tu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=function(){return HA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Tu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,se;function oR(t){switch(t){default:return z();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Ag(t){if(t===void 0)return un("GRPC error has no .code"),I.UNKNOWN;switch(t){case be.OK:return I.OK;case be.CANCELLED:return I.CANCELLED;case be.UNKNOWN:return I.UNKNOWN;case be.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case be.INTERNAL:return I.INTERNAL;case be.UNAVAILABLE:return I.UNAVAILABLE;case be.UNAUTHENTICATED:return I.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case be.NOT_FOUND:return I.NOT_FOUND;case be.ALREADY_EXISTS:return I.ALREADY_EXISTS;case be.PERMISSION_DENIED:return I.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case be.ABORTED:return I.ABORTED;case be.OUT_OF_RANGE:return I.OUT_OF_RANGE;case be.UNIMPLEMENTED:return I.UNIMPLEMENTED;case be.DATA_LOSS:return I.DATA_LOSS;default:return z()}}(se=be||(be={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new jr([4294967295,4294967295],0);function bd(t){const e=aR().encode(t),n=new aA;return n.update(e),new Uint8Array(n.digest())}function kd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jr([n,r],0),new jr([s,i],0)]}class Au{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ds(`Invalid padding: ${n}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=jr.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(jr.fromNumber(r)));return s.compare(cR)===1&&(s=new jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=bd(e),[r,s]=kd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Au(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=bd(e),[r,s]=kd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pa(Y.min(),s,new Ce(ce),hn(),ne())}}class Vi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vi(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class Rg{constructor(e,n){this.targetId=e,this.ye=n}}class Cg{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Nd{constructor(){this.we=0,this.Se=Od(),this.be=rt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=ne(),n=ne(),r=ne();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:z()}}),new Vi(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Od()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class lR{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=hn(),this.Ue=Dd(),this.We=new Ce(ce)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Zc(i))if(r===0){const o=new q(i.path);this.je(n,o,Qe.newNoDocument(o,Y.min()))}else Te(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=dr(r).toUint8Array()}catch(c){if(c instanceof rg)return Yr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Au(o,s,i)}catch(c){return Yr(c instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Zc(a.target)){const c=new q(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Qe.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=ne();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Pa(e,n,this.We,this.$e,r);return this.$e=hn(),this.Ue=Dd(),this.We=new Ce(ce),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Nd,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new tt(ce),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Nd),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Dd(){return new Ce(q.comparator)}function Od(){return new Ce(q.comparator)}const uR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dR=(()=>({and:"AND",or:"OR"}))();class fR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tl(t,e){return t.useProto3Json||Ea(e)?e:{value:e}}function Fo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pR(t,e){return Fo(t,e.toTimestamp())}function Qt(t){return Te(!!t),Y.fromTimestamp(function(n){const r=Ln(n);return new Oe(r.seconds,r.nanos)}(t))}function Ru(t,e){return function(r){return new Ae(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Sg(t){const e=Ae.fromString(t);return Te(Dg(e)),e}function nl(t,e){return Ru(t.databaseId,e.path)}function lc(t,e){const n=Sg(e);if(n.get(1)!==t.databaseId.projectId)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(bg(n))}function rl(t,e){return Ru(t.databaseId,e)}function mR(t){const e=Sg(t);return e.length===4?Ae.emptyPath():bg(e)}function sl(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bg(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vd(t,e,n){return{name:nl(t,e),fields:n.value.mapValue.fields}}function gR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Te(u===void 0||typeof u=="string"),rt.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),rt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:Ag(l.code);return new $(u,l.message||"")}(o);n=new Cg(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lc(t,r.document.name),i=Qt(r.document.updateTime),o=r.document.createTime?Qt(r.document.createTime):Y.min(),a=new ht({mapValue:{fields:r.document.fields}}),c=Qe.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ho(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lc(t,r.document),i=r.readTime?Qt(r.readTime):Y.min(),o=Qe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lc(t,r.document),i=r.removedTargetIds||[];n=new ho([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new iR(s,i),a=r.targetId;n=new Rg(a,o)}}return n}function _R(t,e){let n;if(e instanceof Oi)n={update:Vd(t,e.key,e.value)};else if(e instanceof wu)n={delete:nl(t,e.key)};else if(e instanceof Hn)n={update:Vd(t,e.key,e.data),updateMask:CR(e.fieldMask)};else{if(!(e instanceof nR))return z();n={verify:nl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof fi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof pi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof mi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function yR(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Qt(s.updateTime):Qt(i);return o.isEqual(Y.min())&&(o=Qt(i)),new ZA(o,s.transformResults||[])}(n,e))):[]}function vR(t,e){return{documents:[rl(t,e.path)]}}function ER(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=rl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=rl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Ng(Xt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:br(h.field),direction:TR(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=tl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function IR(t){let e=mR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=kg(h);return d instanceof Xt&&ag(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(E){return new $s(kr(E.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ea(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new xo(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new xo(m,d)}(n.endAt)),xA(e,s,o,i,a,"F",c,l)}function wR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=kr(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kr(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=kr(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(n){return De.create(kr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>kg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(t):z()}function TR(t){return uR[t]}function AR(t){return hR[t]}function RR(t){return dR[t]}function br(t){return{fieldPath:t.canonicalString()}}function kr(t){return Je.fromServerFormat(t.fieldPath)}function Ng(t){return t instanceof De?function(n){if(n.op==="=="){if(Ed(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NAN"}};if(vd(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ed(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NOT_NAN"}};if(vd(n.value))return{unaryFilter:{field:br(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:br(n.field),op:AR(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(s=>Ng(s));return r.length===1?r[0]:{compositeFilter:{op:RR(n.op),filters:r}}}(t):z()}function CR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,r,s,i=Y.min(),o=Y.min(),a=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.ht=e}}function SR(t){const e=IR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?el(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.an=new kR}addToCollectionParentIndex(e,n){return this.an.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(xn.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class kR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Ae.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new es(0)}static Ln(){return new es(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&qs(r.mutation,s,pt.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=tr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ns();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hn();const o=js(),a=function(){return js()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Hn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),qs(u.mutation,l,u.mutation.getFieldMask(),Oe.now())):o.set(l.key,pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new DR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=js();let s=new Ce((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||pt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ne()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=mg();u.forEach(d=>{if(!i.has(d)){const m=wg(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(tr());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ne())).next(u=>({batchId:a,changes:pg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=Ns();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ns();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,c=>{const l=function(h,d){return new Ia(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Qe.newInvalidDocument(u)))});let a=Ns();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&qs(u.mutation,l,pt.empty(),Oe.now()),Aa(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return R.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Qt(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:SR(s.bundledQuery),readTime:Qt(s.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.overlays=new Ce(q.comparator),this.Pr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=tr();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=tr(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=tr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sR(n,r));let i=this.Pr.get(n);i===void 0&&(i=ne(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.Ir=new tt(Le.dr),this.Tr=new tt(Le.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Le(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new q(new Ae([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new q(new Ae([])),r=new Le(n,e),s=new Le(n,e+1);let i=ne();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Le(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return q.comparator(e.key,n.key)||ce(e.yr,n.yr)}static Er(e,n){return ce(e.yr,n.yr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new tt(Le.dr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new Le(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ce);return n.forEach(s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),R.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new Le(new q(i),0);let a=new tt(ce);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),R.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return R.forEach(n.mutations,s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Le(n,0),s=this.Sr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.Fr=e,this.docs=function(){return new Ce(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let r=hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qe.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||vA(yA(u),r)<=0||(s.has(u.key)||Aa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){z()}Mr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FR(this)}getSize(e){return R.resolve(this.size)}}class FR extends NR{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.persistence=e,this.Or=new fs(n=>Eu(n),Iu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Cu,this.targetCount=0,this.Lr=es.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),R.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new es(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Qn(n),R.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n){this.kr={},this.overlays={},this.qr=new gu(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new UR(this),this.indexManager=new bR,this.remoteDocumentCache=function(s){return new LR(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new PR(n),this.Ur=new VR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new xR(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const s=new BR(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return R.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class BR extends IA{constructor(e){super(),this.currentSequenceNumber=e}}class Pu{constructor(e){this.persistence=e,this.jr=new Cu,this.Hr=null}static Jr(e){return new Pu(e)}get Yr(){if(this.Hr)return this.Hr;throw z()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),R.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Yr,r=>{const s=q.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return R.or([()=>R.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Su(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new jR;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(Ts()<=re.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Sr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),R.resolve()):(Ts()<=re.DEBUG&&L("QueryEngine","Query:",Sr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(Ts()<=re.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Sr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(n))):R.resolve())}Hi(e,n){if(Ad(n))return R.resolve(null);let r=Gt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=el(n,null,"F"),r=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,el(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return Ad(n)||s.isEqual(Y.min())?R.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?R.resolve(null):(Ts()<=re.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Sr(n)),this.ts(e,o,n,_A(s,-1)).next(a=>a))})}Xi(e,n){let r=new tt(dg(e));return n.forEach((s,i)=>{Aa(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return Ts()<=re.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Sr(n)),this.ji.getDocumentsMatchingQuery(e,n,xn.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new Ce(ce),this.ss=new fs(i=>Eu(i),Iu),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OR(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function KR(t,e,n,r){return new HR(t,e,n,r)}async function Og(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ne();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function zR(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let m=R.resolve();return d.forEach(E=>{m=m.next(()=>u.getEntry(c,E)).next(T=>{const C=l.docVersions.get(E);Te(C!==null),T.version.compareTo(C)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ne();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Vg(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function WR(t,e){const n=J(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(rt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(T,C,b){return T.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,m,u)&&a.push(n.Kr.updateTargetData(i,m))});let c=hn(),l=ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(GR(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(Y.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function GR(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function QR(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YR(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new Cn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function il(t,e,n){const r=J(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Di(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function Md(t,e,n){const r=J(t);let s=Y.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=J(c),d=h.ss.get(u);return d!==void 0?R.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,Gt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:ne())).next(a=>(JR(r,BA(e),a),{documents:a,Ps:i})))}function JR(t,e,n){let r=t.os.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class xd{constructor(){this.activeTargetIds=WA()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XR{constructor(){this.ro=new xd,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi=null;function uc(){return Xi===null?Xi=function(){return 268435456+Math.round(2147483648*Math.random())}():Xi++,"0x"+Xi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class nC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=uc(),c=this.Do(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>(L("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Yr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=eC[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=uc();return new Promise((o,a)=>{const c=new oA;c.setWithCredentials(!0),c.listenOnce(sA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case cc.NO_ERROR:const u=c.getResponseJson();L(We,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case cc.TIMEOUT:L(We,`RPC '${e}' ${i} timed out`),a(new $(I.DEADLINE_EXCEEDED,"Request time out"));break;case cc.HTTP_ERROR:const h=c.getStatus();if(L(We,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const E=function(C){const b=C.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(b)>=0?b:I.UNKNOWN}(m.status);a(new $(E,m.message))}else a(new $(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new $(I.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{L(We,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);L(We,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=uc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nA(),a=rA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");L(We,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,m=!1;const E=new tC({ho:C=>{m?L(We,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(d||(L(We,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),L(We,`RPC '${e}' stream ${s} sending:`,C),h.send(C))},Po:()=>h.close()}),T=(C,b,V)=>{C.listen(b,H=>{try{V(H)}catch(x){setTimeout(()=>{throw x},0)}})};return T(h,Qi.EventType.OPEN,()=>{m||L(We,`RPC '${e}' stream ${s} transport opened.`)}),T(h,Qi.EventType.CLOSE,()=>{m||(m=!0,L(We,`RPC '${e}' stream ${s} transport closed`),E.mo())}),T(h,Qi.EventType.ERROR,C=>{m||(m=!0,Yr(We,`RPC '${e}' stream ${s} transport errored:`,C),E.mo(new $(I.UNAVAILABLE,"The operation could not be completed")))}),T(h,Qi.EventType.MESSAGE,C=>{var b;if(!m){const V=C.data[0];Te(!!V);const H=V,x=H.error||((b=H[0])===null||b===void 0?void 0:b.error);if(x){L(We,`RPC '${e}' stream ${s} received error:`,x);const ve=x.status;let Ee=function(_t){const st=be[_t];if(st!==void 0)return Ag(st)}(ve),Ke=x.message;Ee===void 0&&(Ee=I.INTERNAL,Ke="Unknown error status: "+ve+" with message "+x.message),m=!0,E.mo(new $(Ee,Ke)),h.close()}else L(We,`RPC '${e}' stream ${s} received:`,V),E.fo(V)}}),T(a,iA.STAT_EVENT,C=>{C.stat===pd.PROXY?L(We,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===pd.NOPROXY&&L(We,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.Vo()},0),E}}function hc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t){return new fR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Mg(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new $(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rC extends xg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=gR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Qt(o.readTime):Y.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=sl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Zc(c)?{documents:vR(i,c)}:{query:ER(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Pg(i,o.resumeToken);const l=tl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Fo(i,o.snapshotVersion.toTimestamp());const l=tl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=wR(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=sl(this.serializer),n.removeTarget=e,this.n_(n)}}class sC extends xg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=yR(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.T_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=sl(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_R(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(I.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(I.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class oC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(un(n),this.p_=!1):L("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{Er(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=J(c);l.F_.add(4),await Mi(l),l.O_.set("Unknown"),l.F_.delete(4),await ba(l)}(this))})}),this.O_=new oC(r,s)}}async function ba(t){if(Er(t))for(const e of t.M_)await e(!0)}async function Mi(t){for(const e of t.M_)await e(!1)}function Lg(t,e){const n=J(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Nu(n)?ku(n):ps(n).Yo()&&bu(n,e))}function Fg(t,e){const n=J(t),r=ps(n);n.v_.delete(e),r.Yo()&&Ug(n,e),n.v_.size===0&&(r.Yo()?r.e_():Er(n)&&n.O_.set("Unknown"))}function bu(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).l_(e)}function Ug(t,e){t.N_.Le(e),ps(t).h_(e)}function ku(t){t.N_=new lR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.O_.y_()}function Nu(t){return Er(t)&&!ps(t).Jo()&&t.v_.size>0}function Er(t){return J(t).F_.size===0}function $g(t){t.N_=void 0}async function cC(t){t.v_.forEach((e,n)=>{bu(t,e)})}async function lC(t,e){$g(t),Nu(t)?(t.O_.b_(e),ku(t)):t.O_.set("Unknown")}async function uC(t,e,n){if(t.O_.set("Online"),e instanceof Cg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uo(t,r)}else if(e instanceof ho?t.N_.Ge(e):e instanceof Rg?t.N_.Xe(e):t.N_.He(e),!n.isEqual(Y.min()))try{const r=await Vg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(rt.EMPTY_BYTE_STRING,u.snapshotVersion)),Ug(i,c);const h=new Cn(u.target,c,l,u.sequenceNumber);bu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Uo(t,r)}}async function Uo(t,e,n){if(!Di(e))throw e;t.F_.add(1),await Mi(t),t.O_.set("Offline"),n||(n=()=>Vg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await ba(t)})}function Bg(t,e){return e().catch(n=>Uo(t,n,e))}async function ka(t){const e=J(t),n=Fn(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;hC(e);)try{const s=await QR(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,dC(e,s)}catch(s){await Uo(e,s)}jg(e)&&qg(e)}function hC(t){return Er(t)&&t.C_.length<10}function dC(t,e){t.C_.push(e);const n=Fn(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function jg(t){return Er(t)&&!Fn(t).Jo()&&t.C_.length>0}function qg(t){Fn(t).start()}async function fC(t){Fn(t).A_()}async function pC(t){const e=Fn(t);for(const n of t.C_)e.d_(n.mutations)}async function mC(t,e,n){const r=t.C_.shift(),s=Tu.from(r,e,n);await Bg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ka(t)}async function gC(t,e){e&&Fn(t).I_&&await async function(r,s){if(function(o){return oR(o)&&o!==I.ABORTED}(s.code)){const i=r.C_.shift();Fn(r).Xo(),await Bg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ka(r)}}(t,e),jg(t)&&qg(t)}async function Fd(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Er(n);n.F_.add(3),await Mi(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await ba(n)}async function _C(t,e){const n=J(t);e?(n.F_.delete(2),await ba(n)):e||(n.F_.add(2),await Mi(n),n.O_.set("Unknown"))}function ps(t){return t.B_||(t.B_=function(n,r,s){const i=J(n);return i.V_(),new rC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:cC.bind(null,t),Eo:lC.bind(null,t),c_:uC.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Nu(t)?ku(t):t.O_.set("Unknown")):(await t.B_.stop(),$g(t))})),t.B_}function Fn(t){return t.L_||(t.L_=function(n,r,s){const i=J(n);return i.V_(),new sC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:fC.bind(null,t),Eo:gC.bind(null,t),E_:pC.bind(null,t),T_:mC.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await ka(t)):(await t.L_.stop(),t.C_.length>0&&(L("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Du(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ou(t,e){if(un("AsyncQueue",`${e}: ${t}`),Di(t))return new $(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new qr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.k_=new Ce(q.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):z():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ts{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ts(e,n,qr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ta(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.Q_=void 0,this.listeners=[]}}class vC{constructor(){this.queries=new fs(e=>hg(e),Ta),this.onlineState="Unknown",this.K_=new Set}}async function Hg(t,e){const n=J(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new yC),s)try{i.Q_=await n.onListen(r)}catch(o){const a=Ou(o,`Initialization of query '${Sr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&Vu(n)}async function Kg(t,e){const n=J(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function EC(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&Vu(n)}function IC(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Vu(t){t.K_.forEach(e=>{e.next()})}class zg{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.key=e}}class Gg{constructor(e){this.key=e}}class wC{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ne(),this.mutatedKeys=ne(),this.ua=dg(e),this.ca=new qr(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Ud,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),m=Aa(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),T=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;d&&m?d.data.isEqual(m.data)?E!==T&&(r.track({type:3,doc:m}),C=!0):this.Ia(d,m)||(r.track({type:2,doc:m}),C=!0,(c&&this.ua(m,c)>0||l&&this.ua(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),C=!0):d&&!m&&(r.track({type:1,doc:d}),C=!0,(c||l)&&(a=!0)),C&&(m?(o=o.add(m),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(d,m){const E=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return E(d)-E(m)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new ts(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Ud,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=ne(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new Gg(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new Wg(r))}),n}Ra(e){this.oa=e.Ps,this.aa=ne();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return ts.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class TC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AC{constructor(e){this.key=e,this.ma=!1}}class RC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new fs(a=>hg(a),Ta),this.pa=new Map,this.ya=new Set,this.wa=new Ce(q.comparator),this.Sa=new Map,this.ba=new Cu,this.Da={},this.Ca=new Map,this.va=es.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function CC(t,e){const n=xC(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await YR(n.localStore,Gt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await PC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Lg(n.remoteStore,o)}return s}async function PC(t,e,n,r,s){t.Ma=(h,d,m)=>async function(T,C,b,V){let H=C.view.ha(b);H.es&&(H=await Md(T.localStore,C.query,!1).then(({documents:Ee})=>C.view.ha(Ee,H)));const x=V&&V.targetChanges.get(C.targetId),ve=C.view.applyChanges(H,T.isPrimaryClient,x);return Bd(T,C.targetId,ve.Ea),ve.snapshot}(t,h,d,m);const i=await Md(t.localStore,e,!0),o=new wC(e,i.Ps),a=o.ha(i.documents),c=Vi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Bd(t,n,l.Ea);const u=new TC(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function SC(t,e){const n=J(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Ta(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await il(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Fg(n.remoteStore,r.targetId),ol(n,r.targetId)}).catch(Ni)):(ol(n,r.targetId),await il(n.localStore,r.targetId,!0))}async function bC(t,e,n){const r=LC(t);try{const s=await function(o,a){const c=J(o),l=Oe.now(),u=a.reduce((m,E)=>m.add(E.key),ne());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=hn(),T=ne();return c._s.getEntries(m,u).next(C=>{E=C,E.forEach((b,V)=>{V.isValidDocument()||(T=T.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,E)).next(C=>{h=C;const b=[];for(const V of a){const H=tR(V,h.get(V.key).overlayedDocument);H!=null&&b.push(new Hn(V.key,H,sg(H.value.mapValue),It.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,b,a)}).next(C=>{d=C;const b=C.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(m,C.batchId,b)})}).then(()=>({batchId:d.batchId,changes:pg(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Ce(ce)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await xi(r,s.changes),await ka(r.remoteStore)}catch(s){const i=Ou(s,"Failed to persist write");n.reject(i)}}async function Qg(t,e){const n=J(t);try{const r=await WR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Te(o.ma):s.removedDocuments.size>0&&(Te(o.ma),o.ma=!1))}),await xi(n,r,e)}catch(r){await Ni(r)}}function $d(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=J(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&Vu(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kC(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Ce(q.comparator);o=o.insert(i,Qe.newNoDocument(i,Y.min()));const a=ne().add(i),c=new Pa(Y.min(),new Map,new Ce(ce),o,a);await Qg(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),Mu(r)}else await il(r.localStore,e,!1).then(()=>ol(r,e,n)).catch(Ni)}async function NC(t,e){const n=J(t),r=e.batch.batchId;try{const s=await zR(n.localStore,e);Jg(n,r,null),Yg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xi(n,s)}catch(s){await Ni(s)}}async function DC(t,e,n){const r=J(t);try{const s=await function(o,a){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Te(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Jg(r,e,n),Yg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xi(r,s)}catch(s){await Ni(s)}}function Yg(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Jg(t,e,n){const r=J(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function ol(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||Xg(t,r)})}function Xg(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Fg(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Mu(t))}function Bd(t,e,n){for(const r of n)r instanceof Wg?(t.ba.addReference(r.key,e),OC(t,r)):r instanceof Gg?(L("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Xg(t,r.key)):z()}function OC(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(L("SyncEngine","New document in limbo: "+n),t.ya.add(r),Mu(t))}function Mu(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new q(Ae.fromString(e)),r=t.va.next();t.Sa.set(r,new AC(n)),t.wa=t.wa.insert(n,r),Lg(t.remoteStore,new Cn(Gt(wa(n.path)),r,"TargetPurposeLimboResolution",gu.ae))}}async function xi(t,e,n){const r=J(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Su.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=J(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,d=>R.forEach(d.Qi,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>R.forEach(d.Ki,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Di(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const m=u.rs.get(d),E=m.snapshotVersion,T=m.withLastLimboFreeSnapshotVersion(E);u.rs=u.rs.insert(d,T)}}}(r.localStore,i))}async function VC(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await Og(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new $(I.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xi(n,r.cs)}}function MC(t,e){const n=J(t),r=n.Sa.get(e);if(r&&r.ma)return ne().add(r.key);{let s=ne();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function xC(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kC.bind(null,e),e.fa.c_=EC.bind(null,e.eventManager),e.fa.xa=IC.bind(null,e.eventManager),e}function LC(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DC.bind(null,e),e}class jd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return KR(this.persistence,new qR,e.initialUser,this.serializer)}createPersistence(e){return new $R(Pu.Jr,this.serializer)}createSharedClientState(e){return new XR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$d(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VC.bind(null,this.syncEngine),await _C(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vC}()}createDatastore(e){const n=Sa(e.databaseInfo.databaseId),r=function(i){return new nC(i)}(e.databaseInfo);return function(i,o,a,c){return new iC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new aC(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>$d(this.syncEngine,n,0),function(){return Ld.C()?new Ld:new ZR}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new RC(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=J(n);L("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Mi(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ge.UNAUTHENTICATED,this.clientId=tg.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ou(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dc(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Og(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BC(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Fd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Fd(e.remoteStore,i)),t._onlineComponents=e}function $C(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function BC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await dc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!$C(n))throw n;Yr("Error using user provided cache. Falling back to memory cache: "+n),await dc(t,new jd)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await dc(t,new jd);return t._offlineComponents}async function e_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await qd(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await qd(t,new FC))),t._onlineComponents}function jC(t){return e_(t).then(e=>e.syncEngine)}async function al(t){const e=await e_(t),n=e.eventManager;return n.onListen=CC.bind(null,e.syncEngine),n.onUnlisten=SC.bind(null,e.syncEngine),n}function qC(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Zg({next:d=>{o.enqueueAndForget(()=>Kg(i,h));const m=d.docs.has(a);!m&&d.fromCache?l.reject(new $(I.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?l.reject(new $(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new zg(wa(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Hg(i,h)}(await al(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t,e,n){if(!n)throw new $(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HC(t,e,n,r){if(e===!0&&r===!0)throw new $(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kd(t){if(!q.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zd(t){if(q.isDocumentKey(t))throw new $(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xu(t);throw new $(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=t_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Na{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cA;switch(r.type){case"firstParty":return new dA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hd.get(n);r&&(L("ComponentProvider","Removing Datastore"),Hd.delete(n),r.terminate())}(this),Promise.resolve()}}function KC(t,e,n,r={}){var s;const i=(t=wt(t,Na))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ge.MOCK_USER;else{a=uE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new $(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ge(l)}t._authCredentials=new lA(new eg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Da(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class On extends Da{constructor(e,n,r){super(e,n,wa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new q(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function ae(t,e,...n){if(t=Me(t),n_("collection","path",e),t instanceof Na){const r=Ae.fromString(e,...n);return zd(r),new On(t,null,r)}{if(!(t instanceof at||t instanceof On))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return zd(r),new On(t.firestore,null,r)}}function ye(t,e,...n){if(t=Me(t),arguments.length===1&&(e=tg.V()),n_("doc","path",e),t instanceof Na){const r=Ae.fromString(e,...n);return Kd(r),new at(t,null,new q(r))}{if(!(t instanceof at||t instanceof On))throw new $(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Kd(r),new at(t.firestore,t instanceof On?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Mg(this,"async_queue_retry"),this.ou=()=>{const n=hc();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=hc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Dn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Di(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Du.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&z()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function Gd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Un extends Na{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new zC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||r_(this),this._firestoreClient.terminate()}}function WC(t,e){const n=typeof t=="object"?t:yp(),r=typeof t=="string"?t:e||"(default)",s=xl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cE("firestore");i&&KC(s,...i)}return s}function Lu(t){return t._firestoreClient||r_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function r_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new AA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,t_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new UC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ns(rt.fromBase64String(e))}catch(n){throw new $(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ns(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=/^__.*__$/;class QC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oi(e,this.data,n,this.fieldTransforms)}}class s_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Hn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function i_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Uu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Uu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return $o(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(i_(this.Tu)&&GC.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class YC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sa(e)}wu(e,n,r,s=!1){return new Uu({Tu:e,methodName:n,yu:r,path:Je.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $u(t){const e=t._freezeSettings(),n=Sa(t._databaseId);return new YC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function o_(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);ju("Data must be an object, but it was:",o,r);const a=a_(r,o);let c,l;if(i.merge)c=new pt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=cl(e,h,n);if(!o.contains(d))throw new $(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);l_(u,d)||u.push(d)}c=new pt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new QC(new ht(a),c,l)}class Ma extends Va{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ma}}class Bu extends Va{_toFieldTransform(e){return new JA(e.path,new fi)}isEqual(e){return e instanceof Bu}}function JC(t,e,n,r){const s=t.wu(1,e,n);ju("Data must be an object, but it was:",s,r);const i=[],o=ht.empty();vr(r,(c,l)=>{const u=qu(e,c,n);l=Me(l);const h=s.mu(u);if(l instanceof Ma)i.push(u);else{const d=xa(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new pt(i);return new s_(o,a,s.fieldTransforms)}function XC(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[cl(e,r,n)],c=[s];if(i.length%2!=0)throw new $(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(cl(e,i[d])),c.push(i[d+1]);const l=[],u=ht.empty();for(let d=a.length-1;d>=0;--d)if(!l_(l,a[d])){const m=a[d];let E=c[d];E=Me(E);const T=o.mu(m);if(E instanceof Ma)l.push(m);else{const C=xa(E,T);C!=null&&(l.push(m),u.set(m,C))}}const h=new pt(l);return new s_(u,h,o.fieldTransforms)}function xa(t,e){if(c_(t=Me(t)))return ju("Unsupported field value:",e,t),a_(t,e);if(t instanceof Va)return function(r,s){if(!i_(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=xa(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:Fo(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fo(s.serializer,i)}}if(r instanceof Fu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ns)return{bytesValue:Pg(s.serializer,r._byteString)};if(r instanceof at){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ru(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${xu(r)}`)}(t,e)}function a_(t,e){const n={};return ng(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(r,s)=>{const i=xa(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function c_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Fu||t instanceof ns||t instanceof at||t instanceof Va)}function ju(t,e,n){if(!c_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=xu(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function cl(t,e,n){if((e=Me(e))instanceof Oa)return e._internalPath;if(typeof e=="string")return qu(t,e);throw $o("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZC=new RegExp("[~\\*/\\[\\]]");function qu(t,e,n){if(e.search(ZC)>=0)throw $o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Oa(...e.split("."))._internalPath}catch{throw $o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $o(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new $(I.INVALID_ARGUMENT,a+t+c)}function l_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(h_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eP extends u_{data(){return super.data()}}function h_(t,e){return typeof e=="string"?qu(t,e):e instanceof Oa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nP{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Fu(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const n=Ln(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);Te(Dg(r));const s=new hi(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class f_ extends u_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(h_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fo extends f_{data(e={}){return super.data(e)}}class rP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Os(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fo(this._firestore,this._userDataWriter,r.key,r,new Os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new fo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Os(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new fo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Os(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:sP(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){t=wt(t,at);const e=wt(t.firestore,Un);return qC(Lu(e),t._key).then(n=>__(e,t,n))}class p_ extends nP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function m_(t,e,n){t=wt(t,at);const r=wt(t.firestore,Un),s=d_(t.converter,e,n);return La(r,[o_($u(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,It.none())])}function ll(t,e,n,...r){t=wt(t,at);const s=wt(t.firestore,Un),i=$u(s);let o;return o=typeof(e=Me(e))=="string"||e instanceof Oa?XC(i,"updateDoc",t._key,e,n,r):JC(i,"updateDoc",t._key,e),La(s,[o.toMutation(t._key,It.exists(!0))])}function g_(t){return La(wt(t.firestore,Un),[new wu(t._key,It.none())])}function Hu(t,e){const n=wt(t.firestore,Un),r=ye(t),s=d_(t.converter,e);return La(n,[o_($u(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,It.exists(!1))]).then(()=>r)}function Vs(t,...e){var n,r,s;t=Me(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Gd(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Gd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof at)l=wt(t.firestore,Un),u=wa(t._key.path),c={next:h=>{e[o]&&e[o](__(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=wt(t,Da);l=wt(h.firestore,Un),u=h._query;const d=new p_(l);c={next:m=>{e[o]&&e[o](new rP(l,d,h,m))},error:e[o+1],complete:e[o+2]},tP(t._query)}return function(d,m,E,T){const C=new Zg(T),b=new zg(m,C,E);return d.asyncQueue.enqueueAndForget(async()=>Hg(await al(d),b)),()=>{C.La(),d.asyncQueue.enqueueAndForget(async()=>Kg(await al(d),b))}}(Lu(l),u,a,c)}function La(t,e){return function(r,s){const i=new Dn;return r.asyncQueue.enqueueAndForget(async()=>bC(await jC(r),s,i)),i.promise}(Lu(t),e)}function __(t,e,n){const r=n.docs.get(e._key),s=new p_(t);return new f_(t,s,e._key,r,new Os(n.hasPendingWrites,n.fromCache),e.converter)}function y_(){return new Bu("serverTimestamp")}(function(e,n=!0){(function(s){ds=s})(cs),Wr(new ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Un(new uA(r.getProvider("auth-internal")),new pA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Nn(md,"4.2.0",e),Nn(md,"4.2.0","esm2017")})();const iP={apiKey:"AIzaSyAtBiT1qxI0V4UtXmAAuylXfQcMs1VVDgE",authDomain:"videoconnect-bd1dd.firebaseapp.com",projectId:"videoconnect-bd1dd",storageBucket:"videoconnect-bd1dd.appspot.com",messagingSenderId:"962959957341",appId:"1:962959957341:web:9f3d3aebf7203310e45cb4"},v_=_p(iP),Vt=WC(v_),ms=jT(v_);async function oP(t,e){try{return(await Rw(ms,t,e)).user.email}catch(n){console.error(n)}}async function aP(t,e,n){try{const s=(await Aw(ms,e,n)).user;return await Pw(s,{displayName:t}),s.email}catch(r){console.error(r)}}async function cP(){try{await kw(ms)}catch(t){console.error(t)}}async function lP(t,e){const n=ye(ae(Vt,"users"),t),r=ae(n,"rooms");await Hu(r,{name:e,createdAt:y_()})}async function uP(t,e){const n=ye(ae(Vt,"users"),t),r=ae(n,"rooms"),s=ye(r,e);await g_(s)}async function hP(t,e){const n=ye(ae(Vt,"users"),e.hostId),r=ae(n,"rooms"),s=ye(r,e.roomId);if((await $n(s)).exists()){const o=ye(ae(s,"attendees"),t);await m_(o,{displayName:e.displayName,createdAt:y_()})}}async function dP(t,e,n){const r=ye(ae(Vt,"users"),t),s=ae(r,"rooms"),i=ye(s,e);if((await $n(i)).exists()){const a=ye(ae(i,"attendees"),n);await g_(a)}}async function fP(t,e,n){const r=ye(ae(Vt,"users"),t),s=ae(r,"rooms"),i=ye(s,e);if((await $n(i)).exists()){const a=ye(ae(i,"attendees"),n),l=(await $n(a)).data().approved;l?await ll(a,{approved:!l}):await ll(a,{approved:!l})}}function pP(t,e){const n=ae(Vt,"users"),r=ae(ye(n,t),"rooms"),s=ae(ye(r,e),"attendees");return ye(s,t)}function mP(t,e){const n=ae(Vt,"users"),r=ae(ye(n,t),"rooms"),s=ae(ye(r,e),"attendees");return ye(s,t)}function gP(t){return ae(t,"offerCandidates")}function _P(t){return ae(t,"answerCandidates")}async function yP(t,e){await m_(t,{offer:e})}function vP(t){return ae(t,"offerCandidates")}async function EP(t,e){await Hu(t,e)}function IP(t){return ae(t,"answerCandidates")}async function wP(t,e){await Hu(t,e)}const TP={components:{Navigation:ZT},data:function(){return{user:null,rooms:[]}},methods:{logout:async function(){await cP(),this.user=null,this.$router.push("login")},addRoom:async function(t){await lP(this.user.uid,t)},deleteRoom:async function(t){await uP(this.user.uid,t)},checkIn:async function(t){await hP(this.user.uid,t),this.$router.push(`/chat/${t.hostId}/${t.roomId}`)}},mounted(){Hl(ms,t=>{if(t){this.user=t;const e=ye(ae(Vt,"users"),this.user.uid),n=ae(e,"rooms");Vs(n,r=>{const s=[];r.forEach(i=>{s.push({id:i.id,name:i.data().name})}),this.rooms=s.sort((i,o)=>i.name.toLowerCase()<o.name.toLowerCase()?-1:1)})}})}};function AP(t,e,n,r,s,i){const o=Mn("navigation"),a=Mn("router-view");return Z(),ee("div",null,[ie(o,{user:t.user,onLogout:i.logout},null,8,["user","onLogout"]),ie(a,{user:t.user,rooms:t.rooms,onLogout:i.logout,onAddRoom:i.addRoom,onDeleteRoom:i.deleteRoom,onCheckIn:i.checkIn},null,8,["user","rooms","onLogout","onAddRoom","onDeleteRoom","onCheckIn"])])}const RP=pn(TP,[["render",AP]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Nr=typeof window<"u";function CP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const fe=Object.assign;function fc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ot(s)?s.map(t):t(s)}return n}const Hs=()=>{},Ot=Array.isArray,PP=/\/$/,SP=t=>t.replace(PP,"");function pc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=DP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function bP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&rs(e.matched[r],n.matched[s])&&E_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function E_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!NP(t[n],e[n]))return!1;return!0}function NP(t,e){return Ot(t)?Yd(t,e):Ot(e)?Yd(e,t):t===e}function Yd(t,e){return Ot(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function DP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var gi;(function(t){t.pop="pop",t.push="push"})(gi||(gi={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function OP(t){if(!t)if(Nr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),SP(t)}const VP=/^[^#]+#/;function MP(t,e){return t.replace(VP,"#")+e}function xP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function LP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=xP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jd(t,e){return(history.state?history.state.position-e:-1)+t}const ul=new Map;function FP(t,e){ul.set(t,e)}function UP(t){const e=ul.get(t);return ul.delete(t),e}let $P=()=>location.protocol+"//"+location.host;function I_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Qd(c,"")}return Qd(n,t)+r+s}function BP(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=I_(t,location),E=n.value,T=e.value;let C=0;if(d){if(n.value=m,e.value=d,o&&o===E){o=null;return}C=T?d.position-T.position:0}else r(m);s.forEach(b=>{b(n.value,E,{delta:C,type:gi.pop,direction:C?C>0?Ks.forward:Ks.back:Ks.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const E=s.indexOf(d);E>-1&&s.splice(E,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(fe({},d.state,{scroll:Fa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Xd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fa():null}}function jP(t){const{history:e,location:n}=window,r={value:I_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:$P()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=fe({},e.state,Xd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=fe({},s.value,e.state,{forward:c,scroll:Fa()});i(u.current,u,!0);const h=fe({},Xd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function qP(t){t=OP(t);const e=jP(t),n=BP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=fe({location:"",base:t,go:r,createHref:MP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function HP(t){return typeof t=="string"||t&&typeof t=="object"}function w_(t){return typeof t=="string"||typeof t=="symbol"}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},T_=Symbol("");var Zd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zd||(Zd={}));function ss(t,e){return fe(new Error,{type:t,[T_]:!0},e)}function en(t,e){return t instanceof Error&&T_ in t&&(e==null||!!(t.type&e))}const ef="[^/]+?",KP={sensitive:!1,strict:!1,start:!0,end:!0},zP=/[.+*?^${}()[\]/\\]/g;function WP(t,e){const n=fe({},KP,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(zP,"\\$&"),m+=40;else if(d.type===1){const{value:E,repeatable:T,optional:C,regexp:b}=d;i.push({name:E,repeatable:T,optional:C});const V=b||ef;if(V!==ef){m+=10;try{new RegExp(`(${V})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${E}" (${V}): `+x.message)}}let H=T?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;h||(H=C&&l.length<2?`(?:/${H})`:"/"+H),C&&(H+="?"),s+=H,m+=20,C&&(m+=-8),T&&(m+=-20),V===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",E=i[d-1];h[E.name]=m&&E.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:T,optional:C}=m,b=E in l?l[E]:"";if(Ot(b)&&!T)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const V=Ot(b)?b.join("/"):b;if(!V)if(C)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);u+=V}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function GP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function QP(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=GP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(tf(r))return 1;if(tf(s))return-1}return s.length-r.length}function tf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const YP={type:0,value:""},JP=/[a-zA-Z0-9_]/;function XP(t){if(!t)return[[]];if(t==="/")return[[YP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:JP.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function ZP(t,e,n){const r=WP(XP(t.path),n),s=fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function eS(t,e){const n=[],r=new Map;e=sf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const m=!d,E=tS(u);E.aliasOf=d&&d.record;const T=sf(e,u),C=[E];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of H)C.push(fe({},E,{components:d?d.record.components:E.components,path:x,aliasOf:d?d.record:E}))}let b,V;for(const H of C){const{path:x}=H;if(h&&x[0]!=="/"){const ve=h.record.path,Ee=ve[ve.length-1]==="/"?"":"/";H.path=h.record.path+(x&&Ee+x)}if(b=ZP(H,h,T),d?d.alias.push(b):(V=V||b,V!==b&&V.alias.push(b),m&&u.name&&!rf(b)&&o(u.name)),E.children){const ve=E.children;for(let Ee=0;Ee<ve.length;Ee++)i(ve[Ee],b,d&&d.children[Ee])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return V?()=>{o(V)}:Hs}function o(u){if(w_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&QP(u,n[h])>=0&&(u.record.path!==n[h].record.path||!A_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!rf(u)&&r.set(u.record.name,u)}function l(u,h){let d,m={},E,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ss(1,{location:u});T=d.record.name,m=fe(nf(h.params,d.keys.filter(V=>!V.optional).map(V=>V.name)),u.params&&nf(u.params,d.keys.map(V=>V.name))),E=d.stringify(m)}else if("path"in u)E=u.path,d=n.find(V=>V.re.test(E)),d&&(m=d.parse(E),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(V=>V.re.test(h.path)),!d)throw ss(1,{location:u,currentLocation:h});T=d.record.name,m=fe({},h.params,u.params),E=d.stringify(m)}const C=[];let b=d;for(;b;)C.unshift(b.record),b=b.parent;return{name:T,path:E,params:m,matched:C,meta:rS(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function nf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function tS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:nS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function nS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rS(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function sf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function A_(t,e){return e.children.some(n=>n===t||A_(t,n))}const R_=/#/g,sS=/&/g,iS=/\//g,oS=/=/g,aS=/\?/g,C_=/\+/g,cS=/%5B/g,lS=/%5D/g,P_=/%5E/g,uS=/%60/g,S_=/%7B/g,hS=/%7C/g,b_=/%7D/g,dS=/%20/g;function Ku(t){return encodeURI(""+t).replace(hS,"|").replace(cS,"[").replace(lS,"]")}function fS(t){return Ku(t).replace(S_,"{").replace(b_,"}").replace(P_,"^")}function hl(t){return Ku(t).replace(C_,"%2B").replace(dS,"+").replace(R_,"%23").replace(sS,"%26").replace(uS,"`").replace(S_,"{").replace(b_,"}").replace(P_,"^")}function pS(t){return hl(t).replace(oS,"%3D")}function mS(t){return Ku(t).replace(R_,"%23").replace(aS,"%3F")}function gS(t){return t==null?"":mS(t).replace(iS,"%2F")}function Bo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function _S(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(C_," "),o=i.indexOf("="),a=Bo(o<0?i:i.slice(0,o)),c=o<0?null:Bo(i.slice(o+1));if(a in e){let l=e[a];Ot(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function of(t){let e="";for(let n in t){const r=t[n];if(n=pS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(r)?r.map(i=>i&&hl(i)):[r&&hl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function yS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ot(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const vS=Symbol(""),af=Symbol(""),zu=Symbol(""),k_=Symbol(""),dl=Symbol("");function As(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function In(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ss(4,{from:n,to:e})):h instanceof Error?a(h):HP(h)?a(ss(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function mc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ES(a)){const l=(a.__vccOpts||a)[e];l&&s.push(In(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=CP(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&In(d,n,r,i,o)()}))}}return s}function ES(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cf(t){const e=on(zu),n=on(k_),r=Pt(()=>e.resolve(Lr(t.to))),s=Pt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(rs.bind(null,u));if(d>-1)return d;const m=lf(c[l-2]);return l>1&&lf(u)===m&&h[h.length-1].path!==m?h.findIndex(rs.bind(null,c[l-2])):d}),i=Pt(()=>s.value>-1&&AS(n.params,r.value.params)),o=Pt(()=>s.value>-1&&s.value===n.matched.length-1&&E_(n.params,r.value.params));function a(c={}){return TS(c)?e[Lr(t.replace)?"replace":"push"](Lr(t.to)).catch(Hs):Promise.resolve()}return{route:r,href:Pt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const IS=Hf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cf,setup(t,{slots:e}){const n=Wo(cf(t)),{options:r}=on(zu),s=Pt(()=>({[uf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[uf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ap("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),wS=IS;function TS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function AS(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ot(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function lf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const uf=(t,e,n)=>t??e??n,RS=Hf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=on(dl),s=Pt(()=>t.route||r.value),i=on(af,0),o=Pt(()=>{let l=Lr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Pt(()=>s.value.matched[o.value]);ro(af,Pt(()=>o.value+1)),ro(vS,a),ro(dl,s);const c=vy();return to(()=>[c.value,a.value,t.name],([l,u,h],[d,m,E])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!rs(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return hf(n.default,{Component:d,route:l});const m=h.props[u],E=m?m===!0?l.params:typeof m=="function"?m(l):m:null,C=ap(d,fe({},E,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return hf(n.default,{Component:C,route:l})||C}}});function hf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const CS=RS;function PS(t){const e=eS(t.routes,t),n=t.parseQuery||_S,r=t.stringifyQuery||of,s=t.history,i=As(),o=As(),a=As(),c=Ey(vn);let l=vn;Nr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fc.bind(null,y=>""+y),h=fc.bind(null,gS),d=fc.bind(null,Bo);function m(y,M){let N,U;return w_(y)?(N=e.getRecordMatcher(y),U=M):U=y,e.addRoute(U,N)}function E(y){const M=e.getRecordMatcher(y);M&&e.removeRoute(M)}function T(){return e.getRoutes().map(y=>y.record)}function C(y){return!!e.getRecordMatcher(y)}function b(y,M){if(M=fe({},M||c.value),typeof y=="string"){const g=pc(n,y,M.path),_=e.resolve({path:g.path},M),v=s.createHref(g.fullPath);return fe(g,_,{params:d(_.params),hash:Bo(g.hash),redirectedFrom:void 0,href:v})}let N;if("path"in y)N=fe({},y,{path:pc(n,y.path,M.path).path});else{const g=fe({},y.params);for(const _ in g)g[_]==null&&delete g[_];N=fe({},y,{params:h(g)}),M.params=h(M.params)}const U=e.resolve(N,M),de=y.hash||"";U.params=u(d(U.params));const f=bP(r,fe({},y,{hash:fS(de),path:U.path})),p=s.createHref(f);return fe({fullPath:f,hash:de,query:r===of?yS(y.query):y.query||{}},U,{redirectedFrom:void 0,href:p})}function V(y){return typeof y=="string"?pc(n,y,c.value.path):fe({},y)}function H(y,M){if(l!==y)return ss(8,{from:M,to:y})}function x(y){return Ke(y)}function ve(y){return x(fe(V(y),{replace:!0}))}function Ee(y){const M=y.matched[y.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let U=typeof N=="function"?N(y):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=V(U):{path:U},U.params={}),fe({query:y.query,hash:y.hash,params:"path"in U?{}:y.params},U)}}function Ke(y,M){const N=l=b(y),U=c.value,de=y.state,f=y.force,p=y.replace===!0,g=Ee(N);if(g)return Ke(fe(V(g),{state:typeof g=="object"?fe({},de,g.state):de,force:f,replace:p}),M||N);const _=N;_.redirectedFrom=M;let v;return!f&&kP(r,U,N)&&(v=ss(16,{to:_,from:U}),xt(U,U,!0,!1)),(v?Promise.resolve(v):st(_,U)).catch(A=>en(A)?en(A,2)?A:gn(A):he(A,_,U)).then(A=>{if(A){if(en(A,2))return Ke(fe({replace:p},V(A.to),{state:typeof A.to=="object"?fe({},de,A.to.state):de,force:f}),M||_)}else A=zn(_,U,!0,p,de);return mn(_,U,A),A})}function gt(y,M){const N=H(y,M);return N?Promise.reject(N):Promise.resolve()}function _t(y){const M=Tr.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(y):y()}function st(y,M){let N;const[U,de,f]=SS(y,M);N=mc(U.reverse(),"beforeRouteLeave",y,M);for(const g of U)g.leaveGuards.forEach(_=>{N.push(In(_,y,M))});const p=gt.bind(null,y,M);return N.push(p),ze(N).then(()=>{N=[];for(const g of i.list())N.push(In(g,y,M));return N.push(p),ze(N)}).then(()=>{N=mc(de,"beforeRouteUpdate",y,M);for(const g of de)g.updateGuards.forEach(_=>{N.push(In(_,y,M))});return N.push(p),ze(N)}).then(()=>{N=[];for(const g of f)if(g.beforeEnter)if(Ot(g.beforeEnter))for(const _ of g.beforeEnter)N.push(In(_,y,M));else N.push(In(g.beforeEnter,y,M));return N.push(p),ze(N)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),N=mc(f,"beforeRouteEnter",y,M),N.push(p),ze(N))).then(()=>{N=[];for(const g of o.list())N.push(In(g,y,M));return N.push(p),ze(N)}).catch(g=>en(g,8)?g:Promise.reject(g))}function mn(y,M,N){a.list().forEach(U=>_t(()=>U(y,M,N)))}function zn(y,M,N,U,de){const f=H(y,M);if(f)return f;const p=M===vn,g=Nr?history.state:{};N&&(U||p?s.replace(y.fullPath,fe({scroll:p&&g&&g.scroll},de)):s.push(y.fullPath,de)),c.value=y,xt(y,M,N,p),gn()}let Mt;function ys(){Mt||(Mt=s.listen((y,M,N)=>{if(!Li.listening)return;const U=b(y),de=Ee(U);if(de){Ke(fe(de,{replace:!0}),U).catch(Hs);return}l=U;const f=c.value;Nr&&FP(Jd(f.fullPath,N.delta),Fa()),st(U,f).catch(p=>en(p,12)?p:en(p,2)?(Ke(p.to,U).then(g=>{en(g,20)&&!N.delta&&N.type===gi.pop&&s.go(-1,!1)}).catch(Hs),Promise.reject()):(N.delta&&s.go(-N.delta,!1),he(p,U,f))).then(p=>{p=p||zn(U,f,!1),p&&(N.delta&&!en(p,8)?s.go(-N.delta,!1):N.type===gi.pop&&en(p,20)&&s.go(-1,!1)),mn(U,f,p)}).catch(Hs)}))}let Ir=As(),xe=As(),ge;function he(y,M,N){gn(y);const U=xe.list();return U.length?U.forEach(de=>de(y,M,N)):console.error(y),Promise.reject(y)}function Zt(){return ge&&c.value!==vn?Promise.resolve():new Promise((y,M)=>{Ir.add([y,M])})}function gn(y){return ge||(ge=!y,ys(),Ir.list().forEach(([M,N])=>y?N(y):M()),Ir.reset()),y}function xt(y,M,N,U){const{scrollBehavior:de}=t;if(!Nr||!de)return Promise.resolve();const f=!N&&UP(Jd(y.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return Lf().then(()=>de(y,M,f)).then(p=>p&&LP(p)).catch(p=>he(p,y,M))}const ct=y=>s.go(y);let wr;const Tr=new Set,Li={currentRoute:c,listening:!0,addRoute:m,removeRoute:E,hasRoute:C,getRoutes:T,resolve:b,options:t,push:x,replace:ve,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:xe.add,isReady:Zt,install(y){const M=this;y.component("RouterLink",wS),y.component("RouterView",CS),y.config.globalProperties.$router=M,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Lr(c)}),Nr&&!wr&&c.value===vn&&(wr=!0,x(s.location).catch(de=>{}));const N={};for(const de in vn)Object.defineProperty(N,de,{get:()=>c.value[de],enumerable:!0});y.provide(zu,M),y.provide(k_,Sf(N)),y.provide(dl,c);const U=y.unmount;Tr.add(y),y.unmount=function(){Tr.delete(y),Tr.size<1&&(l=vn,Mt&&Mt(),Mt=null,c.value=vn,wr=!1,ge=!1),U()}}};function ze(y){return y.reduce((M,N)=>M.then(()=>_t(N)),Promise.resolve())}return Li}function SS(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>rs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>rs(l,c))||s.push(c))}return[n,r,s]}const bS={name:"Home",props:["user"]},Wu=t=>(pr("data-v-496cdd37"),t=t(),mr(),t),kS=Wu(()=>w("h1",null,"Experience the Web Rtc 🐱‍🏍",-1)),NS=Wu(()=>w("p",null,"Connect, Communicate, Collaborate 📱💬🎥 with our app, where secure sign-ins meet seamless video chats!",-1)),DS={key:0,id:"welcome"},OS={key:1,id:"register"},VS=Wu(()=>w("p",null,"Ohh! looks like you are not logged in",-1));function MS(t,e,n,r,s,i){const o=Mn("router-link");return Z(),ee("main",null,[kS,NS,n.user?(Z(),ee("div",DS,[w("p",null,[le(" Welcome back "),w("span",null,Rt(n.user.displayName),1)]),w("button",null,[ie(o,{to:"/rooms"},{default:Ne(()=>[le("Join a room")]),_:1})])])):ut("",!0),n.user?ut("",!0):(Z(),ee("div",OS,[VS,w("button",null,[ie(o,{to:"/login"},{default:Ne(()=>[le("Login")]),_:1})]),le(" or "),w("button",null,[ie(o,{to:"/register"},{default:Ne(()=>[le("Register")]),_:1})])]))])}const xS=pn(bS,[["render",MS],["__scopeId","data-v-496cdd37"]]);const LS={data:function(){return{email:null,password:null,error:null}},methods:{login:async function(){const t={email:this.email,password:this.password};await oP(t.email,t.password)?(this.error=null,this.$router.push("/rooms")):this.error="Username or password incorrect!"}}},gs=t=>(pr("data-v-4d373c3c"),t=t(),mr(),t),FS={id:"login"},US={class:"login-container"},$S=gs(()=>w("h2",null,"Login Form",-1)),BS={key:0,class:"error-message"},jS=gs(()=>w("label",{for:"email"},"Email:",-1)),qS=gs(()=>w("br",null,null,-1)),HS=gs(()=>w("label",{for:"password"},"Password:",-1)),KS=gs(()=>w("br",null,null,-1)),zS=gs(()=>w("input",{type:"submit",value:"Login"},null,-1));function WS(t,e,n,r,s,i){return Z(),ee("section",FS,[w("div",US,[$S,t.error?(Z(),ee("div",BS,"Error: "+Rt(t.error),1)):ut("",!0),w("form",{onSubmit:e[2]||(e[2]=cp(o=>i.login(),["prevent"]))},[jS,Ht(w("input",{type:"email",id:"email",name:"email",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>t.email=o)},null,512),[[Kt,t.email]]),qS,HS,Ht(w("input",{type:"password",id:"password",name:"password",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>t.password=o)},null,512),[[Kt,t.password]]),KS,zS],32)])])}const GS=pn(LS,[["render",WS],["__scopeId","data-v-4d373c3c"]]);const QS={data:function(){return{name:null,email:null,password:null,error:null}},methods:{register:async function(){const t={name:this.name,email:this.email,password:this.password};await aP(t.name,t.email,t.password)?(this.error=null,this.$router.push("/")):this.error="Something went wrong with registration!"}}},Kn=t=>(pr("data-v-1ab605f9"),t=t(),mr(),t),YS={id:"register"},JS={class:"register-container"},XS=Kn(()=>w("h2",null,"register Form",-1)),ZS={key:0,class:"error-message"},eb=Kn(()=>w("label",{for:"name"},"Name:",-1)),tb=Kn(()=>w("br",null,null,-1)),nb=Kn(()=>w("label",{for:"email"},"Email:",-1)),rb=Kn(()=>w("br",null,null,-1)),sb=Kn(()=>w("label",{for:"password"},"Password:",-1)),ib=Kn(()=>w("br",null,null,-1)),ob=Kn(()=>w("input",{type:"submit",value:"register"},null,-1));function ab(t,e,n,r,s,i){return Z(),ee("section",YS,[w("div",JS,[XS,t.error?(Z(),ee("div",ZS,"Error: "+Rt(t.error),1)):ut("",!0),w("form",{onSubmit:e[3]||(e[3]=cp(o=>i.register(),["prevent"]))},[eb,Ht(w("input",{type:"text",id:"name",name:"name",required:"","onUpdate:modelValue":e[0]||(e[0]=o=>t.name=o)},null,512),[[Kt,t.name]]),tb,nb,Ht(w("input",{type:"email",id:"email",name:"email",required:"","onUpdate:modelValue":e[1]||(e[1]=o=>t.email=o)},null,512),[[Kt,t.email]]),rb,sb,Ht(w("input",{type:"password",id:"password",name:"password",required:"","onUpdate:modelValue":e[2]||(e[2]=o=>t.password=o)},null,512),[[Kt,t.password]]),ib,ob],32)])])}const cb=pn(QS,[["render",ab],["__scopeId","data-v-1ab605f9"]]),lb="/assets/video-solid-ac57a5f9.svg",ub="/assets/user-solid-c614a884.svg",hb="/assets/trash-solid-542272ed.svg";const db={name:"Rooms",props:["user","rooms"],data(){return{roomName:null}},methods:{handleAdd(){this.$emit("addRoom",this.roomName),this.roomName=null,this.$refs.roomName.focus()}}},_s=t=>(pr("data-v-b7a945be"),t=t(),mr(),t),fb={key:0},pb=_s(()=>w("h1",null,"create a Room",-1)),mb={class:"createroom"},gb=_s(()=>w("h1",null,"Your Rooms",-1)),_b=_s(()=>w("thead",null,[w("tr",null,[w("th",null,"room name"),w("th",null,"join"),w("th",null,"check in user"),w("th",null,"delete")])],-1)),yb={title:"join room"},vb=_s(()=>w("img",{class:"icons",src:lb,alt:""},null,-1)),Eb={title:"users in room"},Ib=_s(()=>w("img",{class:"icons",src:ub,alt:""},null,-1)),wb={title:"delete room"},Tb=["onClick"],Ab={key:1},Rb=_s(()=>w("p",null,"Ohh! looks like you are not logged in",-1));function Cb(t,e,n,r,s,i){const o=Mn("router-link");return n.user?(Z(),ee("main",fb,[pb,w("div",mb,[Ht(w("input",{type:"text",name:"roomName",id:"roomName",placeholder:"room name","onUpdate:modelValue":e[0]||(e[0]=a=>s.roomName=a),ref:"roomName"},null,512),[[Kt,s.roomName]]),w("button",{id:"addroom",onClick:e[1]||(e[1]=a=>i.handleAdd())},"+")]),gb,w("table",null,[_b,(Z(!0),ee(yt,null,Tc(n.rooms,a=>(Z(),ee("tbody",{key:a.id},[w("tr",null,[w("td",null,Rt(a.name),1),w("td",yb,[ie(o,{to:`/chat/${n.user.uid}/${a.id}`},{default:Ne(()=>[vb]),_:2},1032,["to"])]),w("td",Eb,[ie(o,{to:`/checkin/${n.user.uid}/${a.id}`},{default:Ne(()=>[Ib]),_:2},1032,["to"])]),w("td",wb,[w("img",{onClick:c=>t.$emit("deleteRoom",a.id),class:"icons",src:hb,alt:""},null,8,Tb)])])]))),128))])])):(Z(),ee("div",Ab,[Rb,w("button",null,[ie(o,{to:"/login"},{default:Ne(()=>[le("Login")]),_:1})]),le(" or "),w("button",null,[ie(o,{to:"/register"},{default:Ne(()=>[le("Register")]),_:1})])]))}const Pb=pn(db,[["render",Cb],["__scopeId","data-v-b7a945be"]]);const Sb={name:"CheckIn",props:["user"],data(){return{hostId:this.$route.params.hostId,displayName:null,roomName:null}},methods:{handleCheckIn:function(){this.$emit("checkIn",{hostId:this.$route.params.hostId,roomId:this.$route.params.roomId,displayName:this.displayName})}},mounted(){Hl(ms,r=>{r&&(this.displayName=r.displayName)});const t=ye(ae(Vt,"users"),this.$route.params.hostId),e=ae(t,"rooms"),n=ye(e,this.$route.params.roomId);$n(n).then(r=>{r.exists()?this.roomName=r.data().name:this.$router.replace("/")})}},bb=t=>(pr("data-v-d681ad88"),t=t(),mr(),t),kb={key:0,id:"checkIn"},Nb={key:1,id:"notFound"},Db=bb(()=>w("p",null,"Ohh! looks like you are not logged in",-1));function Ob(t,e,n,r,s,i){const o=Mn("router-link");return Z(),ee("main",null,[n.user?(Z(),ee("div",kb,[w("h1",null,[le(" Check in "),w("span",null,Rt(s.roomName),1),le(" room ")]),w("p",null,[le(" display name : "),Ht(w("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.displayName=a),placeholder:"cool user 🐱‍🏍"},null,512),[[Kt,s.displayName]])]),w("button",{onClick:e[1]||(e[1]=(...a)=>i.handleCheckIn&&i.handleCheckIn(...a))},"check in")])):(Z(),ee("div",Nb,[Db,w("button",null,[ie(o,{to:"/login"},{default:Ne(()=>[le("Login")]),_:1})]),le(" or "),w("button",null,[ie(o,{to:"/register"},{default:Ne(()=>[le("Register")]),_:1})])]))])}const Vb=pn(Sb,[["render",Ob],["__scopeId","data-v-d681ad88"]]);const Mb={name:"CheckInClient",props:["user"],data(){return{hostId:null,roomId:null,displayName:null,roomName:null}},methods:{handleCheckIn:async function(){await this.verifyRoomAndHost(),this.$emit("checkIn",{hostId:this.hostId,roomId:this.roomId,displayName:this.displayName})},verifyRoomAndHost:async function(){const t=ye(ae(Vt,"users"),this.hostId),e=ae(t,"rooms"),n=ye(e,this.roomId);await $n(n).then(r=>{r.exists()?this.roomName=r.data().name:this.$router.replace("/")})}},mounted(){Hl(ms,t=>{t&&(this.displayName=t.displayName)})}},Ua=t=>(pr("data-v-2c86f8f9"),t=t(),mr(),t),xb={key:0,id:"checkIn"},Lb=Ua(()=>w("h1",null,"Check in any room, provided you have host and room info",-1)),Fb=Ua(()=>w("br",null,null,-1)),Ub=Ua(()=>w("br",null,null,-1)),$b={key:1,id:"notFound"},Bb=Ua(()=>w("p",null,"Ohh! looks like you are not logged in",-1));function jb(t,e,n,r,s,i){const o=Mn("router-link");return Z(),ee("main",null,[n.user?(Z(),ee("div",xb,[Lb,w("p",null,[Ht(w("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.displayName=a),placeholder:"display name 🐱‍🏍"},null,512),[[Kt,s.displayName]]),Fb,Ht(w("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>s.hostId=a),placeholder:"host id 🙆🏾‍♂️"},null,512),[[Kt,s.hostId]]),Ub,Ht(w("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>s.roomId=a),placeholder:"room id 💬"},null,512),[[Kt,s.roomId]])]),w("button",{onClick:e[3]||(e[3]=(...a)=>i.handleCheckIn&&i.handleCheckIn(...a))},"check in")])):(Z(),ee("div",$b,[Bb,w("button",null,[ie(o,{to:"/login"},{default:Ne(()=>[le("Login")]),_:1})]),le(" or "),w("button",null,[ie(o,{to:"/register"},{default:Ne(()=>[le("Register")]),_:1})])]))])}const qb=pn(Mb,[["render",jb],["__scopeId","data-v-2c86f8f9"]]);const Hb={name:"Chat",data:function(){return{hostId:this.$route.params.hostId,roomId:this.$route.params.roomId,roomName:null,hostDisplayName:null,attendees:[],attendeesApproved:[],amIApproved:!1,attendeeJoined:!1,servers:{iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10},localStream:null,remoteStream:null,peerConnection:null}},props:["user"],methods:{deleteAttendee:async function(t){this.user&&this.user.uid==this.hostId&&await dP(this.user.uid,this.roomId,t)},toggleApproval:function(t){this.user&&this.user.uid==this.hostId&&fP(this.user.uid,this.roomId,t)},startWebcam:async function(){this.peerConnection=new RTCPeerConnection(this.servers),this.localStream=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0}),this.remoteStream=new MediaStream,this.localStream.getTracks().forEach(t=>{this.peerConnection.addTrack(t,this.localStream)}),this.peerConnection.ontrack=t=>{t.streams[0].getTracks().forEach(e=>{this.remoteStream.addTrack(e)})},this.$refs.webcamvideo.srcObject=this.localStream,this.$refs.remotevideo.srcObject=this.remoteStream,this.$refs.callbutton.disabled=!1,this.$refs.answerbutton.disabled=!1,this.$refs.webcambutton.disabled=!0},doCall:async function(){const t=pP(this.hostId,this.roomId),e=vP(t),n=IP(t);this.peerConnection.onicecandidate=i=>{i.candidate&&EP(e,i.candidate.toJSON())};const r=await this.peerConnection.createOffer();await this.peerConnection.setLocalDescription(r);const s={sdp:r.sdp,type:r.type};await yP(t,s),Vs(t,i=>{const o=i.data();if(!this.peerConnection.currentRemoteDescription&&(o!=null&&o.answer)){const a=new RTCSessionDescription(o.answer);this.peerConnection.setRemoteDescription(a)}}),Vs(n,i=>{i.docChanges().forEach(o=>{if(o.type==="added"){const a=new RTCIceCandidate(o.doc.data());this.peerConnection.addIceCandidate(a)}})})},doAnswer:async function(){const t=mP(this.hostId,this.roomId),e=_P(t),n=gP(t);this.peerConnection.onicecandidate=a=>{a.candidate&&wP(e,a.candidate.toJSON())};const s=(await $n(t)).data().offer;await this.peerConnection.setRemoteDescription(new RTCSessionDescription(s));const i=await this.peerConnection.createAnswer();await this.peerConnection.setLocalDescription(i);const o={sdp:i.sdp,type:i.type};await ll(t,{answer:o}),Vs(n,a=>{a.docChanges().forEach(c=>{if(c.type==="added"){let l=c.doc.data();this.peerConnection.addIceCandidate(new RTCIceCandidate(l))}})})}},mounted:async function(){const t=ye(ae(Vt,"users"),this.hostId),e=ae(t,"rooms"),n=ye(e,this.roomId),r=await $n(n);r.exists()?this.roomName=r.data().name:this.$router.replace("/");let s=!1;const i=ae(n,"attendees");Vs(i,o=>{const a=[],c=[];o.forEach(l=>{this.user.uid==l.id&&(s=!0),this.hostId==l.id&&(this.hostDisplayName=l.data().displayName),l.data().approved?(this.user.uid==l.id&&(this.amIApproved=!0),c.push({id:l.id,displayName:l.data().displayName,approved:l.data().approved})):(this.user.uid==l.id&&(this.amIApproved=!1),a.push({id:l.id,displayName:l.data().displayName,approved:l.data().approved}))}),this.attendees=a,this.attendeesApproved=c,s||this.$router.push(`/checkin/${this.hostId}/${this.roomId}`)})}},Gu=t=>(pr("data-v-8a0419f6"),t=t(),mr(),t),Kb={key:0,id:"room-info"},zb={id:"room-name"},Wb={id:"room-owner"},Gb={key:0,id:"security"},Qb={class:"videos"},Yb={id:"webcamVideo",ref:"webcamvideo",autoplay:"",playsinline:"",controls:""},Jb={id:"remoteVideo",ref:"remotevideo",autoplay:"",playsinline:"",controls:""},Xb=Gu(()=>w("h3",null,"Pending Attendees:",-1)),Zb=["onClick"],ek=["onClick"],tk=Gu(()=>w("h3",null,"Approved Attendees:",-1)),nk=["onClick"],rk={key:1,id:"join-request-status"},sk={key:1},ik=Gu(()=>w("p",null,"Ohh! looks like you are not logged in",-1));function ok(t,e,n,r,s,i){const o=Mn("router-link");return n.user?(Z(),ee("div",Kb,[w("h2",zb,"Room Name : "+Rt(t.roomName),1),w("p",Wb,"Room Owner: "+Rt(t.hostDisplayName),1),n.user!==null&&n.user.uid==t.hostId||t.amIApproved?(Z(),ee("div",Gb,[w("div",Qb,[w("div",null,[w("video",Yb,null,512)]),w("div",null,[w("video",Jb,null,512)])]),w("button",{id:"call-btn",onClick:e[0]||(e[0]=(...a)=>i.doCall&&i.doCall(...a)),ref:"callbutton",disabled:""}," Call ",512),w("button",{id:"join-btn",onClick:e[1]||(e[1]=(...a)=>i.doAnswer&&i.doAnswer(...a)),ref:"answerbutton",disabled:""}," Join ",512),w("button",{id:"start-video-btn",ref:"webcambutton",onClick:e[2]||(e[2]=(...a)=>i.startWebcam&&i.startWebcam(...a))}," Start Webcam ",512),t.attendeeJoined?(Z(),ee("button",{key:0,id:"leave-btn",onClick:e[3]||(e[3]=(...a)=>t.doLeave&&t.doLeave(...a))}," Leave ")):ut("",!0),Xb,(Z(!0),ee(yt,null,Tc(t.attendees,a=>(Z(),ee("ul",{class:"attendees-list",key:a.id},[w("li",null,[le(Rt(a.displayName)+" ",1),n.user!==null&&n.user.uid==t.hostId?(Z(),ee("button",{key:0,id:"addButton",onClick:c=>i.toggleApproval(a.id)}," ✔️ ",8,Zb)):ut("",!0),n.user!==null&&n.user.uid==t.hostId?(Z(),ee("button",{key:1,id:"kickButton",onClick:c=>i.deleteAttendee(a.id)}," ⛔ ",8,ek)):ut("",!0)])]))),128)),tk,(Z(!0),ee(yt,null,Tc(t.attendeesApproved,a=>(Z(),ee("ul",{class:"attendees-list",key:a.id},[w("li",null,[le(Rt(a.displayName)+" ",1),n.user!==null&&n.user.uid==t.hostId?(Z(),ee("button",{key:0,onClick:c=>i.toggleApproval(a.id)}," ❌ ",8,nk)):ut("",!0)])]))),128))])):(Z(),ee("p",rk,[le(" Hi "),w("b",null,Rt(n.user.displayName),1),le(", Your join request is pending. The room owner will let you in soon. ")]))])):(Z(),ee("div",sk,[ik,w("button",null,[ie(o,{to:"/login"},{default:Ne(()=>[le("Login")]),_:1})]),le(" or "),w("button",null,[ie(o,{to:"/register"},{default:Ne(()=>[le("Register")]),_:1})])]))}const ak=pn(Hb,[["render",ok],["__scopeId","data-v-8a0419f6"]]),ck=PS({history:qP("/"),routes:[{path:"/",name:"home",component:xS},{path:"/login",name:"login",component:GS},{path:"/register",name:"register",component:cb},{path:"/rooms",name:"rooms",component:Pb},{path:"/checkin/:hostId/:roomId",name:"checkin",component:Vb},{path:"/checkinclient",name:"checkinclient",component:qb},{path:"/chat/:hostId/:roomId",name:"chat",component:ak},{path:"/:catchAll(.*)",redirect:"/"}]}),N_=Zv(RP);N_.use(ck);N_.mount("#app");
