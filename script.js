// Utilizando linguagem de programação Java Script ou C, resolva os seguintes problemas:
// ​1) Apresente a mensagem “Testando o Javascript”.
const botao = document.querySelector('#exercicioUm');
botao.addEventListener('click', exercicioUm);
function exercicioUm () {
    document.write("Testando o Javascript");
};
// 2) Apresente as mensagens “Exercitando algoritmos II” e também “com Javascript” (uma abaixo da outra).
document.write("Exercitando algoritmos II"<br> "com Javascript");
// 3) Ler uma variável e apresentar seu triplo.
do {
    var numeroQualquer = prompt("Insira um número qualquer");
}
 while (numeroQualquer == "" && numeroQualquer == null);
 document.write("O triplo de " + numeroQualquer + " é " + numeroQualquer * 3);
// 4) Ler uma variável e apresentar 60% da mesma.
do {
    var numeroQualquerPorcentagem = prompt("Insira um número qualquer");
}
while (numeroQualquerPorcentagem == "" && numeroQualquerPorcentagem == null);
document.write("60% desse valor é " + numeroQualquerPorcentagem / 0.40);
// 5) Perguntar o nome e o valor de um produto e apresentar o novo valor reajustado em 14,7%.
// 6) Calcular e apresentar o volume de um cone. Fórmula: VCN = ((3.1416 * R²) / 3) * H.
// 7) Solicite um valor inteiro e apresente a mensagem: NÚMERO PAR ou NÚMERO ÍMPAR.
// 8) Solicite 3 notas, calcule a média e apresente se o aluno está APROVADO ou REPROVADO, considerando média mínima 6,0 para aprovação. 
// 9) Solicitar o nome, idade, sexo e salário de uma pessoa. Posteriormente, faça o reajuste do salário de acordo com as condições abaixo e posteriormente apresente o novo salário (com reajuste):
// - Acima de 50 anos, reajuste de 35%
// - Mulheres com até 24 anos, reajuste de 18%
// - Homens com até 27 anos, reajuste de 17,5%
// - Mulheres entre 25 e 50 anos, reajuste de 23%
// - Homens entre 28e 38 anos, reajuste de 21%
// - Homens entre 39 e 50 anos, reajuste de 23%
// 10) Solicite dois valores e apresente a multiplicação de um pelo outro utilizando apenas um laço de repetição (sem o operador aritmético de multiplicação).
// 11) Solicite um valor inteiro e apresente se o mesmo é ou não um número PRIMO.
// 12) Solicite dois valores inteiros (o segundo deverá ser maior que o primeiro) e apresente todos os números PARES do intervalo (inclusive eles mesmos) utilizando o laço FOR.
// 13) Solicite dois valores inteiros (o segundo deverá ser maior que o primeiro) e apresente todos os números PARES do intervalo (inclusive eles mesmos) utilizando o laço WHILE.
// 14) Solicite dois valores inteiros (o segundo deverá ser maior que o primeiro) e apresente todos os números PARES do intervalo (inclusive eles mesmos) utilizando o laço DO - WHILE.
// 15) Construa um programa em Javascript que solicite um valor entre 1 e 12 (validando a entrada) e apresente o mês correspondente por extenso
// 16) Desenvolva um programa em Javascript que solicite 4 números e posteriormente apresente o maior número informado.
// 17) Construa um programa em Javascript que solicite 6 nomes e posteriormente apresente o maior nome da lista.
// 18) Solicite o nome e o preço de 5 produtos, e posteriormente apresente o nome do produto mais caro e seu respectivo preço. Utilize qualquer laço de repetição
// 19) Calcular e apresentar o novo valor de uma calça baseada no seu tamanho. Caso seu tamanho seja até 38, aumento de 20 %. Entre 39 e 46, aumento de 26.4 %. Qualquer numeração acima, calcule um aumento de 29.08%. Obs. O tamanho deverá ser validado entre 34 e 58 (inclusive).
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

// 21) Solicite 5 anos (formato AAAA) e posteriormente apresente o percentual de anos pares e a quantidade de anos bissextos.
// 22) Um usuário deseja um programa em Javascript pelo qual possa escolher que tipo de média deseja calcular a partir de três notas. Faça um programa em Javascript que leia as notas, a opção escolhida pelo usuário e calcule a média: 1- aritmética 2- ponderada (pesos 3, 3, 4)
// 23) Construa um programa em Javascript que solicite 3 valores inteiros. Caso os mesmos sejam distintos, apresente se a soma dos mesmos corresponde ou não a um número PAR.
// 24) Construa um programa em Javascript que solicite dois valores inteiros positivos (A,B). Posteriormente, apresente uma mensagem “é possível dividir sem resto o valor de A por B” (caso isso seja possível) ou “Não foi possível efetuar a divisão”. Obs. O valor de B deve ser menor que o valor de A.
// 25) Faça um programa em Javascript que dada a concentração de íons H+ numa solução qualquer calcule o pH desta solução e mostre se esse valor corresponde a um pH ácido, básico ou neutro