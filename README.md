## Objetivo

Crear una Progressive Web Application.

## Descripción de la práctica

En esta entrega vamos a crear una Progressive Web Application (PWA) a partir de una aplicación web.
La aplicación web elegida es un juego de disparos, en el que manejaremos a nuestro personaje (cuadrado) utilizando las flechas del teclado o la pantalla táctil. Este juego corresponde al esqueleto de la entrega del módulo 5 del MOOC cuyo código proporcionamos en este repositorio. El alumno es libre de utilizar su solución a dicho módulo para tener así un juego más completo o incluso su solución al módulo 9 teniendo así un juego con una interacción mucho más rica. La creación de la PWA será similar en todos los casos.

<p align="center">
  <img width="187" height="264" style="border: 1px solid grey;" src="https://raw.githubusercontent.com/ging-moocs/MOOC_html_mod5-juego_entrega/master/assets/screenshot.png">
</p>


```

## Tareas

Se pide modificar el código proporcionado para transformarlo en una PWA:

Para ello debes seguir los siguientes pasos:

1. Añadir un manifest.
2. Añadir un Service Worker.
3. Manejar las caches.
4. Añadir la opción de instalar con un botón adicional.
5. Desplegar en glitch.


## Prueba de la práctica

Para ayudar al desarrollo es muy recomendable instalar la extensión de Chrome LightHouse (https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en).

Con ella podremos ir desarrollando nuestra PWA paso a paso y podremos ir viendo las características que nos faltan.
Se recomienda utilizar Glitch (https://glitch.com/) para el despliegue final de la PWA, de este modo tendremos una URL para nuestra PWA y la podremos visualizar en diferentes dispositivos sin problema (las URLs de glitch son similares a https://amplified-dour-freighter.glitch.me/, recordar que Glitch "duerme" las aplicaciones para gastar menos y pueden tardar un poco en arrancar).


## Entrega de la práctica

**RÚBRICA**: Se puntuará el ejercicio a corregir sumando el % indicado a la nota total si la parte indicada es correcta:

* **25%:** Tiene un manifest que describe la PWA
* **50%:** Registra un Service Worker y utiliza las caches
* **25%:** Muestra el botón instalar la PWA que permite su instalación como aplicación en el dispositivo
