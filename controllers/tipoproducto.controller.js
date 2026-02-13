const { TipoProducto } = require('../models')

//crear tipo de producto
exports.create = async (req, res) => {
    const tipoproducto = await TipoProducto.create(req.body)
    const bodyRespuesta = {
        code: 201,
        message: 'Creado correctamente',
        tipo: tipoproducto
    }
    res.json(bodyRespuesta) //Devolvemos el producto creado
}