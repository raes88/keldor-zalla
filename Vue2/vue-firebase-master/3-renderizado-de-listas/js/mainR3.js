const vm = new Vue({
    el: 'main',
    data: {
        laborales: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        tareas: [
            { nombre: 'Hacer la compra', prioridad: 'baja' },
            { nombre: 'Aprender vue', prioridad: 'alta' },
            { nombre: 'Ir al Gimnasio', prioridad: 'alta' },
        ],
        persona:{
        	nombre:'Raul',
        	profesion:'dev',
        	ciudad:'Bilbao'
        }
    },

})