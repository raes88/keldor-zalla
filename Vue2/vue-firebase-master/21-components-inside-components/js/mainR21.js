Vue.component('lista-tareas',{
	props: ['tareas'],
	template: `<div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for="tarea in tareas" :latarea="tarea" :key="tareas.id" ></tarea>
                </ul>
            </div>`,
})
Vue.component('tarea',{
	props:['latarea'],
	template:`<li>{{latarea}}</li>`
})

new Vue({
	el :'main',
	data:{
		tareas:[
		'Finalizar seccion Componentes',
		'Iniciar workflow con Vue CLI y wevpack',
		'Terminar de estudiar la documentacion de Vuex',
		'Seguir jugando con Vue Router y grabar el primer video',
		]
	}
})