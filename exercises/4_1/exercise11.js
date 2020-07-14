const salario = 3000;
let inss = 0;
let salarioBase = 0;
let salarioLiquido = 0;

if (salario <= 1556.94) {
  inss = salario * 0.08;
}
else if (salario <= 2594.92) {
  inss = salario * 0.09;
}
else if (salario <= 5189.82) {
  inss = salario * 0.11;
}
else {
  inss = 570.88;
}
console.log(inss);
salarioBase = (salario - inss);
console.log(salarioBase);

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
}
else if (salarioBase <= 2826.65) {
  salarioLiquido = (salarioBase - ((salarioBase * 0.075) - 142.80));
}
else if (salarioBase <= 3751.05) {
  salarioLiquido = (salarioBase - ((salarioBase * 0.15) - 354.80));
}
else if (salarioBase <= 4664.68) {
  salarioLiquido = (salarioBase - ((salarioBase * 0.225) - 636.13));
}
else {
  salarioLiquido = (salarioBase - ((salarioBase * 0.275) - 869.36));
}

console.log(salarioLiquido);
