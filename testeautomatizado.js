//teste automatizado para todas as rotas da API em sequencia 
// para inicializar, acesse o endereço http://localhost:3000/teste
// o teste estara realizado com suceeso se a resposta for o seguinte objeto: 
// {
// "status": 200,
// "msg": "deleted"
// }


import fetch from 'node-fetch'


let teste = async function (req, res, next) {
    let carro1;
    const rota1 = await fetch(`http://localhost:3000/veiculo`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((data) => {

            let carro = data
            console.log("rota 1 ok")
            carro1 = carro

        })


    let carro2
    if (carro1) {

        const rota2 = await fetch(`http://localhost:3000/veiculos/${carro1[0].id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
            .then((data) => {

                let carro = data
                carro2 = carro
                console.log("rota 2 ok")

            })

    }

    let carro3
    if (carro2) {

        let teste = {
            veiculo: "Prius",
            marca: "Toyota",
            ano: 2020,
            descricao: "Vermelho - manual",
            vendido: "false"
        }

        const rota2 = await fetch(`http://localhost:3000/veiculos`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(teste)
            }).then((response) => response.json())
            .then((data) => {

                let carro = data
                carro3 = carro
                console.log("rota 3 ok")

            })

    }


    let carro4
    if (carro3) {

        let teste2 = {
            veiculo: "Corolla",
            marca: "Toyota",
            ano: 2020,
            descricao: "Vermelho - manual",
            vendido: "false"
        }

        const rota4 = await fetch(`http://localhost:3000/veiculos/${carro3[0].id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(teste2)
            }).then((response) => response.json())
            .then((data) => {

                let carro = data
                carro4 = carro
                console.log("rota 4 ok")

            })

    }




    let carro5
    if (carro4 != carro3) {

        let teste3 = {
            vendido: "true"
        }

        const rota4 = await fetch(`http://localhost:3000/veiculos/${carro3[0].id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(teste3)
            }).then((response) => response.json())
            .then((data) => {

                let carro = data
                carro5 = carro
                console.log("rota 5 ok")

            })

    }


    let carro6
    if (carro4 != carro5) {

        const rota4 = await fetch(`http://localhost:3000/veiculos/${carro3[0].id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
            .then((data) => {

                let carro = data
                carro6 = carro
                console.log("rota 6 ok")
                res.send(carro)

            })

    }



}

export default teste
