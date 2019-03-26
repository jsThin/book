<template>
  <swiper :options="swiperOption">
    <swiper-slide 
        v-for="(slide,index) in sliders" 
        :key="index"
    >
      <img :src="slide" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
  export default {
    name: 'carrousel',
    props: [
      'sliders'
    ],
    data() {
      return {
        swiperOption: {
          autoplay: true,
          setWrapperSize :true,
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          pagination: {
            el: '.swiper-pagination',
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  img {
    width: 100%;
  }
</style>

