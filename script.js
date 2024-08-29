const meusDados = ["Guilherme", 23, "Julho", 2007] // Array Sempre com [] Colchetes
console.log(meusDados)


const pessoa = { // Objeto Sempre com {} Chaves
    nome: "Guilherme",
    idade: 17,
    anoNascimento: 2007,
}  
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.anoNascimento)


const pessoas = [  // Array sempre começa do 0
    {
        nome: "Guilherme", // 0
        sobrenome: "Rocha"
    },
    {
        nome: "Stephane",  // 1
        sobrenome: "Camargo"
    },
    {
        nome: "Cleiton",  // 2
        sobrenome: "Rasta"
    }
]
console.log(pessoas[2].nome)


let number = 7 // Condicionais IF e ELSE

if(number > 0){
    console.log("Positivo")
} else {
    console.log("Negativo")
}


function clicou(){  // Alert usando evento de onclick()
    window.alert("Você clicou em mim!")
}


function inicio(){  // Prompt usando evento de onclick e interpolação para aparecer resultado na tela
    let nome = window.prompt("Digite seu nome:")
    let resultado = window.document.getElementById('resultado')

    resultado.innerHTML = `<p>Olá, <strong>${nome}</strong>! Seja bem-vindo!</p>`
}


function soma(){  // interpolação para mostrar o dobro e metade de um número digitado no prompt
    let numero = window.prompt("Digite um número")
    let resultadoSoma = window.document.getElementById("resultadoSoma")

    resultadoSoma.innerHTML = `<p>O dobro de <strong>${numero}</strong> é <strong>${numero * 2}</strong> e a metade é <strong>${numero / 2}</strong>!</p>`
}


function calculo(){  // Transformando uma string do prompt em number, somando e colocando o resultado da soma na tela
    let n1 = Number(window.prompt("Digite o primeiro número"))
    let n2 = Number(window.prompt("Digite o segundo número"))

    let somaN1N2 = n1 + n2

    let somandoNumeros = window.document.getElementById("somandoNumeros")

    somandoNumeros.innerHTML = `<p>A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${somaN1N2}</strong>!</p>`
}


function comecar(){  // Média de alunos com bastante interpolação e transformando a string do prompt em number, para que seja feita a formula de Média
    let nome = window.prompt("Qual é o nome do aluno?")
    let primeiraNota = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let segundaNota = Number(window.prompt(`Além de ${primeiraNota}, qual foi a outra nota de ${nome}?`))

    let mediaNotas = (primeiraNota + segundaNota) / 2  // Os parênteses servem para indicar que a soma vai primeiro e dps a divisão

    let media = window.document.getElementById("media")

    media.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong>. <br>As notas obtidas foram <strong>${primeiraNota}</strong> e <strong>${segundaNota}</strong>. <br>A média final será <strong>${mediaNotas}</strong>.</p>`
}


function mostrarDados(){  // Exibindo dados de um array na tela do naveagador
    const Dados = ["Guilherme", 23, "Julho", 2007]

    let dados = window.document.getElementById("dados")

    dados.innerHTML = `<p>Os dados do array: <strong>${Dados}</strong></p>`
}


function iniciar(){ //Descobrindo a idade do usuario de acordo com o ano de nascimento dele
    let anoNascimento = window.Number(prompt("Em que ano voce nasceu?"))

    let descobrir = 2024 - anoNascimento

    let idade = window.document.getElementById("idade")

    idade.innerHTML = `<p>Quem nasceu em <strong>${anoNascimento}</strong> vai completar <strong>${descobrir}</strong> anos em 2024.</p>`
}

function positivoNegativo() {  // se o numero for maior que 0 = POSITIVO. caso contrario, é NEGATIVO
    let numero = window.Number(prompt("Digite um número"));
    let exibirResultado = window.document.getElementById("exibirResultado");
  
    if (numero >= 0) {
      exibirResultado.innerHTML = `<p>O <strong>${numero}</strong> é positivo!</p>`;
    } else {
      exibirResultado.innerHTML = `<p>O <strong>${numero}</strong> é negativo!</p>`;
    }
  }


  function parImpar(){ // se o resto da divisao do numero que o usuario colocar for 0, o número é par. caso contrario, é ímpar
    let numer = Number(window.prompt("Digite um número"))
    let mostrarResultado = window.document.getElementById("mostrarResultado")

    if (numer % 2 === 0) {
        mostrarResultado.innerHTML = `<p>O <strong>${numer}</strong> é Par!</p>`;
    } else {
        mostrarResultado.innerHTML = `<p>O <strong>${numer}</strong> é Ímpar!</p>`;
    }       
  }

  
  function comprar() { // ME AJUDA MARCIO. total tá aparecendo errado
    const produtos = [
        {
            codigoProduto: 1,
            especificaçao: "Cachorro-Quente",
            preco: 4.00
        },
        {
            codigoProduto: 2,
            especificaçao: "X-Salada",
            preco: 4.50
        },
        {
            codigoProduto: 3,
            especificaçao: "X-Bacon",
            preco: 5.00
        },
        {
            codigoProduto: 4,
            especificaçao: "Torrada Simples",
            preco: 2.00
        },
        {
            codigoProduto: 5,
            especificaçao: "Refrigerante",
            preco: 1.50
        }
      ]

    let codigo = Number(prompt("Digite o codigo do produto"))
    let quantidadeProduto = Number(prompt(`Digite a quantidade que voce quer comprar:`))

    let total = produtos[codigo].preco * quantidadeProduto

    let exibirTotal = window.document.getElementById("exibirTotal")

    exibirTotal.innerHTML = `<p>Total: <strong>${total}</strong></p>`
  }
  

 
