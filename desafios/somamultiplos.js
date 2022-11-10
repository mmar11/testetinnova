function multiplos(numero) {
    let soma = 0
    for (i = numero - 1; i > 0; i--) {
        if (i % 5 == 0 || i % 3 == 0) {
            soma += i
        }
    }
    return soma
}

console.log(multiplos(15))