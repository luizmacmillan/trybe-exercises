const assert = require('assert');
// escreva a função addAllnumbers aqui

const addAllnumbers = (array) => {
  let result = array[0];

  for (let i = 1; i < array.length; i += 1) {
    result += array[i];
  }

  return result;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
