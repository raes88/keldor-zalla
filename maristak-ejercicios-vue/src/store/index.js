import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  actions: {
    addTodo ({ commit, state }, todo) {
      todo.key = state.todos.length + 1
      // llamamos a la mutacion creada mas abajo
      commit('addTodo', todo)
    },
    // creamos deleteTodo { commit, state } esto se pasa siempre
    deleteTodo ({ commit, state }, item) {
      // buscamos el indice del elemento que queremos borrar
      for (var i = 0; i < state.todos.length; i++) {
        if (state.todos[i].key === item.key) {
          // llamamos a la mutacion creada mas abajo
          commit('deleteIndex', i)
        }
      }
    }
  },

  state: {
    todos: [ {
      key: 1,
      name: 'Suspender a todos',
      state: 'done'
    }, {
      key: 2,
      name: 'Preparar exámenes',
      state: 'todo'
    } ]
  },
  // creamos las mutaciones
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    deleteIndex (state, indice) {
      state.todos.splice(indice, 1)
    }
  },

  getters: {
    todos (state) {
      return state.todos
    }
  }
})

export default store
