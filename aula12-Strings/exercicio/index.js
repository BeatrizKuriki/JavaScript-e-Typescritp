let nome = prompt('Digite seu nome');

document.body.innerHTML += `O seu nome é <strong>${nome}</strong> <br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras<br/>`;
document.body.innerHTML += `A segunda letra do seu nome é:${nome[1].toUpperCase()}<br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${nome.indexOf('a')}<br/>`;
document.body.innerHTML += `Qual o último índice da letra i ${nome.lastIndexOf('i')} <br/>`;
document.body.innerHTML += `As ultimas três letras do seu nome são ${nome.slice(-3)}<br/>`;
document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ')} <br/>`;
document.body.innerHTML += `Seu nome como letras maiusculas é ${nome.toUpperCase()} <br/>`;
document.body.innerHTML += `Seu nome como letras minúsculas é ${nome.toLowerCase()} <br/>`;
