if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./sw.js",["./workbox-3b5792f5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"9aac7ef2ff1f9bbe66e043e8edd7ae3c"},{url:"assets/all_pages.fe193276.js",revision:"08fd39d14ddf84a7f4dc859e75d4f737"},{url:"assets/index.0b05e9ee.js",revision:"e6cda35e9c5568b90bac0dc5b2e52f42"},{url:"assets/index.c21f8199.css",revision:"3ee3a303e67a7d09b027b547d63c5035"},{url:"assets/workbox-window.prod.es5.73a2a4cf.js",revision:"786692479fa3c4f791eb2ba6ec2b3f74"},{url:"favicon.ico",revision:"0eb6a3e58fb0f61f080bfd48d9be4a2d"},{url:"icon-152.png",revision:"9aac7ef2ff1f9bbe66e043e8edd7ae3c"},{url:"icon-192.png",revision:"3e20c90593da8a23862b10ee63386454"},{url:"icon-512.png",revision:"818e855ee6105104764c0388190afac9"},{url:"index.html",revision:"e7727d184cd03f7ed9d0f057c0187d5b"},{url:"manifest.webmanifest",revision:"23b59777afa3a31623e589484a319d40"},{url:"notavailable.html",revision:"b71543883fd2040c444176cad0c908b2"},{url:"VERSION.txt",revision:"bbc537e728d7f32d3c50baea3c6ac403"}],{})}));
//# sourceMappingURL=sw.js.map
