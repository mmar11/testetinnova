import { Router } from "express"
const routes = Router()



import multer from 'multer'

const upload = multer({ dest: 'uploads/' })


//rotas solicitadas
routes.get('/', (req, res) => {
    res.send('index exibir')
})


export default routes