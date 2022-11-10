import * as f from "../models/service.js"


let indexControl = (req, res, next) => {
    let carro = f.read()
    res.render('index.ejs', { carro })
}

let exibeVeiculos = (req, res, next) => {
    let consulta = f.read()

    res.render('relatorios.ejs', { consulta })
}


let exibeById = (req, res, next) => {
    let id = req.params.id;
    let carro = f.getById(id)

    res.render('veiculoind.ejs', { carro })
}



let formControl = (req, res, next) => {
    res.render('cadastro.ejs')
}
export { indexControl, exibeVeiculos, formControl, exibeById }