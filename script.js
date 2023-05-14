// Utilizando linguagem de programação Java Script ou C, resolva os seguintes problemas:
// ​1) Apresente a mensagem “Testando o Javascript”.
const botao = document.querySelector('#exercicioUm');
botao.addEventListener('click', exercicioUm);

function exercicioUm() {
  document.write("Testando o JavaScript");
};
// 2) Apresente as mensagens “Exercitando algoritmos II” e também “com Javascript” (uma abaixo da outra).
const botao2 = document.querySelector('#exercicioDois');
botao2.addEventListener('click', exercicioDois);

function exercicioDois() {
  document.write("Exercitando algoritmos II<br>com JavaScript");
};
// 3) Ler uma variável e apresentar seu triplo.
const botao3 = document.querySelector('#exercicioTres');
botao3.addEventListener('click', exercicioTres);

function exercicioTres() {
  do {
    var numeroQualquer = prompt("Insira um número qualquer");
  } while (numeroQualquer == "" || numeroQualquer == null);
  
  var triplo = numeroQualquer * 3;
  document.write("O triplo de " + numeroQualquer + " é " + triplo);
};
// 4) Ler uma variável e apresentar 60% da mesma.
const botao4 = document.querySelector('#exercicioQuatro');
botao4.addEventListener('click', exercicioQuatro);

function exercicioQuatro() {
  do {
    var numeroQualquerPorcentagem = prompt("Insira um número qualquer");
  } while (numeroQualquerPorcentagem == "" || numeroQualquerPorcentagem == null);

  var valorPorcentagem = numeroQualquerPorcentagem * 0.6;
  document.write("60% desse valor é " + valorPorcentagem);
};
// 5) Perguntar o nome e o valor de um produto e apresentar o novo valor reajustado em 14,7%.
const botao5 = document.querySelector('#exercicioCinco');
botao5.addEventListener('click', exercicioCinco);

function exercicioCinco() {
  var nome = prompt("Qual seu nome");
  var valor = prompt("Valor do produto");
  valor = valor * 1.147
  document.write("O novo valor do produto " + nome + " é de " + valor);
};
// 6) Calcular e apresentar o volume de um cone. Fórmula: VCN = ((3.1416 * R²) / 3) * H.
const botao6 = document.querySelector('#exercicioSeis');
botao6.addEventListener('click', exercicioSeis);

function exercicioSeis() {
  var raio = prompt("Informe o valor do raio:");
  var altura = prompt("Informe o valor da altura:");

  var volumeCone = (3.1416 * (raio * raio) / 3) * altura;
  document.write("O volume do cone é de: " + volumeCone.toFixed(1));
};
// 7) Solicite um valor inteiro e apresente a mensagem: NÚMERO PAR ou NÚMERO ÍMPAR.
const botao7 = document.querySelector('#exercicioSete');
botao7.addEventListener('click', exercicioSete);

function exercicioSete() {
  var valorInteiro = prompt("Informe um valor inteiro");
  if (valorInteiro % 2 == 0){
    document.write("O valor " + valorInteiro + " inserido é PAR")
    } else if (valorInteiro % 2 == 1){
    document.write("O valor " + valorInteiro + " inserido é ÍMPAR")
    } else {
    document.write("O valor " + valorInteiro + " inserido é INVÁLIDO")
  }
};
// 8) Solicite 3 notas, calcule a média e apresente se o aluno está APROVADO ou REPROVADO, considerando média mínima 6,0 para aprovação.
const botao8 = document.querySelector('#exercicioOito');
botao8.addEventListener('click', exercicioOito);

function exercicioOito() {
  var nota1 = prompt("Informe a primeira nota:");
  var nota2 = prompt("Informe a segunda nota:");
  var nota3 = prompt("Informe a terceira nota:");
  var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
  if (media >= 6) {
    document.write("A média do aluno é " + media + "<br>");
    document.write("Aluno aprovado!");
  } else if (media < 6){
    document.write("A média do aluno é " + media);
    document.write("Aluno reprovado!");
  } else {
    document.write("Algo deu errado! Tente novamente!");
  }  
};
// 9) Solicitar o nome, idade, sexo e salário de uma pessoa. Posteriormente, faça o reajuste do salário de acordo com as condições abaixo e posteriormente apresente o novo salário (com reajuste):
// - Acima de 50 anos, reajuste de 35%
// - Mulheres com até 24 anos, reajuste de 18%
// - Homens com até 27 anos, reajuste de 17,5%
// - Mulheres entre 25 e 50 anos, reajuste de 23%
// - Homens entre 28e 38 anos, reajuste de 21%
// - Homens entre 39 e 50 anos, reajuste de 23%
const botao9 = document.querySelector('#exercicioNove');
botao9.addEventListener('click', exercicioNove);

