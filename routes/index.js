const express = require('express')
const router = express.Router()

router.use('/tipo-producto', require('./tipoproducto.routes'))

module.exports = router