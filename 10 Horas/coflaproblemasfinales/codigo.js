
const contenedorTodo = document.querySelector(".flex-container");
const boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase(); //cambiar el nombre de la clase antiguo por el mismo nombre pero en mayuscula


let contador = 0;
function crearLlave(nombre,modelo,precio){
    contador++;
    img = `<img src="llave.png" class="llave-img" <br>`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio]
}

// const llave = crearLlave("llave1","modelo X","33");

// contenedorTodo.innerHTML += llave[0]+llave[1]+llave[2]+llave[3];

// document.write(llave[0],llave[1],llave[2]);

let documentFragment = document.createDocumentFragment(); //crea fragmento vacio que sirve para agregar varios elementos usando pocos recursos

for (i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000); //numero random 
    let precioRandom = Math.round(Math.random()*10+30); //numero random entre 30 y 40
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom); //llave 1 mande el nombre de la llave con diferente valor entre 1 y 20 manda el modelo y el preciorandom a la funcion crear llave
    let div = document.createElement("div");
    div.addEventListener("click", ()=>{
        document.querySelector(".keydata").value = modeloRandom;   //se crea un div que cuando se pulsa un elemento se selleciona y cambia el valor del hidden por el valor del modeloRandom del elemento seleccionado
    });
    div.tabIndex = i; //orden en que se selleciona usando el tab del teclado, en este caso es en orden de 1 a 20 
    div.classList.add(`item-${i}`,`flexitem`); //añadir clase item con posicion i y clase flexitem
    div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];  //añadir al div el valor de la llave en la posicion de imagen, nombre, modelo y precio
    documentFragment.appendChild(div); //añade el div con todo lo agregado anteriormente al documentfragmente para que todo carge rapidamente y con mejor rendimiento
}

contenedorTodo.appendChild(documentFragment); //agregar lo del documentfragment al contenedor creado en el index para ahora si mostrarlo en la pagina
