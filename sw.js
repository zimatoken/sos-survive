const CACHE_NAME = 'sos-survive-v3-FORCE';
const BASE_PATH = '/sos-survive/';

const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'css/styles.css',
  BASE_PATH + 'js/locales.js',
  BASE_PATH + 'js/theme.js',
  BASE_PATH + 'js/voice.js',
  BASE_PATH + 'js/engine.js',
  BASE_PATH + 'js/app.js',
  BASE_PATH + 'js/data/water.js',
  BASE_PATH + 'js/data/fire.js',
  BASE_PATH + 'js/data/shelter.js',
  BASE_PATH + 'js/data/food.js',
  BASE_PATH + 'js/data/medicine.js',
  BASE_PATH + 'js/data/navigation.js',
  BASE_PATH + 'js/data/radio.js',
  BASE_PATH + 'js/data/kit.js',
  BASE_PATH + 'manifest.json',
  BASE_PATH + '404.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.error('[SW] Ошибка:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  if (url.pathname === '/' && url.hostname.includes('github.io')) {
    event.respondWith(Response.redirect(BASE_PATH, 302));
    return;
  }
  
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      if (event.request.mode === 'navigate') {
        return caches.match(BASE_PATH + 'index.html');
      }
      return fetch(event.request).catch(() => {
        return caches.match(BASE_PATH + 'index.html');
      });
    })
  );
});

console.log('[SW v3] Service Worker загружен');
