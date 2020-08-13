const assert = require('assert');
// escreva a função addOne aqui

const addOne = (array) => {
  let resultado = [];

  for (let i = 0; i < array.length; i += 1) {
    resultado.push(array[i] + 1);
  }

  return resultado;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
