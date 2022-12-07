/* Tipos de dados em javascript */

const nome = 'Beatriz'; //string
const nome1 ="Beatriz"; //string
const nome2 = `Beatriz`;//string
const num1 = 11; //number
const num2 = 10.50; //number
let nomeAluno; //undefined = NÃO APONTA PARA NENHUM LOCAL NA MEMÓRIA
let sobrenomeAluno = null; // TAMBÉM NÃO APONTA PARA NENHUM LOCAL NA MEMÓRIA
/* NULL E UNDEFINED NÃO SÃO IGUAIS
NULL É UTILIZADO PELO PROGRAMADOR QUANDO QUER DESCONFIGURAR UMA VARIÁVEL
 E UNDEFINED É O PRÓPRIO JS QUE ATRIBUI A VARIÁVEL */

 const aprovado = true; //boolean true or false(lógico)

 const  a = [1, 2];
 const b = a;
 console.log(a, b);
 b.push(3);
 console.log(a, b);

 /* No caso acima o valor 3 foi adiciona em a e b 
 criada a variavel a que aponta para local na memória e depois criada a variavel
 b que recebeu os valores de a e assim apontava para o mesmo local na memória
 o valor que foi adiciona em b também foi adiciona em a porque comos ambas as variáveis
 apontam para o mesmo local de memória, a alteração de uma reflete na outra, então
 se eu adicionar um elemento no array b esse elemente também comporá
 o array a
 */
