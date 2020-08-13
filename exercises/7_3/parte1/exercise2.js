const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
const paramArray = [1, 2, 3, 4];
myRemove(paramArray, 4);
assert.deepStrictEqual(paramArray, [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 2), [1, 3, 4]);
