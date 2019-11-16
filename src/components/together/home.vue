<template>
<div>
    <div class="top-img">
        <img src="https://images.mafengwo.net/mobile/images/together/topNum-bg.jpg" alt="">
        <div class="count">
            <span>
                <i>411661</i>
                <b>个旅行计划</b>
            </span>
            <span>
                <i>641418</i>
                <b>人参与</b>
            </span>
            <span>
                <i>11849</i>
                <b>个目的地</b>
            </span>
        </div>
    </div>
    <div class="lists">
        <ul>
            <li class="item" v-for="(item,index) in togetherList" :key="index"> 
                <a href="">
                    <div class="item-t">
                        <img :src="item.img" alt="">
                        <div class="t-title">
                            <p>{{item.country}}</p>
                            <p>7-15天</p>
                        </div>
                        <span class="go-date">
                            {{item.gotime}} 出发
                        </span>
                    </div>
                    <div class="item-b">
                        <span class="head-img">
                            <img :src="item.userimg" alt="">
                        </span>
                        <span class="icon"></span>
                        <p class="name">{{item.username}}</p>
                        <p class="address">
                            <span>lv{{item.userdj}}</span>
                            <span>{{item.useraddress}}</span>
                        </p>
                        <p class="txt">{{item.usertext}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import {togethernowApi} from "@api/together";
export default {
    data(){
        return{
            togetherList:[]
        }
    },
    async created(){
        let data=await togethernowApi();
        this.togetherList=data;
        console.log(this.togetherList);
    },
    methods:{
        
    }
}
</script>
<style lang="scss">

</style>