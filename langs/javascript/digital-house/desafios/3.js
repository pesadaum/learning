var placa = 'abc'
var entradas = ['abc', 'abc', 'abc', 'avc', 'abc']

function quantasEntradas(placa, entradas) {
    let qtd = 0
    for (let index = 0; index < entradas.length; index++) {
        if (entradas[index] == placa) qtd++
    }
    return qtd
}

console.log(quantasEntradas(placa, entradas))