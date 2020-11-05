let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 0;

for(i in numbers){
    if(menor > numbers[i] || menor == 0){
        menor = numbers[i];
    };
};
console.log(menor);