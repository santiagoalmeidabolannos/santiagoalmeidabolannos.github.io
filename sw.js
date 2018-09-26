var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/assets/css/animate.css',
    '/assets/css/app.css',
    '/assets/css/bootstrap.css',
    '/assets/css/bootstrap-grid.css',
    '/assets/css/bootstrap-reboot.css',
    '/assets/css/fa-brands.css',
    '/assets/css/fa-light.css',
    '/assets/css/fa-regular.css',
    '/assets/css/fa-solid.css',
    '/assets/css/fontawesome.css',
    '/assets/css/fontawesome-all.css',
    '/assets/js/app.js',
    '/assets/js/bootstrap.bundle.js',
    '/assets/js/bootstrap.min.js',
    '/assets/js/jquery.min.js',
    '/assets/js/navbar-fixed.js',
    '/assets/js/popper.js',
    '/assets/js/wow.min.js',
    '/assets/img/profile_square.jpg'
];

self.addEventListener('install', function(event) {
    // Perform install steps
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
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});

self.addEventListener('activate', function(event) {

    var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});