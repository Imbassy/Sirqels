"use strict";(()=>{var u="fs-attributes";var C="cmsattribute";var a="inputactive";var S="support";var g=async(...t)=>{var s;let e=[];for(let n of t){let o=await((s=window.fsAttributes[n])==null?void 0:s.loading);e.push(o)}return e};var m=()=>{};function x(t,e,s,n){return t?(t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)):m}var _={formBlock:"w-form",checkboxField:"w-checkbox",checkboxInput:"w-checkbox-input",radioField:"w-radio",radioInput:"w-radio-input",checkboxOrRadioLabel:"w-form-label",checkboxOrRadioFocus:"w--redirected-focus",checkboxOrRadioChecked:"w--redirected-checked",successMessage:"w-form-done",errorMessage:"w-form-fail"};var v=t=>t instanceof HTMLInputElement;var d=t=>typeof t=="string";function U(t,e,s){var o;let n=window.fsAttributes[t];return n.destroy=s||m,(o=n.resolve)==null||o.call(n,e),e}var L=(t,e="1",s="iife")=>{let o=`${t}${s==="esm"?".esm":""}.js`;return`https://cdn.jsdelivr.net/npm/@finsweet/attributes-${t}@${e}/${o}`};var F=`${u}-${S}`,B=async()=>{var o;let{fsAttributes:t,location:e}=window,{host:s,searchParams:n}=new URL(e.href);return!s.includes("webflow.io")||!n.has(F)?!1:(o=t.import)==null?void 0:o.call(t,S,"1")};var E=t=>{let e=(o,i,r)=>{let c=t[o],{key:p,values:b}=c,l;if(!i)return`[${p}]`;let f=b==null?void 0:b[i];d(f)?l=f:l=f(r&&"instanceIndex"in r?r.instanceIndex:void 0);let A=r&&"caseInsensitive"in r&&r.caseInsensitive?"i":"";if(!(r!=null&&r.operator))return`[${p}="${l}"${A}]`;switch(r.operator){case"prefixed":return`[${p}^="${l}"${A}]`;case"suffixed":return`[${p}$="${l}"${A}]`;case"contains":return`[${p}*="${l}"${A}]`}};function s(o,i){let r=e("element",o,i),c=(i==null?void 0:i.scope)||document;return i!=null&&i.all?[...c.querySelectorAll(r)]:c.querySelector(r)}return[e,s,(o,i)=>{let r=t[i];return r?o.getAttribute(r.key):null}]};var T={preventLoad:{key:`${u}-preventload`},debugMode:{key:`${u}-debug`},src:{key:"src",values:{finsweet:"@finsweet/attributes"}},dev:{key:`${u}-dev`}},[I,bt]=E(T);var h=t=>{let{currentScript:e}=document,s={};if(!e)return{attributes:s,preventsLoad:!1};let o={preventsLoad:d(e.getAttribute(T.preventLoad.key)),attributes:s};for(let i in t){let r=e.getAttribute(t[i]);o.attributes[i]=r}return o};var M=({scriptAttributes:t,attributeKey:e,version:s,init:n})=>{var c;H(),(c=window.fsAttributes)[e]||(c[e]={});let{preventsLoad:o,attributes:i}=h(t),r=window.fsAttributes[e];r.version=s,r.init=n,o||(window.Webflow||(window.Webflow=[]),window.Webflow.push(()=>n(i)))},H=()=>{let t=G();if(window.fsAttributes&&!Array.isArray(window.fsAttributes)){R(window.fsAttributes,t);return}let e=j(t);R(e,t),q(e),window.fsAttributes=e,window.FsAttributes=window.fsAttributes,B()},j=t=>{let e={cms:{},push(...s){var n,o;for(let[i,r]of s)(o=(n=this[i])==null?void 0:n.loading)==null||o.then(r)},async import(s,n){let o=e[s];return o||new Promise(i=>{let r=document.createElement("script");r.src=L(s,n),r.async=!0,r.onload=()=>{let[c]=R(e,[s]);i(c)},document.head.append(r)})},destroy(){var s,n;for(let o of t)(n=(s=window.fsAttributes[o])==null?void 0:s.destroy)==null||n.call(s)}};return e},G=()=>{let t=I("src","finsweet",{operator:"contains"}),e=I("dev");return[...document.querySelectorAll(`script${t}, script${e}`)].reduce((o,i)=>{var c;let r=i.getAttribute(T.dev.key)||((c=i.src.match(/[\w-. ]+(?=(\.js)$)/))==null?void 0:c[0]);return r&&!o.includes(r)&&o.push(r),o},[])},R=(t,e)=>e.map(n=>{let o=t[n];return o||(t[n]={},o=t[n],o.loading=new Promise(i=>{o.resolve=r=>{i(r),delete o.resolve}}),o)}),q=t=>{let e=Array.isArray(window.fsAttributes)?window.fsAttributes:[];t.push(...e)};var N="1.0.0";var O=`fs-${a}`,Y="class",W={value:"value"},z={element:{key:`${O}-element`,values:{}},class:{key:`${O}-${Y}`,values:W}},[P,Ut,V]=E(z),w=`is-active-${a}`;var y=t=>{let e=t.type==="checkbox",s=t.closest(`.${_.checkboxField}`);if(e&&s){let i=k(t);$(s,i,t.checked);return}if(!(t.type==="radio"))return;let o=document.querySelectorAll(`input[type="radio"][name="${t.name}"]`);for(let i of o){let r=i.closest(`.${_.radioField}`);if(!r)continue;let c=k(i);$(r,c,i.checked)}},k=t=>{let e=t.closest(P("class"));return e?V(e,"class")||w:w},$=(t,e,s=!0)=>t.classList[s?"add":"remove"](e);var K=()=>(document.querySelectorAll("input").forEach(y),x(window,"change",s=>{let{target:n}=s;!v(n)||y(n)}));var D=async()=>{await g(C);let t=K();return U(a,void 0,t)};M({init:D,version:N,attributeKey:a});})();