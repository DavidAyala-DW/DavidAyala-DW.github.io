//Name catch
const name_catch="portfolio-V1";
// Cathc Files 
const files=[
    "/",
    "/error.html",
    "/index.html",

    "build/img/8a2e4c79a1b9c983dc6bf8d6cbada43a.webm",
    "build/img/Profile.webp",
    "build/img/bienesraices.webp",
    "build/img/R&EDM.webp",
    "build/img/CryptoCurrency.webp ",
    "build/img/Ilustration2.webp",
    "/build/icons/punpun.png",

    "build/img/profile1.webp",
    "build/img/profile2.webp",
    "build/img/profile3.webp",
    "build/img/profile4.webp",
    "build/img/profile5.webp",
    "build/img/profile6.webp",
    "build/CV David.pdf",

    "https://unpkg.com/swiper/swiper-bundle.css",
    "https://unpkg.com/swiper/swiper-bundle.min.css",
    "build/css/app.css",

    "build/js/pwa.js",
    "https://unpkg.com/swiper/swiper-bundle.js",
    "https://unpkg.com/swiper/swiper-bundle.min.js",
    "build/js/support.js",
    "build/js/app.js"
    
];

// To install  a service worker we need use "self" and avoid use "this" 
self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open(name_catch)
            .then(cache=>{
                console.log("cacheando");
                cache.addAll(files);
            })
        
    );
});

self.addEventListener("activate",e=>{
    console.log("Se ha activado el Service Worker");
    console.log(e);
    e.respondWith(
        caches.keys()
        .then(keys => {
            console.log(keys); 
            return Promise.all(keys
                    .filter(key => key !== name_catch)
                    .map(key => caches.delete(key)) // borrar los demas
                )
        })

    )
});

self.addEventListener('fetch', e => {
    console.log('Fetch.. ', e);

    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache || fetch(e.request);
            })
            .catch( () => caches.match('/error.html'))
    );
});
