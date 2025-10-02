const CACHE_NAME = "test-cache-v3";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        // Main Index
        "/main_index/label.html",
        "/main_index/offline.html",
        "/main_index/manifest.json",
        "/main_index/icons/icon-192.png",
        "/main_index/icons/icon-512.png",
        // Driver Web
        "/driver_web/d_index.html",
        // Passenger Web
        "/passenger_web/p_index.html",
        "/passenger_web/passenger.html",
        "/passenger_web/ussd.html"
        // Add more assets (CSS, JS) if needed
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});