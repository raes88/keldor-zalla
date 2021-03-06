import Vue from 'vue';
import Vuex from 'vuex';
import productos from './modules/productos';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
/*        productos: [
            {nombre: 'Steam Link', precio: 50},
            {nombre: 'Steam Controller', precio: 59},
            {nombre: 'Axiom Verge', precio: 17},
        ],*/
        carro: [],
    },
    getters: {
        numProductos: (state) => state.carro.reduce((numero) => numero + 1, 0),
        totalCompra: (state) => state.carro.reduce((total, producto) => total + producto.precio, 0),
    },
    mutations: {
        anadirProducto: (state, producto) => state.productos.unshift(producto),
        comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
        eliminarProducto: (state, indice) => state.carro.splice(indice, 1),
        //eliminarProductoLista: (state, producto) => state.productos.splice(indice, 1),
    },
    modules: {
        productos
    }
});