function exercicioNove() {
  var nome = prompt("Informe seu nome:");
  var idade = prompt("Informe sua idade:");
  var sexo = prompt("Informe seu sexo (F/M):");
  var salario = prompt("Informe seu salário:");

  if (sexo == 'F' || sexo == 'f' && idade <= 24){
    salario = parseInt(salario * 1.18);
    document.write(nome + " seu novo salário é de: " + salario.toFixed(2));
  }
  else if (sexo == 'M' || sexo == 'm' && idade <= 27){
    salario = parseInt(salario * 1.175);
    document.write(nome + " seu novo salário é de: " + salario.toFixed(2));
  }
  else if (sexo == 'F' || sexo == 'f' && idade >= 25 && idade <= 50){
    salario = parseInt(salario * 1.23);
    document.write(nome + " seu novo salário é de: " + salario.toFixed(2));
  }
  else if (sexo == 'M' || sexo == 'm' && idade >= 28 && idade <= 38){
    salario = parseInt(salario * 1.21);
    document.write(nome + " seu novo salário é de: " + salario.toFixed(2));
  }
  else if (sexo == 'M' || sexo == 'm' && idade >= 39 && idade <= 50){
    salario = parseInt(salario * 1.23);
    document.write(nome + " seu novo salário é de: " + salario.toFixed(2));
  }
  else if (idade > 50){
    salario = parseInt(salario * 1.35);
    document.write(nome + " seu novo salário é de: " + salario.toFixed(2));
  }
};
// 10) Solicite dois valores e apresente a multiplicação de um pelo outro utilizando apenas um laço de repetição (sem o operador aritmético de multiplicação).
const botao10 = document.querySelector('#exercicioDez');
botao10.addEventListener('click', exercicioDez);

function exercicioDez() {
  var valor1 = prompt("Informe um valor:");
  var valor2 = prompt("Informe o valor que irá multiplicar");
  var resultado = 0;

  for (var count = 1; count <= valor2; count++) {
    resultado += parseInt(valor1);
  }
  document.write(valor1 + " x " + valor2 + " = " + resultado);
};
// 11) Solicite um valor inteiro e apresente se o mesmo é ou não um número PRIMO.
const botao11 = document.querySelector('#exercicioOnze');
botao11.addEventListener('click', exercicioOnze);

function exercicioOnze() {
  var valorInteiro = prompt("Informe um valor inteiro:");
  if (parseInt(valorInteiro) == 2){
    document.write(valorInteiro + " É PRIMO");
  } else if (parseInt(valorInteiro) / 1 == parseInt(valorInteiro)) {
    if (parseInt(valorInteiro) / parseInt(valorInteiro) == 1)
    {
      if(parseInt(valorInteiro) % 2 == 0)
      {
        document.write(valorInteiro + " NÃO É PRIMO");
      } else {
        document.write(valorInteiro + " É PRIMO");
      }
    }
  }
};
// 12) Solicite dois valores inteiros (o segundo deverá ser maior que o primeiro) e apresente todos os números PARES do intervalo (inclusive eles mesmos) utilizando o laço FOR.
const botao12 = document.querySelector('#exercicioDoze');
botao12.addEventListener('click', exercicioDoze);

function exercicioDoze() {
  do {
    var valor1 = parseInt(prompt("Informe o primeiro valor inteiro:"));
    var valor2 = parseInt(prompt("Informe o segundo valor inteiro:"));
  }
  while (valor2 <= valor1);

  for (var count = 1; valor2 >= valor1; count++)
  {
    if (valor1 % 2 == 0)
    {
      document.write(valor1 + "<br>");
    }
    valor1 = valor1 + 1;
  }
};
// 13) Solicite dois valores inteiros (o segundo deverá ser maior que o primeiro) e apresente todos os números PARES do intervalo (inclusive eles mesmos) utilizando o laço WHILE.
const botao13 = document.querySelector('#exercicioTreze');
botao13.addEventListener('click', exercicioTreze);

