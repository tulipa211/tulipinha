const botoes = document.querySelectorAll('.Objetivos');


for (let x = 0; x<botoes.length; x++){
console.log(x);
botoes[x].onclick = function() {
    for(let y = 0; y< botoes.length; y++){
botoes[x].classList.add('ativo');
}
//botoes[x].classList.remove('ativo')
}}
