 new Vue({
     el: "#boton",
     data: {
         nombre: 'Raul',
     },
     methods: {
         saludar: function( _evt) {
         	//sustituimos el nombre por el puesto en el input
             alert('Buenas Tardes ' +this.nombre)
             console.log(_evt)
         },
         enviar:function(_evt){
         	//con esto evitamos que recargue la pagina
         	_evt.preventDefault()
         	console.log(_evt)
         	//enviamos el formulario
         	alert('Enviando formulario')
         }
     },
 })