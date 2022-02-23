const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
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
        default: false
    },
    imagen: {
        type: String,
        required: false
    },
    creado: {
        type: Date,
        default: Date.now()
    }, 
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto'
    }
});

module.exports = mongoose.model('Tarea', TareaSchema);