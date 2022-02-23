const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');
const Producto = require('../models/Producto');
const { validationResult } = require('express-validator');

// Obtiene todos los productos
exports.obtenerProductos = async (req, res) => {

        try {
            const tareas = await Tarea.find( { estado: true} ).sort({ creado: -1 });

            let productos = [];
            tareas.forEach(tarea => {

                productos.push({ 
                    id: tarea._id,
                    name: tarea.nombre, 
                    price: tarea.precio,
                    stock: tarea.stock,
                    image: tarea.imagen,
                    category: tarea.proyecto
                });
            });

            // Obtener todos los productos del proyecto
            res.json(productos);

        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
}