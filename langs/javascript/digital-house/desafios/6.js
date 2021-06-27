var notas = [0, 0, 0, 1, 1, 1, 2, 2, 2, 5, 5, 5]


function calculaGostos(notas) {
    var nRuim = 0
    var nMedio = 0
    var nBom = 0

    for (let index = 0; index < notas.length; index++) {
        var nota = notas[index];
        if (nota == 0 || nota == 1) {
            nRuim++
        }
        if (nota == 2 || nota == 3) {
            nMedio++
        }
        if (nota == 4 || nota == 5) {
            nBom++
        }
    }
    return [nRuim, nMedio, nBom]
}

console.log(calculaGostos(notas))