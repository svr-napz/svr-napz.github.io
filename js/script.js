/* ==========================================
   MENSAJE DE INICIO
   ========================================== */

// Verifica que el archivo JS se cargó correctamente
console.log("Empezando a usar JavaScript");


/* ==========================================
   CAMBIO DE SALUDO
   ========================================== */

// Selecciona el párrafo con id="titulo"
const titulo = document.querySelector("#titulo");

// Selecciona el botón "Cambiar saludo"
const botonSaludo = document.querySelector("#btnCambiar");

// Cuando hagan clic en el botón...
botonSaludo.addEventListener("click", () => {

    // Cambia el texto del párrafo
    titulo.textContent = "¡Bienvenido a Cafe +!";

});


/* ==========================================
   ELEMENTOS DEL FORMULARIO
   ========================================== */

// Formulario completo
const formulario = document.querySelector("#formPedido");

// Mensaje de confirmación o error
const mensaje = document.querySelector("#mensajePedido");

// Contador visual
const contador = document.querySelector("#contadorPedidos");

// Lista donde aparecerán los pedidos
const lista = document.querySelector("#listaPedidos");


/* ==========================================
   ARRAY DE PEDIDOS
   ========================================== */

// Aquí se guardarán todos los pedidos
const pedidos = [];


/* ==========================================
   FUNCION RENDER
   ========================================== */

// Esta función dibuja todos los pedidos
const renderPedidos = () => {

    lista.innerHTML = pedidos
    .map((p,index) => `

        <li>

            <strong>${p.nombre}</strong>

            pidió

            <strong>${p.bebida}</strong>

            <button
                data-id="${index}"
                data-action="eliminar">

                Eliminar

            </button>

        </li>

    `)
    .join("");

    // Actualiza el contador
    contador.textContent = pedidos.length;

};


/* ==========================================
   EVENTO SUBMIT DEL FORMULARIO
   ========================================== */

formulario.addEventListener("submit", (event) => {

    // Evita que la página se recargue
    event.preventDefault();


    /* ==========================
       OBTENER DATOS
       ========================== */

    const nombre =
        document.querySelector("#nombre")
        .value
        .trim();

    const correo =
        document.querySelector("#correo")
        .value
        .trim();

    const bebida =
        document.querySelector("#bebida")
        .value;

    const comentario =
        document.querySelector("#comentario")
        .value
        .trim();


    /* ==========================
       VALIDACIONES
       ========================== */

    if (nombre === "") {

        mensaje.textContent =
            "Debe ingresar un nombre";

        return;
    }

    if (bebida === "") {

        mensaje.textContent =
            "Debe seleccionar una bebida";

        return;
    }


    /* ==========================
       CREAR OBJETO PEDIDO
       ========================== */

    const pedido = {

        nombre: nombre,

        correo: correo,

        bebida: bebida,

        comentario: comentario

    };


    /* ==========================
       GUARDAR EN ARRAY
       ========================== */

    pedidos.push(pedido);
    console.log("Pedidos", pedidos);


    /* ==========================
       MENSAJE AL USUARIO
       ========================== */

    mensaje.textContent =
        `Gracias ${nombre}, tu pedido fue registrado`;


    /* ==========================
       ACTUALIZAR LISTA
       ========================== */

    renderPedidos();


    /* ==========================
       LIMPIAR FORMULARIO
       ========================== */

    formulario.reset();

});


/* ==========================================
   ELIMINAR PEDIDOS
   ========================================== */

lista.addEventListener("click", (event) => {

    // Detecta si se hizo clic en un botón
    const botonEliminar =
        event.target.closest("button");

    // Si no se hizo clic en un botón
    if (!botonEliminar) {

        return;
    }

    // Obtiene el id almacenado en data-id
    const id =
        Number(botonEliminar.dataset.id);

    // Obtiene la acción almacenada
    const accion =
        botonEliminar.dataset.action;

    // Si la acción es eliminar
    if (accion === "eliminar") {

        // Elimina 1 elemento desde la posición id
        pedidos.splice(id, 1);

        // Vuelve a dibujar la lista
        renderPedidos();
    }

});


/* ==========================================
   DEBUG
   ========================================== */

console.log("Formulario:", formulario);
console.log("Mensaje:", mensaje);
console.log("Contador:", contador);
console.log("Lista:", lista);