const CACHE_NAME = 'psycho-soundboard-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'logo.png',
  'ico/apple-touch-icon.png',
  'ico/favicon-32x32.png',
  'ico/favicon-16x16.png',
  'ico/site.webmanifest',
  'ico/safari-pinned-tab.svg',
  'ico/favicon.ico',
  'ico/browserconfig.xml',
  'mp3/dobryden.mp3',
  'mp3/pujdeme_na_to.mp3',
  'mp3/protein.mp3',
  'mp3/miluju.mp3',
  'mp3/tuky_tuk.mp3',
  'mp3/ty_sracko.mp3',
  'mp3/tady_mas_kaves.mp3',
  'mp3/kurva.mp3'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
	caches.open(CACHE_NAME)
	  .then(function(cache) {
		console.log('Opened cache');
		return cache.addAll(urlsToCache);
	  })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
	caches.match(event.request)
	  .then(function(response) {
		if (response) {
		  return response;
		}
		return fetch(event.request);
	  }
	)
  );
});
