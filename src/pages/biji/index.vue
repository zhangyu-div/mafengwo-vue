<template>
    <div>
        <header>
            <div class="header">
                <v-touch
                tag="span"
                @tap="back()"
                 class="iconfont">&#xe6bc;</v-touch>
                <span>旅行笔记({{biji.id}})</span>
                <span></span>
            </div>
        </header>
        <section>
            <ul class="list">
                <li v-for="(item,index) in biji.list" :key="index">
                    <div class="imgs">
                        <img :src="item.img"
                            alt="">
                    </div>
                    <div class="text">{{item.title}}</div>
                    <p>
                        <span>
                            <img :src="item.userimg"
                                alt="">
                        </span>
                        <span>云淡风轻</span>
                        <span class="iconfont">&#xe60b;<b>{{item.zan}}</b></span>
                    </p>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import {bijiApi} from "@api/sales";
export default {
    name:"Biji",
    props:["id"],
    data(){
        return{
            biji:[],
        }
    },
    async created(){
        let data=await bijiApi(this.id);
        this.biji=data[0];
        console.log(this.biji);
    },
    methods:{
        back(){
           this.$router.back();
        }
    }

}
</script>
<style lang="scss" scoped>
  header{
    width: 100%;  
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 2;
  }
  .header{
      width: 100%;
      height: .19rem;
      display: flex;
      align-items: center;
      justify-content:space-around;
      font-size: .08rem;
      border-bottom: 1px solid #e5e5e5;
  }
  header span:first-child{
      font-size: .1rem;
  }
  /* 头部 */
  section{
      margin-top: .19rem;
      padding: .06rem .06rem 0 .06rem;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      display: flex;
  }
  section ul{
      width: 1.5rem;
      height: 100%;
  }
  section ul li{
      width: .7rem;
      margin: .04rem .02rem 0 0;
      float: left;
  }
  ul li .imgs{
    width: .69rem;
    height: .69rem;
    border-radius: .02rem .02rem 0 0;
  }
  ul li  .text{
    margin: .02rem 0 .02rem .02rem;
    font-size: .06rem;
    color: #242629;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  }
  ul .imgs img{
      height: 100%;
      width: 100%;
      border-radius: .02rem .02rem 0 0;

  }
  ul p span:first-child{
      height: .07rem;
      width: .07rem;
      display: inline-block;
  }
  ul p span:first-child img{
      height: 100%;
      width: 100%;
  }
  ul p{
      font-size: .05rem;
      display: flex;
      align-items: center;
  }
  ul p span:nth-child(1){
      margin: 0 .04rem;
  }
  ul p span:nth-child(3){
      margin-left: .15rem;
      font-size: .05rem;

  }
  ul p span:nth-child(3) b{
      font-size: .05rem;
  }

</style>
