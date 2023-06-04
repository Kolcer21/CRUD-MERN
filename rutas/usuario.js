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
    res.send('Usuario agregado correctamente');
})
.catch(error => {
    res.send(error);
});
})

//Obtener data de un usuario
router.post('/obtenerdata', function(req, res) {
    modelUsuario.find({idusuario: req.body.idusuario})
    .then(function(usuarios) {
        res.send(usuarios);
    })
    .catch(function(error) {
    });
});

//Actualizar usuario
router.post('/actualizarusuario', function(req, res) {
    modelUsuario.updateOne({idusuario: req.body.idusuario}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    })
    .then(function(usuarios) {
        res.send('Usuario actualizado correctamente');
    })
    .catch(function(error) {
    });
});

//Borrar usuario
router.post('/borrarusuario', function(req, res) {
    modelUsuario.deleteOne({ idusuario: req.body.idusuario })
      .then(() => {
        res.send('Usuario eliminado correctamente');
      })
      .catch((err) => {
        res.send(err);
      });
  });