// 1) Solicitar o nome e o salário de uma pessoa. No final, apresente o nome e seu novo salário como aumento de 28,5%.

// Tipos de alert em JavaScript
// alert = Dispara uma mensagem de alerta na tela
// confirm = Dispara uma mensagem de confirmação na tela
// prompt = Dispara uma caixa de diálogo na tela

// document.getElementById("").innerHTML = Serve para mostrar resultado na tela

function solicitarNome () // Para invocar a função e testar utilize o comando -> console.log(solicitarNome())
{
    var taxa = 1.285
    var nome = prompt("Informe seu nome!")
    alert("Bem vindo " + nome + "!")
    var salario = prompt ("Por favor informe o seu salário!")

    if (salario < 0 || salario == false) {
        alert("Tente Novamente!")
    } else {
        salario = salario * taxa
        alert(nome + " seu salário agora é de: R$" + salario)
    };
};

// 2) Ler duas variáveis numérica, e apresentar a soma das mesmas, acumulando ou não em outra variável.

function lerVariaveis() // Para invocar a função e testar utilize o comando -> console.log(lerVariaveis())
{
    var x,y
    x = prompt ("Escreva um número para somar: ")
    y = prompt ("Escrea outro número: ")
    var soma = Number(x)+ Number(y);
    var acumuladora = soma + soma
    alert ("O resultado é: " + soma)
    console.log(repetir())

    function repetir()
    {
    confirm("Deseja continuar?");
    if (bool = true) {
        console.log(lerVariaveis);
        };
    };
};

//  3) AREA = (BASE x ALTURA) / 2. Área de um Triângulo

function areaTriangulo() // Para invocar a função e testar utilize o comando -> console.log(areaTriangulo())
{
    var base = prompt("Escreva o valor da base do triângulo: ");
    var altura = prompt("Agora escreva o valor da altura: ");
    var valor = Number(base) + Number(altura);
    alert ("A área do triângulo é de: " + valor / 2);
};

// 4) CAC = 3.1416 * R². Lembre-se que R² é o mesmo que (R * R). Área de um Círculo 

function areaCirculo() // Para invocar a função e testar utilize o comando -> console.log(areaCirculo())
{
    const pi = 3.1416
    var raio = prompt("Informe o raio do círculo: ");
    var resultado = pi * Number(Math.pow(raio, 2)); // Math.pow = recebe a base e multiplica o valor ao exponente
    alert ("A área de um círculo é de: " + resultado.toFixed(2)); // toFixed() = define a quantidade de casas decimais após a vírgula
};

// 5) CPC = 3.1416 * D, sendo que D = R + R. Perímetro de Círculo

function perimetroCirculo() // Para invocar a função e testar utilize o comando -> console.log(perimetroCirculo())
{
    const pi = 3.1416
    var d = prompt("Informe o diâmetro do círculo: "); // d = diâmetro
    var resultado = (d * 2) * pi;
    alert ("O perímetro do círculo é de: " + resultado.toFixed(2)); // toFixed() = define a quantidade de casas decimais após a vírgula
};

// 6) CVC = (3.1416 * R²) * H Volume de Círculo

function volumeCirculo() // Para invocar a função e testar utilize o comando -> console.log(volumeCirculo())
{
    const pi = 3.1416
    var r = prompt("Informe o raio do círculo: "); // r = raio
    var h = prompt("Informe a altura do círculo: "); // h = height
    var resultado = ((pi * Math.pow(r, 2)) * h); // Primeiro multipliquei o pi + o raio ao quadrado, logo após multipliquei a altura
    alert ("O volume do círculo é de: " + resultado.toFixed(2)); // toFixed() = define a quantidade de casas decimais após a vírgula
};

// 7) VCN = ((3.1416 * R²) / 3) * H Volume de um Cone

function volumeCone() // Para invocar a função e testar utilize o comando -> console.log(volumeCone())
{
    const pi = 3.1416
    var r = prompt("Informe o raio do cone: "); // r = raio
    var h = prompt("Informe a altura do cone"); // h = altura
    var resultado = ((pi * Math.pow(r, 2) / 3) * h);
    alert ("O volume do cone é de: " + resultado.toFixed(2)); // toFixed() = define a quantidade de casas decimais após a vírgula
};

// 8) VPD = (L * L) * (H / 3) Volume de Pirâmide

function volumePiramide() // Para invocar a função e testar utilize o comando -> console.log(volumePiramide())
{
    var lado = prompt("Informe o lado da pirâmide");
    var h = prompt("Informe a altura da pirâmide"); // h = altura
    var resultado = ((lado * lado) * (h / 3));
    alert ("O volume da pirâmide é de: " + resultado);
};

// 9) VPM = L1 * L2 * L3 Volume de Prisma

function volumePrisma() // Para invocar a função e testar utilize o comando -> console.log(volumePrisma())
{
    var l1 = prompt("Informe o primeiro lado do prisma: ");
    var l2 = prompt("Informe o segundo lado do prisma: ");
    var l3 = prompt("Informe o terceiro lado do prisma: ");
    var resultado = (l1 * l2 * l3);
    alert ("O volume do prisma é de: " + resultado);
};

// 10) VEF = (4/3) * 3.1416) * R³ Volume de Esfera.

function volumeEsfera() // Para invocar a função e testar utilize o comando -> console.log(volumeEsfera())
{
    var raio = prompt("Informe o raio da esfera: ");
    var resultado = (((4/3) * 3.1416) * Math.pow(raio, 3));
    alert ("O volume da esfera é de: " + resultado.toFixed(2));
};

// 11) Ler 3 notas e apresentar a média das mesmas.

function mediaNotas() // Para invocar a função e testar utilize o comando -> console.log(mediaNotas())
{
    confirm ("Olá seja bem vindo(a) ao apresentador de média final!");
    const nome = prompt("Qual o seu nome?");
    var nota1 = prompt(nome + " informe a nota do primeiro trimestre: ");
    var nota2 = prompt(nome + " me informe agora sua nota do segundo trimestre: ");
    var nota3 = prompt(nome + " por fim a nota do terceiro trimestre: ");
    var resultadoFinal = ((Number(nota1) + Number(nota2) + Number(nota3)) /3);
    if (resultadoFinal <= 5) {
        confirm("Que pena, " + nome + " você reprovou!");
    } else {
        confirm("Parabéns " + nome + "! você passou!")
    }
};

// "Parabéns " + nome + "! você passou!"
// "Que pena, " + nome + " você reprovou!"