<template>
  <div class="marvel-con">
    <h1>{{title}}</h1>
    <div class="contenido">
      <MarvelSearch @search="buscar"/> <!-- evento search enviado con el emit desde marvel-search.vue, lanza el método buscar -->
      <paginate class="pags" v-if = "numPags > 0"
        :page-count="this.numPags"
        :page-range="3"
        :margin-pages="1"
        :click-handler="clickCallback" 
        :prev-text="'Prev'"
        :next-text="'Next'"        
        :page-class="'page-item'">
      </paginate>
      <p class="mensaje" v-if = "numPags === 0">{{this.mensaje}}</p>
      <MarvelList :list="list"/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
// importo los otros dos componentes
import MarvelList from '../components/marvel-list.vue'
import MarvelSearch from '../components/marvel-search.vue'

// importo vue
import Vue from 'vue'

// importo axios para hacer las peticiones a la API y paginate para la paginación
import axios from 'axios'
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

// importo js-md5 para crear el hash md5 necesario en la petición a la api de marvel
var md5 = require('js-md5');

// En export va la lógica del componente
export default {
  // nombre del componente
  name: 'MarvelCon',
  // declaro los componentes que se van a usar importados previamente
  components: {
    MarvelList,
    MarvelSearch
  },
  // Aqui los datos del programa (variables)
  data () {
    return {
      title: 'Marvel Con',
      list: [],
      apikey: "6386f8c4987800434d1da0bb2f5618cf",
      pk:'f4f52fa039a6e9a85810b795cfa854ffb5b0b7eb',      
      ts: Date.now(),
      md5: "",
      numPags: 0,
      busqueda: "",
      offset: 0,
      limit: 4,
      hash: "",
      mensaje:"NINÚN RESULTADO"  
    }
  },
  // los métodos del componente
  methods: {

    //  este método se encarga de hacer la petición a la api, guarda los resultados en la variable list
    //  divide el número de resultados entre el numeros de elementos por página para calcular el número de páginas
    //  a este método se le llama desde el método buscar
    addResults(nombre){        
      axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${nombre}&limit=${this.limit}&offset=${this.offset}&ts=${this.ts}&apikey=${this.apikey}&hash=${this.hash}`)
      .then(response => {
        console.log(response.data.data.results)
        
      // JSON responses are automatically parsed.
      this.list = response.data.data.results
      this.numPags = Math.round(response.data.data.total / this.limit)
      if(response.data.data.total===0){this.numPags=0}
    })
      .catch(e => {
        console.log(e)
      })
    },
    //  este método recibe como parámetro el nombre pasado desde marvel-search.vue
    //  calcula el hash con los datos de la api (clave pública, clave privada...)
    //  guarda el nombre pasado por parametro en la variable busqueda
    //  llama al método addResults pasándole el nombre del superheroe almacenado en la variable busqueda
    buscar(superheroe){
      this.md5= this.ts+this.pk+this.apikey
      this.hash= md5(this.md5)
      this.busqueda=superheroe.nombre
      this.addResults(this.busqueda)
    },  
    //  a este método se le llama al clickar en el paginador, recibe como parametro el número de página
    //  se define en la variable offset el elemento por el que empezaría la página (como hay 4 elementos 
    //  por página segunda página empezaría por el elemento 5)
    //  llama al método addResults
    clickCallback(pageNum) {
      this.offset = pageNum * this.limit - this.limit;
      this.addResults(this.busqueda)
    }        
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  list-style: none;
}
.contenido {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
ul {
  display: flex;
}
.pags li {
  padding: 3px;
  border: 1px solid gray;
  border-radius: 3px;
  margin: 5px 1px;
  color: gray;
}
.pags .disabled {
  color: lightgray;
}
.pags .active {
  color: black;
}
.mensaje {
  color: red;
  font-size: 30px;
  padding: 50px;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
}
</style>