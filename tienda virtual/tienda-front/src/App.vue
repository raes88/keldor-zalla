<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from './/plugins/axios.js'
import router from './router/index.js'
Vue.use(BootstrapVue)
export default {
  name: 'App',
  beforeCreate () {
    console.log('Hola mundo')
    let token = this.$cookie.get('token')
    console.log(token)
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
      axios.get('http://localhost:4040/api/auth/token-data')
        .then((respuesta) => {
          console.log(respuesta.data)
          this.$store.dispatch('login', respuesta)
          if (respuesta.data.role === 'ADMIN') {
            router.push({ name: 'admin' })
          } else {
            router.push({ name: 'cliente' })
          }
        })
        .catch(e => {
          alert('Usuario o contraseña erroneo o no existe')
          console.log(e)
        })
    }
  }
}

</script>
<style>
body {
  background-color: #f0f0f0;
}

h1 {
  padding: 0;
  margin-top: 0;
}

#app {
  width: 1024px;
  margin: auto;
}

</style>
