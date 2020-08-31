let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0;
for(let i in numbers){
    sum += numbers[i];
};
sum /= numbers.length;

if(sum > 20){
    console.log(`Valor maior que 20`);
} else {
    console.log(`Valor menor ou igual a 20`);
};