let custo = 100;
let valor = 150;

if ((custo >= 0) && (valor >= 0)) {
  custo *= 1.2;
  let lucro = (valor - custo) * 1000;
  console.log(lucro);
}
else {
  console.log('Error!!!');
}