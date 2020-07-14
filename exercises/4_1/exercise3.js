let a = 100;
let b = 80;
let c = 35;
let resultado = 0;

if ((a > b) && (a > c)) {
  resultado = a;
}
else if ((b > a) && (b > c)) {
  resultado = b;
}
else {
  resultado = c;
}

console.log(resultado)
