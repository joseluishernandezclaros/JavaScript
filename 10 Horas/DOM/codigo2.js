
const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable","true"); //editar todo del atributo
titulo.setAttribute("dir","ltr"); //cambiar como se muestra para leer el texto

titulo.removeAttribute("hidden"); //hiden evita mostrar cosas asi que toca eliminarlo

titulo.setAttribute("tabindex","true"); //ver si se puede seleccionar o no

titulo.setAttribute("title","vea pues"); //titulo que se muestra al poner el mouse encima

