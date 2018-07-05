<template>
    <div>
        <template v-if="persona">
            <h1 v-text="datosPersona.nombre"></h1>
            <h2 v-text="datosPersona.correoe"></h2>
            <img :src="datosPersona.foto">
        </template>
        <span v-else>Cargando persona...</span>
    </div>
</template>


<script>
	import axios from 'axios'
	export default{
		mounted(){
			/*llama con axio a la direccion y cuando tengas la repuesta haz esto*/
			axios.get('https://randomuser.me/api/').then((respuesta)=>{
				/*results[0] es informacion de la propia api*/
				/*creamos una propiedad llamada persona*/
				this.persona=respuesta.data.results[0]
			})
		},
		data(){
			return{
				/*inicializamos persona a null*/
				persona:null,
			}
		},
		/*definimos lo que quermos*/
		computed:{
			datosPersona(){
				return {
					/*seleccionamos nombre,email y la foto*/
					nombre: `${this.persona.name.first} ${this.persona.name.last} `,
					foto: this.persona.picture.large,
                 	correoe: this.persona.email,
			}

			}

		}

	}
</script>

<style></style>