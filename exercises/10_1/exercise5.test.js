const { obj1, obj2, obj3 } = require('./exercise5');

describe('Compare dois objetos (JSON) para verificar se são idênticos ou não.', () => {
  it('obj1 e obj2.', () => {
    expect(obj1).toEqual(obj2);
  });
  it('obj1 e obj3.', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('obj2 e obj3.', () => {
    expect(obj2).not.toEqual(obj3);
  });
})
