const { TipoProducto } = require('../models')

//crear tipo de producto
exports.create = async (req, res) => {
    const tipoproducto = await TipoProducto.create(req.body)
    const bodyRespuesta = {
        message: 'El tipo de producto ' + tipoproducto.tipo +' fue creado correctamente'
    }
    res.status(201).json(bodyRespuesta)//Devolvemos el producto creado
}