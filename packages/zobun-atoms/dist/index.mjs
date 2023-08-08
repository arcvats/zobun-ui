import { jsx } from 'react/jsx-runtime';

var u=Object.defineProperty,m=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var n=(e,t,o)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,l=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&n(e,o,t[o]);if(r)for(var o of r(t))d.call(t,o)&&n(e,o,t[o]);return e},c=(e,t)=>m(e,g(t));var h=(e,t)=>{var o={};for(var i in e)s.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(e!=null&&r)for(var i of r(e))t.indexOf(i)<0&&d.call(e,i)&&(o[i]=e[i]);return o};function b(f){var a=f,{primary:e=!1,size:t="medium",backgroundColor:o,label:i}=a,p=h(a,["primary","size","backgroundColor","label"]);return jsx("button",c(l({type:"button",className:"rounded-lg p-1 text-sm border-2",style:{backgroundColor:o}},p),{children:i}))}b.displayName="Button";

export { b as Button };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map