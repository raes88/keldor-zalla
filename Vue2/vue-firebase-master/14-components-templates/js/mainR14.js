Vue.component('elegir-ganador', {
    // obtiene del componente principar un listado de personas
    //añadimos a personas la propiedad listado
    props: ['listado'],

    methods: {
        elegirGanador() {
            // escogemos uno aleatoriamente y nos dice que ese es el ganador

            // miramos la cantidad de participantes
            let cantidad = this.participantes.length
            //seleccionamos un indice  al azar
            let indice = Math.floor((Math.random() * cantidad))
            console.log(this.ganador)
            console.log(indice)
        }
    },
    data() {
        // El modelo o componente es una funcion que retona un objeto
        return {
            ganador: false,
            participantes: this.listado
        }
    },
})
new Vue({
    el: 'main',
    data: {
        personas: [
            'Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'
        ]
    },
})