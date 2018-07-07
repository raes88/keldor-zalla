import Vue from 'vue';
import App from './App.vue';
//importamos el almacen que llamamos store
import {store} from './store/store';

new Vue({
    el: '#app',
    //store: store accedemos a ala propiedad
    store,
    render: h => h(App)
});
