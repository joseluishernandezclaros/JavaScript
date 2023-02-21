
class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y 
        soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.informacion + "<br>");
    }
}

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }   
    //   static ladrar(){
    //     alert("wow");
    // }
    set setRaza(nuevaraza){ //cambiar raza de nula a doberman
        this.raza = nuevaraza;
    }

    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro",5,"marrón","pincher");
const gato = new Animal("gato",2,"negro");
const loro = new Animal("loro",1,"verde");

perro.setRaza = "doberman"; //definir raza
document.write(perro.getRaza); //obtener raza

// perro.ladrar();
// gato.ladrar();
// loro.ladrar();

// perro.verInfo();
// gato.verInfo();
// loro.verInfo();



