<template>
  <div class="container">
    <div class="row h-100 justify-content-center align-items-center col-12 d-flex justify-content-center hadow p-3 mb-5 bg-light rounded">
      <h1 class="d-flex justify-content-center"><p class="font-weight-bold">Producto Nuevo</p></h1>
      <form class="col-12">
        <fieldset class="shadow p-3 mb-5 bg-light rounded">
          <div class="form-group">
            <div class="d-flex justify-content-around">
              <label for="formGroupExampleInput">Nombre:</label>
              <input type="text" class="form-control nombre" name="producName" v-model="input.producName" placeholder="Nombre" required />
              <select id="categoria" class="form-control" v-model="input.categoria" required>
                <option value="consumibles">Consumibles</option>
                <option value="perifericos">Perifericos</option>
                <option value="sobremesa">Pc Sobremesa</option>
                <option value="portatil">Pc Portatil</option>
              </select>
            </div>
          </div>
        </fieldset>
        <div id="botones" class="d-flex justify-content-center">
          <button type="button" class="btn btn-outline-success my-2 my-sm-0" v-on:click="altaUsuario()">Alta De Usuario</button>
          <button type="reset" class="btn btn-outline-success my-2 my-sm-0">Resetear Formulario</button>
          <button type="button" class="btn btn-outline-success my-2 my-sm-0" v-on:click="salir()">Salir</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from './../plugins/axios'
export default {
  name: 'registro',
  data () {
    return {
      input: {
        producName: '',
        categoria: '',
        producPrecio: '',
        distribuidor: '',
        producCoste: '',
        producDescripcion: '',
        producImagen: ''
      }
    }
  },
  methods: {
    altaProducto () {
      axios.post('http://localhost:4040/api/producto ', this.input)
        .then((respuesta) => {
          // console.log(respuesta)
          if (respuesta.status === 200) {
            this.$router.push({ name: 'manteproducto' })
          } else {
            console.log('error')
          }
        })
        .catch(e => {
          alert('Rellena todos los campos')
          console.log(e)
        })
    },
    salir () {
      this.$router.push({ name: 'manteproducto' })
    }
  }
}

</script>
<style scoped>
</style>
