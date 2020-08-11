const mySkills = ['javascript', 'html', 'css', 'flexbox', 'responsividade'];

let changerX = string => {
  const stringSettled = 'Tryber x aqui!';
  let resultedString = '';
  let lastPart = -1;

  for (let i = 0; i < stringSettled.length; i += 1) {
    if (stringSettled[i] === 'x') {
      resultedString = `${resultedString}${stringSettled.substr(lastPart + 1, (i - 1) - lastPart)}${string}`;
      lastPart = i;
    }
    if (i === stringSettled.length - 1) {
      resultedString = `${resultedString}${stringSettled.substr(lastPart + 1, i - lastPart)}`;
    }
  }
  return resultedString;
};

let concatSkills = (functionString, arrayOfSkills) => {
  
  const stringResult = `${functionString}
  Minhas cinco principais habilidades são:
  -  ${arrayOfSkills.sort()[0]}
  -  ${arrayOfSkills.sort()[1]}
  -  ${arrayOfSkills.sort()[2]}
  -  ${arrayOfSkills.sort()[3]}
  -  ${arrayOfSkills.sort()[4]}
  #goTrybe`
  return stringResult;
}

console.log(concatSkills(changerX('Luiz'), mySkills));
