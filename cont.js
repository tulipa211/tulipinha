const botoes = document.querySelectorAll('.Objetivos');


for (let x = 0; x<botoes.length; x++){
console.log(x);
botoes[x].onclick = function() {
    for(let y = 0; y< botoes.length; y++){
botoes[y].classList.remove('ativo');
}
botoes[x].classList.add('ativo')
//botoes[x].classList.remove('ativo')
}}

const contadores = document.querySelectorAll('contador');
let tempoAtual = new Date ();
let tempoObjetivo1 = new Date ('2024-04-28T23:59:99');
let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = Math.floor(tempoFinal/1000); 
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(dias/24);

contadores[0].textContent = dias + " dias " + horas + " horas " + minutos + " minutos " + minutos + " minutos " + segundos + " segundos ";