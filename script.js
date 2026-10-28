
let contador = 0;

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.querySelector(".botonGalleta");
    const textoContador = document.getElementById("contador");

    if (!boton || !textoContador) {
        console.error("No se encontró el botón o el contador.");
        return;
    }

    boton.addEventListener("click", function () {
        contador++;
        textoContador.textContent = contador;
        console.log("Click registrado:", contador);
    });
});

