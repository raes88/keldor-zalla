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

module.exports = {
    todo
}