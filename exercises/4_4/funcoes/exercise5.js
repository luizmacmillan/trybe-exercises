const numbers = [2, 3, 2, 5, 8, 2, 3];

function maisSeRepete(param) {
  let oQueMaisSeRepete = 0;
  let quantidadeDeVezesAnterior = 0;

  for (index1 = 0; index1 < param.length; index1 += 1 ) {
    let quantidadeDeVezesAtual = 0;

    for (index2 = 0; index2 < param.length; index2 += 1) {
      if (param[index1] === param[index2]) {
        quantidadeDeVezesAtual += 1;
      }
    }

    if (quantidadeDeVezesAtual > quantidadeDeVezesAnterior) {
      quantidadeDeVezesAnterior = quantidadeDeVezesAtual;
      oQueMaisSeRepete = param[index1];
    }
  }
  return oQueMaisSeRepete;
}

console.log(maisSeRepete(numbers));