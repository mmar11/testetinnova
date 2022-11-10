let eleitores = 1000;
let validos = 800;
let brancos = 150;
let nulos = 50;



class resultado {

    #eleitores;
    #validos;
    #brancos;
    #nulos;

    constructor(eleitores, validos, brancos, nulos) {

        this.#eleitores = eleitores;
        this.#validos = validos;
        this.#nulos = nulos;
        this.#brancos = brancos;


    }

    getVotosValidos() {

        let percValidos = (this.#validos / this.#eleitores) * 100
        return percValidos

    }

    getVotosBrancos() {
        let percBrancos = (this.#brancos / this.#eleitores) * 100
        return percBrancos

    }

    getVotosNulos() {
        let percNulos = (this.#nulos / this.#eleitores) * 100
        return percNulos

    }
}

let result = new resultado(eleitores, validos, brancos, nulos)

console.log(
    result.getVotosValidos(),
    result.getVotosBrancos(),
    result.getVotosNulos()
)


