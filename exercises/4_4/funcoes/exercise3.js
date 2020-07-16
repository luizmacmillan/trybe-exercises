const numbers = [2, 4, 6, 7, 10, 0, -3];

function menorNumero(param) {
  let menor;
  for (index1 = 0; index1 < param.length; index1 += 1 ) {
    for (index2 = index1 + 1; index2 < param.length; index2 += 1) {
      if (param[index1] <= param[index2]) {
        menor = index1;
      } else {
        menor = index2;
      }
    }
  }
  return menor;
}

console.log(menorNumero(numbers));