alert('fuck fuck');
let nomeUsuario = "";
let anterior = document.querySelector('#texto');

while(nomeUsuario == "" ){
    nomeUsuario = prompt('Qual seu nome?');
}

anterior.textContent = nomeUsuario;
