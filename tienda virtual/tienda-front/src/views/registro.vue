<template>
  <div id="registro">
    <h1>Registro</h1>
     <input type="text" name="username" v-model="input.username" placeholder="Nombre" />
     <input type="password" name="password" v-model="input.password" placeholder="Password" />
     <input type="" name="telefono" v-model="input.mobileNumber" placeholder="Telefono" />

  </div>
</template>
<script>
export default {
  name: 'registro',
  data () {
    return {
      input: {
        username: '',
        password: '',
        mobileNumber: ''
      }
    }
  }
}

</script>
<style scoped>
#registro {
  width: 500px;
  border: 1px solid #212221;
  background-color: #BCB7B7;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}

</style>
