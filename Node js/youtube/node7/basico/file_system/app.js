const fs = require('fs')
console.log('iniciado')

/*fs.readFile('data.txt','utf-8', (error,data) => {
    if (error) {
        console.log(`Error ${error}`)
    }else{
        console.log(data)

    }
})*/

let data = fs.readFileSync('data.txt', 'utf-8')
console.log(data)
console.log('finalizado')

/*fs.rename('data.txt','dataRaul.txt',(error)=>{
    if(error)throw error
    console.log('renombrado')
    
})*/

/*fs.appendFile('data.txt', '\n Gracias por suscribierte', (error) => {
    if (error) console.log(`Error ${error}`)
})

fs.unlink('data1.txt', (error) => {
    if (error) throw error
    console.log('Eliminado')
})*/
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'))
fs.readdir('./../../basico',(error,files)=>{
    files.forEach(file=>{
        console.log(file)
    })
})