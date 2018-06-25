<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Vue Raul'
    }
  },
  created () {
    console.log('hola')
    axios.get(`http://localhost:3000/consultas/1,183`)
      .then(response => {
        console.log(response.data)
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
