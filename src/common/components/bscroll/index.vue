<template>
<div class="scroll-container">
    <div class="scroll-loading" v-if="flag"> 
          <i class="fa fa-cog fa-spin"></i>
    </div>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</div>
</template>
<script>
import BScroll  from "better-scroll";
export default {
    name:"Scroll",
    data(){
        return{
            flag:false
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:1,
            pullDownRefresh:true
        })
    },
    methods:{
        handleScroll(){ 
            this.scroll.on("scroll",pro=>{
                console.log(pro.y);
                // if(pro.y>30){
                    this.flag=true;
                // }
            })
        },
        // 下拉刷新获取数据
        handlepullingDown(callback){ 
            this.scroll.on("pullingDown",()=>{
                callback()
            })
        },
        handleRefreshDown(){
            this.scroll.refresh();
            this.scroll.finishPullDown();
            this.flag=false;
            setTimeout(()=>{
                this.flag=false;
            },2000)

        }
    }
}
</script>
<style lang="scss" scoped>
    .scroll-loading{
        text-align: center;
        height: .23rem;
        line-height: .23rem;
        color:blue;
    }

</style>