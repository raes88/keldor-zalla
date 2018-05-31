var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

function todo() {
    return new Promise(function(resolve, reject) {
        MongoClient.connect(url,{ useNewUrlParser: true}, function(err, db) {
          //  console.log('-----------------------')
            var dbo = db.db("consultas")
            dbo.collection("coleccConsultas").find({}).toArray(function(err, result) {
                //console.log('abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
                if (err) return reject(err);

                console.log(result)
               // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                return resolve(result)

            })
        })
    })
}

/*function crearConsulta(datos, callback) {

    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("consultas")
        var miConsulta = { url: datos.url, resultado: datos.resultado }
        dbo.collection("coleccConsultas").insertOne(miConsulta, function(err, res) {
            if (err) throw callback(err)
            console.log("1 document inserted")
            db.close()
        })
    })
}

function compruConsulta(comando) {
    MongoClient.connect(url, function(err, db) {

        var dbo = db.db("consultas")
        dbo.collection("customers").find({ url: comando }).toArray(function(err, result) {
           console.log(result)
            if (err) throw callback(err)
            console.log(result)
            db.close()
            return callback(null, result)
        })
    })
}
*/
module.exports = {
    todo
}