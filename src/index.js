const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')


const app = express()

require('./database')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000, () => { console.log('Servidor está sendo executado') })