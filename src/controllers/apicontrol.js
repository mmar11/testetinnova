import * as f from "../models/service.js"

let getVeiculos = (req, res, next) => {
    let consulta = f.read()

    res.send(consulta)
}

let getVeiculosQuery = (req, res, next) => {
    let { ano, cor, marca } = req.query
    console.log(ano, cor, marca)
    let carro = f.pesquisa(ano, cor, marca)

    res.send(carro)
}

let getVeiculosId = (req, res, next) => {
    let id = req.params.id;
    let carro = f.getById(id)

    res.send(carro)
}

let postVeiculos = (req, res, next) => {
    let base = f.read()
    let { veiculo, marca, ano, descricao, vendido } = req.body
    let novoCarro = new f.veiculo(veiculo, marca, ano, descricao, vendido)
    base.push(novoCarro)
    f.write(base)
    let cadastrado = f.getUltimoVeic()
    res.send(cadastrado)
}

let putVeiculosId = (req, res, next) => {
    let id = req.params.id;
    let { veiculo, marca, ano, descricao, vendido } = req.body

    let carro = f.editById(id, veiculo, marca, ano, descricao, vendido)

    res.send(carro)

}

let patchVeiculosId = (req, res, next) => {
    let id = req.params.id;
    let vendido = req.body.vendido

    let carro = f.patchById(id, vendido)

    res.send(carro)

}

let deleteVeiculosId = (req, res, next) => {
    let id = req.params.id;
    let carro = f.deleteById(id)

    res.send(carro)
}

export {
    getVeiculos, getVeiculosQuery, getVeiculosId,
    postVeiculos, putVeiculosId, patchVeiculosId, deleteVeiculosId
}