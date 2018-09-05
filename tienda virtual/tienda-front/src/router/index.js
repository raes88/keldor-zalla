import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login'
import home from '../views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/login',
      name: 'login',
      component: login
    }
  ],
  mode: 'history'
})
