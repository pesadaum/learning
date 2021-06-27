
var nome = 'João'
var sobrenome = ' da Silva'
var numeroDaSorte = 15
var idade = 23



var idade = 23
var sobrenome = 'Da silva'
var salarioMinimo = 1200.00



var nome = "Alef"
var idade = 20
var altura = 1.65
var solteiro = false
var seriesFavoritas = ["Mr. Robot", "Atlanta"]




var nome = "Natália"
var sobrenome = "Lira"
var profissao = "Programadora"
var cartaoDeVisita = nome + " " + sobrenome + " - " + profissao
console.log(cartaoDeVisita)



var numeroA = 6
var numeroB = 1
var soma = numeroA + numeroB
var subtracao = numeroA - numeroB
var multiplicacao = numeroA * numeroB
var divisao = numeroA / numeroB



var janeiro = 100
var fevereiro = 300
var marco = 90
var valorTotal = janeiro + fevereiro + marco
console.log(valorTotal)



var trabalhoDeHistoria = 8.0
var trabalhoDeMatematica = 7.0
var trabalhoDeCiencia = 10
var trabalhoDeGeografia = 9.5
var totalDeTrabalhos = 4
var media = (trabalhoDeCiencia + trabalhoDeGeografia + trabalhoDeHistoria + trabalhoDeMatematica) / totalDeTrabalhos



var nome = "João"
var idade = 17
console.log('Olá' + nome)
if (idade >= 18) {
    console.log("Você passou no nosso teste e já pode dirigir!")
}



var saldo = 2000.00
if (saldo > 0) {
    console.log("Seu saldo está positivo! Gostaria de fazer um investimento?")
}
if (saldo < 0) {
    console.log("Seu saldo está negativo! Gostaria de fazer um empréstimo?")
}



var idade = 17
if (idade >= 18) {
    console.log("Você é obrigado a votar")
}
if (idade == 16) {
    console.log("Seu voto é opcional")
}



var idade = 15
if (idade >= 18) {
    console.log("Você já pode dirigir!")
} else {
    console.log("Ops, você ainda não tem a idade mínima para dirigir!")
}



var estrangeiro = true
if (estrangeiro) {
    console.log("Você poderia apresentar seu RNE, por favor?")
}
else { console.log("Você poderia apresentar seu CPF, por favor?") }



var idade = 40
if (idade > 65) { console.log("Você já pode se aposentar") }
else { console.log("Você ainda não pode se aposentar") }



var numeroDaSorte = 18
if (numeroDaSorte % 2 == 0) {
    console.log("Par")
} else {
    console.log("Ímpar")
}



var petPeso = 7
if (petPeso < 4) {
    console.log("Abaixo do Peso")
} else if (petPeso > 10) {
    console.log("Acima do Peso")
}
else {
    console.log("Peso normal")
}



var ladosIguais = 0
if (ladosIguais == 3) {
    console.log("Equilátero")
} else if (ladosIguais == 2) {
    console.log("Isósceles")
} else {
    console.log("Escaleno")
}



var produtoQtd = 3
var produtoAtivo = true
if (produtoAtivo && (produtoQtd > 0)) {
    console.log("Você pode finalizar essa compra")
} else {
    console.log("Produto não está disponível para compra")
}



var usuarioAltura = 170
var usuarioIdade = 21
if ((usuarioAltura > 150) || (usuarioIdade >= 21)) {
    console.log("Você pode subir")
} else {
    console.log("Desculpe, você não atende os requisitos para usar o brinquedo")
}





var diaSemana = 'sabado'
if (diaSemana != 'sabado' && diaSemana != 'domingo') {
    console.log("Você pode ir ao banco")
}
else {
    console.log("O banco está fechado, tente outro dia")
}
