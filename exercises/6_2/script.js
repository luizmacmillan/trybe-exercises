const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const cpfInput = document.querySelector('#cpf');
const adressInput = document.querySelector('#adress');
const cityInput = document.querySelector('#city');
const stateInput = document.querySelector('#state');
const livingPlaceInput = document.querySelector('#living-place');
const resumeInput = document.querySelector('#resume');
const officeInput = document.querySelector('#office');
const officeDescriptionInput = document.querySelector('#office-description');
const firstDayInput = document.querySelector('#first-day');
const checkBtn = document.querySelector('#check-data');
const validationLog = document.querySelector('#validation-log');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const stateInitials = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',];
const cleanerBtn = document.querySelector('#cleaner');
const formulary = document.querySelector('#form');
const consolidatedField = document.querySelector('#consolidated');

function preventDefault() {
  validationLog.innerText = '';
  if (!emailRegex.test(emailInput.value)) {
    validationLog.innerText += 'E-mail inválido. |';
  }

  const firstDayValue = firstDayInput.value;
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

  if (validationLog.innerText === '') {
    consolidatedField.innerHTML = '';
    const name = document.createElement('h1');
    name.innerText = nameInput.value;
    consolidatedField.appendChild(name);
    const email = document.createElement('h3');
    email.innerText = emailInput.value;
    consolidatedField.appendChild(email);
    const cpf = document.createElement('h3');
    cpf.innerText = cpfInput.value;
    consolidatedField.appendChild(cpf);
    const adress = document.createElement('h3');
    adress.innerText = adressInput.value;
    consolidatedField.appendChild(adress);
    const city = document.createElement('h3');
    city.innerText = cityInput.value;
    consolidatedField.appendChild(city);
    const state = document.createElement('h3');
    state.innerText = stateInput.value;
    consolidatedField.appendChild(state);
    const livingPlace = document.createElement('h3');
    livingPlace.innerText = livingPlaceInput.value;
    consolidatedField.appendChild(livingPlace);
    const resume = document.createElement('h3');
    resume.innerText = resumeInput.value;
    consolidatedField.appendChild(resume);
    const office = document.createElement('h3');
    office.innerText = officeInput.value;
    consolidatedField.appendChild(office);
    const officeDescription = document.createElement('h3');
    officeDescription.innerText = officeDescriptionInput.value;
    consolidatedField.appendChild(officeDescription);
    const firstDay = document.createElement('h3');
    firstDay.innerText = firstDayInput.value;
    consolidatedField.appendChild(firstDay);    
  }
}

checkBtn.addEventListener('click', preventDefault);

function stateOptions() {
  for (let x = 0; x < stateInitials.length; x += 1) {
    stateInput.innerHTML += `<option value="${stateInitials[x]}">${stateInitials[x]}</option>`;
  }
}

stateOptions();

cleanerBtn.addEventListener('click', function () {
  formulary.reset();
  consolidatedField.innerHTML = '';
});
