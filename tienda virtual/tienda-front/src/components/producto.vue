<template>
  <div class="productos">
    <img class="img" :src="'http://localhost:4040/' + producto.producImagen" align="right">
    <h3> {{producto.producName}} </h3>
    <h5> Descripcion : {{producto.producDescripcion}} </h5>
    <h5> Categoria : {{producto.categoria}} </h5>
    <h5> Precio : {{producto.producPrecio}}</h5>
    <hr>
  </div>
</template>
<script>
export default {
  name: 'producto',
  props: {
    producto: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
    console.log(this.producto)
  }
}

</script>
<style scoped>
.img {
  width: 10%;
}

</style>
