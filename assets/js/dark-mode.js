// Obtén una referencia al botón y a la barra de navegación
const toggleButton = document.getElementById('toggleButton');
const navbar = document.getElementById('navbar');

// Agrega un controlador de eventos al botón
toggleButton.addEventListener('click', function() {
  // Alternar la clase "show" en la barra de navegación para mostrar u ocultar
  navbar.classList.toggle('show');
});