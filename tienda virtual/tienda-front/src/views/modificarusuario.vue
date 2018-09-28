<template>
  <div class="container" id="app">
    <div class="row h-100 justify-content-center align-items-center">
      <form class="col-12">
        <div class="d-flex justify-content-center">
          <div class="shadow p-3 mb-5 bg-light rounded" id="registro">
            <h1 class="d-flex justify-content-center"><p class="font-weight-bold">Modificar Usuario</p></h1>
            <div id="campos">
              <fieldset class="shadow p-3 mb-5 bg-light rounded">
                <div class="form-group">
                  <div class="d-flex justify-content-around">
                    <label for="formGroupExampleInput">Nombre:</label>
                    <input type="text" class="form-control nombre" name="username" v-model="input.username" required />
                    <label for="formGroupExampleInput">Password:</label>
                    <input id="password" class="form-control pass" type="text" name="password" v-model="input.password" placeholder="Password" required />
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
                    <div class="d-flex justify-content-around ">
                      <label for="formGroupExampleInput">Cp:</label>
                      <input id="direcCp" class="form-control" type="number" name="cp" v-model="input.direccion.cp" placeholder="CP" required/>
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
                <button type="button" class="btn btn-outline-success my-2 my-sm-0" v-on:click="modifUsuario()">Modificar Usuario</button>
                <button type="button" class="btn btn-outline-success my-2 my-sm-0" v-on:click="salir()">Salir</button>

              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from './../plugins/axios'
export default {
  name: 'modificarUsuario',
  props: ['usuario'],
  data () {
    return {
      input: {
        username: this.usuario.username,
        password: this.usuario.password,
        mobileNumber: this.usuario.mobileNumber,
        email: this.usuario.email,
        role: this.usuario.role,
        direccion: {
          calle: this.usuario.direccion.calle,
          cp: this.usuario.direccion.cp,
          numero: this.usuario.direccion.numero,
          provincia: this.usuario.direccion.provincia,
          localidad: this.usuario.direccion.localidad
        }
      }
    }
  },
  methods: {
    modifUsuario () {
      console.log(this.usuario._id)
      console.log('usuario a modificar-- ', this.input)
      axios.put('http://localhost:4040/api/users/' + this.usuario._id, this.input)
        .then((respuesta) => {
          // console.log(respuesta)
          if (respuesta.status === 200) {
            this.$router.push({ name: 'mantecliente' })
          } else {
            console.log('error')
          }
        }
        )
        .catch(e => {
          // alert('Rellena todos los campos')
          console.log(e)
        })
    },
    salir () {
      this.$router.push({ name: 'mantecliente' })
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
  width: 150px;
}

button {
  margin-right: 10px;
}

#password {
  width: 250px;
}
#direcCp{
  width:14%;
}
#direcText{
  width:35%;
}
#role{
  width:35%;
}
#tel{
  width:25%;
}
.nombre{
  width:50%;
}
.pass{
  width:35%;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
 position: absolute;
 left: 18%;
 top: 3%;
 width: 70%;
 height: 70%px;
}

</style>
