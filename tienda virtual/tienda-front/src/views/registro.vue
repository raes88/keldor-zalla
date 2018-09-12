<template>
  <form class="d-flex justify-content-center">
    <div class="d-flex justify-content-center">
      <div class="shadow p-3 mb-5 bg-light rounded" id="registro">
        <h1 class="d-flex justify-content-center"><p class="font-weight-bold">Registro</p></h1>
        <div id="campos">
          <fieldset class="shadow p-3 mb-5 bg-light rounded">
            <div class="form-group">
              <div class="d-flex justify-content-around">
                <label for="formGroupExampleInput">Nombre:</label>
                <input type="text" class="form-control"  name="username" v-model="input.username" placeholder="Nombre" required />
                <label for="formGroupExampleInput">Password:</label>
                <input id="password" class="form-control"  type="password" name="password" v-model="input.password" placeholder="Password" required />
              </div>
            </div>
          </fieldset>
          <fieldset id="direccion" class="shadow p-3 mb-5 bg-light rounded">
            <div class="form-group">
              <h3 class="d-flex justify-content-center">
                <p class="font-weight-bold">Direccion</p>
              </h3>
              <div class="form-group">
                <div class="d-flex justify-content-around">
                  <label for="formGroupExampleInput">Calle:</label>
                  <input id="calle" class="form-control" type="text" name="calle" v-model="input.direccion.calle" placeholder="Calle" required/>
                  <label for="formGroupExampleInput">Num:</label>
                  <input id="direcNum" class="form-control" type="number" name="numero" v-model="input.direccion.numero" placeholder="Num" required/>
                </div>
                <div class="d-flex justify-content-around">
                  <label for="formGroupExampleInput">Cp:</label>
                  <input id="direcNum" class="form-control" type="number" name="cp" v-model="input.direccion.cp" placeholder="CP" required/>
                  <label for="formGroupExampleInput">Local.:</label>
                  <input id="direcText" class="form-control" type="text" name="localidad" v-model="input.direccion.localidad" placeholder="Localidad" required/>
                  <label for="formGroupExampleInput">Prov.:</label>
                  <input id="direcText" class="form-control" type="text" name="provincia" v-model="input.direccion.provincia" placeholder="Provincia" required/>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="shadow p-3 mb-5 bg-light rounded">
            <div class="d-flex justify-content-around">
              <label for="formGroupExampleInput">Telf:</label>
              <input id="tel" class="form-control" type="tel" name="telefono" v-model="input.mobileNumber" placeholder="Telefono" required />
              <label for="formGroupExampleInput">Email:</label>
              <input id="email" class="form-control" type="text" name="email" v-model="input.email" placeholder="Email" required/>
              <label for="formGroupExampleInput">Role:</label>
              <select id="role" class="form-control" v-model="input.role" required>
                <option value="CLIENT">Cliente</option>
                <option value="ADMIN">Adminstrador</option>
              </select>
            </div>
          </fieldset>
          <div id="botones" class="d-flex justify-content-center">
            <button type="button" class="btn btn-outline-secondary" v-on:click="altaUsuario()">Alta De Usuario</button>
            <button type="reset" class="btn btn-outline-secondary">Resetear Formulario</button>
          </div>
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
        .then((respuesta) => {
          console.log(respuesta)
          if (respuesta.status === 200) {
            this.$store.dispatch('login', this.input)
          } else {
            console.log('error')
          }
        })
        .catch(e => {
          alert('Rellena todos los campos')
          console.log(e)
        })
    }
  }
}

</script>
<style scoped>
label {
  margin: 7px;
}

#direcNum {
  margin-bottom: 20px;
  width: 250px;
}

button {
  margin-right: 10px;
}

#password{
  width:250px;
}
/*
#registro {
  align-content: center;
  width: 500px;
  border: 1px solid #212221;
  background-color: #433A3A;
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
}*/

</style>
