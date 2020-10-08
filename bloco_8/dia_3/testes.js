const arrayNumeros = [2,5,8,10];
let teste = arrayNumeros.reduce((armazenagem, array) => armazenagem += array , 0)

const arrayPessoas = [
    {
        nome: 'Pedro',
        idade: 99,
    },
    {
        nome: 'Joaquim',
        idade: 15,
    },
    {
        nome: 'Cirilo',
        idade: 13,
    },
    {
        nome: 'Wilson',
        idade: 10,
    },
    {
        nome: 'Andressa',
        idade: 28,
    },
    {
        nome: 'Wagner',
        idade: 24,
    },
];

let listaFaixaEtaria = arrayPessoas.reduce((faixaEtaria, pessoas) => {
    let pessoa = pessoas.idade >= 18 ? 'maiores' : 'menores';
    faixaEtaria[pessoa].push(pessoas);
    return faixaEtaria;
}, {maiores:[],menores:[]});