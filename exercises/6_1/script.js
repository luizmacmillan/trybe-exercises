const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const checkBtn = document.querySelector('#check-data');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const stateInitials = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',];
const dropDown = document.querySelector('#state');


checkBtn.addEventListener('click', function (){
  console.log(emailRegex.test(emailInput.value));
});

function stateOptions() {
  for (let x = 0; x < stateInitials.length; x += 1) {
    dropDown.innerHTML += `<option value="${stateInitials[x]}">${stateInitials[x]}</option>`;
  }
}

stateOptions();
