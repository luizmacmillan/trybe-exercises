let n = 5;
let linha = '';

if (n > 1) {
  for (cont = 1; cont <= n; cont += 1) {
    linha += '*';
  }
  
  for (cont2 = 1; cont2 <= n; cont2 += 1){
    console.log(linha);
  }
}
else {
  console.log("Erro. Valor inferior a 1.")
}
