<template>
    <div>
        <home-header :back='back'>首页</home-header>
        <div class="carrousel">
            <home-swiper :sliders='sliders'></home-swiper>
        </div>
    </div>
</template>

<script>
import HomeHeader from '../base/common/Header';
import HomeSwiper from '../base/home/Swiper';
import { getSliders } from '../api/index.js';
export default {
    name: 'Home',
    async created() {
        let {data:sliders} = await getSliders();
        this.sliders = sliders;
    },
    data() {
        return {
            'back': false,
            sliders: []
        }
    },
    components: {
        HomeHeader,
        HomeSwiper
    }
}
</script>

<style lang="less" scoped>
    .carrousel {
        height: 1rem;
    }
</style>

