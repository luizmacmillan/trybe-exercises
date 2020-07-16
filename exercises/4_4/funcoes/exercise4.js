const names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(param) {
  let maiorDosNomes = '';
  for (index1 = 0; index1 < param.length; index1 += 1 ) {
    for (index2 = index1 + 1; index2 < param.length; index2 += 1) {
      if (param[index1].length >= param[index2].length && maiorDosNomes.length <= param[index1].length) {
        maiorDosNomes = param[index1];
      } else if (param[index1].length <= param[index2].length && maiorDosNomes.length <= param[index2].length) {
        maiorDosNomes = param[index2];
      }
    }
  }
  return maiorDosNomes;
}

console.log(maiorNome(names));