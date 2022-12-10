const numero = Number(prompt('Digite um número'));

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Seu número + 2 é igual a  ${numero +2}</p>`;

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Raiz quadrada é igual a  ${numero ** 0.5}</p>`;

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> É inteiro ${numero}: ${Number.isInteger(numero)} </p>`;

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}  </p>`;

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)}  </p>`;

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)}  </p>`;

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Com duas casa decimais: ${numero.toFixed(2)} </p>`;
