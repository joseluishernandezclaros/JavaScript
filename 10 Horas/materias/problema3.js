let materias = {
    fisica:["Perez","pedro","juan","maria","cofla"],
    programacion:["Roberto","pedro","juan","maria","cofla"],
    logica:["Manuel","pedro","juan","maria","cofla"],
    quimica:["Alberto","pedro","juan","maria","cofla"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];

    if(personas.length >=21){
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br><br>`);
    }else{
        personas.push(alumno);
        if(materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }else  if(materia == "programacion"){
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }else  if(materia == "logica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: personas,
                quimica: materias["quimica"]
            }
        }else  if(materia == "quimica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: personas
            }
        }

        document.write(`Felicidades ${alumno} te haz inscrito a ${materia} correctamente <br><br>`)
    }
}

document.write(materias['fisica']+"<br>");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
inscribir("pedrito","fisica");
document.write("<br>");
document.write(materias['fisica']+"<br>");

