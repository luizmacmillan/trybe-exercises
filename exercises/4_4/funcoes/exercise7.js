const word = "trybe";
const ending = "be";

function verificaFimPalavra(param1, param2) {
  let comeco = '';
  let final = '';
  let ehIgual = true;

  if (param1.length > param2.length) {
    comeco = param1;
    final = param2;
  } else {
    comeco = param2;
    final = param1;
  }
  
  for (fim = final.length; fim > 0; fim -= 1) {
    if (param1[param1.length - fim] === param2[param2.length - fim] && ehIgual === true) {
    } else {
      ehIgual = false;
    }
  }
  return ehIgual;
}

console.log(verificaFimPalavra(word, ending));
