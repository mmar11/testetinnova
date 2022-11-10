let vetor = [5, 3, 2, 4, 7, 1, 0, 6]


function bubbleSort(vetor) {

    for (m = 0; m < vetor.length; m++) {

        let change = false
        let times = vetor.length
        for (i = 0; i < times; i++) {

            if (vetor[i] > vetor[i + 1]
            ) {
                let temp = vetor[i]
                vetor[i] = vetor[i + 1]
                vetor[i + 1] = temp
                change = true
            }
        }
        if (!change) {
            break
        }
    }
    return (vetor)
}

console.log(bubbleSort(vetor))



function verif(array) {
    return (array.sort((a, b) => a - b))
}

console.log(verif(vetor))

