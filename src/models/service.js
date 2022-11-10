import fs from "fs"


function newId() {
    let ler = read()
    let newId = ler[ler.length - 1].id + 1
    return newId
}

class veiculo {

    #id
    #veiculo = '';
    #marca = '';
    #ano = 0;
    #descricao = '';
    #vendido = false;
    #created;
    #updated;

    constructor(veiculo, marca, ano, descricao, vendido) {


        this.#id = newId()
        this.#veiculo = veiculo;
        this.#marca = marca;
        this.#ano = ano;
        this.#descricao = descricao;
        this.#vendido = vendido;
        this.#created = new Date;
        this.#updated = new Date;

        let obj = {
            id: this.#id,
            veiculo: this.#veiculo,
            marca: this.#marca,
            ano: this.#ano,
            descricao: this.#descricao,
            vendido: this.#vendido,
            created: this.#created,
            updated: this.#updated
        }

        return obj
    }


}



function read() {
    let ler = JSON.parse(fs.readFileSync('src/public/dados/carros.json', { encoding: 'utf-8' }))
    return ler

}

function write(base) {

    let veic = JSON.stringify(base)
    fs.writeFileSync('src/public/dados/carros.json', veic)
    return veic
}


function getUltimoVeic() {
    let ler = read()
    let ultimo = ler[ler.length - 1]
    return ultimo
}

function getById(id) {
    let base = read();
    return base.filter((ele) => {
        return ele.id == id
    })
}

function getIndex(id) {
    let base = read();
    return base.findIndex((ele) => {
        return ele.id == id
    })
}

function editById(id, veiculo, marca, ano, descricao, vendido) {
    let base = read();
    let carro = getById(id)
    let index = getIndex(id)
    carro[0].veiculo = veiculo
    carro[0].marca = marca
    carro[0].ano = ano
    carro[0].descricao = descricao
    carro[0].vendido = vendido
    carro[0].updated = new Date


    console.log(id)

    return carro
}

export { veiculo, read, write, getUltimoVeic, getById, getIndex, editById }