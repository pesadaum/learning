const bin2dec = input => parseInt(input,2)

function dec2bin(input) {
    const intInput =  Number(input)
    let aux = intInput
    let i = 0
    let binary = 0
    const j = Math.ceil(Math.log2(input))

    for (i = 0; i < j; i++){
        binary += (aux % 2)*(10**i)
        aux = Math.floor(aux/2)
    }
    return binary
}

console.log(bin2dec("11001"))
console.log(dec2bin("25"))



