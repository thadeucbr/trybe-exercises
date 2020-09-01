function palindromo(palavra){
    let remover = /[\W_]/g;
    palavra += palavra.toLowerCase().replace(remover,'');
    let tamanho = palavra.length;
    for(let i = 0; i < tamanho/2; i++){
        if (palavra[i] !== palavra[tamanho - 1 - i]){
            return `falso`;
        };
        return `true`;
    };
};

function maiorNumero (numeros){
    let maiorNumero = 0;
    for(i in numeros){
        if(maiorNumero < numeros[i]){
            maiorNumero = numeros[i];
        }
    }
    return numeros.indexOf(maiorNumero);
}  

function menorNumero (numero){
    let menorNumero = 0;
    for(i in numero){
        if(menorNumero > numero[i] || menorNumero === 0){
            menorNumero = numero[i];
        }
    }
    return numero.indexOf(menorNumero);
}

 function maiorNome(nomes){
     let maiorNome = nomes[0];
     for(let i in nomes){
         if(maiorNome.length < nomes[i].length){
             maiorNome = nomes[i];
         }
     }
     return maiorNome;
 }

function repeticaoNumeros (numeros){
    for(let i in numeros){
        if(repetidos !== numeros){
            numero
        }
    }
}

function 