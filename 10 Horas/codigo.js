/* String = "cadena de texto";
Number = 19 //numero;
booleano = true //false //true;
 */

/* var numero = 15;
const nombre = "dato";
nombre = "pedro"; //a las constantes no se les puede cambiar el valor
 */

/* let numero = 21;
numero = 293;
alert(numero); */

/* const numero = 2;
alert(numero); */

/* let n1,n2,n3;
n1=2;
n2=23;
n3=312;
alert(n1);
alert(n2);
alert(n3); */

/* let numero = null;
alert(numero); */

/* let numero = 5;
let numero2 = "pedro";
alert(numero*numero2); //NAN no es un numero
 */

/* let nombre = prompt("Escribe tu nombre");
alert("hola "+nombre); */

/* let numero = 10;
numero += 20; //numero = numero + 20;
document.write(numero); */

/* let numero = 47;
numero %= 6; //numero = numero % 20;
document.write(numero); */

/* let numero = 10;
numero **= 2; //numero = numero elevado 2;
document.write(numero); */

/* n1 = 10;
n2 = 5;
resultado = n1 + n2;
document.write(resultado); */

/* n1 = 10;
n2 = 5;
n1--;
resultado = n1;
document.write(resultado); */

/* n1 = 10;
n2 = 5;
resultado = n1 / n2;
document.write(resultado); */

/* n1 = 10;
n2 = 5;
resultado = n1 % n2; //5*1=5 , 5*2=10, 0
document.write(resultado); */

/* saludo = "Hola";
pregunta = " ¿Como estas?";
frase = saludo+pregunta;
document.write(frase); */

/* n1 = 5;
n2 = 5;
frase = "" + n1 + n2; //eran numeros pero se volvieron string
document.write(frase); */

/* n1 = "5";
n2 = 5;
frase = n1.concat(n2); //uso funcion concat
document.write(frase); */

/* frase1 = "jose";
frasefinal = `soy ${frase1} y estoy caminando`; //backtig con alt 96
document.write(frasefinal); */

/* let numero = 12;
let numero2 = 12;
document.write(numero == numero2); */

/* let numero = 12;
let numero2 = 12;
document.write(numero != numero2); //verificar si son distintos */

/* 
let numero = 12;
let numero2 = "12";
document.write(numero === numero2);//=== estrictamente iguales, mismo valor mismo tipo de dato */

// let valor = true;
// let valor2 = true;
// let resultado = valor && valor2;
// let resultado2 = valor || valor2;
// let resultado3 = valor = !valor2;

// n1=222;
// n2=23;
// af1=n1>n2;
// af2=n1==n2;
// document.writeln(af1 && af2);
// document.writeln(af1 || af2); //con que una sea verdadera dara verdadero

//true && false = con que uno sea falso todo es falso

//(true && false) || (true ||false)
//false || true
//true // respuesta final

//canel case
// valorEntero;
// holaQuePexEnano;

// {
//     document.write("hola");
// }

// nombre = "pedra";

// if (nombre == "pedro") {
//   document.writeln("hola "+nombre);
// }

// else if(nombre == "hola"){
//     document.writeln("hola "+nombre);
// }

// else{
//     document.writeln("Tu tienes otros nombre");
// }

// -----------------------------------------------

// let espacioLibre = false;

// const validarCliente = (time)=>{
//     let edad = prompt("¿Cual es tu edad?");
//     if(edad >= 18){
//         if(time >= 2 && time < 7 && espacioLibre == false){
//             alert("Puedes pasar gratis por que eres la primera persona despues de las 2 am");
//          espacioLibre = true;
//         }else{
//             alert(`son ${time}:00Hs y puedes pasar pero debes pagar la entrada`)
//         }
//     }else{
//         alert("Eres menor de edad no puedes pasar");
//     }
// }

// validarCliente(23);
// validarCliente(24);
// validarCliente(01);
// validarCliente(01);
// validarCliente(01);
// validarCliente(02);
// validarCliente(02);

// -------------------------------------------

// let cantidad = prompt("Cuantos alumnos son?");
// let alumnosTotales = [];

// for (let i = 0; i < cantidad; i++) {
//   alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
// }

// const tomarAsistencia = (nombre, p) => {
//   let presencia = prompt(nombre);
//   if (presencia == "p" || presencia == "P") {
//     alumnosTotales[p][1]++;
//   }
// };

// for (i = 0; i < 30; i++) {
//     for(alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0],alumno);
//     }
// }

// for(alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//          Asistencias: ${alumnosTotales[alumno][1]}<br>
//          Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
//          if(30 - alumnosTotales[alumno][1] > 18 ){
//             resultado += "<b style='color:red'> Reprobado por inasistencias<br><br>";
//          }else{
//             resultado += "<br><br>";
//          }
//          document.write(resultado);
// }



// -------------------------------------
// Calculadora


// const sumar = (n1,n2) => {
//     return parseInt(n1) + parseInt(n2);
// }
// const restar = (n1,n2) => {
//     return parseInt(n1) - parseInt(n2);
// }
// const multiplicar = (n1,n2) => {
//     return parseInt(n1) * parseInt(n2);
// }
// const dividir = (n1,n2) => {
//     return parseInt(n1) / parseInt(n2);
// }

// alert("¿Que operacion deseas realizar?");
// operacion = prompt("1: Sumar, 2:Restar, 3:Multiplicar, 4:Dividir");

// if(operacion == 1){
//     let numero1 = prompt("Digite el primer numero");
//     let numero2 = prompt("Digite el segundo numero");
//     resultado = sumar(numero1,numero2);
//     alert(`Tu resultado es ${resultado}`);
// }else if(operacion == 2){
//     let numero1 = prompt("Digite el primer numero");
//     let numero2 = prompt("Digite el segundo numero");
//     resultado = restar(numero1,numero2);
//     alert(`Tu resultado es ${resultado}`);
// }else if(operacion == 3){
//     let numero1 = prompt("Digite el primer numero");
//     let numero2 = prompt("Digite el segundo numero");
//     resultado = multiplicar(numero1,numero2);
//     alert(`Tu resultado es ${resultado}`);
// }else if(operacion == 4){
//     let numero1 = prompt("Digite el primer numero");
//     let numero2 = prompt("Digite el segundo numero");
//     resultado = dividir(numero1,numero2);
//     alert(`Tu resultado es ${resultado}`);
// }else{
//     alert("No se ha encontrado la operación");
// }


