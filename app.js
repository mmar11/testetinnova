import express from 'express'
const app = express()
import routes from './routes.js'

import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

import * as dotenv from 'dotenv'
dotenv.config()

app.use(express.json());

const PORT = process.env.PORT || 3000

app.use(express.static('./src/public'))
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(routes)


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))