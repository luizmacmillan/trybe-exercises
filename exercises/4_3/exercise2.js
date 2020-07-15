let n = 5;
let linha = '';

if (n > 1) {
  for (cont = 1; cont <= n; cont += 1) {
    linha += '*';
    console.log(linha);
  }
}
else {
  console.log("Erro. Valor inferior a 1.")
}
