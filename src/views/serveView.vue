<template>
    <section :class="className" class="serve-header d-flex justify-content-center align-items-center">
        <div class="mw-760">
            <div class="text-center mb-6">
                <figure class="figure mb-6 text-center">
                    <img src="../assets/images/logo.svg" class="serve-logo" alt="...">
                </figure>
            </div>
            <article class="mb-6 text-center">
                <h2>{{Name}}</h2>
                <h4>{{ fullName }}</h4>
                <div v-html="Profile"></div>
            </article>
            <div class="text-center">
                <RouterLink to="/contact" class="btn-contact">產品諮詢</RouterLink>
            </div>
        </div>
    </section>
    <template v-html="description"></template>
    <ProductInformation :productName="product"></ProductInformation>
</template>

<script>
import ProductInformation from '@/components/ProductInformation.vue';
const api = '../assets/json/data.json'
export default {
    data() {
        return {
            product: "",
            Name: "",
            fullName: "",
            Profile: "",
            description: ""
        }
    },
    components: {
        ProductInformation
    },
    computed: {
        className() {
            return `serve-${this.product.toLowerCase()}-bg`
        }
    },
    created() {
        const serveName = this.$route.params.serveName
        console.log(serveName)
        this.$http.get(api).then((response) => {
            const res = response.data.datatable[0]
            const data = res.serves
            console.log(data)
            data.forEach(item => {
                if(item.product === serveName) {
                    this.product = item.product
                    this.Name = item.Name
                    this.fullName = item.fullName
                    this.Profile = item.Profile
                    this.description = item.description
                }
            })
        })
    }
}
</script>

<style>

</style>