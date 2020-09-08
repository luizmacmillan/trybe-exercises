let getRandomNumber = () => Math.ceil(Math.random() * 100);

describe('Testing getRandomNumber', () => {
  it('If was called', () => {
    getRandomNumber = jest.fn().mockReturnValue(10);
    getRandomNumber();
    expect(getRandomNumber).toHaveBeenCalled();
  });
  it('If return 10', () => {
    expect(getRandomNumber()).toBe(10);
  });
  it('If was called 3 times', () => {
    getRandomNumber();
    expect(getRandomNumber).toHaveBeenCalledTimes(3);
  });
});