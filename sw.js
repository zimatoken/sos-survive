const CACHE_NAME = 'sos-survive-v5-OFFLINE-FIX';
const BASE_PATH = '/sos-survive/';

// Критичные файлы — index.html, манифест, CSS, иконки
const CORE_FILES = [
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'css/styles.css',
  BASE_PATH + 'assets/icons/icon-192.png',
  BASE_PATH + 'assets/icons/icon-512.png'
];

// Все JS файлы — критично для офлайн работы
const JS_FILES = [
  BASE_PATH + 'js/locales.js',
  BASE_PATH + 'js/theme.js',
  BASE_PATH + 'js/voice.js',
  BASE_PATH + 'js/engine.js',
  BASE_PATH + 'js/app.js',
  // Русские данные
  BASE_PATH + 'js/data/water.js',
  BASE_PATH + 'js/data/fire.js',
  BASE_PATH + 'js/data/shelter.js',
  BASE_PATH + 'js/data/food.js',
  BASE_PATH + 'js/data/medicine.js',
  BASE_PATH + 'js/data/navigation.js',
  BASE_PATH + 'js/data/radio.js',
  BASE_PATH + 'js/data/kit.js',
  // Английские данные
  BASE_PATH + 'js/data/water-en.js',
  BASE_PATH + 'js/data/fire-en.js',
  BASE_PATH + 'js/data/shelter-en.js',
  BASE_PATH + 'js/data/food-en.js',
  BASE_PATH + 'js/data/medicine-en.js',
  BASE_PATH + 'js/data/navigation-en.js',
  BASE_PATH + 'js/data/radio-en.js',
  BASE_PATH + 'js/data/kit-en.js'
];

// Установка — кэшируем ВСЕ файлы
self.addEventListener('install', event => {
  console.log('[SW v5] Установка...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW v5] Кэшируем ядро...');
        return cache.addAll(CORE_FILES);
      })
      .then(() => {
        console.log('[SW v5] Ядро закэшировано, кэшируем JS файлы...');
        return caches.open(CACHE_NAME).then(cache => {
          return Promise.all(
            JS_FILES.map(url => 
              cache.add(url).catch(err => {
                console.warn('[SW v5] Не удалось кэшировать:', url, err);
              })
            )
          );
        });
      })
      .then(() => {
        console.log('[SW v5] Установка завершена');
        return self.skipWaiting();
      })
  );
});

// Активация — удаляем старые кэши
self.addEventListener('activate', event => {
  console.log('[SW v5] Активация...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW v5] Удаляем старый кэш:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW v5] Активирован');
      return self.clients.claim();
    })
  );
});

// Fetch — Cache First для офлайн работы
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Навигация (открытие страницы) — Cache First для офлайн работы
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(BASE_PATH + 'index.html')
        .then(response => {
          if (response) {
            console.log('[SW v5] Берём index.html из кэша');
            return response;
          }
          console.log('[SW v5] Кэш пуст, загружаем из сети');
          return fetch(event.request).then(response => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(BASE_PATH + 'index.html', clone);
              });
            }
            return response;
          });
        })
        .catch(() => {
          console.error('[SW v5] Ошибка загрузки index.html');
          return caches.match(BASE_PATH + '404.html');
        })
    );
    return;
  }
  
  // Для остальных запросов — Cache First
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(response => {
        // Кэшируем новые ответы
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(err => {
        console.warn('[SW v5] Ошибка загрузки:', event.request.url);
        // Для изображений возвращаем пустой ответ
        if (event.request.destination === 'image') {
          return new Response('', { status: 404 });
        }
      });
    })
  );
});

console.log('[SW v5] Service Worker загружен - Cache First стратегия');