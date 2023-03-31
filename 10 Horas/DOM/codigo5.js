
// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI");
// // document.write(item);
// const textoDelItem = document.createTextNode("Este es un item de la lista");

// item.appendChild(textoDelItem);

// contenedor.appendChild(item);

// console.log(item);

// const fragmento = document.createDocumentFragment();

// for (let i = 0; i < 20; i++) {
//     const item = document.createElement("LI");
//     item.innerHTML = "Este es un item de la lista";
//     fragmento.appendChild(item);
// }

// contenedor.appendChild(fragmento);

// const primerHijo = contenedor.firstElementChild; //primer hijo que encuentre
// const ultimoHijo = contenedor.lastElementChild; //ultimo hijp que encuentre
// console.log(primerHijo);
// console.log(ultimoHijo);


// const todosHijos = contenedor.childNodes; //trae todos los hijos no es un array
// todosHijos.forEach(hijo => console.log(hijo));
// console.log(todosHijos);

// const myArray = ['manzana', 'banana', 'naranja', 'pera'];

// myArray.forEach(function(value) {
//   console.log(value);
// });


// const myObject = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
//   for (let key in myObject) {
//     console.log(key+":"+myObject[key]);
//   }
  

// const hijoos = contenedor.children; //solo devuelve etiquetas html sin las etiquetas text
// console.log(hijoos); 

// // hijoos.forEach(a => console.log(a));
// for(let hijooo of hijoos){  //for in es de indice for of no muestra los indices
//     console.log(hijooo);
// }

// const parrafo = document.createElement("p").innerHTML = "parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo, h2_antiguo); //remplaza lo que dice en el antiguo pro lo que dice en el nuevo



// console.log(contenedor.parentElement); //saber cual es el padre del elemento 
// console.log(contenedor.parentNode); //saber cual es el padre del nodo

// console.log(h2_antiguo.nextSibling); //saber que tipo de etiqueta hay despues
// console.log(h2_antiguo.previousSibling); //saber que tipo de etiqueta hay antes




const div = document.querySelector(".div3");

console.log(div.closest(".div")); //no sirve

