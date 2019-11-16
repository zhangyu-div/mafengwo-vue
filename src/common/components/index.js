import Vue from "vue";
import BScroll  from "./bscroll";
import Swiper from "./swiper";
let componentMap=[
    BScroll,
    Swiper
] 
componentMap.forEach((item)=>{
    Vue.component(item.name,item);
})