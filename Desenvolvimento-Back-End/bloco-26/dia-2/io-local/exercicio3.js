// // Reescreva o código do exercício anterior para que utilize async/await .
// // Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

// // const calculoMatematico = (num1, num2, num3) => {
// //   return new Promise((resolve, reject) => {
// //     if(isNaN(num1) || isNaN(num2) || isNaN(num3)) reject(Error("Informe apenas números"));
// //     const result = ( (num1 + num2) * num3 )
// //     if(result < 50) reject(Error("Valor muito baixo"));
// //     resolve(result);
// //   });
// // };

// const calculoAsync = async (num1, num2, num3) => {
//   return new Promisse((resolve, reject) => {
//     if(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//       await reject((Error("Informe apenas números")))
//     }
//     const result = ((num1 + num2) * num3)
//     if(result < 50) reject(Error("Valor muito baixo"));
//     await resolve(result);
//   });
// };

// calculoAsync(1,3,1)
//   .then(result => console.log(result))
//   .catch(error => console.log(error.message));

