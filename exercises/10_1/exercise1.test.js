const sum = require('./exercise1');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b.', () => {
  it('Se o retorno de sum(4, 5) é 9.', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Se o retorno de sum(0, 0) é 0.', () => {

  });
  it('Se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5).', () => {

  });
  it('Se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5").', () => {

  });
})