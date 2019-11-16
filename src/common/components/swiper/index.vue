<template>
  <div class="swiper-container yu">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <div class="swiper-pagination">
          
    </div>
</div>
</template>
 
<script>
import Swiper from "swiper";
export default {
  name: 'Swiper',
  mounted(){
      new Swiper('.yu',{
      loop:true,
      pagination: {
        el: '.swiper-pagination',
    },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
    width: 100%;
    height:100%;
}  
.swiper-container img{
  height: 100%;
  width: 100%;
}
</style>