if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5s8juiiW2849l69xB05WF/_buildManifest.js",revision:"70023215f3e8d48c8b2491dac0aed22c"},{url:"/_next/static/5s8juiiW2849l69xB05WF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-b55c842550e86c72.js",revision:"b55c842550e86c72"},{url:"/_next/static/chunks/1bfc9850-266079001ac56210.js",revision:"266079001ac56210"},{url:"/_next/static/chunks/412-780ae686c59195f8.js",revision:"780ae686c59195f8"},{url:"/_next/static/chunks/546-9efac89986d736b5.js",revision:"9efac89986d736b5"},{url:"/_next/static/chunks/814c6784-52f62d6cdcac1b73.js",revision:"52f62d6cdcac1b73"},{url:"/_next/static/chunks/d0447323-8379385fc7c43ec5.js",revision:"8379385fc7c43ec5"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-2e07288eb1e2f834.js",revision:"2e07288eb1e2f834"},{url:"/_next/static/chunks/pages/_app-5a3e9eb03ac25852.js",revision:"5a3e9eb03ac25852"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/about-7e0e4afc7cf0ec33.js",revision:"7e0e4afc7cf0ec33"},{url:"/_next/static/chunks/pages/contact-35d7d3f4c4e0c0a1.js",revision:"35d7d3f4c4e0c0a1"},{url:"/_next/static/chunks/pages/index-1e45d0c0c5c80b09.js",revision:"1e45d0c0c5c80b09"},{url:"/_next/static/chunks/pages/services-c534ab25717f43f1.js",revision:"c534ab25717f43f1"},{url:"/_next/static/chunks/pages/testimonials-d66266ae247521ed.js",revision:"d66266ae247521ed"},{url:"/_next/static/chunks/pages/work-76332119c083eb5d.js",revision:"76332119c083eb5d"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/5071b7114033c971.css",revision:"5071b7114033c971"},{url:"/_next/static/media/c9f47950d1a1fd4d-s.woff2",revision:"4b41ec3232768f5dcd1a199c812991b2"},{url:"/_next/static/media/e409345220cc128b-s.p.woff2",revision:"63bdb4ebabcbe13c0c4220295dfdfbba"},{url:"/avatar-2.png",revision:"589a5d9e4db6db7e7659db57c6fef476"},{url:"/avatar.png",revision:"bc7688a1381cdc0c1482914c556d1a85"},{url:"/bg-explosion.png",revision:"6cc47ec58aaf423c48bd9c2506ef1f66"},{url:"/bulb.png",revision:"33f4215b2db1c7dec89c942d53931969"},{url:"/circle-star.svg",revision:"5aa19a482369a28465e3758873359442"},{url:"/circles.png",revision:"f8ca9836f13cc6fd71136d59e09b863a"},{url:"/logo.svg",revision:"555ae24acfaed1163984f68dc487005e"},{url:"/manifest.json",revision:"a4da8ffd57e61dcb9e8c726c60f7f46b"},{url:"/rounded-text.png",revision:"422870f21573a521e1aeb823824a0367"},{url:"/site-bg.svg",revision:"fbc6a53aebd9362b49326c84c6c1416b"},{url:"/t-avt-1.png",revision:"03d3b5d327cb4e446c74c1b695c64b39"},{url:"/t-avt-2.png",revision:"e18e0d5132fd1e72246bf064c0a41582"},{url:"/t-avt-3.png",revision:"97b0e619388c8a667db77cd26ccca0d7"},{url:"/thumb1.jpg",revision:"811f3a18d79cca6c4303760b042342fd"},{url:"/thumb2.jpg",revision:"08ce5d1cbe1686fdfdb007a2bb39d1ca"},{url:"/thumb3.jpg",revision:"cbd029d24beb380fc3a3bc5ea20ef6d5"},{url:"/thumb4.jpg",revision:"c5b4d73a2d5fc14024b086e0b5cf465f"},{url:"/top-left-img.png",revision:"66333d36be7f5d36660ab4339f5a173c"},{url:"/white-explosion.jpg",revision:"61071df059e79bf2bfdaa6a2863df77f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
