"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["app.afcb724b734b9f5056302a0fbaed86c1.css","dbf9a74b05845dad75e1c9f103fed02c"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["img/right-graphite@2x.f2e09a9.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["img/trackit.4dbf2ed.png","4dbf2ed5128b084a0b6f9ce268c02558"],["index.html","8374939c7eb566bd5cc5e67a674adfae"],["js/0.cdee9391f431b385519e.js","99fa1fc368c04731c36c91a1661e270a"],["js/1.7aca1a6a0112298a13a0.js","5911be4597d28ddcc788e70243003a34"],["js/2.be210a1dbeb596a2fdbd.js","3b14be54c9cbc5a2f24e1e1d352a708c"],["js/3.dfcd5dd0aa61894c2b9d.js","363f8b978faab6217801f4cbc3ae17e3"],["js/4.b3dc4f2ff9626385f87a.js","db848fee24167a06f388d79be29f4b2a"],["js/5.cfcd9a5ea043c40d31c9.js","93cde5c33ce8c431ed55e5f4add7b303"],["js/6.0e004c517f98e957f4c3.js","09ce4d74d576d24900edcde9540d164d"],["js/7.98950c406af3af7dee8f.js","19df352eb43daf0f08cc3c05fa2fe339"],["js/app.js","65bf128aa877d44aecae7c256551cd3c"],["js/manifest.js","1861a6c3bd605efd74ccad44af7fad12"],["js/vendor.js","048e0bb4551120ecbb259d6b36f22269"],["statics/GitHub-Mark-Light-32px.png","d56df49a807a9fd06eb1667a84d3810e"],["statics/flespi_logo_black.svg","82f983ec2277961e9878f2bf014b13fc"],["statics/icons/apple-icon-152x152.png","906c193b6d193a65add774107b3923db"],["statics/icons/favicon-16x16.png","c81a3f3a982ad3175edf7a78d797ced3"],["statics/icons/favicon-32x32.png","c2f336f76202bb73019843c7ad316def"],["statics/icons/icon-192x192.png","47fc2bc80d4dc7e7835423c0505302e7"],["statics/icons/icon-512x512.png","9a9bf03959ba3eba0bc007f6c7699a33"],["statics/icons/ms-icon-144x144.png","4ca6116897b45c5c22d8e3d3f21576f5"],["statics/manifest.json","e70b8108d642f3e1eda25442d0a2a629"],["statics/right-graphite@2x.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["statics/track-it-logo.png","ca2124cb4b54895f85dba5fbf32335f0"],["statics/trackit.png","4dbf2ed5128b084a0b6f9ce268c02558"]],cacheName="sw-precache-v3-track-it-0.0.12-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,!1);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});