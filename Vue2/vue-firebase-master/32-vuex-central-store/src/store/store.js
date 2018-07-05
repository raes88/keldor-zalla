//imprtamos los dos modulos que necesitamos
import Vue from 'vue';
import Vuex from 'vuex';

// indicamos a vue que use vuex
Vue.use(Vuex);

//exportamos la informacion para poder acceder a ella

export const store = new Vuex.Store({
    //  el metodo store es para crear almacen donde almacena la informacino
    state: {
        cantidad: 0,
    }
});