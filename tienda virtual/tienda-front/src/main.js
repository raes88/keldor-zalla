// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // console.log('hola1')
  if (to.meta.requiresAuth) {
    if (store.state.auth) {
      // console.log('hola2')
      return next()
    } else {
    }
  } else {
    // console.log('hola3')
    return next()
  }
  /* console.log(to)
  console.log('hola')
  console.log(store.state.auth) */
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
