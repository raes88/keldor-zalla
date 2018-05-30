var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

function getUsuarios(callback) {
    MongoClient.connect(url, function(err, db) {
        //if (err) throw callback(err)
        var dbo = db.db("mydb")
        dbo.collection("customers").find().toArray(function(err, result) {
            if (err) throw callback(err)
            console.log(result)
            db.close()
            return callback(null, result)
        })
    });
}
//-------------------------------------------

//-------------------------------------
function getUsuariosID(id, callback) {

    MongoClient.connect(url, function(err, db) {
        //if (err) throw callback(err)
        console.log(id)
        var dbo = db.db("mydb")
        var idMongo = new mongo.ObjectId(id)
        console.log(idMongo)
        dbo.collection("customers").find({ _id: idMongo }).toArray(function(err, result) {
            if (err) throw callback(err)
            console.log(result)
            db.close()
            return callback(null, result)
        })
    })

}

function crearUsuario(nuevoUsuario, callback) {

    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("mydb")
        var myobj = { name: nuevoUsuario.name, address: nuevoUsuario.address }
        dbo.collection("customers").insertOne(myobj, function(err, res) {
            if (err) throw callback(err)
            console.log("1 document inserted")
            db.close()
        })
    })
}

function remplazarUsuario(id, remplazarUsuario, callback) {
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("mydb")
        var idMongo = new mongo.ObjectId(id)
        var myobj = { $set: remplazarUsuario }
        console.log(idMongo)
        console.log(myobj)
        dbo.collection("customers").updateOne({ _id: idMongo }, myobj, function(err, res) {
            if (err) throw callback(err)
            console.log("1 document Updated")
            db.close()
            return callback(null)
        })
    })
}



function borrarUsuario(id, callback) {
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("mydb")
        var idMongo = new mongo.ObjectId(id)
        console.log(idMongo)
        dbo.collection("customers").deleteOne({ _id: idMongo }, function(err, result) {
            if (err) throw callback(err)
            console.log("1 document deletd")
            db.close()
            return callback(null)
        })
    })
}



function edadMedia(callback) {
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("mydb")

        dbo.collection("customers").aggregate([{ $group: { _id: null, media: { $avg: "$edad" } } }]).toArray(function(err, result) {
            if (err) throw callback(err)
            console.log(result)
            db.close()
            return callback(null, result)
        })
    });
}

function sexo(sexo, callback) {
    MongoClient.connect(url, function(err, db) {
        var dbo = db.db("mydb")  
     //  dbo.collection("customers").count({'sexo': sexo},function(err, result) {
          dbo.collection("customers").aggregate([{ $match: { sexo: sexo}}, { $count: "numero" } ]).toArray(function(err, result) {
            if (err) throw callback(err)
            console.log(result)
            db.close()
            return callback(null, result)
        })
    })
}

module.exports = {
    getUsuarios,
    getUsuariosID,
    crearUsuario,
    remplazarUsuario,
    borrarUsuario,
    edadMedia,
    sexo
}