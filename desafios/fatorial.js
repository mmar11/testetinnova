
function fatorial(numero) {


    if (numero == 0) {
        return 1
    }
    let num = numero
    let i = num - 1

    while (i > 0) {
        num *= i
        i--

    }
    return num
}

console.log(fatorial(4))