/*
NÃO PODEMOS CRIAR CONSTANTES COM PALAVRAS RESERVADAS 
CONSTANTES PRECISAM TER NOMES SIGNIFICATIVOS
NÃO PODE COMEÇAR O NOME DE UMA CONSTANTE COM NÚMERO
NÃO CONTER ESPAÇOS OU TRAÇOS
UTILIZAMOS CAMELCASE
CASE-SENSITIVE
NÃO PODEMOS MODIFICAR O VALOR DE UMA CONSTANTE
UM CONSTANTE PRECISA SER INICIALIZADA
SEU VALOR NÃO PODE SER MODIFICADO
*/

const nome = 'João';

const primeiroNumero = '5';
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

console.log(typeof (primeiroNumero));
console.log(typeof (segundoNumero));

console.log(typeof(primeiroNumero + segundoNumero));