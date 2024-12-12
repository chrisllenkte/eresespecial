// Leer mensaje personalizado desde query strings (opcional, mantenido)
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// Referencias a los elementos del DOM
const btnOpenElement1 = document.querySelector('#open'); // Botón Abrir 1
const btnOpenElement2 = document.querySelector('#open2'); // Botón Ver foto
const btnCloseElement = document.querySelector('#close'); // Botón Cerrar
const photoMessageElement = document.querySelector('#photoMessage'); // Mensaje Ver foto
const mainMessageElement = document.querySelector('#mainMessage'); // Mensaje principal
const coverElement = document.querySelector('.cover'); // Portada
const paperElement = document.querySelector('.paper'); // Papel
const heartElement = document.querySelector('.heart'); // Corazón

// Estado inicial
btnCloseElement.disabled = true;
btnOpenElement2.disabled = true; // Ver foto comienza deshabilitado
photoMessageElement.style.display = 'none'; // Ocultar mensaje de Ver foto
heartElement.style.display = 'none'; // Ocultar corazón

// Abrir 1
btnOpenElement1.addEventListener('click', () => {
  mainMessageElement.textContent =
    "Te quiero hoy mucho más que el primer día que nos vimos. Pero lo cierto es que mi amor hacia ti es a cada segundo un poco más grande. Cada día estoy más segura de que nuestra relación no tiene ningún límite y que podremos con todos los obstáculos que se pongan por nuestro camino.";

  btnOpenElement1.disabled = true; // Deshabilitar Abrir 1
  btnOpenElement2.disabled = false; // Habilitar Ver foto
  btnCloseElement.disabled = false; // Habilitar Cerrar

  // Animación de apertura
  coverElement.classList.add('open-cover');
  setTimeout(() => {
    coverElement.style.zIndex = -1;
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');
    heartElement.style.display = 'block'; // Mostrar corazón
  }, 500);
});

// Ver foto
btnOpenElement2.addEventListener('click', () => {
  photoMessageElement.style.display = 'block'; // Mostrar mensaje de Ver foto
  btnOpenElement2.disabled = true; // Deshabilitar Ver foto
});

// Cerrar
btnCloseElement.addEventListener('click', () => {
  // Restaurar estado inicial
  mainMessageElement.textContent = "En este día especial de amor y amistad, celebremos los lazos que nos unen. Que la alegría y el cariño nos acompañen siempre. ¡Feliz día!";
  photoMessageElement.style.display = 'none'; // Ocultar Ver foto
  btnOpenElement1.disabled = false; // Habilitar Abrir 1
  btnOpenElement2.disabled = true; // Deshabilitar Ver foto
  btnCloseElement.disabled = true; // Deshabilitar Cerrar

  // Animación de cierre
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');
  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');
    heartElement.style.display = 'none'; // Ocultar corazón
  }, 500);
});
