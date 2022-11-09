
function fatorial(numero) {

    let num = numero
    let i = num - 1

    while (i > 0) {
        num *= i
        i--

    }
    console.log(num)
}

fatorial(6)