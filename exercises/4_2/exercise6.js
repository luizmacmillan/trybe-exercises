let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numAtual = 0;
let quantosImpares = 0;

for (cont = 0; cont < numbers.length; cont ++) {
  numAtual = numbers[cont];
  if (numAtual % 2 != 0) {
    quantosImpares ++;
  }
}

if (quantosImpares == 0) {
  console.log("Nenhum valor ímpar encontrado.");
}
else {
  console.log(quantosImpares);
}
