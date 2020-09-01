/* Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****
 
*/

let n = 5;
let asterisco = '*';
let resultado = '';
let subtracao = n;

for(let linha = 0; linha < n; linha += 1){
  for(let coluna = 0; coluna <= n; coluna += 1){
    if(coluna < subtracao){
      resultado += ' ';
    }else{
      resultado += '*';
    }
  }
  console.log(resultado);
  resultado = '';
  subtracao -= 1;
}