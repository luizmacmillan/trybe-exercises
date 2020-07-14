let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (cont = 0; cont < numbers.length; cont += 1) {
  if (cont < (numbers.length - 1)) {
    newNumbers.push(numbers[cont] * numbers[cont + 1]);
  }
  else {
    newNumbers.push(numbers[cont] * numbers[numbers.length - 1]);
  }
}

console.log(newNumbers);
