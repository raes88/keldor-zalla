<template>
  <div>
    <candidato :candidato="persona" v-for="persona in personas" :key="persona.id.value"/>
     <!-- <pre>{{$data}}</pre> -->
  </div>

</template>
<script>
import axios from 'axios'
import candidato from './../components/candidato'
export default {
  name: 'todo',
  components: {
    candidato
  },
  mounted () {
    this.cargarPersonas()
  },
  data () {
    return {
      personas: []
    }
  },
  methods: {
    cargarPersonas () {
      axios.get('https://randomuser.me/api/?results=10')
        .then((respuesta) => {
          this.personas = respuesta.data.results
        })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