function exercicioTreze() {
  do {
    var valor1 = parseInt(prompt("Informe o primeiro valor inteiro:"));
    var valor2 = parseInt(prompt("Informe o segundo valor inteiro:"));
  }
  while (valor2 <= valor1);

  while (valor2 >= valor1) {
    if (valor1 % 2 == 0)
    {
      document.write(valor1 + "<br>");
    }
    valor1 = valor1 + 1;
  }
};
// 14) Solicite dois valores inteiros (o segundo deverá ser maior que o primeiro) e apresente todos os números PARES do intervalo (inclusive eles mesmos) utilizando o laço DO - WHILE.
const botao14 = document.querySelector('#exercicioQuatorze');
botao14.addEventListener('click', exercicioQuatorze);

function exercicioQuatorze() {
  do {
    var valor1 = parseInt(prompt("Informe o primeiro valor inteiro:"));
    var valor2 = parseInt(prompt("Informe o segundo valor inteiro:"));
  }
  while (valor2 <= valor1);

  do {
    if (valor1 % 2 == 0)
    {
      document.write(valor1 + "<br>");
    }
    valor1 = valor1 + 1;
  }
  while (valor2 >= valor1);
};
// 15) Construa um programa em Javascript que solicite um valor entre 1 e 12 (validando a entrada) e apresente o mês correspondente por extenso
const botao15 = document.querySelector('#exercicioQuinze');
botao15.addEventListener('click', exercicioQuinze)

function exercicioQuinze() {
  do {
  var escolha = parseInt(prompt("Informe um valor entre 1 e 12"));
  }
  while (escolha < 1 || escolha > 12);
  switch (escolha) {
    case 1:
      document.write("Janeiro");
      break;
    case 2:
        document.write("Fevereiro");
      break;
    case 3:
        document.write("Março");
      break;
    case 4:
        document.write("Abril");
      break;
    case 5:
        document.write("Maio");
      break;
    case 6:
        document.write("Junho");
      break;
    case 7:
        document.write("Julho");
      break;
    case 8:
        document.write("Agosto");
      break;
    case 9:
        document.write("Setembro");
      break;
    case 10:
        document.write("Outubro");
      break;
    case 11:
        document.write("Novembro");
      break;
    case 12:
        document.write("Dezembro");
      break;
    default:
        document.write("Comando inválido");
  }
};
// 16) Desenvolva um programa em Javascript que solicite 4 números e posteriormente apresente o maior número informado.
const botao16 = document.querySelector('#exercicioDezesseis');
botao16.addEventListener('click', exercicioDezesseis);

function exercicioDezesseis() {
  var valores = [];
  var maior = -Infinity;
  
  for (var x = 1; x <= 4; x++) {
    var valor = parseInt(prompt("Informe o " + x + "º valor:"));
    valores.push(valor);
    
    if (valor > maior) {
      maior = valor;
    }
  }
  document.write("O maior numero informado: " + maior);
};
// 17) Construa um programa em Javascript que solicite 6 nomes e posteriormente apresente o maior nome da lista.
const botao17 = document.querySelector('#exercicioDezessete');
botao17.addEventListener('click', exercicioDezessete);

function exercicioDezessete() {
  var nomes = [];
  var maior = "";
  
  for (var x = 1; x <= 6; x++) {
    var nome = prompt("Informe o " + x + "º nome: ");
    nomes.push(nome);
    
    if (nome.length > maior.length) {
      maior = nome;
    }
  }
  document.write("O maior nome da lista: " + maior);
};
// 18) Solicite o nome e o preço de 5 produtos, e posteriormente apresente o nome do produto mais caro e seu respectivo preço. Utilize qualquer laço de repetição
const botao18 = document.querySelector('#exercicioDezoito');
botao18.addEventListener('click', exercicioDezoito);

