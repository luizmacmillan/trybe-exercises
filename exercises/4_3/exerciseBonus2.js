let number = 359;
let quantidadeDeDivisoes = 0;

for (cont = 1; cont <= number; cont += 1) {
  if (quantidadeDeDivisoes <= 2) {
    if (number % cont === 0) {
      quantidadeDeDivisoes += 1;
    }
  }
}

switch (quantidadeDeDivisoes) {
  case (2):
    console.log('O número ' + number + ' é um número primo.');
    break;
  default:
    console.log('O número ' + number + ' NÃO é um número primo.');
    break;
}
