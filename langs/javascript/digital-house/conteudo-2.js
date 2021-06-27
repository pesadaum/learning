
for (var i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + 7 * i)
}



for (var i = 0; i < 7; i++) {
    console.log("Bom dia, grupo!")
}



var listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"]

for (var i = 0; i < listaDeCarros.length; i++) {
    console.log("Nome do Carro: " + listaDeCarros[i])

}



var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;

for (var i = 0; i < listaDeLucro.length; i++) {
    lucroTotal += listaDeLucro[i]
}



var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0

for (let i = 0; i < listaDeGanhos.length; i++) {
    if (listaDeGanhos[i] < 0) {
        totalNegativos++
    }
}



var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"]
var busca = "Cajá"

for (let i = 0; i < listaDeFrutas.length; i++) {
    if (busca == listaDeFrutas[i]) {
        console.log("Sim, temos a fruta " + busca + " disponível")
    }
}



var cartela = [8, 13, 18, 22, 42, 49]
var numeroSorteado = 42

for (let i = 0; i < cartela.length; i++) {
    if (numeroSorteado == cartela[i]) {
        console.log("Encontrei o número")
        break
    }
}



for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
        continue
    }
}



var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

for (let i = 0; i < familia.length; i++) {
    if (familia[i] == 'Pedro') {
        console.log(familia[i] + " Sousa")
        continue
    }
    console.log(familia[i] + " Macedo")

}



var baralho = ["Ás", "Dama", "Rei", "Valete"]

for (let i = 0; i < baralho.length; i++) {
    if (baralho[i] == 'Rei') {
        console.log("Encontrei o Rei!")
        break
    }
}



function listarProdutos(lista) {
    var lista = ['Leite', 'tomate', 'Biscoito', 'Tapioca']
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}



function cartaoDeVisitas(nome, sobrenome) {
    console.log(nome + " " + sobrenome)
}



function tabuadaDoSete() {
    for (var i = 1; i <= 10; i++) {
        console.log("7 x " + i + " = " + 7 * i)
    }
}



function menorNumero(a, b) {
    if (a < b) return a
    return b
}



function autonomia(quantidadeDeCombustivel, rendimento) {
    return (rendimento * quantidadeDeCombustivel)
}



function calculaValorDevido(pesoDaRoupaSuja) {
    return (5 * pesoDaRoupaSuja)
}



function calculaValorDevido(pesoDaRoupaSuja) {
    return (10 + (3 * pesoDaRoupaSuja))
}



function comecaComMaiuscula(palavra) {
    return /^[A-Z]/.test(palavra)
}

var palavras = ["Amor", "copo", "Bolacha", "biscoito"]

for (let i = 0; i < palavras.length; i++) {
    if (comecaComMaiuscula(palavras[i])) {
        console.log(palavras[i] + " Começa com maiúscula")
    }
    else {
        console.log(palavras[i] + " Não começa com maiúscula")
    }
}



var CPF = 0

if (validaCPF(CPF)) {
    console.log(CPF + " É um CPF válido")
}
else {
    console.log(CPF + " Não é um CPF válido")
}



function calcularIdade(dataDeNascimento) {
    var [dia, mes, ano] = dataDeNascimento.split('/');
    var d = new Date();
    var anoAtual = d.getFullYear();
    var mesAtual = d.getMonth() + 1;
    var diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    var quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
}

function deixaEntrar(dataDeNascimento, censura) {
    calcularIdade(dataDeNascimento) >= censura; return true
}



function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
}

function maisCarosQue(valor, precos) {
    return precos.filter(p => p >= valor);
}

function precosEntre(menor, maior, precos) {
    var entre = maisCarosQue(menor, maisBaratosQue(maior, precos))
    return entre
}

console.log(precosEntre(5, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))



function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
    for (let i = 0; i < nomesDosPresentes.length; i++) {
        if (nomesDosPresentes.indexOf(nomeDoAluno) > -1) {
            return true
        }
    }
    return false
}



function transformaParaMaiusculo(palavras) {
    var maiusculas = []
    for (let i = 0; i < palavras.length; i++) {
        maiusculas.push(palavras[i].toUpperCase())
    }
    return maiusculas
}



function gerarDezenas() {
    return Math.round(Math.random() * 60)
}



function maxmin(a, b, c, d, e) {
    var max_min = []
    max_min = [Math.min(a, b, c, d, e), Math.max(a, b, c, d, e)]
    return max_min
}

