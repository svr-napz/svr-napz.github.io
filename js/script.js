// 1. Capturamos los elementos del HTML usando document.getElementById
const formulario = document.getElementById("formulario-pedido");
const inputNombre = document.getElementById("nombre-cliente");
const selectBebida = document.getElementById("bebida-seleccionada");

// 2. Escuchamos el evento 'submit' (cuando el usuario da clic en "Enviar pedido")
formulario.addEventListener("submit", function(evento) {
    
    // Evitamos que la página se recargue automáticamente
    evento.preventDefault(); 

    // 3. Variables para almacenar los datos ingresados por el usuario
    let nombre = inputNombre.value;
    let bebida = selectBebida.value;

    // 4. Uso de confirm() para interactuar con el usuario
    let confirmacion = confirm(`¿Hola ${nombre}, estás seguro de pedir un ${bebida}?`);

    if (confirmacion === true) {
        // 5. console.log() para ver en la consola de desarrollador (F12)
        console.log(`Pedido procesado para: ${nombre}. Bebida: ${bebida}`);
        
        // Alerta final de éxito
        alert("¡Muchas gracias! Tu pedido está siendo preparado. ☕");
        
        // Limpiamos el formulario automáticamente
        formulario.reset();
    } else {
        console.log("El usuario canceló el pedido.");
    }
});