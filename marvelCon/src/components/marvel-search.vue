<template>
  <div class="search">
    <input type="text" v-model="nombre" />
    <button @click="emitSearch">Buscar</button>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'MarvelSearch',
  data: function () {
    return {
      nombre: ""
    }
  },  
  methods: {
    //  este método envia con emit el eventop search y el nombre del superheroe recogido del input text
    emitSearch: function () {
      if (this.nombre) {
        this.$emit('search', {nombre: this.nombre}) 
        this.todo = null
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
  ul {
    list-style: none;
    font-size: 24px;
   }
  li {
    height: 30px;
    line-height: 30px;
  }
</style>
