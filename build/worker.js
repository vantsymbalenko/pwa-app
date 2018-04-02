// Flag for enabling cache in production
let doCache = true;
let CACHE_NAME = 'pwa-app-cache';
// Delete old caches
self.addEventListener('activate', event => {
    const currentCachelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(keyList =>
                Promise.all(keyList.map(key => {
                    if (!currentCachelist.includes(key)) {
                        return caches.delete(key);
                    }
                }))
            )
    );
});
// This triggers when user starts the app
self.addEventListener('install', function(event) {
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function(cache) {
                    const urlsToCache = [
                                './',
                                // './css/bootstrap.min.css',
                                // './css/ionicons.min.css',
                                // './css/magnific-popup.css',
                                // './css/pe-icon-7-stroke.css',
                                // './css/style.css',
                                './manifest.json',
                                './js/bootstrap.min.js',
                                './js/isotope.pkgd.min.js',
                                'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'

                                // assets['main.js']
                            ];
                    cache.addAll(urlsToCache);
                    // fetch('asset-manifest.json')
                    //     .then(response => {
                    //         response.json();
                    //     })
                    //     .then(assets => {
                    //         // We will cache initial page and the main.js
                    //         // We could also cache assets like CSS and images
                    //         const urlsToCache = [
                    //             './',
                    //             // './css/bootstrap.min.css',
                    //             // './css/ionicons.min.css',
                    //             // './css/magnific-popup.css',
                    //             // './css/pe-icon-7-stroke.css',
                    //             // './css/style.css',
                    //             './js/bootstrap.min.js',
                    //             './js/isotope.pkgd.min.js',
                    //             'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'
                    //
                    //             // assets['main.js']
                    //         ];
                    //         cache.addAll(urlsToCache);
                    //     })
                })
        );
    }
});
// Here we intercept request and serve up the matching files
self.addEventListener('fetch', function(event) {
    if (doCache) {
        event.respondWith(
            fetch(event.request).catch(function(error) {
                console.log(
                    "[Service Worker] Network request Failed. Serving content from cache: " +
                    error
                );
                //Check to see if you have it in the cache
                //Return response
                //If not in the cache, then return error page
                return caches.open(CACHE_NAME)
                    .then(function(cache) {
                        return cache.match(event.request).then(function(matching) {
                            let report =
                                !matching || matching.status == 404
                                    ? Promise.reject("no-match")
                                    : matching;
                            return report;
                        });
                    });
            })
        );
    }
});