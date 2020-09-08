let toUpperCase = str => str.toUpperCase();
let firstLetter = str => str.substr(0, 1);
let concatStrings = (str1, str2) => `${str1} ${str2}`;


describe('Mocking the file', () => {
  it('Changing toUpperCase function behavior', () => {
    toUpperCase = jest.fn().mockImplementation(str => str.toLowerCase());
    expect(toUpperCase('TEST')).toBe('test');
  });
  it('Changing firstLetter function behavior', () => {
    firstLetter = jest.fn().mockImplementation(str => str.substr((str.length - 1), 1));
    expect(firstLetter('Test')).toBe('t');
  });
  it('Changing toUpperCase function behavior', () => {
    concatStrings = jest.fn().mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);
    expect(concatStrings('Test', 'your', 'might')).toBe('Test your might');
  });
});

module.exports = { toUpperCase, firstLetter, concatStrings };
