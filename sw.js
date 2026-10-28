// Μαθαίνω Λέξεις — λειτουργία χωρίς ίντερνετ. Όλα τα αρχεία είναι τοπικά, τίποτα από ξένους διακομιστές.
const VERSION = "1.2";
const CACHE_NAME = "mathaino-lexeis-" + VERSION;
const ASSETS = [
  "./",
  "./index.html",
  "./plaisio.js",
  "./app.compiled.js?v=1.2",
  "./lib/react.production.min.js",
  "./lib/react-dom.production.min.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: req.mode === "navigate" }).then((cached) => {
      const net = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached || caches.match("./index.html"));
      return cached || net;
    })
  );
});
