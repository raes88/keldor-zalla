<template>
  <div class="personajes">
    <img :src="personaje.image" align="rigth">
    <h5>id : {{personaje.id}}</h5>
    <h5>Nombre : {{personaje.name}} </h5>
    <h5> Origen: {{personaje.origin.name}}</h5>
    <h5>Episodios : {{personaje.episode}} </h5>
    <hr>
  </div>
</template>
<script>
export default {
  name: 'personaje',
  props: {
    personaje: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    console.log(this.personaje)
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
