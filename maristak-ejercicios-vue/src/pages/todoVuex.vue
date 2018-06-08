<template>
  <div class="todo">
    <h1>{{title}}</h1>
    <div class="contenido">
      <ToDoAdd @new="addNewToDo"/>
      <ToDoList :list="$store.state.todos" @deleteItem:change="deleteItem"/>
    </div>
  </div>
</template>

<script>
import ToDoList from '../components/todo-list.vue'
import ToDoAdd from '../components/todo-add.vue'
import store from '../store'

export default {
  name: 'ToDo',
  store,
  components: {
    ToDoList,
    ToDoAdd
  },
  methods: {
    // creamos las dispatch de los componentes
    addNewToDo: function (todo) {
      this.$store.dispatch('addTodo', todo)
    },
    // creamos el dispatch deleteItem y le pasamos el elemento
    deleteItem (item) {
      // mostramos por pantalla el alert para confirmar la eliminacion
      if (confirm('¿Eliminar ' + item.name + ' ?')) {
        // llamamos al deleteTodo del /store/index.js
        this.$store.dispatch('deleteTodo', item)
      }
      console.log(item.key)
      console.log('Mensaje recibido de Abuelo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contenido {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
