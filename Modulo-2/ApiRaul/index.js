var express = require('express') //llamamos a Expres
var bodyParser = require('body-parser')
var app = express()
var mongo = require('./apiRaul.js')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"


//---------------------
const axios = require('axios')
const apiUrl = 'https://rickandmortyapi.com/api/'

app.use(bodyParser.json()) //para la aplicación de análisis / json
app.use(bodyParser.urlencoded({ extended: true })) //para la aplicación de análisis / x-www-form-urlencoded

//------------------------------------

// añadimos cabeceras
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://rickandmortyapi.com/api/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
})


app.get('/todo', function(req, res) {
    mongo.todo().then(function(datos) {
        console.log('--------------------------------------------------')
        console.log(datos)
        console.log('--------------------------------------------------')
        res.send(datos)

    })
})
//---------------------

app.get('/characters', function(req, res) {
    axios.get(apiUrl + 'character/')
        .then(function(response) {
            console.log(response.data);
            res.send(response.data)
        })
        .catch(function(error) {
            console.log(error.data);
        });

})
//------------------------
//?name=rick&status=alive
app.get('/consultas/:params?', function(req, res) {
    let params = req.params.params
    let query = req.query
    var result = generarQuery(query, params)
    var comandos = apiUrl + 'character/' + result
    var datos = ''
    console.log('----------------- ' + comandos)

    //comprobamos si existe en la base de datos
    compruConsulta(comandos)
        .then(function(result) {

            // si existe en la base de datos lo cogemos 
            if (result) {
                console.log('-----En la base de datos :')
                console.log(comandos)
               
                return res.send(result)
            }
            //si no esta en la base de datos lo pedimos a a la pagina
            axios.get(comandos)
                .then(function(response) {
                    console.log('respuesta consulta : ')
                    console.log( response.data)
                    res.send(response.data)
                    let datConsulta=response.data
                    let direccion=comandos
                    crearConsulta(direccion,datConsulta)
                })
                .catch(function(error) {
                    //console.log(error.data)
                })
        })
        .catch(function(error) {

        })

    /**/

    //console.log('Resultado consultaNueva' +  consultaNueva)
})
function crearConsulta(direccion,datConsulta){
    console.log('Funcion URL : ')
    console.log(direccion)
    console.log('Funcion datos :')
    console.log(datConsulta)
      MongoClient.connect(url, function(err, db) {
                    var dbo = db.db("consultas")
                    var miConsulta = { url: direccion, resultado: datConsulta }
                    dbo.collection("coleccConsultas").insertOne(miConsulta, function(err, res) {
                        if (err) throw callback(err)
                        console.log("1 document inserted")
                        db.close()
                    })
                })

}

function compruConsulta(comando) {
    return new Promise(function(resolve, reject) {
        MongoClient.connect(url, function(err, db) {
            var dbo = db.db("consultas")
            dbo.collection("coleccConsultas").findOne({ url: comando }, function(err, result) {
                if (err) return reject(err);
                console.log(result)
                return resolve(result);
            })
        })
    })
}


function generarQuery(query, params) {
    let resultado = ""
    if (params) {
        resultado += params
    }
    if (Object.keys(query).length > 0 && query.constructor === Object) {
        resultado += '?'
        for (const i in query) {
            if (query.hasOwnProperty(i)) {
                resultado += i + "=" + query[i] + "&"
            }
        }
        resultado = resultado.slice(0, resultado.length - 1)
    }
    return resultado
}

//arrancamos el servidor en el puerto 3000
app.listen(3000, function() {
    console.log('escuchando el puerto 3000')
})