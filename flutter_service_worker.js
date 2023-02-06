'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js": "1e27484955d809da516a334ddffa49af",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "2cb978cfb0d94323fef544a6b247c073",
"/": "2cb978cfb0d94323fef544a6b247c073",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"version.json": "cce323c4376b7d284dee3b6e1eccf93e",
"manifest.json": "4fe10f1ed396bec99e8bd5e4b53f362b",
"assets/shaders/ink_sparkle.frag": "b8aec72486d6bce40b9b35582894fcc9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "0388cbf203ea26c6ddb1ee4793c438a9",
"assets/NOTICES": "bf0fc8611d700c30a63c8df2c5b1d097",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/lottiefiles/loading.json": "40fc9beff9e6d01a07dff59866b198a6",
"assets/assets/images/svg3.svg": "3f0a188ebe3f0dadbe31e4edfaba191c",
"assets/assets/images/icon.svg": "e5462c6e5784e97345178d2c439e4d91",
"assets/assets/images/image_services.jpg": "effbf56a2177d84eb39e3293157ea86a",
"assets/assets/images/back_main.png": "6b5ac21fa4ae9d86ec46234e6f0f03da",
"assets/assets/images/logo.png": "1fae6d3f1a2e370c5760fca3446279a8",
"assets/assets/images/back_mobile_main.png": "56fc5ae7e3330e91958fa42504317b49",
"assets/assets/images/icon_main_transparent.png": "266bc3d0eac62fede59e94a98c59c23f",
"assets/assets/images/password.svg": "57d08bd7349cb497ec0490e9880c52c1",
"assets/assets/images/water_mark.jpg": "95e28b081c57cc66b6bff34f0495f0e0",
"assets/assets/images/Socials/twitter.svg": "84b97b3b902b5b5650fc379601f96839",
"assets/assets/images/Socials/facebook.svg": "da3c3dfa6e6d291adb083ba4465e1994",
"assets/assets/images/Socials/linkedin.svg": "d29c74a20e96f047b58c8225196cb57c",
"assets/assets/images/Socials/instagram.svg": "72afe70e374649aac59323443e037dec",
"assets/assets/images/Socials/github.svg": "4ac8fd4e382de233f3e5a9379e47a0b2",
"assets/assets/images/Socials/tumblr.svg": "7b15eb8125a5ab9b34d4085a9761f830",
"assets/assets/images/Socials/reddit.svg": "6a43953a4234b5fbe0d881675aa43622",
"assets/assets/images/Socials/behance.svg": "fdaff2e2ee005a6b18b18d6490c7df2e",
"assets/assets/images/Profiles/alex.png": "46a9f21218cd1ee76e4e11e6b6871881",
"assets/assets/images/Profiles/kili.png": "2d7743cb85820ce070338a09cbb50b25",
"assets/assets/images/Profiles/clemo.png": "19a112c9a60bfc7eef69d513f709fb73",
"assets/assets/images/Profiles/felix.png": "c88f9fa51f572c251c87e24861c42ca5",
"assets/assets/images/Profiles/clemo.jpg": "bdd064779881e353e2ca7b059df719a0",
"assets/assets/images/Profiles/mwarabu.png": "836701bdd60b58ae3c326d843096a63f",
"assets/assets/images/icon_main.png": "2ea64a85f12e2a81a7e416c087aea1a8",
"assets/assets/images/anlysis.svg": "293dcf1809e912af9fa86d98841eeee6",
"assets/assets/images/svg2.svg": "85e63605e2daeea1dd133df148032675",
"assets/assets/images/svg1.svg": "767690786fdbb486819c244cb5f116b0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57"
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
