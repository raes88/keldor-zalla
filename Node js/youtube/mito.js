/*console.log('Soy el puto amo')
let subscritores=22000
module.exports.subscritores=subscritores*/

/*module.exports.saludar = function () {
    console.log('Hola cara culo')
}*/
let subscritores = 22000
module.exports = {
    subs: subscritores,
    saludar: function () {
        console.log('Hola cara culo')
    },
    sumar: (a, b) => a + b,
    mostrar: a => a + 10,
}