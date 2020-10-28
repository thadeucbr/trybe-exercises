const { rejects } = require("assert");
const { promises } = require("fs");
const { resolve } = require("path")

//Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. 

const randomArray = () => {
    let array = []
    for(let i = 0; i < 10; i += 1){
        let number = Math.random()*50 +1;
        let n = number.toFixed()
        n = Math.pow(n, 2);
        array.push(n);
    }
    return array;
}

const sumArray = (array = []) => {
    array = randomArray()
    return array.reduce((acc, number) => acc + number)
}

const newPromisse = () => {
    return new Promise((resolve, reject) => {
        if(sumArray() < 8000)
        try {
            resolve(console.log('foi'))
        } catch (error) {
            console.log('Não foi')
        }
    })
}

newPromisse()
//Primeiramente, instancie uma Promise. 

//Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. 

//Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. 

//Caso contrário, ela deve ser rejeitada. 

//Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

//Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

//Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

//Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"

//Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.