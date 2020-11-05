/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 1, 35, 27];
let resultado = 0;
for (let x of numbers){
    if(resultado > x || resultado == 0){
        resultado = x;
    };
};

console.log(resultado);