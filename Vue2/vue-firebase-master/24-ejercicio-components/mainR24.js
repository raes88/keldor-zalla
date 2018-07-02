Vue.component('usuarios',{
	template:'',
	mounted(){
		axios.get('https://randomuser.me/api/?results=500')
	}
})
new Vue({
	el:'main',

})
