<template>
  <div class="todo">
    <h1>{{title}}</h1>
    <div class="contenido">
      <ToDoAdd @new="addNewToDo" />
      <ToDoList :list="list" @deleteItem:change="deleteItem" />
    </div>
  </div>
</template>
<script>
import ToDoList from '../components/todo-list.vue'
import ToDoAdd from '../components/todo-add.vue'

export default {
  name: 'ToDo2',
  components: {
    ToDoList,
    ToDoAdd
  },
  data () {
    return {
      title: 'ToDo List',
      list: [{
        key: 1,
        name: 'Suspender a todos',
        state: 'done'
      }, {
        key: 2,
        name: 'Preparar exámenes',
        state: 'todo'
      }]
    }
  },
  methods: {
    addNewToDo: function (todo) {
      todo.key = this.list.length + 1
      this.list.push(todo)
    },
    deleteItem (item) {
      // confirmamos que queremos eliminar el elemento
      if (confirm('¿Eliminar ' + item.name + ' ?')) {
        // miramos el indice en el array
        for (var i = 0; i < this.list.length; i++) {
          // si coinciden los key los borramos
          if (this.list[i].key === item.key) {
            this.list.splice(i, 1)
          }
        }
      }
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
