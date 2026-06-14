console.log("Empezando a usar JavaScript");

const titulo = document.querySelector("#titulo");
const boton = document.querySelector("#btnCambiar");

boton.addEventListener('click', () => {
    titulo.textContent = '¡Bienvenido a Cafe +!';
});
console.log("Empezando a usar JavaScript");




/* ==========================================
   FORMULARIO
   ========================================== */

const formulario =
    document.querySelector("#formPedido");

const mensaje =
    document.querySelector("#mensajePedido");

const contador =
    document.querySelector("#contadorPedidos");

const lista =
    document.querySelector("#listaPedidos");


/* ==========================================
   ARRAY DE PEDIDOS
   ========================================== */

const pedidos = [];


/* ==========================================
   EVENTO SUBMIT
   ========================================== */

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

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
       VALIDACION
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
       OBJETO PEDIDO
       ========================== */

    const pedido = {

        nombre: nombre,

        correo: correo,

        bebida: bebida,

        comentario: comentario
    };

    /* ==========================
       ARRAY
       ========================== */

    pedidos.push(pedido);

    console.log(pedidos);

    /* ==========================
       MENSAJE
       ========================== */

    mensaje.textContent =
        `Gracias ${nombre}, tu pedido fue registrado`;

    /* ==========================
       CONTADOR
       ========================== */

    contador.textContent =
        pedidos.length;

    /* ==========================
       MOSTRAR PEDIDOS
       ========================== */

    lista.innerHTML = pedidos
        .map(p => `
            <li>
                <strong>${p.nombre}</strong>
                pidió
                <strong>${p.bebida}</strong>
            </li>
        `)
        .join("");

    /* ==========================
       LIMPIAR FORMULARIO
       ========================== */

    formulario.reset();

});