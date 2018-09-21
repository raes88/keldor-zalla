<template>
  <div>
    <h1>Hola {{$store.state.username}}, estatus de {{$store.state.role}}, email {{$store.state.email}}</h1>
    <h2>Mantenimieto De Producto</h2>
   <button type="button" class="btn btn-outline-success my-2 my-sm-0 botnLogin" v-on:click="volver()">Volver</button>
  </div>
</template>
<script>
export default {
  name: 'Producto',
  methods: {
    volver () {
      this.$router.push({ name: 'admin' })
    }
  }
}
</script>
<style scoped>

</style>
