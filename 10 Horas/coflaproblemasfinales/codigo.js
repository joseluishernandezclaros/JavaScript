
const contenedorTodo = document.querySelector(".flex-container");
let contador = 0;
const boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();

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

let documentFragment = document.createDocumentFragment();

for (i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000); //numero random 
    let precioRandom = Math.round(Math.random()*10+30); //numero random entre 30 y 40
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("div");
    div.addEventListener("click", ()=>{
        document.querySelector(".keydata").value = modeloRandom;
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flexitem`); //añadir clases
    div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];
    documentFragment.appendChild(div);
}

contenedorTodo.appendChild(documentFragment);
