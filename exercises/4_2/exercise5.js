let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numAtual = 0;
let maiorEncontrado = 0;

for (cont = 0; cont < numbers.length; cont ++) {
  numAtual = numbers[cont];
  if (numAtual > maiorEncontrado) {
    maiorEncontrado = numAtual;
  }
}

console.log(maiorEncontrado);