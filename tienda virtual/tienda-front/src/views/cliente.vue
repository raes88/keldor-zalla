<template>
  <div >
    <h1>Hola {{$store.state.username}}, estatus de {{$store.state.role}}, email {{$store.state.email}}</h1>
    <h2>Cliente</h2>
  </div>
</template>
<script>
export default {
  name: 'Cliente'
}

</script>
<style scoped>

</style>
