<template>
  <div id="container" class="d-flex justify-content-center">
    <div id="menu" class="shadow p-3 mb-5 bg-light rounded">
      <h1 class="d-flex justify-content-center"><p class="font-weight-bold">Login</p></h1>
      <input type="text" class="form-control mr-sm-2"  name="username" v-model="input.username" placeholder="Username" />
      <input type="password" class="form-control mr-sm-2" name="password" v-model="input.password" placeholder="Password" />
      <button type="button" class="btn btn-outline-success my-2 my-sm-0" v-on:click="login()">Login</button>
      <button type="button" class="btn btn-outline-success my-2 my-sm-0" v-on:click="nuevoUsuario()">Usuario Nuevo</button>
       <button type="button" class="btn btn-outline-success my-2 my-sm-0" v-on:click="entrar()">Volver</button>
    </div>
  </div>
</template>
<script>
import axios from './../plugins/axios'
import router from './../router/index'
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.$cookie)
      if (this.input.username !== '' && this.input.password !== '') {
        // this.$store.dispatch('login', this.input)
        axios.post('http://localhost:4040/api/auth/login', this.input)
          .then((respuesta) => {
            this.$cookie.set('token', respuesta.data.token, 1)
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
      } else {
        alert('Usuario o contraseña vacio')
      }
    },
    nuevoUsuario () {
      this.$router.push({ name: 'registro' })
    },
    entrar () {
      this.$router.push({ name: 'home' })
    }
  }
}

</script>
<style scoped>
#container {
  position: absolute;
  left: 40%;
  top: 15%;
  /*rigth: 50%;
  margin-top: -300px;
  margin-left: -350px;*/
}
input{
  margin-top: 6px;
  margin-bottom: 6px;
}
button{
  margin-top: 6px;
}

</style>
