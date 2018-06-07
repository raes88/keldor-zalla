 new Vue({
     el: "#boton",
     data: {
         nombre: 'Raul',
     },
     methods: {
         saludar: function( _evt) {
             alert('Buenas Tardes ' +this.nombre)
             console.log(_evt)
         }
     },
 })