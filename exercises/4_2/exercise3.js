let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (cont = 0; cont < numbers.length; cont ++) {
  soma += numbers[cont];
}

media = soma / numbers.length;

console.log(media);
