const randomNumber = () => Math.ceil(Math.random() * 50);

const kiMeter = new Promise((resolve, reject) => {
  const numbers = [];
  for (let i = 1; i < 10; i += 1) {
    numbers.push(randomNumber());
  }

  const result = numbers
    .map((number) => Math
      .pow(number, 2))
        .reduce((acc, curr) => acc + curr);

  if (result > 8000) {
    return reject(result);
  }
  resolve(result);})
  .then(response => {
    const numbersToDivide = [2, 3, 5, 10];
    const divisions = numbersToDivide.map(number => parseInt(response / number));
    console.log(`O Ki dele é muito baixo! Só ${response}... Que verme insolente!`);
    console.log(divisions);
  })
  .catch();
