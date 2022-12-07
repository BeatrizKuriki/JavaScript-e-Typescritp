let varA = 'A';
let varB = 'B';
let varC = 'C';

console.log(varA,varB,varC);

/* AGORA VOCÊ DEVE FAZER O VALOR DE A APONTAR PRA B, VALOR DE B APONTAR PARA C
E VALOR DE C APONTAR PARA A
A->B 
B->C
C->A*/

/* varA = varB;
varB = varC;
varC = varA;

console.log(varA,varB,varC);
 */
/* A  PRIMEIRA TENTATIVA NÃO RESOLVE A SAÍDA FICA IGUAL A : B C B */

/* varC = varA;
varA = varB;
varB = varC;

console.log(varA,varB,varC); */

/* SEGUNDA TENTATIVA NÃO RESOLVE TAMBÉM, A SAÍDA FICA IGUAL A : B A A */

/* let aux = null;
aux = varA;
varA = varB;
varB = varC;
varC = aux;

console.log(varA,varB,varC); */

/* TERCEIRA TENTATIVA RESOLVE O PROBLEMA, CRIANDO UMA VARIÁVEL AUX */

[varA, varB, varC] = [varB, varC, varA];

console.log(varA,varB,varC); 

/* QUARTA FORMA DE RESOLUÇÃO UTILIZA DESTRUCTURING ASSIGNMENT */
