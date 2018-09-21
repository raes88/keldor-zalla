<template>
  <div class="usuarios">
    <h3> Nombre : {{usuario.username}} </h3>
    <h5> Telefono : {{usuario.mobileNumber}} </h5>
    <h5> Categoria : {{usuario.email}} </h5>
    <h5> Direccion : </h5>
    <h7> Calle:  {{usuario.direccion.calle}} -</h7>
    <h7> Numero:  {{usuario.direccion.numero}}  -</h7>
    <h7> Provincia:  {{usuario.direccion.provincia}}  <br></h7>
    <h5> Role :  {{usuario.role}} </h5>
    <hr>
  </div>
</template>
<script>
export default {
  name: 'usuario',
  props: {
    usuario: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    console.log(this.usuario)
  }
}

</script>
<style scoped>
</style>
