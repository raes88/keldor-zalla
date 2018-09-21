<template>
  <div class="container" id="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <button class="btn btn-outline-success my-2 my-sm-0 botn" type="button" v-on:click="manteProductos()">Productos</button>
          <button class="btn btn-outline-success my-2 my-sm-0 botn" type="button" v-on:click="manteUsuarios()">Usuarios</button>
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
          <button type="button" class="btn btn-outline-success my-2 my-sm-0 botnLogin" v-on:click="salir()">Login out</button>
        </form>
      </div>
    </nav>
    <div class="row justify-content-md-center row border border-dark " id="respuesta">
      <div class="col-5 proUsu border border-dark resp">
        <producto :producto="producto" v-for="producto in productos" :key="producto._id" />
      </div>
      <div class="col-5 proUsu border border-dark resp">
        <usuario :usuario="usuario" v-for="usuario in usuarios" :key="usuario._id" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from './../plugins/axios'
import producto from './../components/producto.vue'
import usuario from './../components/usuario.vue'

export default {
  name: 'Admin',
  components: { producto, usuario },
  mounted () {
    this.obtenerProductos()
    this.obtenerUsuarios()
  },
  data () {
    return {
      productos: [],
      usuarios: []
    }
  },
  methods: {
    salir () {
      this.$router.push({ name: 'home' })
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
    },
    obtenerUsuarios () {
      axios.get('http://localhost:4040/api/users/')
        .then((respuesta) => {
          this.usuarios = respuesta.data
          console.log(respuesta)
        })
        .catch(e => {
          // alert('Rellena todos los campos')
          console.log(e)
        })
    },
    manteProductos () {
      this.$router.push({ name: 'manteproducto' })
    },
    manteUsuarios () {
      this.$router.push({ name: 'mantecliente' })
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
  background: #E7EEE4;
}
.resp{
  background: #DDEAD7
}

</style>
