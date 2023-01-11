//tudo que acontece no navegador é um evento

// function meuEscopo(){
//     const form = document.querySelector('.form');
//     form.onsubmit = function(evento){
//         evento.preventDefault();
//         alert(1);
//         console.log('enviado...')
//     };
// }
// meuEscopo();


function meuEscopo(){
    const form = document.querySelector('.form');
      
    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        console.log(nome.value, sobrenome.value, peso.value, altura.value) 
    }    
    form.addEventListener('submit', recebeEventoForm)

}

meuEscopo();