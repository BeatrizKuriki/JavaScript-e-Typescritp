//VOCE PODE IMAGINAR UM ARRAY COMO UMA LISTA 
//O JS NÃO RESTRINGE OS TIPOS DE DADOS EM UM ARRAY, VOCÊ PODE TER STRINGS, OBJETOS, BOOLEAN, NUMBERS E ETC
//ENTRETANTO, COMO BOA PRÁTICA ORIENTA-SE A MANTER OS ARRAYS CONCISOS COM UM TIPO DE DADO

const alunos = ['luiz', 'maria', 'joão'];
console.log(alunos);
console.log(alunos[2]);
alunos[0] = 'eduardo';
console.log(alunos);
alunos.push('stella');//add ao final
console.log(alunos);
alunos[alunos.length] = 'anderson';//add ao final
console.log(alunos);

alunos.unshift('bruno');//add no início do array
console.log(alunos);

const removido = alunos.pop(); //remove o último;
console.log(removido);
console.log(alunos);
const removeInicio  = alunos.shift();//remove inicio
console.log(removeInicio);
console.log(alunos);

alunos.push('jordana');
alunos.push('carlos');
alunos.push('olga');
alunos.push('catarina');
//CASO DESEJE DELETAR UM ELEMENTO E NÃO MUDAR OS ÍNDICES

delete alunos[1];
console.log(alunos);
console.log(alunos[50]);