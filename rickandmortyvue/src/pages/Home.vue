<template>
  <div>
    <personaje :personaje="personaje" v-for="personaje in personajes" :key="personaje._id"/>
     <!-- <pre>{{$data}}</pre> -->
 </div>
 </template>
<script>
import axios from 'axios'
import personaje from './../components/personaje.vue'
export default {
  name: 'Home',
  components: { personaje },
  mounted () {
    this.cargarPersonajes()
  },
  data () {
    return {
      personajes: []
    }
  },
  methods: {
    cargarPersonajes () {
      console.log('hola')
      axios.get(`http://localhost:3000/consultas/1,183`)
        .then(respuesta => {
          this.personajes = respuesta.data.resultado
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
