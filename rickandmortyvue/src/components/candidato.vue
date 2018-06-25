<template>
  <div class="candidato">
      <img :src="candidato.picture.medium" align="rigth" >
      <h3>{{candidato.name.title}} {{candidato.name.first}} {{candidato.name.last}}</h3>
      <h3></h3>
      <h4>Direccion :
            {{candidato.location.city}} - {{candidato.location.street}} / {{candidato.location.postcode}}</h4>
      <ul>
        <li v-for="(value,key,index) in candidato.location" :key="index">
         {{key}} - {{value}}
        </li>
      </ul>
      <hr>
    </div>
</template>

<script>
export default {
  name: 'candidato',
  props: {
    candidato: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
