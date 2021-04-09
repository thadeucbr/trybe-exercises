// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
const calculoMatematico = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if(isNaN(num1) || isNaN(num2) || isNaN(num3)) reject(Error("Informe apenas números"));
    const result = ( (num1 + num2) * num3 )
    if(result < 50) reject(Error("Valor muito baixo"));
    resolve(result);
  });
};

  export default calculoMatematico;