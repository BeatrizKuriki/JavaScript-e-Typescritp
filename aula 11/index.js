/* OPERADORES ARITMÉTICOS
+ ADIÇÃO OU CONCATENAÇÃO 
* MULTIPLICAÇÃO
/ DIVISÃO
- SUBTRAÇÃO
** FAZ A POTENCIAÇÃO
% RESTO DA DIVISÃO*/

const num1 =5;
const num2 =10;
console.log(num1+num2);

let num3 = '2';
console.log(num3+num2);
console.log(num1+num3);
 console.log(2**num1);

console.log(26%3);

/* PRECEDÊNCIA DOS OPERADORES
PRIMEIRO: ()
SEGUNDO: ** 
TERCEIRO: * / %
QUARTO: + -*/

let contador = 0;
console.log(contador++);
console.log(contador);
console.log(++contador);
console.log(--contador);
contador+=2;
console.log(contador);
contador+=2;
console.log(contador);
