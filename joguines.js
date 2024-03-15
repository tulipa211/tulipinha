let numeroSecreto = 9;
console.log(numeroSecreto);
let chute = '';

while(chute == ''){
    chute = prompt('Escolha um número de 0 a 10');
}

if(numeroSecreto == chute){
    alert('Acertou, boaa');
    console.log('Parabéns voê acertou, you did it kid!!')    
} else{
    alert('Errado');
    console.log('separe aude, vc errou')
}