import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import home from '../views/home'
import registro from '../views/registro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/registro',
      name: 'registro',
      component: registro
    }
  ],
  mode: 'history'
})
