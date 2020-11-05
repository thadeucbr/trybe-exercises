/* Ordene o array numbers em ordem crescente e imprima seus valores; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lista = [];
for (x of numbers) {
  lista.push(x * x);
}

for(let i = 1; i < lista.length; i++){
    for(let j = 0; j < i; j++){
        if(lista[i] < lista[j]){
            let posicao = lista[i];

            lista[i] = lista[j];
            lista[j] = posicao;
        }
    }
}
console.log(lista);