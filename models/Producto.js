const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    id: {
        type: String,
        
        default: 0
    },
    nombre: {
        type: String,
        
        default: 0
    },
    precio: {
        type: Number,
        required: false,
        default: 0
    },
    stock: {
        type: Number,
        required: false,
        default: 0
    },
    estado: {
        type: Boolean,
        default: 0
    },
    //creado: {
    //    type: Date,
    //    default: Date.now()
    //}, 
    //proyecto: {
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref: 'Proyecto'
    //}
});

module.exports = mongoose.model('Producto', ProductoSchema);