// Declarando variaveis
var dia = 1;
var hora = 2;
var minuto = 5;
var segundos = 5;

// Funcao da contagem regressiva
function contRegres(){
    // comeca subtraindo 1 segundo da variavel
    segundos--;
    // mostra na tela
    contagem.innerText = dia + ':' + hora + ':' + minuto + ':' + segundos

    // confere para ver se está abaixo dos 2 digitos e acrescenta um zero a esquerda
    if(segundos <= 9){
        // mostra na tela
        contagem.innerText = dia + ':' + hora + ':' + minuto + ':' + '0' + segundos
        if(segundos == 0){ //se estiver zerado reseta os segundos e desconta 1 minuto
            segundos = 5;
            minuto--;
        }
    }

    // confere para ver se está abaixo dos 2 digitos e acrescenta um zero a esquerda
    if(minuto <= 9){
        // mostra na tela
        contagem.innerText = dia + ':' + hora + ':' + '0' + minuto + ':' + segundos

        if(minuto == 0){ //se estiver zerado reseta os minutos e desconta 1 hora
            minuto = 5;
            hora--;
        }
    }

    // confere para ver se está abaixo dos 2 digitos e acrescenta um zero a esquerda
    if(hora <= 9){
        // mostra na tela
        contagem.innerText = 0 + ':' + '0' + hora + ':' + minuto + ':' + segundos

        if(hora == 0){ //se estiver zerado reseta as horas e desconta 1 dia
            hora = 2;
            dia--;
        }
    }
    // Essa parte eu nao como fazer
    if((dia==0)){
        dia=0;
        if(hora==0){
            hora=0;
            contagem.innerText = dia + ':' + hora + ':' + minuto + ':' + segundos

        }
    }
   
    if((dia==0) && (hora==0) && (minuto==0) && (segundos==0)){
        dia=0
        hora=0
        minuto=0
        segundos=0
        // contagem.innerText = dia + ':' + '0' + hora + ':' + minuto + ':' + segundos

        contagem.innerText = "Acabou"
        // console.log('acabou')
    }
    // 

    // faz tudo funcionar
    setTimeout('contRegres()',100);
}


/* var g_iCount = new Date().setDate(26);
console.log(g_iCount)
// de 30 a 0 //
var g_iCount = 30;
 
function startCountdown(){
       if((g_iCount - 1) >= 0){
               g_iCount = g_iCount - 1;
               contagem.innerText = '00:00.0' + g_iCount;
               setTimeout('startCountdown()',1000);
       }
} */