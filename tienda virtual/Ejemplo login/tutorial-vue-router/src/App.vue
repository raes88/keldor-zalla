<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Rimorsoft</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <router-link tag="li" to="/" exact>
                            <a>Home</a>
                        </router-link>
                        <router-link tag="li" to="/about">
                            <a>Acerca de...</a>
                        </router-link>
                        <router-link tag="li" to="/contact">
                            <a>Contacto</a>
                        </router-link>    
                    </ul>
                </div>
            </div>
        </nav>

        <router-view></router-view>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <hr>

                    <footer>
                        <p>© 2018 Rimorsoft Online.</p>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    body {
        padding-top: 50px;
    }
</style>
