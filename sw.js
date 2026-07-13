const CACHE_NAME = 'sos-survive-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/engine.js',
  '/js/app.js',
  '/js/data/water.js',
  '/js/data/fire.js',
  '/js/data/shelter.js',
  '/js/data/food.js',
  '/js/data/medicine.js',
  '/js/data/navigation.js',
  '/manifest.json'
];

// Установка — кэшируем все файлы
self.addEventListener('install', event => {
  console.log('[SW] Установка...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Кэшируем файлы...');
        return cache.addAll(urlsToCache).catch(err => {
          console.error('[SW] Ошибка кэширования:', err);
        });
      })
  );
  self.skipWaiting();
});

// Активация — удаляем старые кэши
self.addEventListener('activate', event => {
  console.log('[SW] Активация...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Удаляем старый кэш:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Перехват запросов — сначала кэш, потом сеть
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Если есть в кэше — возвращаем
        if (response) {
          return response;
        }
        // Иначе — запрос в сеть
        return fetch(event.request).catch(err => {
          console.warn('[SW] Ошибка загрузки:', event.request.url, err);
          // Можно вернуть fallback-страницу
        });
      })
  );
});

console.log('[SW] Service Worker загружен');