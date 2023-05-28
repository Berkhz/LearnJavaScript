var texto;
var mensagem;
var mensagemErro;
var mensagemDividida;
var mensagemMaiuscula;
var mensagemInvertida;
var contadora = 0;

var vetor = [];
var matriz = new Array();

function executarCodigo() {
    armazenarTexto();
    if (texto.length < 50) {
        return;
    }
    dividirTexto(texto); 
    modificarTextoMaiusculo(vetor); 
    inverterTexto(vetor); 
    matrizTexto(vetor);
}

function armazenarTexto() {
    texto = document.getElementById("texto").value;
    mensagem = document.getElementById("mensagem");
    mensagemErro = document.getElementById("mensagem-erro");

    if (texto.length < 50)
    {
        var erro1 = "Informe uma frase com no mínimo 50 caracteres!"; 
        mensagemErro.innerHTML = erro1;
        mensagemErro.style.display = "block";
        mensagem.innerHTML = "";
        return;
    }
    else
    {
        mensagemErro.innerHTML = "";
        mensagem.innerHTML = "Sua mensagem: <br>" + texto;
    }
};

function dividirTexto(texto) {
    var palavras = texto.split(" ");
    mensagemDividida = document.getElementById("mensagem-dividida");
    contadora = document.getElementById("contadora");
    contadora.innerHTML = "";

    for (var i = 0; i < palavras.length; i++) {
        vetor.push(palavras[i]);

        var vogais = contarVogais(palavras[i]);
        var consoantes = palavras[i].length - vogais;
        var espacos = contarEspacos(palavras[i]);

        contadora.innerHTML += "Palavra: " + vetor[i] + "<br>";
        
        if (ehPalindromo(vetor[i])) {
            contadora.innerHTML += "Palíndromo: " + vetor[i] + "<br>";
        }

        contadora.innerHTML += "Quantidade de vogais: " + vogais + "<br>";
        contadora.innerHTML += "Quantidade de consoantes: " + consoantes + "<br>";
        contadora.innerHTML += "Quantidade de espaços: " + espacos + "<br><br>";
    }

    mensagemDividida.innerHTML = "Palavras separadas: " + vetor;
};

function modificarTextoMaiusculo(vetor) {
    mensagemMaiuscula = document.getElementById("mensagem-maiuscula");

    if (texto.length < 50) {
        return;
    }

    for (var i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i].toUpperCase();
    }

    mensagemMaiuscula.innerHTML = "Palavras maiusculas: " + vetor;
};

function inverterTexto(vetor) {
    mensagemInvertida = document.getElementById("mensagem-invertida");
    contadoraInvertida = document.getElementById("contadora");

    if (texto.length < 50) {
        return;
    }

    for (var i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i].split('').reverse().join('');
    }

    mensagemInvertida.innerHTML = "Palavras invertidas: " + vetor;
};

function matrizTexto(vetor) {
    matrizMensagem = document.getElementById("mensagem-matriz");
    
    var caracteres = texto.substr(0, 50).split('');

    for (var l = 0; l < 10; l++) {
        matriz[l] = [];

        for (var c = 0; c < 5; c++) {
            var index = l * 5 + c;
            matriz[l][c] = caracteres[index] || '';
            if ((l + c) % 2 === 0) {
                matriz[l][c] = matriz[l][c].toUpperCase();
            } else {
                matriz[l][c] = matriz[l][c].toLowerCase();
            }
        }
    }

    var matrizVisual = '';

    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            matrizVisual += matriz[i][j] + ' ';
        }
        matrizVisual += '<br>';
    }

    matrizMensagem.innerHTML = "Matriz:<br>" + matrizVisual;
};

function ehPalindromo(palavras) {
    var inversa = palavras.split('').reverse().join('');
    return palavras.toLowerCase() === inversa.toLowerCase();
};

function contarVogais(palavras) {
    var vogais = palavras.match(/[aeiou]/gi);
    return vogais ? vogais.length : 0;
};

function contarEspacos(palavras) {
    var espacos = palavras.match(/ /g);
    return espacos ? espacos.length : 0;
};

function limparResultados() {
    vetor = [];
    matriz = new Array();
    mensagem.innerHTML = "";
    mensagemDividida.innerHTML = "";
    mensagemMaiuscula.innerHTML = "";
    mensagemInvertida.innerHTML = "";
    matrizMensagem.innerHTML = "";
    contadora.innerHTML = "";
};