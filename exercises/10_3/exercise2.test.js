let getRandomNumber = () => Math.ceil(Math.random() * 100);

describe('Testing getRandomNumber behavior', () => {
  it('If the behavior obeys the mock implementation once', () => {
    getRandomNumber = jest.fn().mockImplementationOnce((number1, number2) => number1 / number2);
    expect(getRandomNumber(10, 2)).toBe(5);
  });
  it('If the behavior obeys the end of mock implementation once', () => {
    expect(getRandomNumber(10, 2)).not.toBe(5);
  });
});
