function gastoCaminhada(passos) {
    var total = 0
    for (var i = 0; i <= passos; i++) {
        total = total + i * 2
    }
    return total
}
console.log(gastoCaminhada(50))