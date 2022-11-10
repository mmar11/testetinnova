import { Router } from "express"
const routes = Router()
import * as c from './src/controllers/apicontrol.js'
import * as fr from './src/controllers/frontControll.js'


import multer from 'multer'

const upload = multer({ dest: 'uploads/' })


//rotas solicitadas na API
routes.get('/veiculos', c.getVeiculos)
routes.get('/veiculos?marca={marca}&ano={ano}&cor={cor}', c.getVeiculosQuery)
routes.get('/veiculos/:id', c.getVeiculosId)
routes.post('/veiculos', c.postVeiculos)
routes.put('/veiculos/:id', c.putVeiculosId)
routes.patch('/veiculos/:id', c.patchVeiculosId)
routes.delete('/veiculos/:id', c.deleteVeiculosId)

//rotas auxiliares / frontend
routes.get('/', fr.indexControl)
routes.get('/exibeveic', fr.exibeVeiculos)



routes.get('/cadastrar', fr.formControl)








export default routes