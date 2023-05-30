const express = require('express');
const app = express();

//Home page
app.get('/', function(req, res) {
    res.end('Hello World');
}); 

//Conf server
app.listen(5000, function() {
    console.log('Server is running');
});