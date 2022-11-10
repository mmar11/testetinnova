import fs from "fs"

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

        this.#id = newid()
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

    newId() {
        let ler = read()
        let newId = ler[ler.length - 1].id + 1
        console.log(newId)
        return newId

    }
}


function read() {
    let ler = JSON.parse(fs.readFileSync('src/public/dados/carros.json', { encoding: 'utf-8' }))
    return ler

}



// let carro = new veiculo('golf', 'VW', 2022, 'automatico', false)

// let veiculos = JSON.parse(fs.readFileSync('../public/dados/carros.json', { encoding: 'utf-8' }))

// veiculos.push(carro)
// let veic = JSON.stringify(veiculos)
// fs.writeFileSync('src/public/dados/carros.json', veic)




export { veiculo, read }