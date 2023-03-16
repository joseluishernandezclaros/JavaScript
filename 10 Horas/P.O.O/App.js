

class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada == true && this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    appInfo(){
        return `
            Descargas: <b>${this.descargas}</b><br>
            Puntuación: <b>${this.puntuacion}</b><br>
            Peso: <b>${this.peso}</b><br>
        `
    }
}

applicacion1 = new App("16.000","5 estrellas","900mb");
applicacion2 = new App("3126.000","4 estrellas","2234239042340mb");
applicacion3 = new App("12136.000","1 estrellas","22900324mb");
applicacion4 = new App("31216.000","5 estrellas","33900324mb");
applicacion5 = new App("13126.000","4 estrellas","23902340mb");
applicacion6 = new App("16.02312300","3 estrellas","239023420mb");
applicacion7 = new App("2216.331000","2 estrellas","324900mb");

// applicacion.instalar();
// applicacion.abrir();
// applicacion.cerrar();
// applicacion.desinstalar();

document.write(`
    ${applicacion1.appInfo()} <br>
    ${applicacion2.appInfo()} <br>
    ${applicacion3.appInfo()} <br>
    ${applicacion4.appInfo()} <br>
    ${applicacion5.appInfo()} <br>
    ${applicacion6.appInfo()} <br>
    ${applicacion7.appInfo()} <br>
`);

