const CACHE_NAME = "goscor-install-button-from-your-code-v1";
const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./forklift-lift-icon-192.png",
  "./forklift-lift-icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key === CACHE_NAME ? null : caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  if (
    url.hostname.includes("thingsboard.intarget.mobi") ||
    url.hostname.includes("gstatic.com") ||
    url.hostname.includes("cdnjs.cloudflare.com") ||
    url.hostname.includes("api.github.com")
  ) {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
