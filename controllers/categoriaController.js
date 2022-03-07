const Proyecto = require('../models/Proyecto');

// Obtiene todos los categorias del usuario actual
exports.obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Proyecto.find().sort({ creado: -1 });
        let newCategorias = ["Lista"];
        for (element of categorias) {
            newCategorias.push(element.nombre)
        }
        res.json(newCategorias);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
