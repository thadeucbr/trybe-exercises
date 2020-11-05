/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
      Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. 
        Exemplo: bishop -> diagonals*/

let seletor = "TORRE";
seletor= seletor.toLowerCase();
switch (seletor) {
  case "peao":
    console.log("Anda para frente 1 bloco por vez");
    break;
  case "torre":
    console.log("Anda quantas casas quiser na vertical e horizontal");
    break;
  case "rei":
    console.log("Anda em qualquer direção 1 casa por vez");
    break;
  case "rainha":
    console.log("anda em qualquer direção e qualquer quantidade de blocos");
    break;
    default:
        console.log("Peça invalida");
}
