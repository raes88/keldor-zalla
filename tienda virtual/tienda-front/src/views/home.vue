git<template>
  <div id="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          <button type="button" class="btn btn-outline-success my-2 my-sm-0 botnLogin" v-on:click="salir()">Login</button>
        </form>
      </div>
      <div>
      </div>
    </nav>
    <div>
      <h1>Usuario sin registrar</h1>
    </div>
   <div>
      <producto :producto="producto" v-for="producto in productos" :key="producto._id"/>
    </div>
  </div>
</template>
<script>
import axios from './../plugins/axios'
import producto from './../components/producto.vue'
export default {
  name: 'Home',
  components: { producto },
  mounted () {
    this.obtenerProductos()
  },
  data () {
    return {
      productos: []
    }
  },
  methods: {
    salir () {
      this.$router.push({ name: 'login' })
    },
    obtenerProductos () {
      axios.get('http://localhost:4040/api/producto/')
        .then((respuesta) => {
          this.productos = respuesta.data
        })
        .catch(e => {
          // alert('Rellena todos los campos')
          console.log(e)
        })
    }
  }
}

</script>
<style scoped>
.botnLogin {
  margin-left: 6px;
}

</style>
