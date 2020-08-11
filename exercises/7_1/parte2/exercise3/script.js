const clickCounterBtn = document.querySelector('#click-count-btn');
const counterResult = document.querySelector('#counter-result');

let clickCount = 0;

clickCounterBtn.addEventListener('click', () => {
  clickCount += 1;
  counterResult.innerHTML = `Você já clicou ${clickCount} vezes.`;
  });
