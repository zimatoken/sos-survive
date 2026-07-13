const CACHE_NAME = 'sos-survive-v3-FORCE';
const BASE_PATH = '/sos-survive/';

const urlsToCache = [
  '/sos-survive/',
  '/sos-survive/index.html',
  '/sos-survive/css/styles.css',
  '/sos-survive/js/locales.js',
  '/sos-survive/js/theme.js',
  '/sos-survive/js/voice.js',
  '/sos-survive/js/engine.js',
  '/sos-survive/js/app.js',
  '/sos-survive/js/data/water.js',
  '/sos-survive/js/data/fire.js',
  '/sos-survive/js/data/shelter.js',
  '/sos-survive/js/data/food.js',
  '/sos-survive/js/data/medicine.js',
  '/sos-survive/js/data/navigation.js',
  '/sos-survive/js/data/radio.js',
  '/sos-survive/js/data/kit.js',
  '/sos-survive/manifest.json',
  '/sos-survive/404.html'
];

self.addEventListener('install', event => {
  console.log('[SW v3] Установка...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW v3] Кэширование файлов...');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error('[SW v3] Ошибка кэширования:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[SW v3] Активация...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW v3] Удаляем старый кэш:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW v3] Claiming clients...');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Редирект с корня на подпапку для GitHub Pages
  if (url.pathname === '/' && url.hostname.includes('github.io')) {
    event.respondWith(Response.redirect(BASE_PATH, 302));
    return;
  }
  
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      
      // Для навигационных запросов — отдаём index.html из кэша
      if (event.request.mode === 'navigate') {
        return caches.match('/sos-survive/index.html');
      }
      
      // Иначе — запрос в сеть с fallback
      return fetch(event.request).catch(() => {
        return caches.match('/sos-survive/index.html');
      });
    })
  );
});

console.log('[SW v3] Service Worker загружен');
