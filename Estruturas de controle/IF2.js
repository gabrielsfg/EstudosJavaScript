function teste1(num) {
    if(num>7)   // SEM CHAVES A UNICA LINHA DE CODIGO DO IF SERA A PRIMEIRA FORA DO IF
        console.log(num)
   
    console.log('final') // NAO ESTA ASSOSIADA AO IF
    
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7);{  // ESSA SERA A LINHA LIDA PELO IF, LOGO O BLOCO ABAIXO NAO SERA PARTE DO IF
        console.log(num)
    }
}

teste2(6)
teste2(8)