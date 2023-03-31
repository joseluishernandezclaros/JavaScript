const titulo = document.querySelector(".titulo");

// titulo.classList.add("grande"); //añadir o cambiar la clase
// titulo.classList.remove("grande"); //elimina la clase

// let valor = titulo.classList.item(1); //clase en la posicion 1 o la posicion que se escoja

// let valor = titulo.classList.contains("gramdeeee");

// nombreClase = "grande";
// let valor = titulo.classList.contains(nombreClase); //contains es para verificar si algo se contiene o coincide  boolean

// if (valor) {
//   document.write("la clase existe");
//   titulo.classList.remove(nombreClase);
// } else {
//   document.write("la clase no existe");
//   titulo.classList.add(nombreClase);
// }

// titulo.classList.toggle(nombreClase); //si tiene la clase la elimina, si no la tiene la agrega, hace lo de un if else
// document.write(valor,true);

// document.write(valor);


// let valor = titulo.classList.replace("grande","chico"); //remplaza el nombre de la clase

// document.write(valor);

// let resultado = titulo.textContent; //devuelve solo el texto sin html aunque tenga estilos
// let resultado2 = titulo.innerText; //devuelve solo el texto pero si tiene estilos no lso muestra
// document.write(resultado+"<br>");
// document.write(resultado2);

let resultado3 = titulo.innerHTML; //muestra todo el contenido html
let resultado4 = titulo.outerHTML; //muestra el html completo todas etiquetas
// document.write(resultado3);
alert(resultado3);
alert(resultado4);

