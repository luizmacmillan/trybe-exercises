let factorial = (number) => {
  let resultado = 1;
  for (let nextIteration = 2; nextIteration <= number; nextIteration += 1) {  
    resultado = resultado * nextIteration;
  }
  return resultado;
};
