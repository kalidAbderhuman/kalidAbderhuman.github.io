'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "837ceecc5e888fb2742225c343ccec2f",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/bg.jpeg": "f02f66c8df16af92dc649b0a4b367ced",
"assets/assets/images/IMG_7344.jpg": "0ece7c6a4a1a86a176c5a1757db0a592",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "181dbc12a9bfbf2252855584e0d5f0a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "97f036e31f01876e3f435c39a80bf551",
"/": "cf0b98f0519ac1b26b2f883d32312968",
"kalidAbderhuman.github.io/.git/config": "adbe8ca6e51b8961cce8267c52b7cbb5",
"kalidAbderhuman.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"kalidAbderhuman.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"kalidAbderhuman.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"kalidAbderhuman.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"kalidAbderhuman.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"kalidAbderhuman.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"kalidAbderhuman.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"kalidAbderhuman.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"kalidAbderhuman.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"kalidAbderhuman.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"kalidAbderhuman.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"kalidAbderhuman.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"kalidAbderhuman.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"kalidAbderhuman.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"kalidAbderhuman.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"kalidAbderhuman.github.io/.git/index": "6fae6a5fd1817deaafe6f5818ed0e400",
"kalidAbderhuman.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"kalidAbderhuman.github.io/.git/logs/HEAD": "4fb49450560618852bc1b592c7371deb",
"kalidAbderhuman.github.io/.git/logs/refs/heads/main": "4fb49450560618852bc1b592c7371deb",
"kalidAbderhuman.github.io/.git/logs/refs/remotes/origin/HEAD": "4fb49450560618852bc1b592c7371deb",
"kalidAbderhuman.github.io/.git/objects/pack/pack-b3b27fe36d78eb8e363e4c506c97807eaf4c8fee.idx": "940e8bcb0fd77ed0cd9f24f27c8fa933",
"kalidAbderhuman.github.io/.git/objects/pack/pack-b3b27fe36d78eb8e363e4c506c97807eaf4c8fee.pack": "e1fb6073580d77b3bee6694f75e596dc",
"kalidAbderhuman.github.io/.git/packed-refs": "f2765eb116e85abbd032568c30a13524",
"kalidAbderhuman.github.io/.git/refs/heads/main": "9404b2659a4689f30ae2b592d2451b12",
"kalidAbderhuman.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"kalidAbderhuman.github.io/assets/AssetManifest.json": "837ceecc5e888fb2742225c343ccec2f",
"kalidAbderhuman.github.io/assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"kalidAbderhuman.github.io/assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"kalidAbderhuman.github.io/assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"kalidAbderhuman.github.io/assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"kalidAbderhuman.github.io/assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"kalidAbderhuman.github.io/assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"kalidAbderhuman.github.io/assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"kalidAbderhuman.github.io/assets/assets/images/bg.jpeg": "f02f66c8df16af92dc649b0a4b367ced",
"kalidAbderhuman.github.io/assets/assets/images/IMG_7344.jpg": "0ece7c6a4a1a86a176c5a1757db0a592",
"kalidAbderhuman.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"kalidAbderhuman.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"kalidAbderhuman.github.io/assets/NOTICES": "296b091c1b62a6b651a22ab52258097f",
"kalidAbderhuman.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"kalidAbderhuman.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"kalidAbderhuman.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"kalidAbderhuman.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"kalidAbderhuman.github.io/index.html": "cf0b98f0519ac1b26b2f883d32312968",
"kalidAbderhuman.github.io/main.dart.js": "d182d0c52474a27bc2bd05e7d58b331b",
"kalidAbderhuman.github.io/manifest.json": "93a2c5ec2976aa0f84f2a7500942cb0b",
"kalidAbderhuman.github.io/version.json": "d4f446d2b8f98933776fc4d062d56e93",
"main.dart.js": "05761f17a329358232a494219a170363",
"manifest.json": "93a2c5ec2976aa0f84f2a7500942cb0b",
"version.json": "d4f446d2b8f98933776fc4d062d56e93"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
