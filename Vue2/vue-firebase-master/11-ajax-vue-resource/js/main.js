new Vue({
    el: 'main',
    mounted() {
        console.log('Estoy montado')
        this.cargarPersonas();
    },
    data: {
        personas: []
    },
    methods: {
        cargarPersonas() {
            this.$http.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => {
                    this.personas = respuesta.body.results;
                });
        }
    },
    created: function () {
      console.log('Estoy creado')
    }
});