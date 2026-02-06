const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'nombre_bd',
    'user',
    'password', //Si no hay nada, se pone null
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
)

module.exports = sequelize