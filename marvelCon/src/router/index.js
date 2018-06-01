import Vue from 'vue'
import Router from 'vue-router'
import marvelCon from '/home/anskar/marvelCon/src/pages/marvel-con.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'marvelCon',
        component: marvelCon
    }]
})