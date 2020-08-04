const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const checkBtn = document.querySelector('#check-data');
const validationLog = document.querySelector('#validation-log');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const stateInitials = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',];
const dropDown = document.querySelector('#state');
const firstDay = document.querySelector('#first-day');

function preventDefault() {
  if (!emailRegex.test(emailInput.value)) {
    validationLog.innerText += 'E-mail inválido. |';
  }

  const firstDayValue = firstDay.value;
  const day = firstDayValue.substr(0, 2);
  const month = firstDayValue.substr(3, 2);
  const year = firstDayValue.substr(6, 4);

  if (day < 1 || day > 31) {
    validationLog.innerText += 'Dia inválido. |';
  }
  if (month < 1 || month > 12) {
    validationLog.innerText += 'Mês inválido. |';
  }
  if (year < 0) {
    validationLog.innerText += 'Ano inválido. |';
  }
}

checkBtn.addEventListener('click', preventDefault);

function stateOptions() {
  for (let x = 0; x < stateInitials.length; x += 1) {
    dropDown.innerHTML += `<option value="${stateInitials[x]}">${stateInitials[x]}</option>`;
  }
}

stateOptions();
