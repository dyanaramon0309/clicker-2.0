let contador = 0;
let multiplicador = 1;

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.querySelector(".botonGalleta");
    const textoContador = document.getElementById("contador");
    
    const botonMenu = document.getElementById("toggleMenu");
    const menuLateral = document.getElementById("menuLateral");
    const btnMejora1 = document.getElementById("btnMejora1");
    const btnMejora2 = document.getElementById("btnMejora2");

    // Verificar elementos esenciales para que no rompa el código
    if (!boton || !textoContador) {
        console.error("Error: No se encontró el pan o el contador de texto.");
        return;
    }

    // Funcionalidad básica del clicker
    boton.addEventListener("click", function () {
        contador += multiplicador;
        textoContador.textContent = contador;
    });

    // Abrir y cerrar el menú lateral
    if (botonMenu && menuLateral) {
        botonMenu.addEventListener("click", function () {
            menuLateral.classList.toggle("active");
        });
    }

    // Tienda: Mejora 1
    if (btnMejora1) {
        btnMejora1.addEventListener("click", function () {
            multiplicador = 2;
            console.log("Multiplicador cambiado a 2");
            btnMejora1.textContent = "Mejora 1 (Activa)";
            if (btnMejora2) btnMejora2.textContent = "Mejora 2"; 
        });
    }

    // Tienda: Mejora 2
    if (btnMejora2) {
        btnMejora2.addEventListener("click", function () {
            multiplicador = 3;
            console.log("Multiplicador cambiado a 3");
            btnMejora2.textContent = "Mejora 2 (Activa)";
            if (btnMejora1) btnMejora1.textContent = "Mejora 1";
        });
    }
});
