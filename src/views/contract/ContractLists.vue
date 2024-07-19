<template>
    <section class="pb-9">
        <!-- background images start -->
        <div class="container-fixed">
            <div class="container position-relative h-100">
                <span class="contract_bg position-absolute">
                    <img src="../../assets/images/contract/contract_bg.svg" alt="">
                </span>
            </div>
        </div>
        <!-- background images end -->
        <div class="container">
            <div class="row">
                <div class="col-12"><h1 class="page-title">共同供應契約</h1></div>
            </div>
            <!-- search start -->
            <div class="row no-gutters select-group">
                <div class="col-md-6">
                    <div class="select">
                        <label>廠牌</label>
                        <v-select :options="options" placeholder="所有廠牌"></v-select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="select d-flex align-items-center">
                        <div class="input-group">
                            <input type="text" class="form-control border-0 px-0 bg-transparent" placeholder="請輸入關鍵字" v-model="searchWords">
                            <span class="btn input-group-text"><i class="fa-regular fa-magnifying-glass"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- search end -->
            <div class="row row-gap-4">
                <!-- item -->
                <div class="col-lg-4 col-md-6" v-for="item in displayData" :key="item.Id">
                    <router-link :to="{ name: 'contractContent', params: { contractId: item.Id }}" :title="item.Name" class="default-card card">
                        <div class="card-body flex-grow-1 d-flex flex-column">
                            <ul class="card-logo d-flex">
                                <li><img :src="`./product/${item.picDownloadPath}`" :alt="item.product"></li>
                            </ul>
                            <h5 class="card-title limitLines-2 flex-grow-1 d-flex align-items-center">{{ item.Name }}</h5>
                            <ul class="list-unstyled text-gray-400">
                                <li>契約編號：{{ item.number }}</li>
                                <li>契約期間：{{ item.startData }}-{{ item.endData }}</li>
                            </ul>
                        </div>
                        <div class="card-footer">
                            詳細內容 <i class="fa-sharp fa-solid fa-arrow-right"></i>
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- pagination start -->
            <div class="text-center">
                <div class="d-inline-block">
                    <Pagepagination :pages="pages" @emit-page="getcurrPage"></Pagepagination>
                </div>                                
            </div>
            <!-- pagination end -->
        </div>
    </section>
</template>

<script>
    import { contract } from '../../assets/json/data.json'
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
                },
                searchWords: ''
            }
        },
        components: {
            Pagepagination
        },
        mounted() {
            this.getData()
        },
        computed: {
            displayData() {
                let data = this.data.filter(item => item.Name.match(this.searchWords));
                return data.slice((this.pages.pageInit - 1) * this.pages.paginationLimit, this.pages.paginationLimit * this.pages.pageInit)
            },
            options() {
                const brand = []
                this.data.forEach(item => {
                    if(brand.indexOf(item.product) === -1) {
                        brand.push(item.product)
                    }
                })
                return brand
            },
            filterSearch() {
                return this.data.filter(item => item.Name.match(this.searchWords));
            }
        },
        watch: {},
        methods: {
            getData() {
                this.data = contract
                this.pages.pageCount = Math.ceil(this.data.length / this.pages.paginationLimit)
                // this.$http.get(api).then((response) => {
                //     const res = response.data.datatable[0]
                    
                // })
            },
            getcurrPage(num) {
                this.pages.pageInit = num
            },
            // searchFun() {
            //     return this.data = contract.filter(searchResult => searchResult.Name.match(this.searchWords));
            // }
        }
    }
</script>