const CACHE_NAME = 'chamba-v1';
const ASSETS = [
  'index.html',
  'login.html',
  'categorias.html',
  'marketplace.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});