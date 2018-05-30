var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongo = require('./mongo-r.js');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

app.get('/user', function(req, res) {
    mongo.getUsuarios(function(err, usuarios) {
        res.send(usuarios)
    })
});

app.get('/user/:id', function(req, res) {
    //cogemos por parametros el id de la barra de direccion
    let id = req.params.id
    mongo.getUsuariosID(id, function(err, usuarios) {
        res.send(usuarios)
    })
});

app.post('/user', function(req, res) {
    let nuevoUsuario = req.body
    nuevoUsuario.edad = (nuevoUsuario.edad) ? +nuevoUsuario.edad : 0
    mongo.crearUsuario(nuevoUsuario, function(err, usuarios) {
        //  console.log(err)
        res.send(usuarios)
    })
});


app.put('/user/:id', function(req, res) {
    let id = req.params.id
    let remplazarUsuario = req.body
    remplazarUsuario.edad = (remplazarUsuario.edad) ? +remplazarUsuario.edad : 0
    mongo.remplazarUsuario(id, remplazarUsuario, function(err, usuarios) {
        // console.log(err)
        res.send(usuarios)
    })
});

app.patch('/user/:id', function(req, res) {
    let id = req.params.id
    let remplazarUsuario = req.body
    if (remplazarUsuario.edad) {
        remplazarUsuario.edad = +remplazarUsuario.edad
    } else {
        remplazarUsuario.edad = 0
    }
    mongo.remplazarUsuario(id, remplazarUsuario, function(err, usuarios) {
        // console.log(err)
        res.send(usuarios)
    })
});

app.delete('/user/:id', function(req, res) {
    let id = req.params.id
    // let borrarUsuario = req.body
    mongo.borrarUsuario(id, function(err, usuarios) {
        console.log(err)
        res.send(usuarios)
    })
});
app.get('/edadmedia', function(req, res) {
    mongo.edadMedia(function(err, usuarios) {
        res.send(usuarios)
    })
});
app.get('/sexo/:sexo', function(req, res) {
    let sexo = req.params.sexo
    mongo.sexo(sexo, function(err, usuarios) {
       // res.send(""+usuarios)
        res.send(usuarios)
    })
});




app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});