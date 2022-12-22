let numParaSumar = 0;

// if(numParaSumar < 10){
//     numParaSumar++;
//     document.write(numParaSumar);
// }

// while(numParaSumar < 10){
//     numParaSumar++;
//     document.write(numParaSumar + "<br>");
// }

// do {
//   document.write(numParaSumar + "<br>");
//   numParaSumar++;
// } while (numParaSumar <= 10);

// while (numParaSumar < 1000) {
//   numParaSumar++;
//   document.write(numParaSumar + "<br>");
//   if (numParaSumar == 10) {
//     break;
//   }
// }

// document.write("Fin");

// for (let i = 0; i <= 10; i=i+2) {
//     document.write(i + "<br>");
// }

// document.write("<hr>");

// let i=10; //otra forma de hacer un ciclo for
// for (i; i >= 0; i=i-2) {
//     document.write(i + "<br>");
// }

for (let i = 0; i < 20; i++) {
  if (i == 12) {
    continue; // en vez de acabar cuando encuentra el numero se  lo salta, ejemplo se salta el numero 12 en este caso
  }
  document.write(i + "<br>");
}
