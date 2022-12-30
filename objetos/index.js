//QUANDO EU CRIO UM ARRAY USO COLCHETES, QUANDO CRIO UM OBJETO USO CHAVES
// DENTRO DO OBJETO EU POSSO COLOCAR ATRIBUTOS 
// COMO NO EXEMPLO ABAIXO SE PRECISAR POSSO CRIAR 10 OBJETOS PESSOAS OU POSSO CRIAR UMA FUNÇÃO
//QUE CRIA OS OBJETOS

/*const pessoa1 = {
    nome:'Stella',
    sobrenome: 'Alencar',
    idade: 2

};

console.log(pessoa1.idade);
console.log(pessoa1.nome)*/

function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 30);
console.log(pessoa1.nome);
const pessoa2 = criaPessoa('Bruno', 'Silva', 15);
const pessoa3 = criaPessoa('Olga', 'Benário', 29);
const pessoa4 = criaPessoa('Olivia', 'Barbosa', 33);
const pessoa5 = criaPessoa('João', 'Ferreira', 40);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);

