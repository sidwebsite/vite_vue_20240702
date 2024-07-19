<template>
    <!-- background images start -->
    <div class="container-fixed">
        <div class="container h-100 position-relative">
            <span class="news-bg">
                <img src="../../assets/images/news/news_bg.svg" alt="">
            </span>
        </div>
    </div>
    <!-- background images end -->
    <div class="container pb-9">
        <div class="row">
            <div class="col-12">
                <h1 class="page-title">影音專區</h1>
            </div>
        </div>
        <!-- search start -->
        <div class="row no-gutters select-group">
            <div class="col-lg-4 col-md-6">
                <div class="select">
                    <label>時間</label>
                    <v-select :options="dateOptions" placeholder="所有時間"></v-select>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="select">
                    <label>產品</label>
                    <v-select :options="productOptions" placeholder="所有產品"></v-select>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="select d-flex align-items-center">
                    <div class="input-group">
                        <input type="text" class="form-control border-0 px-0 bg-transparent" placeholder="請輸入關鍵字">
                        <button type="button" class="btn input-group-text" id=""><i class="fa-regular fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <!-- search end -->
        <!-- lists start -->
        <div class="row row-gap-4">
            <!-- item -->
            <div class="col-lg-4 col-md-6 item" v-for="item in displayData" :key="item.Id">
                <router-link :to="{ name: 'videoContent', params: { videoId: item.Id }}" class="default-card card" :title="item.Name">
                    <div class="card-img video-img">
                        <img :src="`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title limitLines-2">{{ item.Name }}</h5>
                        <div class="card-date mb-0">{{ item.DataTime }}</div>
                        <div class="card-class">
                            <ul class="card-group">
                                <li v-for="product in item.Tag" :key="product.Tag">{{ product }}</li>
                            </ul>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <!-- lists end -->
        <!-- pagination start -->
        <div class="text-center">
            <div class="d-inline-block">
                <Pagepagination :pages="pages" @emit-page="getcurrPage"></Pagepagination>
            </div>                                
        </div>
        <!-- pagination end -->
    </div>
</template>

<script>
    import { news } from '../../assets/json/data.json'
    import Pagepagination from '../../components/PagePagination.vue'
    // const api = '../assets/json/data.json'
    export default {
        data() {
            return {
                data: [],
                paginatedData: null,
                pages: {
                    paginationLimit: 6,
                    pageInit: 1,
                    pageCount: 0
                }
            }
        },
        components: {
            Pagepagination
        },
        mounted() {
            this.getData()
        },
        computed: {
            displayData () {
                return this.data.slice((this.pages.pageInit - 1) * this.pages.paginationLimit, this.pages.paginationLimit * this.pages.pageInit)
            },
            dateOptions() {
                const dateTime = []
                this.data.forEach(item => {
                    if(dateTime.indexOf(item.DataTime) === -1) {
                        dateTime.push(item.DataTime)
                    }
                })
                return dateTime
            },
            productOptions() {
                const product = []
                this.data.forEach(item => {
                    if(item.Tag !== null) {
                        item.Tag.forEach(val => {
                            if(product.indexOf(val) === -1) {
                                product.push(val)
                            }
                        })
                    }
                })
                return product
            }
        },
        methods: {
            getData() {
                this.data = news.video
                this.pages.pageCount = Math.ceil(this.data.length / this.pages.paginationLimit)
                // this.$http.get(api).then((response) => {
                //     const res = response.data.datatable[0]
                    
                // })
            },
            getcurrPage(num) {
                this.pages.pageInit = num
            }
        }
    }
</script>