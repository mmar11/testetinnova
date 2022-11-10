import * as f from "../models/service.js"

let indexControl = (req, res, next) => {
    res.send('index exibir')
}

let getVeiculos = (req, res, next) => {
    let ler = f.read()
    res.send(ler)
}

let getVeiculosQuery = (req, res, next) => {
    res.send('get veículos p query param')
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
    res.send('edita alguns dados do veículo p id')
}

let deleteVeiculosId = (req, res, next) => {
    res.send('deleta veículo p id')
}

export {
    indexControl, getVeiculos, getVeiculosQuery, getVeiculosId,
    postVeiculos, putVeiculosId, patchVeiculosId, deleteVeiculosId
}