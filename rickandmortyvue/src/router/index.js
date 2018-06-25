import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import todo from '@/pages/todo'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/todo',
    name: 'todo',
    component: todo
  }],
  mode: 'history'
})
