// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let invertedStr = str[str.length - 1];
  for (let i = str.length - 2; i >= 0; i -= 1) {
    invertedStr = `${invertedStr}${str[i]}`;
  }
  if (str === invertedStr) return true;
  if (str !== invertedStr) return false;
}

module.exports = palindrome;
