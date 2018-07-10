const os = require('os')
const fs = require('fs')
const mi = require('./mito')

//--------------------------------------------------
mi.saludar()
console.log(mi.subs)
let suma = mi.sumar(10, 5)
console.log(suma)
console.log(`el resultado de la suma es : ${mi.sumar(10,5)}`)
console.log(`El resultado de la segunda suma es : ${mi.mostrar(8)}`)
setTimeout(() => {
    console.log('Termine')
}, 2000);

//--------------------------------------------------

let cpu = os.cpus()
let sistema = os.platform()
let usuario = os.hostname()

let cpuString = JSON.stringify(cpu)
// creamos un archivo y le añadimos un texto  y chequeamos el error con un callback
/*fs.appendFile('raul.txt', `Informacion del cpu : ${cpuString}`, function (error) {
    if (error) {
        console.log(' Error al crear el archivo')
    }
})*/