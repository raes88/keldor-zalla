const os = require('os')
const fs = require('fs')

let cpu = os.cpus()
let sistema = os.platform()
let usuario = os.hostname()

let cpuString = JSON.stringify(cpu)
// creamos un archivo y le añadimos un texto  y chequeamos el error con un callback
fs.appendFile('raul.txt', `Informacion del cpu : ${cpuString}`, function (error) {
    if (error) {
        console.log(' Error al crear el archivo')
    }
})