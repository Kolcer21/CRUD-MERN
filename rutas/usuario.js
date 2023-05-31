const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const usuarioSchema = new eschema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    telefono: {type: String, required: true},
    idUsuario: {type: String, required: true}
});

const modelUsuario = mongoose.model('usuario', usuarioSchema);

module.exports = router;

router.get('/ejemplo', function(req, res) {
    res.end('Carga de ejemplo');
});