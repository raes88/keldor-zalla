//var consulta = require('index.js')

Vue.component('rickandmortyVue', {
    props: {
        consApi:{
        	type:Object,
        	
        } ,
    },
    template: '#rickandmorty-template'
})
new Vue({
    el: 'main',
    mounted() {
        this.obtenerResultados()
    },
    data: {
        consultas: [],
    },
    methods: {
        obtenerResultados() {
            axios.get('http://localhost:3000/consultas/6').then((respuesta) => {
                console.log(respuesta.data)
                this.consultas = respuesta.data.resultado
            })
        }
    }
})