<template>
  <div id="app">
   <router-view/>
  </div>
</template>
<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
export default {
  name: 'App'
}

</script>
<style>
body {
  background-color: #f0f0f0;
}

h1 {
  padding: 0;
  margin-top: 0;
}

#app {
  width: 1024px;
  margin: auto;
}

</style>
