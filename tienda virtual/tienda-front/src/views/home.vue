<template>
  <div id="home">
    <h1>Hola {{$store.state.username}}, estatus de {{$store.state.role}}, email {{$store.state.email}}</h1>

    <button type="button" v-on:click="login()">LoginOut</button>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style scoped>
</style>
