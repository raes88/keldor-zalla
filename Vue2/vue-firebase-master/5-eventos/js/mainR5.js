const vm = new Vue({
    el: 'main',
    data: {
    	nuevaTarea:null,
        tareas: [
            'aprender vue.js',
            'aprender es6',
            'publicar aldo todos los dias'
        ]
    },
    methods: {
        agregarTarea() {
        	// this, hace referencia a la instancia Vue
        	this.tareas.push(this.nuevaTarea)
        	this.nuevaTarea=null
            
        }
    }

})

//Vanilla JavaScript
/*function agregarTarea() {
    const input = document.querySelector('input[type=text]')
    vm.tareas.push(input.value)
    input.value = ''
}*/