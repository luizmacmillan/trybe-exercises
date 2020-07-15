let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numAtual = 0;
let menorEncontrado = (numbers[0] + 1);

for (cont = 0; cont < numbers.length; cont ++) {
  numAtual = numbers[cont];
  if (numAtual < menorEncontrado) {
    menorEncontrado = numAtual;
  }
}

console.log(menorEncontrado);