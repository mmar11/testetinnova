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
    res.send('get veículos p id')
}

let postVeiculos = (req, res, next) => {
    res.send('cria novo veículos')
}

let putVeiculosId = (req, res, next) => {
    res.send('edita todo veículo p id')
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