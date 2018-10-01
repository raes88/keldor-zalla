import Vue from 'vue'
import Vuex from 'vuex'
// import axios from './../plugins/axios'
import router from './../router'

Vue.use(Vuex)

const state = {
  token: '',
  username: '',
  role: '',
  email: '',
  auth: false
}

const actions = {
  login ({ commit, state }, respuesta) {
    if (respuesta.status === 200) {
      commit('setUsername', respuesta.data.username)
      commit('setRole', respuesta.data.role)
      commit('setEmail', respuesta.data.email)
      commit('setAuth', true)
    } else {
      commit('setAuth', false)
      console.log('The username and / or password is incorrect')
    }
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
    console.log('bool ' + bool)
    state.auth = bool
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
