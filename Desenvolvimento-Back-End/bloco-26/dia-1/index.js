const readlineSync = require('readline-sync');

const calculoImc = () => {
  const peso = readlineSync.questionFloat("Digite seu peso: ").toFixed(2);
  const altura = readlineSync.questionFloat("Digite sua altura: ").toFixed(2);
  const result = (peso / Math.pow(altura, 2)).toFixed(1);
  switch (true) {
    case result < 18.5:
      return console.log("Abaixo do peso (magreza)");
    case result < 24.9:
      return console.log("Peso normal");
    case result < 29,9:
      return console.log("Acima do peso (sobrepeso)");
    case result < 34.9:
      return console.log("Obesidade grau I");
    case result < 39.9:
      return console.log("Obesidade grau II");
    case result > 40:
      return console.log("Obesidade graus III e IV");
  };
};

calculoImc();

const inquirer = require('inquirer');
const checkNumber = (value) => {
  if (!isNaN(value)) {
    return true;
  };
  return 'Digite um numero no formato 1.13';
};

inquirer
  .prompt([
    {
      name: "peso",
      type: "number",
      message: "Digite seu peso: ",
      validate: checkNumber,
    },
    {
      name: "altura",
      type: "input",
      message: "Digite sua altura: ",
      validate: checkNumber,
    }
  ])
  .then(answers => {
    const result = (answers.peso / answers.altura ** 2).toFixed(1);
    switch (true) {
      case result < 18.5:
        return console.log("Abaixo do peso (magreza)");
      case result < 24.9:
        return console.log("Peso normal");
      case result < 29,9:
        return console.log("Acima do peso (sobrepeso)");
      case result < 34.9:
        return console.log("Obesidade grau I");
      case result < 39.9:
        return console.log("Obesidade grau II");
      case result > 40:
        return console.log("Obesidade graus III e IV");
    };
  });
