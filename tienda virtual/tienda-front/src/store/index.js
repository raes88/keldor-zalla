import Vue from 'vue'
import Vuex from 'vuex'
import axios from './../plugins/axios'
import router from './../router'

Vue.use(Vuex)

const state = {
  username: '',
  role: '',
  email: '',
  auth: false
}

const actions = {
  login ({ commit, state }, user, role) {
    axios.post('http://localhost:4040/api/auth/login', user, role)
      .then((respuesta) => {
        console.log(respuesta)
        commit('setUsername', respuesta.data.username)
        commit('setRole', respuesta.data.role)
        commit('setEmail', respuesta.data.email)
        commit('setAuth', true)
        if (respuesta.status === 200) {
          router.push({ name: 'home' })
        } else {
          commit('setAuth', false)
          console.log('The username and / or password is incorrect')
        }
      })
      .catch(e => {
        alert('Usuario o contraseña erroneo o no existe')
        console.log(e)
      })
  }
}

const mutations = {
  setUsername (state, username) {
    console.log('hola ' + username)
    state.username = username
  },
  setRole (state, role) {
    console.log('role ' + role)
    state.role = role
  },
  setEmail (state, email) {
    console.log('email ' + email)
    state.email = email
  },
  setAuth (state, bool) {
    state.auth = bool
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
