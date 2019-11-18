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
import axios from "axios";
import {salessortApi} from "@api/sales";
export default {
    name:"saleshome",
    data(){
        return{
            salesList:[],
            flag:true
        }
    },
    created(){
        this.$store.dispatch("handlesalesnormal");
        console.log(this);
        this.salesList=this.$store.state.normallist;
    },

    // async created(){
    //         this.$observer.$on("sort",async ()=>{
    //             this.flag=false;
    //             await axios({
    //                 method:"get",
    //                 url:'http://localhost:3000/salesdata?_sort=moneysole&_order=asc',
    //             }).then((res)=>{
    //                 // console.log(res);
    //                 this.salesList.length=0;
    //                 this.salesList=res.data;
    //                 console.log(this.salesList)
    //             })
    //         });  

    //         if(this.flag){
    //             let data= await salesnowApi();
    //             this.salesList=data
    //         }
    // },
}
</script>