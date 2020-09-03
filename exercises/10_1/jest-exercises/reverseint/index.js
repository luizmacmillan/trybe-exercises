// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  function invertString(str) {
    let invertedStr = str[str.length - 1];
    for (let i = str.length - 2; i >= 0; i -= 1) {
      invertedStr = `${invertedStr}${str[i]}`;
    }
    return invertedStr;
  }
  if (n < 0) {
    let stringedNumber = `${n * -1}`;
    return parseInt(invertString(stringedNumber)) * -1;
  } else if (n === 0) {
    return 0;
  } else {
    return parseInt(invertString(`${n}`));
  }
}

module.exports = reverseInt;
