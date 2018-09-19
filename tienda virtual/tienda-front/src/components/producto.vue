<template>
  <div class="productos">
    <img :src="producto.producImagen">
    <h5> {{producto.producName}} </h5>
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
