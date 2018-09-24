<template>
  <div> <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <h5 class="nav-item" align="right">Hola {{$store.state.username}}</h5>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          <button type="button" class="btn btn-outline-success my-2 my-sm-0 botnLogin" v-on:click="volver()">Volver</button>
        </form>
      </div>
    </nav>
    <h2>Manteniminto De Producto</h2>
    <div class="proUsu border border-dark resp">
       <producto :producto="producto" v-for="producto in productos" :key="producto._id" />
    </div>
  </div>
</template>
<script>
import axios from './../plugins/axios'
import producto from './../components/producto.vue'
export default {
  name: 'MantenimintoProductos',
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
    volver () {
      this.$router.push({ name: 'admin' })
    },
    obtenerProductos () {
      axios.get('http://localhost:4040/api/producto/')
        .then((respuesta) => {
          this.usuarios = respuesta.data
          console.log(respuesta)
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

.botn {
  margin-right: 8px;
}

h5 {
  margin-right: 15px;
}
.proUsu{
  padding: 3%;
  margin: 3%;
}
#respuesta{
  margin-top: 2%;
  margin-right: 2%;
  background: #E4E4E4;
}
.resp{
  background: #F2F2F2;
}

</style>
