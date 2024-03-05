alert('fuck fuck');
let nomeUsuario = "";
let anterior = document.querySelector('#texto');

while(nomeUsuario == "" || nomeUsuario == null){
    nomeUsuario = prompt('Qual seu nome?');
}

anterior.textContent = nomeUsuario;
