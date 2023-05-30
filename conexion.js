const mongoose = require('mongoose');

//Conecta a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/curso', {useNewUrlParser: true, useUnifiedTopology: true}); 

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:')); //Si hay un error

db.once('open', function() {
    console.log('Conectado a la base de datos');
}	); //Si se conecta

module.exports = db;  //Exporta la conexion a la base de datos