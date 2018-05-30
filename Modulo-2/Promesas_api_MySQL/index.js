var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('./mysql')

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

var usuarios = [{
    id: '1',
    nombre: 'Joseba',
    apellido: 'Legarreta',
    edad: 27,
    tipo: 'profesor',
    sexo: 'hombre'
}, {
    id: '2',
    nombre: 'Alumno1',
    apellido: 'Apellido1',
    edad: 17,
    tipo: 'alumno',
    sexo: 'mujer'
}, {
    id: '3',
    nombre: 'Alumno2',
    apellido: 'Apellido2',
    edad: 47,
    tipo: 'alumno',
    sexo: 'hombre'
}];

app.get('/user', function(req, res) {
    mysql.getUsuarios(function(err, usuarios) {
        res.send(usuarios)
    })
});

app.get('/user/:id', function(req, res) {
    //cogemos por parametros el id de la barra de direccion
    let id = req.params.id
    mysql.getUsuariosID(id, function(err, usuarios) {
        res.send(usuarios)
    })
});

app.post('/user', function(req, res) {
    let nuevoUsuario = req.body
    mysql.crearUsuario(nuevoUsuario, function(err, usuarios) {
        //  console.log(err)
        res.send(usuarios)
    })
});

app.put('/user/:id', function(req, res) {
    let id = req.params.id
    let remplazarUsuario = req.body
    mysql.remplazarUsuario(id, remplazarUsuario, function(err, usuarios) {
        // console.log(err)
        res.send(usuarios)
    })
});

app.patch('/user/:id', function(req, res) {
    let id = req.params.id
    let rempParteUsuario = req.body
    mysql.rempParteUsuario(id, rempParteUsuario, function(err, usuarios) {
        res.send(usuarios)
    })
});

app.delete('/user/:id', function(req, res) {
    let id = req.params.id
    // let borrarUsuario = req.body
    mysql.borrarUsuario(id, function(err, usuarios) {
        console.log(err)
        res.send(usuarios)
    })
});
app.get('/edadmedia', function(req, res) {
    mysql.edadMedia(function(err, usuarios) {
        res.send(usuarios)
    })
});
app.get('/sexo/:sexo', function(req, res) {
   let sexo=req.params.sexo
    mysql.sexo(sexo,function(err, usuarios) {
        res.send(usuarios)
    })
});




app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});