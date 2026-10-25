// キャッシュ名
const CACHE_NAME = 'kakeibo-v1';

// インストール
self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
});

// フェッチ
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});