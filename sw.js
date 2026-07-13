const CACHE_NAME = 'sos-survive-v4-STABLE';
const BASE_PATH = '/sos-survive/';

// Только критичные файлы — index.html и манифест
const CORE_FILES = [
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json'
];

// Опциональные файлы — если не загрузятся, не критично
const OPTIONAL_FILES = [
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
  BASE_PATH + '404.html'
];

// Установка — кэшируем критичные файлы
self.addEventListener('install', event => {
  console.log('[SW v4] Установка...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW v4] Кэшируем ядро...');
        return cache.addAll(CORE_FILES);
      })
      .then(() => {
        console.log('[SW v4] Ядро закэшировано, кэшируем опциональные...');
        return caches.open(CACHE_NAME).then(cache => {
          // Каждый файл по отдельности — если один упал, остальные продолжают
          return Promise.all(
            OPTIONAL_FILES.map(url => 
              cache.add(url).catch(err => {
                console.warn('[SW v4] Не удалось кэшировать:', url, err);
              })
            )
          );
        });
      })
      .then(() => {
        console.log('[SW v4] Установка завершена');
        return self.skipWaiting();
      })
  );
});

// Активация — удаляем ВСЕ старые кэши
self.addEventListener('activate', event => {
  console.log('[SW v4] Активация...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW v4] Удаляем старый кэш:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW v4] Активирован');
      return self.clients.claim();
    })
  );
});

// Fetch — сеть первой, кэш запасной
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Навигация (открытие страницы) — всегда сеть, кэш как fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Обновляем кэш свежей версией
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(BASE_PATH + 'index.html', clone);
            });
          }
          return response;
        })
        .catch(() => {
          console.log('[SW v4] Сеть недоступна, берём из кэша');
          return caches.match(BASE_PATH + 'index.html');
        })
    );
    return;
  }
  
  // Для остальных запросов — кэш первым, потом сеть
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).catch(err => {
        console.warn('[SW v4] Ошибка загрузки:', event.request.url);
      });
    })
  );
});

console.log('[SW v4] Service Worker загружен');