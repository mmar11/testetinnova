import { Router } from "express"
const routes = Router()
import * as c from './src/controllers/apicontrol.js'
import * as fr from './src/controllers/frontControll.js'
import teste from './testeautomatizado.js'


import multer from 'multer'

const upload = multer({ dest: 'uploads/' })


//rotas solicitadas na API
routes.get('/veiculo', c.getVeiculos)
routes.get('/veiculos', c.getVeiculosQuery)
routes.get('/veiculos/:id', c.getVeiculosId)
routes.post('/veiculos', c.postVeiculos)
routes.put('/veiculos/:id', c.putVeiculosId)
routes.patch('/veiculos/:id', c.patchVeiculosId)
routes.delete('/veiculos/:id', c.deleteVeiculosId)

//rotas auxiliares / frontend
routes.get('/', fr.indexControl)
routes.get('/exibeveic', fr.exibeVeiculos)
routes.post('/exibeveicid', upload.none(), fr.exibeById)
routes.get('/cadastrar', fr.formControl)
routes.post('/cadastrar', upload.none(), fr.cadastraVeic)
routes.get('/editar/:id', fr.formControlEd)
routes.post('/editar/:id', upload.none(), fr.editaVeic)
routes.get('/vender/:id', fr.venderId)
routes.get('/delete/:id', fr.deleteId)
routes.get('/pesquisa', fr.pesquisaCont)
routes.get('/resultado', upload.none(), fr.resultadoCont)
routes.get('/teste', teste)





export default routes