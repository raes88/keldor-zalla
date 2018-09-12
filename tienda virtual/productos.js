

//creamos la base de datos en mongo llamada consultas

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/express-mongoose-es6-rest-api-develop"

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err
  console.log("Database created!")
  db.close()
})*/

//---------------------------
// creamos las colecciones llamadas coleccConsultas
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("express-mongoose-es6-rest-api-develop");
  dbo.createCollection("productos", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 




