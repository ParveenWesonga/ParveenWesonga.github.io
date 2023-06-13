'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "d22b78627f8b84919710139ecf460f9d",
"/": "d22b78627f8b84919710139ecf460f9d",
"manifest.json": "8a563d0303eab1754e0c34d9f7c94299",
"icons/Icon-192.png": "73f2e59d0d904e13d73b4e0d9d5c0127",
"icons/Icon-512.png": "1980a8cd1c522f76999340cf47772081",
"icons/Icon-maskable-192.png": "73f2e59d0d904e13d73b4e0d9d5c0127",
"icons/Icon-maskable-512.png": "1980a8cd1c522f76999340cf47772081",
"main.dart.js": "1dd7bcc3eb0faf0f8cfd6e2cd81bdc92",
"version.json": "e82aa58a551e98dd60f9826119b14a79",
"favicon.png": "cb1857e7f3dc4f14ce67f609148370f5",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"assets/AssetManifest.smcbin": "22492a97a5fa1aaa88f4ecf7dc281bd4",
"assets/AssetManifest.json": "398a185057f5b054edd0cda12463372e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
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
"assets/NOTICES": "a3e01d37b75a0e67d7dc5fb7720c9ec4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/assets/images/hourglass.png": "c1930fccc182dc07acd1fa3e99bed5a3",
"assets/assets/images/siren.png": "6d19a5aa57dc1e3b35e2bd5ed5cdcfc7",
"assets/assets/images/pexels-karolina-grabowska-4386464.jpg": "8f6404e844acab05f831f112bd265df8",
"assets/assets/images/sales-team.png": "47c4b00d0f58d7c94e61c330b222f4c6",
"assets/assets/images/diseases.png": "8ab1f864d9cea766f202c15b8e1b4c23",
"assets/assets/images/bar-chart.png": "8ed263a5bc0f7ea69e21016b8fd39773",
"assets/assets/images/services.png": "4139972c8efb2d1f8f87f688edd83523",
"assets/assets/images/icons8-chart.png": "f6719d3741acf5655bfcb6bdf05334f9",
"assets/assets/images/transition.png": "f64ee991bf377a86259208533bda4147",
"assets/assets/images/australia.json": "a8710e36ed3224e92175d9ddb7953a22",
"assets/assets/images/farmers.png": "e24c344e0f9a4af3f31a038ccf9c8612",
"assets/assets/images/no_results.png": "f0d44c6f0e58548446879238618675f6",
"assets/assets/images/ambulance_logo.png": "92da3cbc03ffad0eaed5044c4319a680",
"assets/assets/images/logo.png": "89ea4e6da2318d85d18f13ce3596dbc7",
"assets/assets/images/robert-linder-IV6Ge9vzmHE-unsplash.jpg": "70186402c4268b50d9c412ba2633e3ec",
"assets/assets/images/map_light_style.txt": "881fccd7820824b448044c41fdf7e902",
"assets/assets/images/login_image.jpg": "86b34d98fcc0ab73eb98fb01059d518b",
"assets/assets/images/places.png": "7b1d4835b599f90f03448cbf483e7485",
"assets/assets/images/map_dark_style.txt": "df3247531f8de40c61b3f73af181b5be",
"assets/assets/images/services_dark.png": "60ade531bf82f099b4d8968aac01c8d6",
"assets/assets/images/svgs/expenses.svg": "4acb0472c29b5e60ada7a45b40162c3d",
"assets/assets/images/svgs/no_results.svg": "f5a836df73c623d8f6e91eb1aeb0fd24",
"assets/assets/images/svgs/signIn.svg": "91093e1bcac85b78aaaa961d90701826",
"assets/assets/images/svgs/light_mode.svg": "2cd44f5194e6d0fce0c181c5f4df10db",
"assets/assets/images/svgs/ambulance.png": "8f16aa52d8d034a5bfb9dfebadee85ba",
"assets/assets/images/svgs/account.svg": "8bf67140b4f697d9f8736cc9ccbd09ca",
"assets/assets/images/svgs/laundry.svg": "5585c142cd153cfa0c48ece285bca345",
"assets/assets/images/svgs/timer.svg": "9f3c41b8292d28832098a13708da953b",
"assets/assets/images/svgs/home.svg": "70b3684de44028003fe566ff8f36c213",
"assets/assets/images/svgs/verified.svg": "f2681759baff2e39d73b78aeb2bf886d",
"assets/assets/images/svgs/ambulance.svg": "6d743aa0a8d0754658a44b8ba22a1d7b",
"assets/assets/images/svgs/revenue.svg": "e681f3c99c0851cfbf2358ceeb183ad3",
"assets/assets/images/svgs/menu.svg": "e6aa9238c4e119d9c3699cec70527f5c",
"assets/assets/images/svgs/info.svg": "8954102fae9aca084a3b8fd8eb69cbd0",
"assets/assets/images/svgs/signout.svg": "3247a65b944ef2821bb0e5ca5d6a5479",
"assets/assets/images/svgs/complete.svg": "a3cfab80e7c92b5f2c59d67534a270d7",
"assets/assets/images/svgs/orders.svg": "73c88eddbc0e31b3764877a9436be8f1",
"assets/assets/images/svgs/offers.svg": "fb135518bd7a00a63b40817febfceb16",
"assets/assets/images/svgs/icon_main.png": "37534ea92a01cbebd2d0ccb5d516ecb4",
"assets/assets/images/svgs/user.svg": "c2d95c2f87a3bc76936426eae65cedb2",
"assets/assets/images/svgs/clotheslocation.png": "22c32ae77d251f1ef43db46209ce6e44",
"assets/assets/images/svgs/current_location.svg": "1c29d63390f3f6aa90fc75be2392e907",
"assets/assets/images/svgs/start.svg": "3755361cb430d093092257f27374d20d",
"assets/assets/images/svgs/help.svg": "f8ac8c56c9c401bf676a2d2225a62b45",
"assets/assets/images/svgs/requests.svg": "ffcda5c661c9b41c3afc73a5d799a102",
"assets/assets/images/svgs/google.svg": "d44733046e69f5722a7de9d2640dd7f9",
"assets/assets/images/svgs/signUp.svg": "a3497dbb4be2535d6204ce1f27b61b2c",
"assets/assets/images/svgs/currentlocation.svg": "f131a56b0e5ca85b7224f94bd85f0cc2",
"assets/assets/images/svgs/medical_records.svg": "671dea80248e1d9c8a253972b8bd898d",
"assets/assets/images/svgs/locationme.png": "8f16aa52d8d034a5bfb9dfebadee85ba",
"assets/assets/images/svgs/maploading.svg": "28bc0e0860e3dc6b1ee01663537f68d1",
"assets/assets/images/svgs/ongoing.svg": "73110e3eee5e00c8a96d2da524f6737c",
"assets/assets/images/svgs/hospital.png": "feeeb1e166d3fec4262d87d6bfa163c3",
"assets/assets/images/svgs/dark_mode.svg": "ac9a9d654db3dd3d049a828ba26379ec",
"assets/assets/images/svgs/settings.svg": "0844b197c4f18213fc3a97e703f1acd8",
"assets/assets/images/svgs/reports.svg": "240e19f3a5921d37c086050fa5158136",
"assets/assets/images/svgs/notifications.svg": "e9a1b072ad98db2cb41246cf7f44f879",
"assets/assets/images/svgs/no_data.svg": "c3eb19fa31e8760e0330e1887302b280",
"assets/assets/images/svgs/distance.svg": "901ded16d064dc663b73da82498b01c6",
"assets/assets/images/svgs/employees.svg": "9a36c864aa0de72b34e774b80fdf185c",
"assets/assets/images/svgs/share.svg": "339ed4a2b1af6a6047b129952ce0dac0",
"assets/assets/images/svgs/services.svg": "c082b06aaa4e60177e7c8378b588cf99",
"assets/assets/images/svgs/users.svg": "9a36c864aa0de72b34e774b80fdf185c",
"assets/assets/images/svgs/no_notification.svg": "b71b9711e452a3ebf89188392b488b40",
"assets/assets/images/svgs/ambulance_not.svg": "29cfbb73388ba48faff8c5ef6990670d",
"assets/assets/images/svgs/iconmain.png": "089cb7992d4c2d828cf4f1eda7dc3f69",
"assets/assets/images/svgs/yourlocation.png": "9286dfd78f0a886288b6f28d15a2855c",
"assets/assets/images/svgs/dashboard.svg": "ac43aed80b26eba6e7655098db1246de",
"assets/assets/images/kericho.jpeg": "cb10b04ce07578522704cf7c64f40c86",
"assets/assets/images/virus.png": "6c187402102694993bcd8e6a3fa25b17",
"assets/assets/fonts/roboto-light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/roboto-regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/FontManifest.json": "83315d60261308828518563d85da5272",
"assets/fonts/MaterialIcons-Regular.otf": "8b1de87a6de5c9c77b944a5b58cd92d4"};
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
