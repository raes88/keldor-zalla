<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Todo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Raton</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fuente</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pantalla</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Teclado</a>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="carro" v-on:click="goTo()">Carro - {{ numProductos }}</button>
            <!-- <a class="nav-link font-weight-bold"  id="carro"  @click="goTo('carrito')">Carro - {{ numProductos }}</a> -->
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
    <div class="shadow p-3 mb-5 bg-light rounded" id="containerProducto">
      <producto :producto="producto" :carro="true" v-for="producto in productos" :key="producto._id" id="containerRespuesta" />
    </div>
  </div>
</template>
<script>
import axios from './../plugins/axios'
import producto from './../components/producto.vue'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Cliente',
  components: { producto },
  computed: {
    ...mapState(['carro']),
    ...mapGetters(['totalCompra', 'numProductos'])
  },
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
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
      this.$router.push({ name: 'home' })
    },
    goTo (name) {
      this.$router.push({ name: 'carrito' })
    },
    obtenerProductos () {
      axios.get('http://localhost:4040/api/producto/')
        .then((respuesta) => {
          this.productos = respuesta.data
          // console.log(respuesta)
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
h5 {
  margin-right: 15px;
}

#home {
  margin-top: 3%;
  padding-top:
}

#containerRespuesta {
  margin: 3%;
}

#containerProducto {
  background: #f8f9fa;
  margin-top: 3%;
  margin-bottom: 3%;
}

#carro {
  margin-left: 25px;
  color: #FF0612;
}

#carro:hover {
  color:#FFFFFF;
}

</style>
