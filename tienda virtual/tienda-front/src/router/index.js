import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login2 from '@/components/login2'
import login from '../views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/2',
      name: 'login2',
      component: login2
    }, {
      path: '/login',
      name: 'login',
      component: login
    }
  ],
  mode: 'history'
})
