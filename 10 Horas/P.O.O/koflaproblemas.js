class celulares{
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp; //resolucion de pantalla
        this.rdc = rdc; //resolucion de camara
        this.ram = ram;
        this.encendido = false;
    }
    presinarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
        }else{
            alert("celular apagado")
            this.encendido  = false;
        }
    }

    reiniciar(){
        if(this.encendido = true){
            alert("reiniciando celular");
        }else{
            alert("el celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolución de : ${this.rdc}`);
    }
    grabarVideo(){
        alert(`grandando video en una resolucion de : ${this.rdc}`);
    }    
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolución De Pantalla: <b>${this.rdp}</b><br>
        Resoluci´n De Camara: <b>${this.rdc}</b><br>
        Memoria Ram: <b>${this.ram}</b><br>
        `
    }       
}

cel1 = new celulares("rojo","150 gramos","5 pulgadas","Full HD","2GB");
cel2 = new celulares("negro","250 gramos","4 pulgadas","Full HD","4GB");
cel3 = new celulares("blanco","50 gramos","5 pulgadas","Full HD","8GB");

// cel1.presinarBotonEncendido();
// cel1.tomarFoto(); 
// cel1.grabarVideo();
// cel1.reiniciar();
// cel1.presinarBotonEncendido();

document.write(`
    ${cel1.mostrarInfo()}<br>
    ${cel2.mostrarInfo()}<br>
    ${cel3.mostrarInfo()}<br>
`);

