const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

describe('verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas.', () => {
  it('Verifica se retorna o resultado esperado através do callback convenientemente colocado para que seja possível fazer o teste com assincronicidade.', (done) => {
    uppercase('teste', (str) => {
      expect(str).toBe('TESTE');
      done();
    });
  });
});
