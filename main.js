alert('fuck fuck');
let nomeUsuario = prompt('Qual seu nome?');
let anterior = document.querySelector('#texto');

while(nomeUsuario == "" ){
    nomeUsuario = prompt('Qual seu nome?');
}

anterior.textContent = nomeUsuario;
