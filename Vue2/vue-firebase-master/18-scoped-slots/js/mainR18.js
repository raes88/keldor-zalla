Vue.component('mis-tareas', {
    props: ['listado'],
    template: `#mis-tareas-template`,
});

new Vue({
    el: 'main',
    data: {
        tareas: [
            { titulo: 'Sali a correr' },
            { titulo: 'Recoger la casa' },
            { titulo: 'Aprender Vue.js' },
            { titulo: 'Leer cada dia' },
        ]
    }
});