function saudacao(nome){
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao('Beatriz');
console.log(variavel);

function soma(a, b){
    return a+b
}

console.log(soma(2,6));
console.log(soma(10,5));
console.log(soma(7,6));

//FUNÇÃO ANÔNIMA

const raiz = function(num){
    let resultado = num**0.5;
    return `A raiz quadrada de ${num} é igual a ${resultado}`

};

console.log(raiz(25));
console.log(raiz(16));
console.log(raiz(9));

//ARROW FUNCTION - servem para sim

const potencia = numero => numero ** 2;

console.log(potencia(9));
console.log(potencia(5));