function exercicioDezoito() {
  var nomes = [];
  var precos = [];
  var maior = 0;
  var produto = "";
  
  for (var x = 1; x <= 5; x++) {
    var nome = prompt("Informe o " + x + "º produto: ");
    nomes.push(nome);

    var preco = parseInt(prompt("Informe o " + x + "º preço: "));
    precos.push(preco);

    if (preco > maior) {
      maior = preco;
      produto = nome;
    }
  }
  document.write("O produto mais caro: " + produto + " seu preço: " + maior);
};
// 19) Calcular e apresentar o novo valor de uma calça baseada no seu tamanho. Caso seu tamanho seja até 38, aumento de 20 %. Entre 39 e 46, aumento de 26.4 %. Qualquer numeração acima, calcule um aumento de 29.08%. Obs. O tamanho deverá ser validado entre 34 e 58 (inclusive).
const botao19 = document.querySelector('#exercicioDezenove');
botao19.addEventListener('click', exercicioDezenove);

function exercicioDezenove() {
  var valorCalca, tamanhoCalca;
  
  do {
    valorCalca = prompt("Qual o valor da calça?");
    tamanhoCalca = prompt("Qual o tamanho da calça?");
  } while (tamanhoCalca < 34 || tamanhoCalca > 58);

  if (tamanhoCalca <= 38) {
    valorCalca *= 1.20;
    document.write("Novo valor da calça de tamanho " + tamanhoCalca + " é de: R$" + valorCalca);
  } else if (tamanhoCalca >= 39 && tamanhoCalca <= 46) {
    valorCalca *= 1.264;
    document.write("Novo valor da calça de tamanho " + tamanhoCalca + " é de: R$" + valorCalca);
  } else if (tamanhoCalca > 46) {
    valorCalca *= 1.2908;
    document.write("Novo valor da calça de tamanho " + tamanhoCalca + " é de: R$" + valorCalca);
  }
};
// 20) Crie um programa em Javascript chamado Zodíaco. Este programa em Javascript deve ler a data do seu aniversário e atribuir um valor para a variável inteira chamada signo, conforme lista abaixo:
// a) 1 º signo do zodíaco: Aquário (21/jan a 19/fev)
// b) 2º signo do zodíaco: Peixes (20/fev a 20/mar)
// c) 3º signo do zodíaco: Áries (21/mar a 20/abr)
// d) 4º signo do zodíaco: Touro (21/abr a 20/mai)
// e) 5º signo do zodíaco: Gêmeos (21/mai a 20/jun)
// f) 6º signo do zodíaco: Câncer (21/jun a 21/jul)
// g) 7º signo do zodíaco: Leão (22/jul a 22/ago)
// h) 8º signo do zodíaco: Virgem (23/ago a 22/set)
// i) 9º signo do zodíaco: Libra (23/set a 22/out)
// j) 10º signo do zodíaco: Escorpião (23/out a 21/nov)
// k) 11º signo do zodíaco: Sagitário (22/nov a 21/dez)
// l) 12º signo do zodíaco: Capricórnio (22/dez a 20/jan).
const botao20 = document.querySelector('#exercicioVinte');
botao20.addEventListener('click', exercicioVinte);

function exercicioVinte() {
  var dia = parseInt(prompt("Digite o dia do seu aniversário:"));
  var mes = parseInt(prompt("Digite o mês do seu aniversário:"));

  var signo = "";

  if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 19)) {
    signo = "Aquário";
  } else if ((mes === 2 && dia >= 20) || (mes === 3 && dia <= 20)) {
    signo = "Peixes";
  } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
    signo = "Áries";
  } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
    signo = "Touro";
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
    signo = "Gêmeos";
  } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 21)) {
    signo = "Câncer";
  } else if ((mes === 7 && dia >= 22) || (mes === 8 && dia <= 22)) {
    signo = "Leão";
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    signo = "Virgem";
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    signo = "Libra";
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    signo = "Escorpião";
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    signo = "Sagitário";
  } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) {
    signo = "Capricórnio";
  }
  document.write("O signo do zodíaco é: " + signo);
};
// 21) Solicite 5 anos (formato AAAA) e posteriormente apresente o percentual de anos pares e a quantidade de anos bissextos.
const botao21 = document.querySelector('#exercicioVinteUm');
botao21.addEventListener('click', exercicioVinteUm);

