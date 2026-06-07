console.log("Empezando a usar JavaScript");

// Seleccionamos el h1 (Cafe +) y el botón que acabamos de agregar
const titulo = document.querySelector("#titulo");
const boton = document.querySelector("#btnCambiar");

// Escuchamos el clic para cambiar el texto del título
boton.addEventListener('click', () => {
    titulo.textContent = '¡Bienvenido a Cafe +!';
});