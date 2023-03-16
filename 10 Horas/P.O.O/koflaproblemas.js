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
}

cel1 = new celulares("rojo","150 gramos","5 pulgadas","2GB");

cel1.presinarBotonEncendido();
cel1.tomarFoto(); 
cel1.grabarVideo();
cel1.reiniciar();
cel1.presinarBotonEncendido();