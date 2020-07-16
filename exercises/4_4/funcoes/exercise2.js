const numbers = [2, 3, 6, 7, 10, 1];

function maiorNumero(param) {
  let maior;
  for (index1 = 0; index1 < param.length; index1 += 1 ) {
    for (index2 = index1 + 1; index2 < param.length; index2 += 1) {
      if (param[index1] >= param[index2]) {
        maior = index1;
      } else {
        maior = index2;
      }
    }
  }
  return maior;
}

console.log(maiorNumero(numbers));