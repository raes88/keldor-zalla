<template>
  <div class="d-flex justify-content-center">
    <div class="shadow p-3 mb-5 bg-light rounded">
      <h1 class="d-flex justify-content-center"><p class="font-weight-bold">Login</p></h1>
      <input type="text" name="username" v-model="input.username" placeholder="Username" />
      <input type="password" name="password" v-model="input.password" placeholder="Password" />
      <button type="button" class="btn btn-outline-secondary" v-on:click="login()">Login</button>
      <button type="button" class="btn btn-outline-secondary" v-on:click="nuevoUsuario()">Usuario Nuevo</button>
    </div>
  </div>
</template>
<script>
// import axios from './../plugins/axios'
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
      if (this.input.username !== '' && this.input.password !== '') {
        this.$store.dispatch('login', this.input)
        // axios.post('http://localhost:4040/api/auth/login ', this.input)
        //   .then((respuesta) => {
        //     console.log(respuesta)
        //     if (respuesta.status === 200) {
        //       this.$router.push({ name: 'home' })
        //     } else {
        //       console.log('The username and / or password is incorrect')
        //     }
        //   })
        //   .catch(e => {
        //     alert('Usuario o contraseña erroneo o no existe')
        //     console.log(e)
        //   })
      } else {
        alert('Usuario o contraseña vacio')
      }
    },
    nuevoUsuario () {
      this.$router.push({ name: 'registro' })
    }
  }
}

</script>
<style scoped>
#login {
  width: 500px;
  border: 1px solid #212221;
  background-color: #BCB7B7;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}

</style>
