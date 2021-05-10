new Vue({
    el: "#app",
    data: {
        valor: 0
    },
    methods: {
        aumenta() {
            this.valor++;
        },
        diminui() {
            this.valor--;
        }
    },
    computed: {
        quadrado() {
            return Math.sqrt(this.valor)
        }
    }
})