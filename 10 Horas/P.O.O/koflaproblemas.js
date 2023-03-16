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


class celularAltaGama extends celulares{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camra lenta");
    }
    reconocimientoFacial(){
        alert("vamos a inicar un reconociemitneo facial");
    }
    mostrarInfoAltaGama(){
        return this.mostrarInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
    }
}

// cel1 = new celulares("rojo","150 gramos","5 pulgadas","Full HD","2GB");
// cel2 = new celulares("negro","250 gramos","4 pulgadas","Full HD","4GB");
// cel3 = new celulares("blanco","50 gramos","5 pulgadas","Full HD","8GB");

// cel1.presinarBotonEncendido();
// cel1.tomarFoto(); 
// cel1.grabarVideo();
// cel1.reiniciar();
// cel1.presinarBotonEncendido();

cel1 = new celularAltaGama("rojo","130 gramos","5.2","4k","8GB","Full HD");
cel2 = new celularAltaGama("negro","120 gramos","5.2","4k","6GB","Full HD");

// document.write(`
//     ${cel1.mostrarInfo()}<br><br>
//     ${cel2.mostrarInfo()}<br><br>
//     ${cel3.mostrarInfo()}<br>
// `);


document.write(`
    ${cel1.mostrarInfoAltaGama()}<br><br>
    ${cel2.mostrarInfoAltaGama()}<br>
`);


