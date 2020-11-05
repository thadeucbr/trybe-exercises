/* Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. */
let a = 3;
let b = 2;
let c = 1;

if (a > b && a > c) {
    console.log("A é o maior");
    console.log(a);
} else if (b > a && b > c) {
    console.log("B é o maior");
    console.log(b)
}else{
    console.log("C é o maior");
    console.log(c);
}