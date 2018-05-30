var mysql = require('mysql')
var fs = require('fs')


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "2users"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE DATABASE 2users", function(err, result) {
        //if (err) throw err;
        console.log(err)
        console.log("Database created 2users");

        createUserTable(function() {
            console.log('TERMINADO')
        })
    });
});

function createUserTable(callback) {
    var sql = "CREATE TABLE clase (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255), apellido VARCHAR(255), edad INT, tipo VARCHAR(10), sexo VARCHAR(10))";
    con.query(sql, function(err, result) {
        //if (err) throw err;
        console.log(err)
        console.log("Table created clase");
        seedUserTable(function() {
            return callback()
        })
    });
}

function seedUserTable(callback) {
    getUsuarios(function(err, result) {
        if (result.length === 0) {
            var usuarios = [
                [
                    'Joseba', 'Legarreta', 27, 'profesor', 'hombre'
                ],
                [
                    'Alumno1', 'Apellido1', 17, 'alumno', 'mujer'
                ],
                [
                    'Alumno2', 'Apellido2', 47, 'alumno', 'hombre'
                ]
            ]
            var sql = "INSERT INTO clase (nombre, apellido, edad, tipo, sexo) VALUES ?";
            con.query(sql, [usuarios], function(err, result) {
                if (err) throw err;
                console.log("database fetched!");
                return callback()
            });
        } else {
            return callback()
        }
    })
}
//-----------------------------------------------------------------------
/*function getUsuarios(callback) {
    con.query("SELECT * FROM clase", function(err, result, fields) {
        if (err) return callback(err);
        console.log(result);
        return callback(null, result)
    });
}
*/
function getUsuarios() {
    return new Promise(function(resolve, reject) {
        con.query("SELECT * FROM clase", function(err, result, fields) {
            if (err) return reject(err);
            console.log(result);
            return resolve(result);
        })
    })
}


//-----------------------------------------------------------------------

function getUsuariosID(id) {
    return new Promise(function(resolve, reject) {
        con.query("SELECT * FROM clase where id=" + id, function(err, result, fields) {
            if (err) return reject(err);
            console.log(result);
            return resolve(result);
        })
    })

    /*con.query("SELECT * FROM clase where id=" + id, function(err, result, fields) {
        if (err) return callback(err);
        console.log(result);
        return callback(null, result)
    });*/
}

function crearUsuario(nuevoUsuario) {
    var nuevo = [
        [nuevoUsuario.nombre, nuevoUsuario.apellido, nuevoUsuario.edad, nuevoUsuario.tipo, nuevoUsuario.sexo]
    ]
    var sql = "INSERT INTO clase (nombre, apellido, edad, tipo, sexo) VALUES ?"
    return new Promise(function(resolve, reject) {
        con.query(sql, [nuevo], function(err, result, fields) {
            if (err) return reject(err);
            console.log(result);
            return resolve(result);
        })
    })
    /* //console.log(nuevoUsuario)
     
     //console.log(nuevo)
     var sql = "INSERT INTO clase (nombre, apellido, edad, tipo, sexo) VALUES ?"
     con.query(sql, [nuevo], function(err, result, fields) {
         if (err) return callback(err)

         return callback(null, result)
     })*/
}

function remplazarUsuario(id, remplazarUsuario) {
    var sql = `UPDATE  clase SET nombre='${remplazarUsuario.nombre}', apellido='${remplazarUsuario.apellido}', edad='${remplazarUsuario.edad}', tipo='${remplazarUsuario.tipo}', sexo='${remplazarUsuario.sexo}' WHERE id=` + id
    return new Promise(function(resolve, reject) {
        con.query(sql, function(err, result, fields) {
            if (err) return reject(err);
            console.log(result);
            return resolve(result);
        })
    })

    /*    var sql = `UPDATE  clase SET nombre='${remplazarUsuario.nombre}', apellido='${remplazarUsuario.apellido}', edad='${remplazarUsuario.edad}', tipo='${remplazarUsuario.tipo}', sexo='${remplazarUsuario.sexo}' WHERE id=` + id
        con.query(sql, function(err, result, fields) {
            if (err) return callback(err)

            return callback(null, result)
        });*/
}

function rempParteUsuario(id, rempParteUsuario) {
    var sql = generarQuery(id, rempParteUsuario)
    return new Promise(function(resolve, reject) {
        con.query(sql, function(err, result, fields) {
            if (err) return reject(err);
            console.log(result);
            return resolve(result);
        })
    })

    /* con.query(sql, function(err, result, fields) {
         if (err) return callback(err)
         console.log(err)
         return callback(null, result)
     });*/
}

function borrarUsuario(id) {
    return new Promise(function(resolve, reject) {
        con.query("DELETE  FROM clase where id=" + id, function(err, result, fields) {
            if (err) return reject(err);
            console.log(result);
            return resolve(result);
        })
    })

    /*con.query("DELETE  FROM clase where id=" + id, function(err, result, fields) {
        if (err) return callback(err);
        console.log(result);
        return callback(null, result)
    });*/
}

function generarQuery(id, rempParteUsuario) {
    var sql = "UPDATE  clase SET"
    for (campo in rempParteUsuario) {
        sql = sql.concat(" ", campo + " = '" + rempParteUsuario[campo] + "',")
    }
    sql = sql.slice(0, sql.length - 1)
    sql = sql.concat(" ", `WHERE id=${id}`)
    return sql
}

function edadMedia() {
    return new Promise(function(resolve, reject) {
        con.query("SELECT AVG(edad)FROM clase", function(err, result, fields) {
            if (err) return reject(err);
            console.log(result);
            return resolve(result);
        })
    })

   /* con.query("SELECT AVG(edad)FROM clase", function(err, result, fields) {
        if (err) return callback(err);
        console.log(result);
        return callback(null, result)
    });*/
}

function sexo(sexo) {
     return new Promise(function(resolve, reject) {
        con.query("SELECT count(sexo) FROM clase where sexo='" + sexo + "'", function(err, result, fields) {
            if (err) return reject(err);
            console.log(result);
            return resolve(result);
        })
    })
    /*con.query("SELECT count(sexo) FROM clase where sexo='" + sexo + "'", function(err, result, fields) {
        if (err) return callback(err);
        console.log(result);
        return callback(null, result)
    });*/
}

module.exports = {
    getUsuarios,
    getUsuariosID,
    crearUsuario,
    remplazarUsuario,
    rempParteUsuario,
    borrarUsuario,
    edadMedia,
    sexo
}