<template>
  <form>
    <div id="registro">
      <h1>Registro</h1>
      <div id="campos">
        <fieldset>
          <h4 id="titulos">Nombre</h4>
          <input id="texto" type="text" name="username" v-model="input.username" placeholder="Nombre" required />
          <h4 id="titulos">Password</h4>
          <input id="texto" type="password" name="password" v-model="input.password" placeholder="Password" required />
        </fieldset>
        <fieldset id="direccion">
          <legend>Direccion:</legend>
          Calle:
          <input id="calle" type="text" name="calle" v-model="input.direccion.calle" placeholder="Calle" /> Num :
          <input id="direcNum" type="number" name="numero" v-model="input.direccion.numero" placeholder="Num" /> Cp :
          <input id="direcNum" type="number" name="cp" v-model="input.direccion.cp" placeholder="CP" /> Local. :
          <input id="direcText" type="text" name="localidad" v-model="input.direccion.localidad" placeholder="Localidad" /> Prov. :
          <input id="direcText" type="text" name="provincia" v-model="input.direccion.provincia" placeholder="Provincia" />
        </fieldset>
        <fieldset>
          Telef. :
          <input id="role" type="tel" name="telefono" v-model="input.mobileNumber" placeholder="Telefono" required /> Email :
          <input id="role" type="text" name="email" v-model="input.email" placeholder="Email" required/> Role :
          <select id="role">
            <option value="cliente">Cliente</option>
            <option value="admin">Adminstrador</option>
          </select>
          <br>
        </fieldset>
        <div id="botones">
          <button type="button" v-on:click="altaUsuario()">Alta De Usuario</button>
          <button type="reset">Resetear Formulario</button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import axios from './../plugins/axios'
export default {
  name: 'registro',
  data () {
    return {
      input: {
        username: '',
        password: '',
        mobileNumber: '',
        email: '',
        role: '',
        direccion: {
          calle: '',
          cp: '',
          numero: '',
          provincia: '',
          localidad: ''
        }

      }
    }
  },
  methods: {
    altaUsuario () {
      axios.post('http://localhost:4040/api/users ', this.input)
    }
  }
}

</script>
<style scoped>
h1 {
  text-align: center;
}

#registro {
  align-content: center;
  width: 500px;
  border: 1px solid #212221;
  background-color: #BCB7B7;
  margin: auto;
  margin-top: 80px;
  padding: 20px;
  margin-right: 240spx;
}

#campos {
  display: inline;
  width: 680px;
  margin-top: 10px;
}

#titulos {
  margin-top: 4px;
  margin-bottom: 2px;
  text-align: left;
  padding-left: 12px;
}

#botones {
  margin-top: 10px;
  text-align: center;
}

input {
  width: 500px;
  margin-bottom: 8px;
  margin-top: 8px;
}

select {
  width: 480px;
}

input[type=number]::-webkit-inner-spin-button input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#direcNum {
  width: 50px;
  margin-top: 8px;
  margin-bottom: 8px;
}

#calle {
  width: 300px;
  margin-top: 8px;
}

#direcText {
  width: 122px;
  margin-top: 8px;
}

#direccion {
  align-content: center;
}

#role {
  width: 100px;
}

#texto {
  width: 450px;
}

fieldset {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>
