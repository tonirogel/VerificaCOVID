if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>c(e,r),f={module:{uri:r},exports:o,require:d};i[r]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3e98e12a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"dfb90c0bf62ce658ff8f6a8c7a1be30c"},{url:"assets/all_pages.a7ae35f3.js",revision:"7e29faa5472f30290d6f32a029a9b05c"},{url:"assets/index.b30315cd.js",revision:"51d902f06d9cd198eb87fe0568172f37"},{url:"assets/index.d3fc15e0.css",revision:"19a2fb47eb4237a27934d396285aca5e"},{url:"assets/workbox-window.prod.es5.d2eeccea.js",revision:"c5fb89b45c6b5a1e680f016b1efd17dd"},{url:"favicon.ico",revision:"8e405348a95200b1be9e60f0a1dcde7c"},{url:"icon-152.png",revision:"dfb90c0bf62ce658ff8f6a8c7a1be30c"},{url:"icon-192.png",revision:"c85f8464c5b132ce512bd0bdd274fc48"},{url:"icon-512.png",revision:"e642e82c47e087ee337abeb2a07688a4"},{url:"index.html",revision:"2d87e5887429be898b4fa7b5e4627a19"},{url:"manifest.webmanifest",revision:"ae3be97c58d41e8945ccfc6ccdfb9425"},{url:"notavailable.html",revision:"485d3a7914b6e345d4c4787df4dde975"},{url:"VERSION.txt",revision:"ce663e42eda625369dbc731e1436eb4c"}],{})}));
//# sourceMappingURL=sw.js.map
