Vue.component('candidato', {
    //props:['nombre','correoe','imagen'],
    props: {

        // opcion obligatoria
        nombre: {
            type: [String, Array],
            required: true,
        },
        // si no existe le pone el texto señalado
        // en este caso un texto o un email
        correoe: {
            type: String,
            default: "Sin Correo Electronico"
        },
        location: {
            type: Object,
            default () {
                return {
                    ciudad: "No Definida"
                }
            }
        },
        imagen: String,
        id: String
    },
    template: '#candidato-template',
})

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos()
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100').then((respuesta) => {
                this.candidatos = respuesta.data.results
            })
        }
    }

})