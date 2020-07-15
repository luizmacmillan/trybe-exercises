let n = 7;
let linha = '*';

if ((n > 1) && (n % 2 !== 0)) {
  for (cont = 1; cont <= n; cont += 1) {

    let tamTotalDeEspacos = (n - cont) / 2;
    let espaco = '';

    for (espacos = tamTotalDeEspacos; espacos >= 1; espacos -= 1) {
      espaco += ' ';
    }
  
    if (cont % 2 !== 0) {
      switch (cont) {
        case (1):
          console.log(espaco + linha);
        break;
        case (n):
          let linhaFinal = '';
          for (cont = 1; cont <= n; cont += 1) {
            linhaFinal += '*';
          }
            console.log(linhaFinal);
        break;
        default:
          let interiorDaPiramide = '';
          for (contInterior = 1; contInterior <= (cont - 2); contInterior += 1) {
            interiorDaPiramide += ' ';
          }
          console.log(espaco + linha + interiorDaPiramide + linha);
        break;
      }
    }
  }
}
else {
  console.log("Erro. Valor inferior a 1 ou par.");
}
