Vue.component('lista-tareas',{
	template: `<div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :latarea="tarea" :key="tareas.id" ></tarea>
                </ul>
            </div>`,
    data(){
    	return{
    		tareas:[
		'Finalizar seccion Componentes',
		'Iniciar workflow con Vue CLI y wevpack',
		'Terminar de estudiar la documentacion de Vuex',
		'Seguir jugando con Vue Router y grabar el primer video',
		],
    	}
    }
})
Vue.component('tarea',{
	props:['latarea'],
	template:`<li>{{latarea}}</li>`
})
Vue.component('contacto',{
	template:`<li><a href="mailto:juan@wmedia.es">juan@wmedia.es</a> <hr></li>`
})
Vue.component('bio',{
	template: `<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia sit amet magna quis maximus. Vivamus eget consectetur tellus. Sed diam ante, dictum sit amet tincidunt ac, facilisis eget dui. </p><hr></div>`,
})

new Vue({
	el :'main',
	 data: {
        seleccionado: 'lista-tareas'
    }
})