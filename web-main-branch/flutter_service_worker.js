'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "b4197e815067d5deaaf6afdd8d61c07a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-sound-wave-640.jpg": "3a2e3f8c3dadca8ec018c51a47dfe927",
"assets/assets/images/history-of-creation-2022-02-21-photo-4.png": "e9360bf22a1a8772e983ecdd3b5fabe2",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-submarine-640.jpg": "f31fc4a8a744bec1fc053a42c1baac5d",
"assets/assets/images/history-of-creation-2022-02-24-flashback-4.png": "fb0f46ac328364c041b31257a705ef5e",
"assets/assets/images/history-of-creation-2022-02-24-flashback-3.png": "0c70c089c43d9f88444084d1774cb508",
"assets/assets/images/history-of-creation-2022-02-21-photo-1.png": "f2d8882e581e8b384249d0453abd3e71",
"assets/assets/images/history-of-creation-2022-02-24-flashback-5.png": "d17876bdb26d55bffae39edd537d7135",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-aircraft-640.jpg": "5360886b68317a3a7056e82c42d508eb",
"assets/assets/images/history-of-creation-2022-02-24-flashback-7.png": "7c8131e58404e9847fa165f2d74fee5e",
"assets/assets/images/history-of-creation-2022-02-24-flashback-2.png": "8e17ef2d8192f1bcf9ee1d5e439805f3",
"assets/assets/images/second-introductory-screen-flood-nl-2019-640.jpg": "dcc54568d429444dac09028b090f0757",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-time-640.jpg": "8168bd73edcb0392f96aec76bf91463a",
"assets/assets/images/history-of-creation-2022-03-25-01.png": "6cf8b41d45b2e871e4265e6b8f75ca48",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-lake-640.jpg": "192c01fc1c2f4b7776d44a4e499a0583",
"assets/assets/images/history-of-creation-2022-02-21-traffic-light.png": "355ee846c7d0aad82ff719d49189e911",
"assets/assets/images/history-of-creation-2022-02-24-flashback-1.png": "a96d12e9222a784844502d967c630323",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-sea-beach-640.jpg": "7b81bf3b3b65e6dbd186feda3d5ab0c6",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-doors-640.jpg": "23cc98ddc547917469baefd26148c1c5",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-terrace-640.jpg": "3bdd79bbbd569d9acc9f7e299b0483bd",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-colores-a-medida-640.jpg": "c59b65f7913a7b97ad667b32cc487a78",
"assets/assets/images/history-of-creation-2022-02-21-photo-3.png": "c877e9da9738e03ab6ae2102c3dce461",
"assets/assets/images/history-of-creation-2022-02-21-photo-2.png": "60c4b164cbee461c6ed40158ded36c1c",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-fireplace-640.jpg": "447a13146e06814053528abdf3423264",
"assets/assets/images/history-of-creation-2022-03-25-02.png": "dff6aae42202434af351281f0379739b",
"assets/assets/images/history-of-creation-2022-02-24-flashback-6.png": "ed1bdf0df5ea324049f88ced2aceee69",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-graph-640.jpg": "9e85a36f3e2417292a2d1f609b4d392c",
"assets/assets/images/second-introductory-screen-flood-uk-2015-640.jpg": "3651a4e9ae22adefec57c67d48768762",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-long-pond-640.jpg": "a92b11464a6333ee2c054116a625eb1d",
"assets/assets/images/history-of-creation-2022-02-24-flashback-8.png": "652dc3879110491e391219c6a71cd411",
"assets/assets/images/history-of-creation-2022-02-27-official-statistics.png": "01348fc5862e26c060957b9ed1bf4371",
"assets/assets/images/how-to-find-out-who-is-tmipiyl-scale-640.jpg": "7465a0f5a506dbe65b58b81bd172a541",
"assets/assets/fonts/Roboto.LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/fonts/NotoColorEmoji.LICENSE.txt": "55719faa0112708e946b820b24b14097",
"assets/fonts/MaterialIcons-Regular.otf": "d448ec65434d707f818b33835009904b",
"assets/NOTICES": "41515c5b22454417d968b4129c1e4451",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "208ad97de276b08cef00b88a40c92db1",
"assets/AssetManifest.bin.json": "34b8117da95b66d2bc6c7aa5d23d094d",
"main.dart.js": "1eafee5ef3a9d432da6e82f648f1e488",
"version.json": "22d4bac02fe0f5a8ee46310c020d9714",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.html": "2219ad9b140d2254ab0fe249c5dfc84f",
"/": "2219ad9b140d2254ab0fe249c5dfc84f",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "77d1345cafc5f7e0d842c21622e14a12"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
