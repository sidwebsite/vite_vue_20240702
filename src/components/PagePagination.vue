<template>
    <div id="pagination" class="pagination">
        <button class="pagination-button" title="Previous page" aria-label="Previous page" @click="currentPage(1)" v-show="pages.pageInit !== 1">
            <i class="fa-solid fa-angles-left"></i>
        </button>
        <button class="pagination-button" title="Previous page" aria-label="Previous page" @click="prevPage(pages.pageInit)" v-show="pages.pageInit !== 1">
            <i class="fa-solid fa-angle-left"></i>
        </button>
        <ul class="pagination-numbers">
            <li class="number" v-for="page in pages.pageCount" :key="page" :class="{ 'active': page === pages.pageInit }" @click.prevent="currentPage(page)"><span>{{ page }}</span></li>
        </ul>
        <button class="pagination-button" title="Next page" aria-label="Next page" @click="nextPage(pages.pageInit)" v-show="pages.pageInit !== pages.pageCount">
            <i class="fa-solid fa-angle-right"></i>
        </button>
        <button class="pagination-button" title="Next page" aria-label="Next page" @click="currentPage(pages.pageCount)" v-show="pages.pageInit !== pages.pageCount">
            <i class="fa-solid fa-angles-right"></i>
        </button>
    </div>
</template>

<script>
export default {
    props: ['pages'],
    methods: {
        prevPage(numPage) {
            if (this.pages.pageInit !== 1) {
                numPage -= 1
                this.$emit('emit-page', numPage)
            }
            this.scrollTo()
        },
        nextPage(numPage) {
            if (this.pages.pageInit !== this.pages.pageCount) {
                numPage += 1
                this.$emit('emit-page', numPage)
            }
            this.scrollTo()
        },
        currentPage(numPage) {
            this.$emit('emit-page', numPage)
            this.scrollTo()
        },
        scrollTo() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style>

</style>