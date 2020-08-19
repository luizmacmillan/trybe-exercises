const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

const findingATimes = 

function containsA() {
  // escreva seu código aqui
  return names.reduce((aTimes, currentName) => aTimes + currentName.split('').reduce((aTimesAtCurrentName, currentNameLetter) => (currentNameLetter.toLocaleLowerCase() === 'a') ? aTimesAtCurrentName + 1 : aTimesAtCurrentName, 0), 0);
}

assert.deepEqual(containsA(), 20);

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
