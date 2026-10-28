 let contador = 0;

        document.getElementById("botonPan").addEventListener("click", function() {
            contador++;
            document.getElementById("contador").textContent = contador;
            console.log("Click registrado:", contador);
        });
