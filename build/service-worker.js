"use strict";var precacheConfig=[["/react-cli/index.html","1363be78f3af009023a717cb9c0f2fc3"],["/react-cli/static/css/main.fb01ad23.css","fb01ad2373a0e8daca7749d135927ce0"],["/react-cli/static/css/vendors.201f1b4a.css","201f1b4a60076b5dbfcee8b2d63544ca"],["/react-cli/static/js/login.fc5262dd.chunk.js","9c87726b32752d52d6b6d32aaac3917c"],["/react-cli/static/js/main.0a07a2d3.js","f766beb6c77705b223a2fbc54fe35fd2"],["/react-cli/static/js/message.0bb7306b.chunk.js","4cc8b9e1df43104cb8c73e9bd1eb33fd"],["/react-cli/static/js/topic.860b7d45.chunk.js","c3b314760b370a271ea7acf14bec8287"],["/react-cli/static/js/user.0ddc7bcf.chunk.js","b53e16e409a9b687de7a35f652b2d0f0"],["/react-cli/static/js/vendors.e86554ca.js","9347ed61daf45709c89e76d0cdeeb4ca"],["/react-cli/static/js/write.7984eed0.chunk.js","d5e05a8e3a503962403987e5d56c3ee1"],["/react-cli/static/media/error.0f0af804.png","0f0af804f63c60cf753db96d8f9a6cc0"],["/react-cli/static/media/loading.b3419887.gif","b3419887896f982b4f2a1dcd83ef81bf"],["/react-cli/static/media/logo.8bd8b5c5.svg","8bd8b5c574c9d4e7377f4178bfdfc964"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));var a="/react-cli/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});