// - monte uma matriz 10x5 contendo os primeiros 50 caracteres da frase, aternando entre maiúsculo e minúsculo
// - Apresente:
//   - a matriz
//   - a quantidade de palavras palíndromos
//   - a quantidade de vogais
//   - a quantidade de consoantes
//   - a quantidade de espaços

// frase para teste "Beber água hidrata e faz bem para o organismo beba"
var texto;
var mensagem;
var mensagemErro;
var mensagemDividida;
var mensagemMaiuscula;
var mensagemInvertida;
var contadora = 0;

var vetor = [];
var matriz = new Array();

function armazenarTexto() {
    texto = document.getElementById("texto").value;
    mensagem = document.getElementById("mensagem");
    mensagemErro = document.getElementById("mensagem-erro");

    if (texto.length < 50)
    {
        var erro1 = "Informe uma frase com no mínimo 50 caracteres!"; 
        mensagemErro.innerHTML = erro1;
        mensagem.innerHTML = "";
    }
    else
    {
        mensagemErro.innerHTML = "";
        mensagem.innerHTML = "Sua mensagem: " + texto;
    }
};

function dividirTexto(texto) {
    var palavras = texto.split(" ");
    mensagemDividida = document.getElementById("mensagem-dividida");
    contadora = document.getElementById("contadora");

    for (var i = 0; i < palavras.length; i++) {
        vetor.push(palavras[i]);

        if (vetor[i].split("") === "a" || vetor[i].split("") === "e" || vetor[i].split("") === "i" || 
            vetor[i].split("") === "o" || vetor[i].split("") === "u")
            {
                contadora.innerHTML += 1;
            } else {
                contadora.innerHTML += 1;
            }
    }

    mensagemDividida.innerHTML = "Palavras separadas: " + vetor;
};

function modificarTextoMaiusculo(vetor) {
    mensagemMaiuscula = document.getElementById("mensagem-maiuscula");

    for (var i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i].toUpperCase();
    }

    mensagemMaiuscula.innerHTML = "Palavras maiusculas: " + vetor;
}

function inverterTexto(vetor) {
    mensagemInvertida = document.getElementById("mensagem-invertida");
    contadoraInvertida = document.getElementById("contadora");

    for (var i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i].split('').reverse().join('');
        
        if (vetor[i] === vetor[i].split('').reverse().join(''))
        contadora.innerHTML += 1;
    }

    mensagemInvertida.innerHTML = "Palavras invertidas: " + vetor;
}

function matrizTexto(vetor) {
    matrizMensagem = document.getElementById("mensagem-matriz");

    for (var l = 0; l < vetor.length; l++) {
        for (var c = 0; c < vetor[l].length; c++) {
            vetor[l][c] = vetor[l].split('');
        }
    }

    matrizMensagem.innerHTML = "Matriz: " + vetor;
}