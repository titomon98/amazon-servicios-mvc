const { Proveedor } = require('../models')

//crear proveedor
exports.create = async (req, res) => {
    const { nombre, contacto, correo, direccion } = req.body;

    // Verificar si ya existe
    const existente = await Proveedor.findOne({ where: { nombre } });

    if (existente) {
        return res.status(200).json({
            message: `El proveedor '${nombre}' ya existe`,
            proveedor: existente,
            idempotente: true
        });
    }

    // Si no existe, crear
    const proveedor = await Proveedor.create(req.body);

    return res.status(201).json({
        message: `El proveedor '${proveedor.nombre}' fue creado correctamente`,
        proveedor,
        idempotente: false
    });
}