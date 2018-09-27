<template>
  <div class="usuarios">
    <h3> Nombre : {{usuario.username}} </h3>
    <h5> Telefono : {{usuario.mobileNumber}} </h5>
    <h5> Categoria : {{usuario.email}} </h5>
    <h5> Direccion : </h5>
    <h7> Calle: {{usuario.direccion.calle}} -</h7>
    <h7> Numero: {{usuario.direccion.numero}} -</h7>
    <h7> Provincia: {{usuario.direccion.provincia}}
      <br>
    </h7>
    <h5> Role :  {{usuario.role}} </h5>
    <button v-if="mostrar" type="button" class="btn btn-outline-success my-2 my-sm-0 botnModif" v-on:click="borrarUsuario()">Borrar</button>
    <button v-if="mostrar" type="button" class="btn btn-outline-success my-2 my-sm-0 botnModif" v-on:click="modificarUsuario()">Modificar</button>
    <hr>
  </div>
</template>
<script>
import axios from './../plugins/axios'
export default {
  name: 'usuario',
  props: ['usuario', 'mostrar'],
  created () {},
  methods: {
    borrarUsuario () {
      console.log(this.usuario, 'usuario.vue')
      axios.delete('http://localhost:4040/api/users/' + this.usuario._id)
        .then((respuesta) => {
          if (respuesta.status === 200) {
            this.$router.push({ name: 'mantecliente' })
          } else {
            console.log('Usuario no borrardo')
          }
        })
        .catch(e => {
          // alert('Rellena todos los campos')
          console.log(e)
        })
    },
    modificarUsuario () {
      console.log(this.usuario + ' usuario a modificar')
      this.$router.push({ name: 'modificarusuario', params: { usuario: this.usuario } })
    }
  }
}

</script>
<style scoped>

</style>
