<template>
  <div id="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          <button type="button" class="btn btn-outline-success my-2 my-sm-0 botnLogin" v-on:click="salir()">Login</button>
        </form>
      </div>
    </nav>
    <div>
      <h1>Usuario sin registrar</h1>
    </div>
    <div class="d-inline-flex bg-primary">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../../../express-mongoose-es6-rest-api-develop/public/fuente.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <span class="d-sm-inline-flex bg-primary">d-sm-inline-flex</span>
    <span class="d-md-inline-flex bg-primary">d-md-inline-flex</span>
    <span class="d-lg-inline-flex bg-primary">d-lg-inline-flex</span>
    <span class="d-xl-inline-flex bg-primary">d-xl-inline-flex</span>
  </div>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    salir () {
      this.$router.push({ name: 'login' })
    }
  }
}

</script>
<style scoped>
.botnLogin {
  margin-left: 6px;
}

</style>
