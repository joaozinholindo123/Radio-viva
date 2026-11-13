const CACHE_NAME = 'radio-viva-cache-v2';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  // Ignora o link exato de áudio morcast.caster.fm:13918 para não quebrar o streaming
  if (e.request.url.includes('http://morcast.caster.fm:13918/K8F1I') || e.request.url.includes('13918')) {
    return;
  }
  
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
