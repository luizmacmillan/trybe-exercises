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
  .then(response => console.log(`O Ki dele é muito baixo! Só ${response}... Que verme insolente!`))
  .catch();
