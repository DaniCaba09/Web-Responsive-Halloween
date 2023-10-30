
document.addEventListener('DOMContentLoaded', function () {
    let contador = 3; // Establece el valor inicial del contador
    const contadorElement = document.getElementById("contador");

    function actualizarContador() {
        if (contador > 0) {
            contadorElement.textContent = contador;
            contador--;
        } else {
            contadorElement.style.display = "none"; // Oculta el contador
            habilitarJuego(); // Llama a la función que inicia el juego
        }
    }

    function habilitarJuego() {
        function moverderecha(parametro) {
            const foto = document.getElementById(parametro);
            const valoresreal = window.getComputedStyle(foto);
            const fotomargin = parseInt(valoresreal.getPropertyValue("margin-left").replace("px", ""));
            const limiteDerecho = window.innerWidth - foto.offsetWidth;
        
            if (fotomargin < limiteDerecho) {
                foto.style.marginLeft = (fotomargin + 25) + "px";
            }else{
                if (parametro == "foto") {
                    alert("Gana el jugador naranja");
                }else{
                    alert("Gana el jugador verde");
                }    
            }
        }
        
        
        var teclaPresionada = false;  // Variable para rastrear si la tecla 'A' está presionada
        var teclaPresionada2 = false;  // Variable para rastrear si la tecla 'L' está presionada
        
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 65) {  // Código de tecla para la letra 'A'
                teclaPresionada = true;
            }
            if (event.keyCode === 76) {  // Código de tecla para la letra 'A'
                teclaPresionada2 = true;
            }
        });
        
        document.addEventListener('keyup', function(event) {
            if (teclaPresionada && event.keyCode === 65) {
                // Ejecuta la función específica para la tecla 'A'
                moverderecha("foto");
                teclaPresionada = false;  // Restablece la variable
            }
            if (teclaPresionada2 && event.keyCode === 76) {
                // Ejecuta la función específica para la tecla 'A'
                moverderecha("foto2");
                teclaPresionada2 = false;  // Restablece la variable
            }
        });
        
    }

    // Inicia la cuenta regresiva
    setInterval(actualizarContador, 1000);
});









