<template>
    <div>
        <h1>Contador: {{ cantidad }}</h1>
        <button @click="aumentar">Aumentar</button>
        <button @click="reducir">Reducir</button>
    </div>
</template>
<script>
    export default {
        //props: ['cantidad'],
        methods: {
            aumentar() {
                //this.$emit('aumentar');
                //accedemos ala cantidad de store.js y le sumamos 1
                this.$store.state.cantidad++;
            },
            reducir() {
                //this.$emit('reducir');
                this.$store.state.cantidad--;
            }
        },
        computed: {
            //retorna la propiedad de store (cantidad)
            cantidad() {
                return this.$store.state.cantidad;
            }
        }
    }
</script>