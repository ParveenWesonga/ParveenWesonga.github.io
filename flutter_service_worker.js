'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"index.html": "d19e5b263b84b0cd04f2a012fb82ac9c",
"/": "d19e5b263b84b0cd04f2a012fb82ac9c",
"manifest.json": "592f290d327d49570defce84929d2242",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "88d4f91aeafd2434beace3163da3fcb7",
"version.json": "3dbfbe283da34f7a734b47e1c7bc8d9b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"assets/AssetManifest.json": "26494b10d064691a2dcb6cdb56dd6f6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/NOTICES": "1722a4afd743d8773b3831124a7f24b1",
"assets/assets/images/sales-team.png": "47c4b00d0f58d7c94e61c330b222f4c6",
"assets/assets/images/diseases.png": "8ab1f864d9cea766f202c15b8e1b4c23",
"assets/assets/images/bar-chart.png": "8ed263a5bc0f7ea69e21016b8fd39773",
"assets/assets/images/services.png": "4139972c8efb2d1f8f87f688edd83523",
"assets/assets/images/icons8-chart.png": "f6719d3741acf5655bfcb6bdf05334f9",
"assets/assets/images/farmers.png": "e24c344e0f9a4af3f31a038ccf9c8612",
"assets/assets/images/logo.png": "8fe28a044b770cc7bb8c4629b9727c87",
"assets/assets/images/places.png": "7b1d4835b599f90f03448cbf483e7485",
"assets/assets/images/services_dark.png": "60ade531bf82f099b4d8968aac01c8d6",
"assets/assets/images/svgs/expenses.svg": "4acb0472c29b5e60ada7a45b40162c3d",
"assets/assets/images/svgs/signIn.svg": "91093e1bcac85b78aaaa961d90701826",
"assets/assets/images/svgs/light_mode.svg": "2cd44f5194e6d0fce0c181c5f4df10db",
"assets/assets/images/svgs/laundry.svg": "5585c142cd153cfa0c48ece285bca345",
"assets/assets/images/svgs/revenue.svg": "e681f3c99c0851cfbf2358ceeb183ad3",
"assets/assets/images/svgs/complete.svg": "a3cfab80e7c92b5f2c59d67534a270d7",
"assets/assets/images/svgs/orders.svg": "73c88eddbc0e31b3764877a9436be8f1",
"assets/assets/images/svgs/offers.svg": "fb135518bd7a00a63b40817febfceb16",
"assets/assets/images/svgs/start.svg": "3755361cb430d093092257f27374d20d",
"assets/assets/images/svgs/help.svg": "f8ac8c56c9c401bf676a2d2225a62b45",
"assets/assets/images/svgs/google.svg": "d44733046e69f5722a7de9d2640dd7f9",
"assets/assets/images/svgs/signUp.svg": "a3497dbb4be2535d6204ce1f27b61b2c",
"assets/assets/images/svgs/ongoing.svg": "73110e3eee5e00c8a96d2da524f6737c",
"assets/assets/images/svgs/dark_mode.svg": "ac9a9d654db3dd3d049a828ba26379ec",
"assets/assets/images/svgs/settings.svg": "0844b197c4f18213fc3a97e703f1acd8",
"assets/assets/images/svgs/reports.svg": "240e19f3a5921d37c086050fa5158136",
"assets/assets/images/svgs/employees.svg": "9a36c864aa0de72b34e774b80fdf185c",
"assets/assets/images/svgs/services.svg": "c082b06aaa4e60177e7c8378b588cf99",
"assets/assets/images/svgs/users.svg": "9a36c864aa0de72b34e774b80fdf185c",
"assets/assets/images/svgs/dashboard.svg": "ac43aed80b26eba6e7655098db1246de",
"assets/assets/images/kericho.jpeg": "cb10b04ce07578522704cf7c64f40c86",
"assets/assets/images/virus.png": "6c187402102694993bcd8e6a3fa25b17",
"assets/assets/fonts/roboto-light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/roboto-regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/FontManifest.json": "83315d60261308828518563d85da5272",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080"
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
