let peca = 'Rainha';

switch (peca.toLowerCase()){
  case ('rainha'):
    console.log('Todos os lados e quantos quadrados quiser.');
  break;
  case ('rei'):
    console.log('Todos os lados e 1 quadrado apenas.');
  break;
  case ('bispo'):
    console.log('Apenas as diagonais da sua cor.');
  break;
  case ('cavalo'):
    console.log('Em forma de L de 2x3.');
  break;
  case ('torre'):
    console.log('Apenas em linhas e quantos quadrados quiser.');
  break;
  case ('peao'):
    console.log('Apenas para frente e só 1 quadrado.');
  break;
  default:
    console.log('Peça inválida.');
}
