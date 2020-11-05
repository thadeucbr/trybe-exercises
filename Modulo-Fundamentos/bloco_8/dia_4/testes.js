const listCompany = [
	{
		name: 'blag',
		retail: 'supply',
		start: 2010,
		end: 2020,
		value: 1000,
		age: 0,
	},
	{
		name: 'bling',
		retail: 'maintence',
		start: 2009,
		end: 2010,
		value: 5000,
		age: 0,
	},
	{
		name: 'flag',
		retail: 'maintence',
		start: 2010,
		end: 2015,
		value: 7000,
		age: 0,
	},
	{
		name: 'fresh',
		retail: 'cleaning',
		start: 2000,
		end: 2020,
		value: 3000,
		age: 0,
	},
	{
		name: 'force',
		retail: 'workers',
		start: 2001,
		end: 2004,
		value: 2000,
		age: 0,
	},
	{
		name: 'blag',
		retail: 'supply',
		start: 2010,
		end: 2020,
		value: 10000,
		age: 0,
	},
];
listCompany.forEach((company) => (company.age = company.end - company.start));
const name = listCompany
	.filter((company) => company.age > 2 && company.age < 10)
	.sort((a, b) => a.age - b.age);

listCompany.sort((a, b) => a.age - b.age);
let filtro = listCompany.find((item) => item.name.includes('blag'));

const validateMinNumber = (nr) => (nr === undefined || nr < 6 ? 6 : nr);
const validadeMinGame = (gm) => (gm === undefined ? 1 : gm);
const megasena = (numbers, games) => {
	numbers = validateMinNumber(numbers);
	games = validadeMinGame(games);
	let game = [];
	for (let i = 0; i < games; i += 1) {
		let numb = [];
		game.push(numb);
		for (let a = 0; a < numbers; a += 1) {
			let random = Math.floor(Math.random() * 60 + 1);
			if (numb.some((nr) => nr === random)) {
				random = Math.floor(Math.random() * 60 + 1);
			}
			numb.push(random);
		}
	}
	return game;
};

let randomNumbers = megasena(10,100);
randomNumbers.forEach((game) => game.sort((a, b) => a - b));
console.log(randomNumbers)