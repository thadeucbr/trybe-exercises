/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Faça programas para: */
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}
/* Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. */
function exercicioDois(a, b) {
  if (a > b) {
    return "A é maior que B";
  } else {
    return "B é maior que A";
  }
}
/* Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. */
function exercicioTres(a, b, c) {
  if (a > b && a > c) {
    return "A é o maior";
  } else if (b > a && b > c) {
    return "B é o maior";
  } else {
    return "C é o maior";
  }
}
/* Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */
function exercicioQuatro(a) {
  if (a > 0) {
    return "Positivo";
  } else if (a < 0) {
    return "Negativo";
  } else {
    return "O valor é zero";
  }
}
/* Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
    Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro. */
function exercicioCinco(a, b, c) {
  c += a + b;

  if (c == 180) {
    triangulo = true;
    return triangulo;
  } else {
    triangulo = false;
    return triangulo;
  }
}
/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
      Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. 
        Exemplo: bishop -> diagonals*/
function exercicioSeis(seletor) {
  seletor = seletor.toLowerCase();
  switch (seletor) {
    case "peao":
      return "Anda para frente 1 bloco por vez";
      break;
    case "torre":
      return "Anda quantas casas quiser na vertical e horizontal";
      break;
    case "rei":
      return "Anda em qualquer direção 1 casa por vez";
      break;
    case "rainha":
      return "anda em qualquer direção e qualquer quantidade de blocos";
      break;
    default:
      return "Peça invalida escolha: Peao, Torre, Rei ou Rainha";
  }
}
/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
    Porcentagem >= 90 -> A
    Porcentagem >= 80 -> B
    Porcentagem >= 70 -> C
    Porcentagem >= 60 -> D
    Porcentagem >= 50 -> E
    Porcentagem < 50 -> F
        O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
 */
function exercicioSete(nota) {
  if (nota >= 90 && nota <= 100) {
    nota = "A";
  } else if (nota >= 80 && nota < 90) {
    nota = "B";
  } else if (nota >= 70 && nota < 80) {
    nota = "C";
  } else if (nota >= 60 && nota < 70) {
    nota = "D";
  } else if (nota >= 50 && nota < 60) {
    nota = "E";
  } else if (nota < 50 && nota >= 0) {
    nota = "F";
  } else {
    console.log("Erro");
  }
  return nota;
}
/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
    Bonus: use somente um if. */
function exercicioOito(a, b, c) {
  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    return "True";
  } else {
    return "False";
  }
}
/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
    Bonus: use somente um if. */
function exercicioNove(n1, n2, n3) {
  if (n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 != 0) {
    return "True";
  } else {
    return "False";
  }
}
/* Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
    Atente que, sobre o custo do produto, incide um imposto de 20%.
        Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
            O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
                valorCustoTotal = valorCusto + impostoSobreOCusto
                    lucro = valorVenda - valorCustoTotal (lucro de um produto) */
function exercicioDez(custo, venda) {
  custo *= 1000;
  venda *= 1000;
  lucro = venda - custo;
  lucro -= lucro * 0.2;
  if (custo < 0 || venda < 0) {
    return "Erro";
  } else {
    return lucro;
  }
}
/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

    INSS
        Salário bruto até R$ 1.556,94: alíquota de 8%
        Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    IR
        Até R$ 1.903,98: isento de imposto de renda
        De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

    O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
    
    Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
    
    Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
    
    R$ 2.670,00: salário com INSS já deduzido;
    
    7.5%: alíquota de imposto de renda;
    
    R$ 142,00 parcela a se deduzir do imposto.
    
    Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
    
    O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
    
    Resultado: R$ 2.612,55.

Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */
function exercicioOnze(salarioBruto) {
  if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
  } else if (salarioBruto >= 1556.95 && salarioBruto < 2594.93) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
  } else {
    inss = 570.88;
  }

  salarioBruto = salarioBruto - inss;

  if (salarioBruto <= 1903.98) {
    ir = 0;
  } else if (salarioBruto > 1903.98 && salarioBruto < 2826.66) {
    ir = salarioBruto * 0.075;
    ir = ir - 142.8;
  } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    ir = salarioBruto * 0.15;
    ir = ir - 354.8;
  } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    ir = salarioBruto * 22.5;
    ir = ir - 636.13;
  } else {
    ir = salarioBruto * 0.275;
    ir = ir - 869.36;
  }

  salarioLiquido = salarioBruto - ir;
  return salarioLiquido;
}
console.log(exercicioDez(100, 150));