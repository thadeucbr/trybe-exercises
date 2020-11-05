function contadorRepeticao(numeros) {
  let result = {};
  numeros.forEach(function (x) {
    result[x] = (result[x] || 0) + 1;
  });
  for (let i in result) {
    if (result[i] > 2) {
      return `Mais de 3 numeros repetidos`;
    }
    return `Deu!`;
  }
}
console.log(comparadorNumeros([1, 2, 3, 4]));
