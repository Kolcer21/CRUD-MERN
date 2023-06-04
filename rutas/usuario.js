const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const eschema = mongoose.Schema;


const cors = require('cors');
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

const usuarioSchema = new eschema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    telefono: {type: String, required: true},
    idusuario: {type: String, required: true}
});

const modelUsuario = mongoose.model('usuario', usuarioSchema);

module.exports = router;

/* router.get('/ejemplo', function(req, res) {
    res.end('Carga de ejemplo');
}); */

//Obtener todos los usuarios
router.get('/obtenerusuarios', function(req, res) {
    modelUsuario.find()
    .then(function(usuarios) {
        res.send(usuarios);
    })
    .catch(function(error) {
    });
});

router.post('/agregarusuario', function(req, res) {
    const usuario = new modelUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    });
usuario.save()
.then(result => {
    res.send('usuario agregado correctamente');
})
.catch(error => {
    res.send(error);
});
})