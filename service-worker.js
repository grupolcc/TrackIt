"use strict";var precacheConfig=[["app.93649b3f4fd8c2416c898ac2f3a370f4.css","4c01fe5ac6f8a2af5a49c6af9a2667ae"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/mdi.6473d7d.woff","6473d7d5a01bb3f8fccd5bbeaf2be312"],["img/corpse.64baba0.png","64baba060d5a08a517f783c929f04167"],["img/right-graphite@2x.f2e09a9.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["img/trackit.4dbf2ed.png","4dbf2ed5128b084a0b6f9ce268c02558"],["index.html","b7face61290aa0be64fbf1b1f3702ad5"],["js/0.1012450ce65bda8474ab.js","968b2aeeb0b8ba2896fd15c8d542a61a"],["js/1.76f2b3701c7093535551.js","530eb8dc08cc767592ea6ecc5227d628"],["js/2.eb05d07bb2066e59f9d7.js","2fe9d6bbc34cdaa3202ac54a2727caab"],["js/app.baacc48298c38517b8fe.js","f7fc0d5c605c01e77a5097cf881f0290"],["js/vendor.529574ad1339b4eb20ce.js","f749eb5e946def305092d6a075e33fee"],["manifest.json","6211a3d5b8a1e4a7cf91bcc9b2c1fe8c"],["statics/GitHub-Mark-32px.png","f87561b8bb354ef83b09a66e54f70e08"],["statics/GitHub-Mark-Light-32px.png","d56df49a807a9fd06eb1667a84d3810e"],["statics/corpse.png","64baba060d5a08a517f783c929f04167"],["statics/flespi_logo_black.svg","82f983ec2277961e9878f2bf014b13fc"],["statics/icons/apple-icon-152x152.png","906c193b6d193a65add774107b3923db"],["statics/icons/favicon-16x16.png","c81a3f3a982ad3175edf7a78d797ced3"],["statics/icons/favicon-32x32.png","c2f336f76202bb73019843c7ad316def"],["statics/icons/icon-192x192.png","47fc2bc80d4dc7e7835423c0505302e7"],["statics/icons/icon-512x512.png","9a9bf03959ba3eba0bc007f6c7699a33"],["statics/icons/ms-icon-144x144.png","4ca6116897b45c5c22d8e3d3f21576f5"],["statics/manifest.json","e70b8108d642f3e1eda25442d0a2a629"],["statics/mountain.svg","1e3d1da4cf6d85e6e28cc3aae77e3ead"],["statics/police.png","a9de7e81de000ac57c2855c29a98e796"],["statics/police50.png","105ab0c48f5ba92a1310652050a4c1e2"],["statics/right-graphite@2x.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["statics/track-it-logo.png","ca2124cb4b54895f85dba5fbf32335f0"],["statics/trackit.png","4dbf2ed5128b084a0b6f9ce268c02558"]],cacheName="sw-precache-v3-track-it-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,!1);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});