const numero = 5;

function somatorioDeTodos(param) {
  let total = 0;
  for (cont = 1; cont <= param; cont += 1) {
    total += cont;
  }
  return total;
}

console.log(somatorioDeTodos(numero));