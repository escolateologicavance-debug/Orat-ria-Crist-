const CACHE_NAME = 'oratoria-v1';
const assets = ['index.html', 'manifest.json', 'logo-192.png', 'logo1-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));