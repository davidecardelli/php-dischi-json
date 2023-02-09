const apiUri = 'http://localhost/php-dischi-json/api.php';
const app = Vue.createApp({
    data() {
        return {
            discs: [],
        }
    },
    methods: {
        callApi() {
            axios.get(apiUri).then(res => {
                this.discs = res.data;
            })
        }
    },
    mounted() { this.callApi() },
})
app.mount('#root');