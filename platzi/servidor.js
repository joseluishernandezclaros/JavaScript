const http = require('http');

function sitioweb(req, res){
    res.writeHead(200, {"Content-Type": "text/html;"});
    /* res.end("Mi primer servidor"); */
    res.end(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Mi proyecto serio</title>
    <script type="text/javascript">
      /*   function suma(a, b) {
        let resultado = a + b;
        alert("El resultado de la suma es " + resultado);
      } */
      async function traerPais(){
        const respuesta = await fetch("https://api.nationalize.io/?name=vladimir");
        if(!respuesta.ok){
            let error = "404 No se encontro nada";
            alert(error);
            throw new Error(error);
        }
        const nombre = respuesta.json();
        return nombre;
      }
      function mostrarNombre(n) {
        document.getElementById("mensaje").innerHTML = n.country[0].country_id;
      }
      traerPais().then(mostrarNombre);
    </script>
  </head>
  <body>
    <h1>Titulo</h1>
    <p>Esta es una prueba</p>
    <p id="mensaje">Cargando.......</p>
    <script>
      mostrarNombre("Wenas");
    </script>
  </body>
</html>

    `);
}

let servidor = http.createServer(sitioweb);

servidor.listen(7070, "192.168.1.17");

console.log("Servidor corriendo en el puerto 7070");

