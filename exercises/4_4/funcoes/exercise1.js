let palavra = 'sssstetitetssss';
let ehPalindromo = false;

function verificaSeEhPalindromo(param) {
  let invertido = '';
  for (letra = (param.length -1); letra >= 0; letra -= 1) {
    invertido += param[letra];
  }

  if (invertido === param) {
    return true;
  } else {
    return false;
  }
}

ehPalindromo = verificaSeEhPalindromo(palavra);
console.log(ehPalindromo);
