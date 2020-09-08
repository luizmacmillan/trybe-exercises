let getRandomNumber = () => Math.ceil(Math.random() * 100);

describe('Testing getRandomNumber behavior', () => {
  it('If the behavior obeys the first mock implementation only once', () => {
    getRandomNumber = jest.fn().mockImplementationOnce((number1, number2, number3) => number1 * number2 * number3);
    expect(getRandomNumber(1, 2, 3)).toBe(6);
  });
  it('If the behavior obeys the second mock implementation only once', () => {
    getRandomNumber = jest.fn().mockImplementationOnce((number) => number * 2);
    expect(getRandomNumber(10)).toBe(20);
  });
  it('If the behavior obeys the end of mock implementation once', () => {
    expect(getRandomNumber(1, 2, 3)).not.toBe(6);
    expect(getRandomNumber(10)).not.toBe(20)
  });
});
