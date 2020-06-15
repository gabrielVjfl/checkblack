const PORT = 4700

let express = require('express')

let app = express()

const router = require('./routes/routes')

const bodyparser = require('body-parser') 

const cors = require('cors')

app.use(cors())

app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(bodyparser.json())

app.use('/api', router)


app.listen(PORT, () => {
    console.log('rodando na porta', PORT)
})













