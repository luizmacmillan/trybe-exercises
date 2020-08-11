var longestWord = (param) => {
  const arrayOfWords = param.split(' ');
  let longestWordResult = arrayOfWords[0];
  for (let i = 1; i < arrayOfWords.length; i += 1) {
    if (arrayOfWords[i].length > longestWordResult.length) {
      longestWordResult = arrayOfWords[i];
    }
  }
  return longestWordResult;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
