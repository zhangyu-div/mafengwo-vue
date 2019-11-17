<template>
    <section class="itemlist">
        <ul>
            <router-link 
            tag="li"
            :to="'/detail/'+item.id"
            v-for="(item,index) in salesList" 
            :key="index"
            >
                <a href="">
                    <div class="imgs">
                        <img :src="item.img"
                            alt="">
                        <div class="tag">
                            <span class="tag1">{{item.address}}</span>
                            <span class="tag2">{{item.type}}</span>
                        </div>
                    </div>
                    <div class="caption">
                        {{item.info}}
                    </div>
                    <div class="tags">
                        <span v-for="(items,indexs) in item.infolist" :key="indexs">{{items}}</span>
                    </div>
                    <div class="price">
                        <em>￥</em>
                        <strong>{{item.money}}</strong>起
                        <div class="num">月售{{item.moneysole}}</div>
                    </div>
                </a>
            </router-link>
        </ul>
                <!-- @tap="'/detail/'+item.id" -->
    </section>
</template>
<script>
import {salesnowApi} from "@api/sales";
export default {
    name:"saleshome",
    data(){
        return{
            salesList:[]
        }
    },
    async created(){
        let data= await salesnowApi();
        this.salesList=data;
        console.log(this.salesList)
    },
    beforeCreate(){
        this.$observer.$on("sort",()=>{
            console.log("hfskdj");
        });
    }
}
</script>