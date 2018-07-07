Vue.component('contrasena',{
    props:['contrasna'],
    template: `<input :value="contrasna" @input="comprobarContrasena($event.target.value)" ref="pass">`
})
new Vue({
    el: 'main',
    data: {
        contrasena: 'es3Es653!*&__',
    },
});