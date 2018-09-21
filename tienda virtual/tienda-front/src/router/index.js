import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import home from '../views/home'
import registro from '../views/registro'
import admin from '../views/admin'
import cliente from '../views/cliente'
import mantecliente from '../views/mantecliente.vue'
import manteproducto from '../views/manteproducto.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      requiresAuth: false,
      adminAuth: false,
      clientAuth: false
    }
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: cliente,
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
    path: '/',
    name: 'home',
    component: home
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
  },
  {
    path: '/manteproducto',
    name: 'manteproducto',
    component: manteproducto,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      clientAuth: false
    }
  },
  {
    path: '/mantecliente',
    name: 'mantecliente',
    component: mantecliente,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      clientAuth: false
    }
  }],
  mode: 'history'
})
