// Atividade como parte de avaliação bimestral da disciplina de Algoritmos e Lógica de Programação II, a ser enviada até dia 04-06-2023.
// Utilizando Javascript, construa um programa que leia um arquivo texto e alimente cada linha lida em um elemento de um vetor. Posteriormente, converta todos os caracteres em maiúsculo e classifique a tabela em ordem crescente. Apresente o vetor ao usuário no final.

// Adicionando arquivo texto
document.getElementById("arquivoTexto").addEventListener("change", function(e) { // Chamando o arquivo texto e aplicando função
    var arquivo = e.target.files[0] // Obtém o arquivo selecionado pelo usuário
    var leitor = new FileReader(); // Cria um leitor de arquivo

    leitor.onload = function(e) {
        var conteudo = e.target.result; // Obtém o conteúdo do arquivo

        var vetor = [];
        var linhas = conteudo.split("\n"); // Divide o conteúdo em linhas

        for (var i = 0; i < linhas.length; i++) {
            vetor.push(linhas[i].toUpperCase()); // Adiciona cada linha em maiúsculo ao vetor
        }

        vetor.sort(); // Classifica o vetor em ordem crescente

        var divArquivoTexto = document.getElementById("arquivoTexto");
        divArquivoTexto.innerHTML = vetor.join("<br>"); // Apresenta o vetor ao usuário
    };

    leitor.readAsText(arquivo); // Lê o arquivo como texto
});