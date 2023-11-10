
    function cambiarNombre() {
        const nombre = prompt("¿Cuál es tu nombre?");
          
      if (nombre !== null && nombre !== "") {
        document.getElementById("saludo").innerText = "¡Hola " + nombre + "!";
      } 
    }
 