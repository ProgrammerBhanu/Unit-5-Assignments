(()=>{"use strict";var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.m=n,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="webpack1:",o.l=(n,r,a,l)=>{if(e[n])e[n].push(r);else{var c,d;if(void 0!==a)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var s=i[u];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==t+a){c=s;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+a),c.src=n),e[n]=[r];var m=(t,r)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),d&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=a);var l=o.p+o.u(t),c=new Error;o.l(l,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",c.name="ChunkLoadError",c.type=a,c.request=l,r[1](c)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,a,[l,c,d]=n,i=0;if(l.some((t=>0!==e[t]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);d&&d(o)}for(t&&t(n);i<l.length;i++)a=l[i],o.o(e,a)&&e[a]&&e[a][0](),e[l[i]]=0},n=self.webpackChunkwebpack1=self.webpackChunkwebpack1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=1,l=0,c=document.querySelector(".count");function d(e){let t=e.target.parentNode,n=e.target;t.classList.toggle("tgle"),"Mark"==n.innerText?n.innerText="Completed":n.innerText="Mark"}function i(e){l--,c.textContent="No. of Task:- "+l,e.target.parentNode.remove()}c.textContent="No. of Task:- "+l;const u=o.p+"assets/images/icon.jpg";o.e(654).then(o.bind(o,654)),document.createElement("h1");const s=document.createElement("img");s.src=u,document.getElementById("root").appendChild(s),document.getElementById("form-data").addEventListener("click",(function(){var e=document.getElementById("name").value,t=document.getElementById("quan").value,n=document.getElementById("priority").value;(function(e,t,n){let r=document.querySelector("table"),o=document.createElement("tr"),u=document.createElement("td");u.textContent=a,a++;let s=document.createElement("td");s.textContent=e;let m=document.createElement("td");m.textContent=t;let p=document.createElement("td");p.textContent=n,"high"==p.textContent?p.style.color="red":"med"==p.textContent?p.style.color="black":p.style.color="#6200EA";let g=document.createElement("td");g.textContent="Mark",g.setAttribute("id","status"),g.addEventListener("click",d);let f=document.createElement("td");f.textContent="Delete",f.addEventListener("click",i),o.append(u,s,m,p,g,f),r.appendChild(o),l++,c.textContent="No. of Task:- "+l})(e,t,n),console.log(e,t,n),document.getElementById("name").value="",document.getElementById("quan").value="",document.getElementById("priority").value="Choose"}))})();