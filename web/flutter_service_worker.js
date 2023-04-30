'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c3d4ac45b53170727c2119c13f316274",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/assets/images/history-of-creation-2022-02-21-photo-4.png": "e9360bf22a1a8772e983ecdd3b5fabe2",
"assets/assets/images/history-of-creation-2022-02-24-flashback-4.png": "fb0f46ac328364c041b31257a705ef5e",
"assets/assets/images/history-of-creation-2022-02-24-flashback-3.png": "0c70c089c43d9f88444084d1774cb508",
"assets/assets/images/history-of-creation-2022-02-21-photo-1.png": "f2d8882e581e8b384249d0453abd3e71",
"assets/assets/images/history-of-creation-2022-02-24-flashback-5.png": "d17876bdb26d55bffae39edd537d7135",
"assets/assets/images/history-of-creation-2022-02-24-flashback-7.png": "7c8131e58404e9847fa165f2d74fee5e",
"assets/assets/images/history-of-creation-2022-02-24-flashback-2.png": "8e17ef2d8192f1bcf9ee1d5e439805f3",
"assets/assets/images/history-of-creation-2022-03-25-01.png": "6cf8b41d45b2e871e4265e6b8f75ca48",
"assets/assets/images/history-of-creation-2022-02-21-traffic-light.png": "355ee846c7d0aad82ff719d49189e911",
"assets/assets/images/history-of-creation-2022-02-24-flashback-1.png": "a96d12e9222a784844502d967c630323",
"assets/assets/images/history-of-creation-2022-02-21-photo-3.png": "c877e9da9738e03ab6ae2102c3dce461",
"assets/assets/images/history-of-creation-2022-02-21-photo-2.png": "60c4b164cbee461c6ed40158ded36c1c",
"assets/assets/images/history-of-creation-2022-03-25-02.png": "dff6aae42202434af351281f0379739b",
"assets/assets/images/history-of-creation-2022-02-24-flashback-6.png": "ed1bdf0df5ea324049f88ced2aceee69",
"assets/assets/images/history-of-creation-2022-02-24-flashback-8.png": "652dc3879110491e391219c6a71cd411",
"assets/assets/images/history-of-creation-2022-02-27-official-statistics.png": "01348fc5862e26c060957b9ed1bf4371",
"assets/assets/fonts/Roboto.LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/fonts/NotoColorEmoji.LICENSE.txt": "55719faa0112708e946b820b24b14097",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a2cb678c715debcdda50a2223981696f",
"main.dart.js": "dcc6c81eff33c493c70c7d2dedd118fd",
"version.json": "631e89e927e5e7ef28f079471bcf4f49",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"index.html": "86293a4c2a8fbc847cb9719e4cf3354e",
"/": "86293a4c2a8fbc847cb9719e4cf3354e",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "77d1345cafc5f7e0d842c21622e14a12"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
