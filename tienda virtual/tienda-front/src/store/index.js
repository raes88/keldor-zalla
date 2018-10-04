import Vue from 'vue'
import Vuex from 'vuex'
// import axios from './../plugins/axios'
// import router from './../router'

Vue.use(Vuex)

const state = {
  username: '',
  role: '',
  email: '',
  auth: false,
  carro: []
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
  },
  anadirCarro ({ commit, state }, producto) {
    console.log('--------' + producto.producName)
    commit('comprarProducto', producto)
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
  },
  comprarProducto (state, producto) {
    const newProduct = {
      _id: producto._id,
      productName: producto.producName,
      producName: producto.producName,
      categoria: producto.categoria,
      producPrecio: producto.producPrecio,
      producImagen: producto.producImagen,
      stock: producto.stock,
      unidades: 0
    }
    console.log(state.carro.length + '--- longitud')
    // state.carro.push(newProduct)
    if (state.carro.length === 0) {
      console.log('primera vez añadimos')
      state.carro.push(newProduct)
      state.carro[0].unidades = 1
    } else {
      for (let i = 0; i < state.carro.length; i++) {
        // console.log('state.carro[i]._id --- ' + state.carro[i]._id)
        if (producto._id === state.carro[i]._id) {
          console.log('el producto esta en el carro añadimo 1 a unidades')
          state.carro[i].unidades += 1
          return
        } else {
          console.log('el producto no esta en el carro lo añadimos')
          state.carro.push(newProduct)
          // state.carro[i].unidades += 1
        }
      }
      console.log('fin----------------------')
    }
  },
  eliminarProducto: (state, producto) => state.carro.splice(producto, 1)
}
const getters = {
  numProductos: (state) => state.carro.reduce((numero) => numero + 1, 0),
  /* numProductos (state) {
    return state.carro.length
  }, */
  totalCompra: (state) => state.carro.reduce((total, producto) => total + producto.producPrecio, 0)
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
