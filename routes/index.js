const express = require('express')
const router = express.Router()

router.use('/tipo-producto', require('./tipoproducto.routes'))
router.use('/proveedor', require('./proveedor.routes'))

module.exports = router