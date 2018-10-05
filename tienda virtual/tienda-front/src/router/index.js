import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import home from '../views/home'
import registro from '../views/registro'
import admin from '../views/admin'
import cliente from '../views/cliente'
import mantecliente from '../views/mantecliente.vue'
import manteproducto from '../views/manteproducto.vue'
import registroadmin from '../views/registroadmin.vue'
import modificarusuario from '../views/modificarusuario.vue'
import registroproducto from '../views/registroproducto.vue'
import carrito from '../views/carro.vue'

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
    path: '/modificarusuario',
    name: 'modificarusuario',
    component: modificarusuario,
    props: true,
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
  },
  {
    path: '/registroadmin',
    name: 'registroadmin',
    component: registroadmin,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      clientAuth: false
    }
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: carrito,
    meta: {
      requiresAuth: true,
      adminAuth: false,
      clientAuth: true
    }
  },
  {
    path: '/registroproducto',
    name: 'registroproducto',
    component: registroproducto,
    meta: {
      requiresAuth: true,
      adminAuth: true,
      clientAuth: false
    }
  }],
  mode: 'history'
})
