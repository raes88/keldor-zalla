import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import home from '../views/home'
import registro from '../views/registro'
import admin from '../views/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        requiresAuth: true,
        adminAuth: false,
        clientAuth: true
      }
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
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: {
        requiresAuth: true,
        adminAuth: true,
        clientAuth: false
      }
    }
  ],
  mode: 'history'
})
