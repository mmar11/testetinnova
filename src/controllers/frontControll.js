import * as f from "../models/service.js"
import fetch from 'node-fetch';



let indexControl = (req, res, next) => {
    let carro = f.readSemana()
    res.render('index.ejs', { carro })
}

let pesquisaCont = (req, res, next) => {
    res.render('pesquisa.ejs')
}

let resultadoCont = (req, res, next) => {
    let { ano, cor, marca } = req.query
    console.log(ano, cor, marca)
    let carro = f.pesquisa(ano, cor, marca)

    res.render('resultado.ejs', { carro })
}



let exibeVeiculos = (req, res, next) => {
    let consulta = f.read()

    res.render('relatorios.ejs', { consulta })
}

let exibeById = (req, res, next) => {
    let id = req.body.id;
    let carro = f.getById(id)

    res.render('veiculoind.ejs', { carro })
}

let formControl = (req, res, next) => {
    res.render('cadastro.ejs')
}

let cadastraVeic = (req, res, next) => {
    let base = f.read()
    let { veiculo, marca, ano, descricao, vendido } = req.body
    let novoCarro = new f.veiculo(veiculo, marca, ano, descricao, vendido)
    console.log(novoCarro)
    base.push(novoCarro)
    f.write(base)

    let carro = f.getUltimoVeic()
    res.render('cadastrado.ejs', { carro })
}

let formControlEd = (req, res, next) => {
    let id = req.params.id
    let carro = f.getById(id)
    res.render('cadastroed.ejs', { carro })
}


let editaVeic = (req, res, next) => {
    let id = req.params.id
    let { veiculo, marca, ano, descricao, vendido } = req.body
    let carro = f.editById(id, veiculo, marca, ano, descricao, vendido)
    res.render('cadastrado.ejs', { carro })
}


let venderId = async (req, res, next) => {
    let id = req.params.id
    let vendido = { vendido: true }
    const response = await fetch(`http://localhost:3000/veiculos/${id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vendido),
        }).then((response) => response.json())
        .then((data) => {

            let carro = data
            res.render('cadastrado.ejs', { carro })

        })


}

let deleteId = async (req, res, next) => {
    let id = req.params.id

    const response = await fetch(`http://localhost:3000/veiculos/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((data) => {

            let carro = data
            res.render('excluido.ejs')

        })


}


export {
    indexControl, exibeVeiculos, formControl, exibeById, cadastraVeic,
    formControlEd, editaVeic, venderId, deleteId, pesquisaCont, resultadoCont
}