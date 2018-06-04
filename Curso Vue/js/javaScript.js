 new Vue({
     el: 'body',
     data: {
         nuevaTarea: '',

         tareas: [
             { nombre: 'Hacer la compra' },
             { nombre: 'Grabar episodio' },
             { nombre: 'Editar episodio' },
         ],
     },
     methods: {
         guardarTarea: function(tarea) {
             if (tarea.trim()) {
                 this.tareas.push({ nombre: tarea });
                 this.nuevaTarea = '';
             } else {
                 alert('Introduce un nombre para la tarea');
             }
         },
         eliminarTarea: function(tarea) {
             if (confirm('¿Eliminar ' + tarea.nombre + ' ?'))
                 this.tareas.$remove(tarea)

         }
     }
 })