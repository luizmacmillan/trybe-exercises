const services = require('./exercise4.test');


describe('Mocking the file', () => {
  it('Changing toUpperCase function behavior', () => {
    const mockChange = jest
      .spyOn(services, "toUpperCase")
      .mockImplementation(str => str.toLowerCase());
    expect(mockChange('TEST')).toBe('test');
    services.toUpperCase.mockRestore();
    expect(services.toUpperCase('test')).toBe('TEST');
  });
});
