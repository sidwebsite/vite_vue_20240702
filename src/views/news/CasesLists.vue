<template>
    <!-- background images start -->
    <div class="container-fixed">
        <div class="container h-100 position-relative">
            <span class="cases-bg-rightTo">
                <img src="../../assets/images/news/deco-right-top.svg" alt="">
            </span>
            <span class="cases-bg-rightBotton">
                <img src="../../assets/images/news/deco-right-botton.svg" alt="">
            </span>
            <span class="cases-bg-left">
                <img src="../../assets/images/news/deco-left.svg" alt="">
            </span>
        </div>
    </div>
    <!-- background images end -->
    <div class="container pb-9">
        <div class="row">
            <div class="col-12"><h1 class="page-title">成功案例</h1></div>
        </div>
        <!-- search start -->       
        <div class="row no-gutters select-group">
            <div class="col-lg-3 col-md-6">
                <div class="select">
                    <label>時間</label>
                    <v-select :options="dateOptions" placeholder="所有時間"></v-select>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="select">
                    <label>產品</label>
                    <v-select :options="productOptions" placeholder="所有產品"></v-select>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="select">
                    <label>產業別</label>
                    <v-select :options="industryOptions" placeholder="所有產業"></v-select>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
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
        <div class="news-lists">
            <!-- item -->
            <router-link :to="{ name: 'casesContent', params: { casesId: item.Id }}" v-for="item in displayData" :key="item.Id" :title="item.Name" class="strip-card card">
                <div class="row no-gutters flex-md-row-reverse">
                    <div class="col-md-6">
                        <div class="card-img">
                            <div class="bg-img">
                                <img :src="item.picDownloadPath" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title limitLines-3">{{ item.Name }}</h5>
                            <p class="card-text limitLines-3">{{ item.Profile }}</p>
                            <div class="card-class">
                                <span>{{ item.Industry }}</span>
                                <ul class="card-group">
                                    <li v-for="product in item.Tag" :key="product.Tag">{{ product }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
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
                    paginationLimit: 5,
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
            },
            industryOptions() {
                const industry = []
                this.data.forEach(item => {
                    if(industry.indexOf(item.Industry) === -1) {
                        industry.push(item.Industry)
                    }
                })
                return industry
            }
        },
        methods: {
            getData() {
                // const res = response.data.datatable[0]
                this.data = news.cases
                this.pages.pageCount = Math.ceil(this.data.length / this.pages.paginationLimit)
                // this.$http.get(api).then((response) => {
                    
                // })
            },
            getcurrPage(num) {
                this.pages.pageInit = num
            }
        }
    }
</script>