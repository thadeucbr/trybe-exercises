let games = 2; //Altere para a quantidade de jogos que voce quer fazer
let bets = [];

for(let j = 0; bets.length < games; j += 1){
    let megasenaNumbers = [];
    bets.push(megasenaNumbers);
    for(let i = 0; megasenaNumbers.length < 6; i += 1){
        megasenaNumbers.push(Math.ceil(Math.random() * 60));
        megasenaNumbers.sort(function(a , b){return a - b});
    };
};

console.log(bets);