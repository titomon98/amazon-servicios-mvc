const express = require('express')
const { sequelize } = require('./models')

const app = express()
app.use(express.json())
app.use('/api')

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Mi api esta funcionando en el puerto 3000')
    })
})