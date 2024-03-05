alert('fuck fuck');
let nomeUsuario = "";
let anterior = document.querySelector('#texto');

while(nomeUsuario == ""){
    nomeUsuario = prompt('Qual seu nome?');
}

if(nomeUsuario == null) {
    anterior.textContent = 'usuário';
} else{
    anterior.textContent = nomeUsuario;
}

