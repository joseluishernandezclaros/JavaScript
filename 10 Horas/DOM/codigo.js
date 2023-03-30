
parrafo = document.getElementById("parrafo");   //seleccionamos un elemnto entero
// document.write(parrafo+"<br>");

parrafo = document.getElementsByTagName("p");   //agarra el tag name de un elemento
// document.write(parrafo+"<br>");

khe = document.querySelector(".khe");
// document.write(khe+"<br>");

khe = document.querySelectorAll(".khe");
// document.write(khe+"<br>");

// const rangoEtario = document.querySelector(".rangoEtario");
// // document.write(rangoEtario+"<br>");
// // rangoEtario.setAttribute("type","color"); //modificar atributo

// valorAtributo = rangoEtario.getAttribute("type"); //obtner el tipo de atributo

// document.write(valorAtributo);


const rangoEtario = document.querySelector(".rangoEtario");
// document.write(rangoEtario+"<br>");
// rangoEtario.setAttribute("type","color"); //modificar atributo

valorAtributo = rangoEtario.removeAttribute("type"); //eliminar el tipo de atributo

document.write(valorAtributo);
