const cachedFiles = [
	'./',
	'./assets/index.js',
	'./assets/index.css',
	'./assets/MaterialIcons-Regular.676a4c01.ttf',
	'./assets/MaterialIcons-Regular.732ede8a.woff2',
	'./assets/MaterialIcons-Regular.e09b6d7f.woff',
	'./img/logo-192.png',
	'./img/logo-256.png',
	'./manifest.json'
]

self.addEventListener("install", e => {
	e.waitUntil(
		caches.open('static').then(cache => {
			return cache.addAll(cachedFiles)
		})
	)
})

self.addEventListener("fetch", e => {
	e.respondWith(
		caches.match(e.request).then(response => {
			return response || fetch(e.request).catch(err => console.log("Error in fetch:", err))
		})
	)
})