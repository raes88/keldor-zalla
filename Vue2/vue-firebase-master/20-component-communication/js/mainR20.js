const eventBus = new Vue()
Vue.component('listado-productos', {
    props: ['productos'],
    template: `
        <section>
            <ul>
                <li v-for="producto in productos">
                    {{ producto.nombre }} - 
                    <small>{{ producto.precio.toFixed(2) }} €</small>
                    <button @click="eliminarProducto(producto.precio)">-</button>
                    <button @click="anadirProducto(producto.precio)">+</button>
                </li>
            </ul>
        </section>`,
	methods: {
        anadirProducto(precio){
            eventBus.$emit('anadir', precio);
        },
        eliminarProducto(precio) {
            eventBus.$emit('eliminar', precio);
        },
    }
})

Vue.component('carrito-compra',{
	template: `<section>
				<h1>{{total.toFixed(2)}}</h1>
				<h3>{{cantidadProductos}} - Productos</h3>
				</section>`,
	data() {
		return{
			cantidadProductos :0,
			total: 0,
		}
	},
	created(){
		eventBus.$on('anadir',(precio)=>{console.log(precio)})
		eventBus.$on('eliminar',(precio)=>{console.error(precio)})

	}

})

new Vue({
	el:'main',
	data:{
		productos:[
			{nombre:'Libro ES6 ', precio:39},
			{nombre:'Portatil ', precio:1300},
			{nombre:'Cafe', precio:2},
			{nombre:'Auriculares ', precio:80},
			{nombre:'Moleskine ', precio:19},
		
		]
	}
})
