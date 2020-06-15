const sequelize = require('sequelize')

const seq = new sequelize('techtin', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

seq.authenticate().then(() => {
    console.log('Conectado')
}).catch(() => {
    console.log('deu erro')
})

module.exports = {
    sequelize: sequelize,
    seq:seq
}