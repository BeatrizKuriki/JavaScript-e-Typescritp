/* STRINGS SÃO ITERÁVEIS NO JS, OU SEJA SÃO INDEXADAS CADA CARACTERE POSSUI UM INDICE
É POSSÍVEL ESCREVER UM STRING USANDO ASPAS OU ASPAS SIMPLES E SE VC 
ABRIR COM ASPAS DENTRO PODE USAR ASPAS SIMPLES SEM PROBELMAS, A OPERAÇÃO 
INVERSÃO TAMBÉM É POSSÍVEL*/

let umaString = "um texto";
console.log(umaString[3]);
console.log(umaString.length);
console.log(umaString[10]);//saída será undefined

console.log(umaString.indexOf('texto'));//retorna em qual indice a palavra buscada começa
console.log(umaString.indexOf('Texto'));//retorna -1
console.log(umaString.toUpperCase);
console.log(umaString.toLowerCase);

