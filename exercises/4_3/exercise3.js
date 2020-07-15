let n = 5;
let linha = '';

if (n > 1) {
  for (cont = 1; cont <= n; cont += 1) {
    let espaco = '';
    for (espacos = n - cont; espacos >= 1; espacos -= 1){
      espaco += ' ';
    }
    linha += '*';
    console.log(espaco + linha);
  }
}
else {
  console.log("Erro. Valor inferior a 1.")
}
