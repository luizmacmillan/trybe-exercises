let n = 5;
let linha = '';

if ((n > 1) && (n % 2 !== 0)) {
  for (cont = 1; cont <= n; cont += 1) {
    let tamTotalDeEspacos = (n - cont) / 2;
    let espaco = '';
    
     for (espacos = tamTotalDeEspacos; espacos >= 1; espacos -= 1){
      espaco += ' ';
    }
    
    linha += '*';
    
    if (cont % 2 !== 0){
      console.log(espaco + linha);
    }
  }
}
else {
  console.log("Erro. Valor inferior a 1 ou par.")
}
