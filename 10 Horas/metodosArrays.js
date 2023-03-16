// let nombres = ["pedro","maria","jose"];

// document.write(nombres +"<br>");
// let resultado = nombres.pop(); //sacar y mostrar ultimo elemento de array
// let resultado = nombres.shift(); //elemina y muestra el primer elemento de array
// let resultado = nombres.push("tiverio","robert"); //agregar un elemento al final de array
// let resultado = nombres.reverse(); //invertir y mostrar los elementos del array
// let resultado = nombres.unshift("miguel","javier"); //como push pero los agrega al principio
// let resultado = nombres.sort(); //ordenar por orden numero o alfabetico
// let resultado = nombres.splice(0,2," eliminado y agregado "); //seleccionar ubicacion y remplazarlo por lo deseado
// let resultado = nombres.join(" - "); //convierte array a cadena y agregarle algun elemento
// let resultado = nombres.slice(0,2); //elemento de inicio es el 0 y elemento final el 2 que no se muestra

// document.write("Elemento removido: "+resultado+"<br>");
// document.write("Resultado final: "+nombres +"<br>");
// document.write(resultado+"<br>");
// document.write(nombres);


let numeros = [165465,654652654,44555366,5554,454,65465456,56465465,,56465465];

resultado = numeros.filter(numero => numeros.length > 4);
document.write(resultado);

// numeros.forEach( //for que se ejecuta sin fin definido pero muestra todo dentro de la variable
//     function (numero){
//         document.write(numero+"<br>");
//     } 
// );