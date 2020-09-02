const myRemoveWithoutCopy = require('./exercise3');


// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

describe('A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array.', () => {
  it('Se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado.', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Se o array passado por parâmetro sofreu alterações.', () => {
    let array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    const arrayAfterFunctionExecution = array;
    expect(arrayAfterFunctionExecution).toEqual(array);
  });
  it('Se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})
