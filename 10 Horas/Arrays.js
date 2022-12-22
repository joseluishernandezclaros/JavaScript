// ARRAYS

// let frutas = ["bananas","manzanas","pera",1,2,3];
// document.write(frutas[0]);

let pc = {
    nombre: "DaltoPc",
    procesador: "Inter core i7",
    ram: "16GB",
    almacenamiento: "1TB"
};
let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let almacenamiento = pc["almacenamiento"];

let frase = `El nombre de el pc es: <b>${nombre}</b> <br>
el procesador es: <b>${procesador}</b> <br>
el almacenamiento es: <b>${almacenamiento}</b> <br>
la memoria ram es de: <b>${ram}</b>`; //baktick alt + 96

document.write(frase);


