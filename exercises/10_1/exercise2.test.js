const myRemove = require('./exercise2');

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array.', () => {
  it('Se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Se o array passado por parâmetro não sofreu alterações.', () => {
    let array = [1, 2, 3, 4];
    myRemove(array);
    const arrayAfterFunctionExecution = array;
    expect(arrayAfterFunctionExecution).toEqual(array);
  });
  it('Se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})
