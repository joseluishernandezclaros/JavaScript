
 const obtenerInfo = (materia) => {
    materias = {
        fisica:["Perez","pedro","juan","maria","cofla"],
        programacion:["Roberto","pedro","juan","maria","cofla"],
        logica:["Manuel","pedro","juan","maria","cofla"],
        quimica:["Alberto","pedro","juan","maria","cofla"]
    }
    if(materias[materia] !=undefined){
        return [materias[materia],materia];
    }else{
        return materias;
    }
}

const mostrarInfo = (materia) =>{
    let info = obtenerInfo(materia);
if(info!=false){
    let profesor = obtenerInfo(materia)[0][0];
    alumnos = obtenerInfo(materia)[0];
    alumnos.shift();
    document.write(`El profesor de <b>${info[1]}</b><b> es ${profesor}</b><br></br>
    Los alumnos son <b>${alumnos}</b><br><br><br>`);
}
}

const cantidadClases = (alumno) =>{
    let cantidadTotal = 0;
    let clasesPresentes = [];
    let info = obtenerInfo();
    for(infor in info){
        if(info[infor].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+infor);
        }
    }
    return `El alumno ${alumno} esta en: ${cantidadTotal} clases:  <b style='color:green'>${clasesPresentes}</b><br>`;
}

// obtenerInfo("fisica");
// obtenerInfo("quimica");
// obtenerInfo("programacion");
// obtenerInfo("logica");

mostrarInfo("fisica");
mostrarInfo("quimica");
mostrarInfo("programacion");
mostrarInfo("logica");

document.writeln(cantidadClases("cofla"));
document.writeln(cantidadClases("maria"));
document.writeln(cantidadClases("pedro"));
document.writeln(cantidadClases("juan"));

