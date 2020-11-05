/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

let numbers = [2, 2, 2, 2, 72, 2, 100, 3, 3, 3];
let impar = [];
for(let x of numbers){
    if(x %2 != 0){
        impar.push(x);
    };
};
if(impar.length > 1){
    console.log("Existem " + impar.length + " Numeros impares na array!");
} else if (impar.length == 1){
    console.log("Existe 1 numero impar na array!");
} else {
    console.log("A array não possui numeros impares");
};