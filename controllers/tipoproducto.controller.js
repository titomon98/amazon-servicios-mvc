const { TipoProducto } = require('../models')

//crear tipo de producto
exports.create = async (req, res) => {
    const { tipo } = req.body;

    // Verificar si ya existe
    const existente = await TipoProducto.findOne({ where: { tipo } });

    if (existente) {
        return res.status(200).json({
            message: `El tipo de producto '${tipo}' ya existe`,
            tipoproducto: existente,
            idempotente: true
        });
    }

    // Si no existe, crear
    const tipoproducto = await TipoProducto.create(req.body);

    return res.status(201).json({
        message: `El tipo de producto '${tipoproducto.tipo}' fue creado correctamente`,
        tipoproducto,
        idempotente: false
    });
}