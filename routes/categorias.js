const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Obtener todas las categorias
router.get('/', 
    categoriaController.obtenerCategorias
)

module.exports = router;