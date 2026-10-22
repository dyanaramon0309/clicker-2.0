
let contador = 0;

function cambiarTexto() {
    document.getElementById("titulo").innerText =
        "¡JavaScript funcionando en GitHub!";

    contador++;

    document.getElementById("contador").innerText = contador;
}



