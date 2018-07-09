import Vue from 'vue';
import Vuex from 'vuex';
//vue hace uso de vuexS
Vue.use(Vuex);

//fuente de datos

export const store = new Vuex.Store({
   state: {
       nombre: 'Juan Andrés',
       apellidos: 'Núñez Charro',
       profesion: 'Developer',
       ciudad: 'Valencia'
   }
});