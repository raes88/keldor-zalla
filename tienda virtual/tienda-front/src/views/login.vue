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
      console.log('hola')
      if (this.input.username !== '' && this.input.password !== '') {
        axios.post('http://localhost:4040/api/auth/login ', this.input)
          .then((respuesta) => {
            console.log(respuesta)
            if (respuesta.status === 200) {
              console.log('logeado')
              this.$emit('authenticated', true)
              this.$router.replace({ name: 'secure' })
            } else {
              console.log('The username and / or password is incorrect')
            }
          })
          .catch(e => {
            console.log(e)
          })
      } else {
        console.log('A username and password must be present')
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
