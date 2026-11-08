const CACHE_NAME = "smit-portfolio-v5";

self.addEventListener("install", e => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                "./",
                "./images/android-chrome-192x192.png",
                "./css/portfolio.css",
                "./css/impressive-enhancements.css",
                "./js/script.js",
                "./js/enhancements.js",
                "./js/ai-bot.js"
            ]);
        })
    );
});

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// Network-first strategy to always show latest updates
self.addEventListener("fetch", e => {
    e.respondWith(
        fetch(e.request)
            .then(networkResponse => {
                if (networkResponse && networkResponse.status === 200 && e.request.method === "GET") {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(e.request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                return caches.match(e.request);
            })
    );
});