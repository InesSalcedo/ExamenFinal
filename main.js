const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "/workspaces/ExamenFinal/malo.png",
    OPPONENT_PICTURE_DEAD = "/workspaces/ExamenFinal/malo_muerto.png",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    GAME_OVER_PICTURE = "/workspaces/ExamenFinal/game_over.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "/workspaces/ExamenFinal/bueno.png",
    PLAYER_PICTURE_DEAD = "/workspaces/ExamenFinal/bueno_muerto.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "/workspaces/ExamenFinal/shot1.png",
    SHOT_PICTURE_OPPONENT = "/workspaces/ExamenFinal/shot2.png",
    SHOT_WIDTH = 1.5;

function getRandomNumber (range) {
    return Math.floor(Math.random() * range);
}

function collision (div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);

}
var game;
document.addEventListener("DOMContentLoaded", () => {
    game = new Game();
    game.start();
});

if ('serviceworker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/workspaces/ExamenFinal/serviceworker.js')
            .then(registration => {
                console.log('Service Worker registrado con éxito:', registration);
            })
            .catch(error => {
                console.log('Error al registrar el Service Worker:', error);
            });
    });
}

// Add install button for PWA
const installButton = document.createElement('button');
installButton.innerText = 'Install PWA';
installButton.addEventListener('click', () => {
    // Prompt the user to install the PWA
    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        const deferredPrompt = event;
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('PWA installed');
            } else {
                console.log('PWA installation declined');
            }
            // Reset the deferred prompt
            deferredPrompt = null;
        });
    });
});
document.body.appendChild(installButton);

