<template>
  <div class="usuarios">
    <h3> Nombre : {{usuario.username}} </h3>
    <h5> Telefono : {{usuario.mobileNumber}} </h5>
    <h5> Categoria : {{usuario.email}} </h5>
    <h5> Direccion : {
          calle: {{usuario.direccion.calle}},
          cp: {{usuario.direccion.cp}},
          numero: {{usuario.direccion.numero}},
          provincia: {{usuario.direccion.provincia}},
          localidad: {{usuario.direccion.localidad}}</h5>
    <h5> Role : {{usuario.role}}</h5>
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
