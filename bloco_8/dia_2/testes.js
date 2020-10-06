let numbers = [19, 21, 30, 3, 45, 22, 15];

let numerosFiltrados = numbers.filter((numero) => numero % 2 === 0);
console.log(numerosFiltrados);

const objPeople = [
	{ name: 'José', age: 21 },
	{ name: 'Lucas', age: 19 },
	{ name: 'Maria', age: 16 },
	{ name: 'Gilberto', age: 18 },
	{ name: 'Vitor', age: 15 },
];

let maioresDeIdade = objPeople.filter((idade) => idade.age > 18);
console.log(maioresDeIdade);

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const removePessoa = (nome, array) => {
	let result = array.filter((pessoa) => pessoa !== nome);
	return console.log(result);
};

removePessoa('Maria', arrayMyStudents);

const persons = [
	{ firstName: 'Maria', lastName: 'Ferreira' },
	{ firstName: 'João', lastName: 'Silva' },
	{ firstName: 'Antonio', lastName: 'Cabral' },
];

let fullName = persons.map(
	(person) => `${person.firstName} ${person.lastName}`
);
console.log(fullName);

const numeros = [2, 5, 6, 10];
const multiplicados = numeros.map((multiplicador) => multiplicador * 2);
console.log(multiplicados);

numbers = [1, 2, 3, 4, -5];
const negativos = numbers.map((item) => (item > 0 ? item * -1 : item));
console.log(negativos);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
	return listProducts.map((product, index) => ({
		[product]: listPrices[index],
	}));
};
