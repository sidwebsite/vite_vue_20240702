<template>
    <div ref="counting" class="row counting">
        <div class="col-md-4">
            <div class="text-center mb-4 mb-md-0">
                <span class="index-number d-block mb-3 fw-bolder"><span class="animate-number">30</span>+</span>
                <span class="d-block fw-bolder fs-6">家自有/代理資安工具</span>
            </div>
        </div>
        <div class="col-md-4">
            <div class="text-center mb-4 mb-md-0">
                <span class="index-number d-block mb-3 fw-bolder"><span class="animate-number">7</span>x24</span>
                <span class="d-block fw-bolder fs-6">小時全天候資安監控</span>
            </div>
        </div>
        <div class="col-md-4">
            <div class="text-center mb-0">
                <span class="index-number d-block mb-3 fw-bolder"><span class="animate-number">91</span>%</span>
                <span class="d-block fw-bolder fs-6">資安監控續約率</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                positions: 0,
                scrollPositions: 0,
                interval: null,
                delay: 300,
                homeNumber: 0,
                homeTotal: 30
            }
        },
        created() {
            // this.startInterval()
            // window.addEventListener('scroll', this.startInterval)
        },
        methods: {
            startInterval() {
                this.positions = this.$refs.counting.offsetTop
                if(window.scrollY >= this.positions) {
                    this.interval = window.setInterval(() => {
                        this.homeNumber += 1;
                        if (this.homeNumber == this.homeTotal) {
                            window.clearInterval(this.interval);
                        }
                        console.log(this.homeNumber)
                    }, this.delay)
                }
            }
        }
    }
</script>

<style>

</style>