function exercicioVinteUm() {
  var anos = [];

  for (var i = 1; i <= 5; i++) {
    anos.push(parseInt(prompt("Informe o " + i + "º ano: ")));
  }

  var anosPares = 0;
  var anosBissextos = 0;

  for (var j = 0; j < anos.length; j++) {
    if (anos[j] % 2 === 0) {
      anosPares++;
      document.write("O ano " + anos[j] + " é par.<br>");
    }

    if ((anos[j] % 4 === 0 && anos[j] % 100 !== 0) || anos[j] % 400 === 0) {
      anosBissextos++;
    }
  }

  var percentualPares = (anosPares / anos.length) * 100;

  document.write("Percentual de anos pares: " + percentualPares + "%<br>");
  document.write("Quantidade de anos bissextos: " + anosBissextos);
};
// 22) Um usuário deseja um programa em Javascript pelo qual possa escolher que tipo de média deseja calcular a partir de três notas. Faça um programa em Javascript que leia as notas, a opção escolhida pelo usuário e calcule a média: 1- aritmética 2- ponderada (pesos 3, 3, 4)
const botao22 = document.querySelector('#exercicioVinteDois');
botao22.addEventListener('click', exercicioVinteDois);

function exercicioVinteDois(){
  const nota1 = parseFloat(prompt("Digite a primeira nota:"));
  const nota2 = parseFloat(prompt("Digite a segunda nota:"));
  const nota3 = parseFloat(prompt("Digite a terceira nota:"));

  const opcao = parseInt(prompt("Escolha o tipo de média:\n1 - Aritmética\n2 - Ponderada (pesos 3, 3, 4)"));

  let media;

  if (opcao === 1) {
    // Média aritmética: soma das notas dividida pela quantidade de notas
    media = (nota1 + nota2 + nota3) / 3;
  } else if (opcao === 2) {
    // Média ponderada: soma das notas multiplicadas pelos pesos, dividida pela soma dos pesos
    media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10;
  } else {
    document.write("Opção inválida!");
    // Se o usuário não escolher uma opção válida, o programa exibirá uma mensagem de erro
  }

  if (media !== undefined) {
    document.write("A média é: " + media.toFixed(2));
  }
};
// 23) Construa um programa em Javascript que solicite 3 valores inteiros. Caso os mesmos sejam distintos, apresente se a soma dos mesmos corresponde ou não a um número PAR.
const botao23 = document.querySelector('#exercicioVinteTres');
botao23.addEventListener('click', exercicioVinteTres);

function exercicioVinteTres() {
  const valor1 = parseInt(prompt("Digite o primeiro valor inteiro:"));
  const valor2 = parseInt(prompt("Digite o segundo valor inteiro:"));
  const valor3 = parseInt(prompt("Digite o terceiro valor inteiro:"));

  if (valor1 !== valor2 && valor1 !== valor3 && valor2 !== valor3) {
    const soma = valor1 + valor2 + valor3;
    if (soma % 2 === 0) {
      document.write("A soma dos valores é um número par.");
    } else {
      document.write("A soma dos valores não é um número par.");
    }
  } else {
    document.write("Os valores informados não são distintos.");
  }
};
// 24) Construa um programa em Javascript que solicite dois valores inteiros positivos (A,B). Posteriormente, apresente uma mensagem “é possível dividir sem resto o valor de A por B” (caso isso seja possível) ou “Não foi possível efetuar a divisão”. Obs. O valor de B deve ser menor que o valor de A.
const botao24 = document.querySelector('#exercicioVinteQuatro');
botao24.addEventListener('click', exercicioVinteQuatro);

function exercicioVinteQuatro() {
  do {
    var A = parseInt(prompt("Digite o valor de A:"));
    var B = parseInt(prompt("Digite o valor de B:"));
  }
  while(B > A);

  if (A % B === 0) {
    document.write("É possível dividir sem resto o valor de A por B");
  } else {
    document.write("Não foi possível efetuar a divisão");
  }
};
// 25) Faça um programa em Javascript que dada a concentração de íons H+ numa solução qualquer calcule o pH desta solução e mostre se esse valor corresponde a um pH ácido, básico ou neutro
const botao25 = document.querySelector('#exercicioVinteCinco');
botao25.addEventListener('click', exercicioVinteCinco);

function exercicioVinteCinco() {
  var concentracaoH = parseFloat(prompt("Digite a concentração de íons H+ (em mol/L):"));

  var pH = -Math.log10(concentracaoH);

  var classificacao = "";

  if (pH < 7) {
    classificacao = "ácido";
  } else if (pH > 7) {
    classificacao = "básico";
  } else {
    classificacao = "neutro";
  }

  document.write("O pH da solução é " + pH.toFixed(2) + " e é classificado como " + classificacao);
};