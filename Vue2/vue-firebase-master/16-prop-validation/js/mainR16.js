Vue.component('candidato',{
	props:['nombre','correoe','imagen'],
	template:'#candidato-template',
})

new Vue({
	el:'main',
	mounted(){
		this.obtenerCandidatos()
	},
	data:{
		candidatos:[],
	},
	methods:{
		obtenerCandidatos(){
			axios.get('https://randomuser.me/api/?results=100').then((respuesta)=>{
				this.candidatos=respuesta.data.results
			})
		}
	}

})