const assert = require('assert');

const removeVowels = (word) => {
  const regexVowels = /[aeiou]/;
  let results = '';
  let currentNumber = 1;

  for (let i = 0; i < word.length; i += 1) {
    if (word[i].search(regexVowels) === 0) {
      results += currentNumber;
      currentNumber += 1;
    } else {
      results += word[i];
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(removeVowels(parameter), result);
