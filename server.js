const express = require('express');
const app = express();

const cors = require('cors');

// Habilita CORS para todas las rutas
app.use(cors());

const db = require('./conexion'); //Importa la conexion a la base de datos

//Importacion de modelo de usuario y rutas
const rutaUsuario = require('./rutas/usuario');

//Iportar body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/usuario', rutaUsuario); //Ruta para el modelo usuario

//Home page
app.get('/', function(req, res) {
    res.end('Hello World');
}); 

//Conf server
app.listen(5000, function() {
    console.log('Server is running');
});