var consulta = require('index.js')

vue.component('rickandmortyapiVue', {
    props: {
        resultado: Object,
    },
    template: '#rickandmorty-template'
})
new Vue({
    el: main,
    mounted() {
        this.obtenerResultados()
    },
    data: {
        consulta: [],
    },
    methods: {
        obtenerResultados() {
            axios.get().then((respuesta) => {
                this.consulta = respuesta.data.results
            })
        }
    }
})