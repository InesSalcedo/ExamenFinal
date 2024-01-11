self.addEventListener('install', event => {
    console.log('Service worker instalado');
});

self.addEventListener('activate', event => {
    console.log('Service worker activado');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Si la solicitud está en la cache, se devuelve la respuesta almacenada en cache
            if (response) {
                return response;
            }

            // Si la solicitud no está en la cache, se realiza la solicitud a la red
            return fetch(event.request).then(networkResponse => {
                // Se clona la respuesta de la red para poder almacenarla en cache
                const clonedResponse = networkResponse.clone();

                // Se almacena la respuesta en cache para futuras solicitudes
                caches.open('my-cache').then(cache => {
                    cache.put(event.request, clonedResponse);
                });

                // Se devuelve la respuesta de la red
                return networkResponse;
            });
        })
    );
});

  