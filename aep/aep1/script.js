// Preencha uma matriz 10x10 com valores aleatórios (nao repetidos) entre 1 e 1000.
// Posteriormente, alimente um vetor contendo apenas os valores pares da matriz, classificando-o em ordem crescente.
// Em seguida, alimente um segundo vetor contendo os números primos da matriz, classificando-o em orden decrescente.
// Por fim, alimente um terceiro vetor contendo apenas a interseção entre os dois primeiros vetores.

// Apresente no final a matriz e os três vetores

var matriz = new Array();
var matrizParCrescente = new Array();
var matrizPrimosDecrescente = new Array();
var matrizIntersecao = new Array();

// Preenchendo uma matriz aleatoriamente

for (var i = 0; i < 10; i++) {
    matriz[i] = [];
    for (var y = 0; y < 10; y++) {
        var numeroAleatorio;
        do 
        {
            numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
        } 
        while (matriz.includes(numeroAleatorio));
        matriz[i][y] = numeroAleatorio;
    }
};

// Preenchendo uma matriz com valores pares em ordem crescente

for (var i = 0; i < 10; i++) {
    matrizParCrescente[i] = [];
    for (var y = 0; y < 10; y++) {
        if (matriz[i][y] % 2 == 0) {
            matrizParCrescente[i][y] = matriz[i][y];
        }
    }
};
matrizParCrescente = matrizParCrescente.flat();
matrizParCrescente.sort(function (a, b) {
    return a - b;
});

// Preenchendo uma matriz com valores primos em ordem decrescente

for (var i = 0; i < 10; i++) {
    matrizPrimosDecrescente[i] = [];
    for (var y = 0; y < 10; y++) {
        if (matriz[i][y] == 2)
        {
            matrizPrimosDecrescente[i][y] = matriz[i][y];
        }
        else if (matriz[i][y] % 2 == 1 && matriz[i][y] / matriz[i][y] == 1) {
            matrizPrimosDecrescente[i][y] = matriz[i][y];
        }
    }
};
matrizPrimosDecrescente = matrizPrimosDecrescente.flat();
matrizPrimosDecrescente.sort(function (a, b) {
    return a - b;
});
matrizPrimosDecrescente.reverse();

// Preenchendo uma matriz com interseção entre numeros pares e primos

for (var i = 0; i < 10; i++) {
    matrizIntersecao[i] = [];
    for (var y = 0; y < 10; y++) {
        if (matrizParCrescente.includes(matriz[i][y]) && matrizPrimosDecrescente.includes(matriz[i][y])) {
            matrizIntersecao[i][y] = matriz[i][y];
        }
    }
};

document.write("Matriz:<br> " + matriz + "<br>")
document.write("Matriz de pares:<br> " + matrizParCrescente + "<br>")
document.write("Matriz de primos:<br> " + matrizPrimosDecrescente + "<br>")
document.write("Matriz interseção:<br> " + matrizIntersecao.join("") + "<br>")