// Muestra un mensaje de saludo
document.addEventListener("DOMContentLoaded", function () {
    alert("¡Bienvenido a mi página web!");
});

// Añade una funcionalidad al formulario
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('nombre').value;
    alert(`¡Gracias por contactarnos, ${name}!`);
});
