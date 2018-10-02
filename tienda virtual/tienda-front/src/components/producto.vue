<template>
  <div class="productos">
    <img class="img" :src="'http://localhost:4040/' + producto.producImagen" align="right">
    <h3> {{producto.producName}} </h3>
    <h5> Distribuidor : {{producto.distribuidor}} </h5>
    <h5> Descripcion : {{producto.producDescripcion}} </h5>
    <h5> Precio : {{producto.producPrecio}}</h5>
    <button v-if="mostrar" type="button" class="btn btn-outline-success my-2 my-sm-0 botnModif" v-on:click="borrarProducto()">Borrar</button>
    <button v-if="mostrar" type="button" class="btn btn-outline-success my-2 my-sm-0 botnModif" v-on:click="modificarProducto()">Modificar</button>
    <div id="botones">
    <button v-if="carro" type="button" class="btn btn-outline-success my-2 my-sm-0 botnModif" v-on:click="sumarProducto()">+</button>
    <button v-if="carro" type="button" class="btn btn-outline-success my-2 my-sm-0 botnModif" v-on:click="restarProducto()">-</button>
    </div>
    <hr>
  </div>
</template>
<script>
import axios from './../plugins/axios'
export default {
  name: 'producto',
  props: ['producto', 'mostrar', 'carro'],
  methods: {
    borrarProducto () {
      // confirm('mensaje')
      //  console.log('------------')
      //  console.log(this.producto, 'producto.vue')
      let opcion = confirm('SEGURO !!!!')
      if (opcion === true) {
        axios.delete('http://localhost:4040/api/producto/' + this.producto._id)
          .then((respuesta) => {
            if (respuesta.status === 200) {
              this.$emit('productoBorrado')
            }
          })
          .catch(e => {
            // alert('Rellena todos los campos')
            console.log(e)
          })
      }
    },
    modificarProducto () {
      // console.log(this.usuario + ' usuario a modificar')
      this.$router.push({ name: 'modificarusuario', params: { usuario: this.usuario } })
    }
  }
  /* props: {
     producto: {
       type: Object,
       default () {
         return {}
       }
     }
   }
   created () {
      console.log(this.producto)
   } */
}

</script>
<style scoped>
.img {
  width: 10%;
}
#botones{
  text-align: right;
}

</style>
