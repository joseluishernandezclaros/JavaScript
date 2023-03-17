class calculadora {
  constructor() {}
  sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
  }
  restar(n1, n2) {
    return parseInt(n1) - parseInt(n2);
  }
  multiplicar(n1, n2) {
    return parseInt(n1) * parseInt(n2);
  }
  dividir(n1, n2) {
    return parseInt(n1) / parseInt(n2);
  }
  potenciar(n1, exp) {
    // return Math.pow(parseInt(n1),parseInt(exp)); //con funcion nativa
    return parseInt(n1) ** parseInt(exp); //con operador
    // let num = n1;
    // for (let i = 0; i < exp; i++) {
    //     num*=n1;

    // }
    // return num;
  }
  raizcuadrada(n1) {
    return Math.sqrt(n1);
  }
  raizcubica(n1) {
    return Math.cbrt(n1);
  }
}

const calcular = new calculadora();

alert("¿Que operacion deseas realizar?");
operacion = prompt(
  "1: Sumar, 2:Restar, 3:Multiplicar, 4:Dividir, 5:Elevar, 6:Raiz Cuadrada, 7:Raiz Cubica"
);

if (operacion == 1) {
  let numero1 = prompt("Digite el primer numero");
  let numero2 = prompt("Digite el segundo numero");
  resultado = calcular.sumar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 2) {
  let numero1 = prompt("Digite el primer numero");
  let numero2 = prompt("Digite el segundo numero");
  resultado = calcular.restar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 3) {
  let numero1 = prompt("Digite el primer numero");
  let numero2 = prompt("Digite el segundo numero");
  resultado = calcular.multiplicar(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 4) {
  let numero1 = prompt("Digite el primer numero");
  let numero2 = prompt("Digite el segundo numero");
  resultado = calcular.dividir(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 5) {
  let numero1 = prompt("Digite el numero");
  let exp = prompt("Digite el exponente");
  resultado = calcular.potenciar(numero1, exp);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 6) {
  let numero1 = prompt("Digite el numero");
  resultado = calcular.raizcuadrada(numero1);
  alert(`Tu resultado es ${resultado}`);
} else if (operacion == 7) {
  let numero1 = prompt("Digite el numero");
  resultado = calcular.raizcubica(numero1);
  alert(`Tu resultado es ${resultado}`);
} else {
  alert("No se ha encontrado la operación");
}
