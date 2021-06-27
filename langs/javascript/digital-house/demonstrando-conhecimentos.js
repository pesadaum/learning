
var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]

function validaMoradorPar(moradores) {
    for (var i = 0; i < moradores.length; i++) {
        if (i % 2 == 0) {
            console.log("O morador " + moradores[i] + " pode usar o elevador");
        }
        else continue;
    }
}
validaMoradorPar(moradores);



var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]

function maiorAlto(usuario) {
    if (usuario[1] >= 18 && usuario[2] >= 170) return true
    return false
}



var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB = []
var grupoC = []

function separaGrupo(alunos, grupoA, grupoB, grupoC) {
    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i] <= 159) { grupoA.push(alunos[i]) }
        else if ((alunos[i] > 159) && alunos[i] <= 169) grupoB.push(alunos[i]);
        else grupoC.push(alunos[i])
    }
}

separaGrupo(alunos, grupoA, grupoB, grupoC);



var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525'
]

function calcularNumeroDeEntradas(placa) {
    var cont = 0;
    for (var i = 0; i < placas.lenght; i++) {
        if (placas[i] = placa) {
            cont++;
        }
        else continue;
    }
    return cont;
}

function calcularValorDevido(placa) {
    if (calcularNumeroDeEntradas < 20) {
        return 10 * calcularNumeroDeEntradas
    }
    else {
        return calcularNumeroDeEntradas * 10 + calcularNumeroDeEntradas * 5
    }
}



var notas = [1, 1, 3, 3, 5, 5];

function calculaGostos(notas) {
    var gostos = [0, 0, 0];

    for (var i = 0; i < notas.length; i++) {
        if (notas[i] <= 1) gostos[0] += 1;
        else if ((notas[i] <= 3) && (notas[i] >= 2)) gostos[1] += 1;
        else gostos[2] += 1;
    }
    return gostos;
}



var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 3

function filme(personagens, filmes, lancamentos, id) {
    if ((id > filmes.length + 1) || (id < 1))
        return ("Essa não é uma opção válida.")
    else
        return (personagens[id - 1] + " é um personagem do filme " + filmes[id - 1] + " que estreou no cinema em " + lancamentos[id - 1] + ".")
}



function comissao(preco, porcentagem) {
    return (preco * (porcentagem / 100))
}



function maiorQueNum(array, num) {
    var maiores = []
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > num) {
            maiores[j] = array[i];
            j++;
        }
    }
    return maiores;
}



var array = []
var num

function buscarDivisivelPor(array, num) {
    var erro = "Nenhum número válido encontrado!";

    for (var i = 0; i < array.length; i++) {
        if (array[i] == 0) continue;
        if (array[i] % num == 0) return array[i]
    }
    return erro
}



function repete(valor, qtd) {
    for (var i = 0; i < qtd; i++) {
        console.log(valor)
    }
}



function series(prefixo, array) {
    var concat = [];
    for (var i = 0; i < array.length; i++) {
        concat[i] = prefixo + " " + array[i];
    }
    return concat;
}
