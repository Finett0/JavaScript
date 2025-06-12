function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4);
areaQuadrado(5);
areaQuadrado(2);

function pi() {
  return 3.14;
}

var total = 5 * pi();

// console.log(total);

function imc(peso, altura) {
  return peso / (altura * altura);
}

var peso = 70;
var altura = 1.75;
var resultado = imc(peso, altura);
// console.log(resultado.toPrecision(3));
