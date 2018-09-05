<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>
<script>
import axios from './../plugins/axios'
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
        axios.post('http://localhost:4040/api/auth/login ', this.input)
          .then((respuesta) => {
            console.log(respuesta)
            if (respuesta.status === 200) {
              this.$router.push({ name: 'home' })
            } else {
              console.log('The username and / or password is incorrect')
            }
          })
          .catch(e => {
            alert('Usuario o contraseña erroneo o no existe')
            console.log(e)
          })
      } else {
        alert('Usuario o contraseña vacio')
      }
    }
  }
}
</script>
<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}

</style>
