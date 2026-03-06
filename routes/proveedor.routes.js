const express = require('express')
const controller = require('../controllers/proveedor.controller')

const router = express.Router()

router.post('/', controller.create)

module.exports = router