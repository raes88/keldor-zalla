
// añadimos filtros de vue a vue2
//ponerlo siempre antes de devinir New Vue
Vue.filter('alReves',(valor) => valor.split('').reverse().join(''));

new Vue({
    el: 'main',
    data: {
    	minimo:5,
    	busqueda:'',
        juegos: [{
                titulo: 'Battlefield 1',
                genero: 'FPS',
                puntuacion: 9
            },
            {
                titulo: 'Civilization VI',
                genero: 'Estrategia',
                puntuacion: 10
            },
            {
                titulo: 'Resident Evil 7',
                genero: 'Survival Horror',
                puntuacion: 7,
            },
        ]
    },
    computed:{
    	mejoresJuegos(){

    		// añadimos un filtro  para mostrar en la lista los juegos de la tabla 
    		// juegos cuya puntuacion sea la minima asignada
    		// lo hacemos con una barra de desplazamiento 
    		return this.juegos.filter((juego)=> juego.puntuacion>= this.minimo)
    	},
    	buscarJuegos(){
    		// añadimos un filtro para mostar en la lista solo los juegos que contengan
    		// los caracteres que metemos en el input
    		return this.juegos.filter((juego)=> juego.titulo.includes(this.busqueda))
    	}
    }
})