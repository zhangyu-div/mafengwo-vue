<template>
    <div>
        <header>
            <div class="LBtn">
                <!-- <v-touch 
                @tap="handleBack()" 
                class="btn-back" 
                tag="a"
                >
                </v-touch> -->
                 <router-link
                class="btn-back"
                tag="a"
                to="/localdeals"
                 >
                 </router-link>
            </div>
            <div class="CBtn">
                <a href="/" class="logo"></a>
            </div>
            <div class="RBtn">
                <a href="" class="sch"></a>
                <a href="" class="myorder">订单</a>
            </div>
        </header>
        <!-- 头部区域 -->
        <div class="main">
            <section class="sortbar">
                <ul class="sortitem">
                    <li class="tab1">
                        <v-touch tag="a"
                        @tap="toggleone()"
                        :class="flagone?'cur':''"
                         >
                            <span>综合排序</span>
                            <i></i>
                        </v-touch>
                    </li>
                    <li class="tab1 cur">
                        <v-touch tag="a"
                        @tap="toggletwo()"
                        :class="flagtwo?'cur':''"
                        >
                            <span>产品类型</span>
                        
                            <i></i>
                        </v-touch>
                    </li>
                    <li class="tab4">
                        <v-touch tag="a" 
                        class="filter"
                        @tap="togglethree()"
                        :class="flagthree?'cur':''"
                        >
                            <span class="icon"></span>
                            筛选
                        </v-touch>
                    </li>
                </ul>
                  <component :is="isshow"></component>
            </section>
      
        </div>
    </div>
</template>
<script>
import Filters from "@components/sales/filters";
import Home from "@components/sales/home";
import Sort from "@components/sales/sort";
import Type from "@components/sales/type";
export default {
    name:"sales",
    data(){
        return{
           isshow:"Home" ,
           flagone:false,
           flagtwo:false,
           flagthree:false,
           mark:true
        }
    },
    components:{
        Filters,
        Home,
        Sort,
        Type,
    },
    methods:{
        // handleBack(){
        //     this.$router.go(-1); 
        // }
        toggleone(){
            if(this.mark){
                this.isshow="Sort";
                this.flagone=true;
                this.flagtwo=false;
                this.flagthree=false;
                this.mark=false;
            }else{
                if(!this.flagthree&&!this.flagtwo){
                    this.isshow="Home";
                    this.mark=true;
                    this.flagone=false;
                }else{
                    this.isshow="Sort";
                    this.flagone=true;
                    this.flagtwo=false;
                    this.flagthree=false;
                    this.mark=false;
                }
            }
        },
        toggletwo(){
            if(this.mark){
                this.isshow="Type";
                this.flagtwo=true;
                this.flagone=false;
                this.flagthree=false;
                this.mark=false;
            }else{
                if(!this.flagthree&&!this.flagone){
                    this.isshow="Home";
                    this.mark=true;
                    this.flagtwo=false;
                }else{
                    this.isshow="Type";
                    this.flagtwo=true;
                    this.flagone=false;
                    this.flagthree=false;
                    this.mark=false;
                }

            }
        },
        togglethree(){
            if(this.mark){
                this.isshow="Filters";
                this.flagthree=true;
                this.flagone=false;
                this.flagtwo=false;
                this.mark=false;
            }else{
                if(!this.flagtwo&&!this.flagone){
                    this.isshow="Home";
                    this.mark=true;
                    this.flagthree=false;
                }else{
                    this.isshow="Filters";
                    this.flagthree=true;
                    this.flagone=false;
                    this.flagtwo=false;
                    this.mark=false;
                }
            }
        }
    }
}
</script>
<style lang="scss">
body{
    color: #474747;
}
header{
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    height: .21rem;
    position: relative;
}
header .LBtn{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: .21rem;
    height: .21rem;
}
header .LBtn a{
    width: 100%;
    height: 100%;
    display: block;
    background: url(https://css.mafengwo.net/mobile/images/header/i_head5.png);
    background-size: .42rem 1.25rem;
}
header .CBtn {
    text-align: center;
    position: relative;
}
header .CBtn a{
    display: inline-block;
    width: .39rem;
    height: .17rem;
    padding-top: .06rem;
    background: url(https://css.mafengwo.net/mobile/images/header/logo2.png) no-repeat 0 .06rem;
    box-sizing: border-box;
    background-size: .34rem .09rem;
}
header .RBtn{
    position: absolute;
    right: 0;
    top: 0;
    text-align: right;
}
header .RBtn .sch{
    height: .21rem;
    width: .21rem;
    position: absolute;
    right: .17rem;
    top: -0.01rem;
    background: url(https://css.mafengwo.net/mobile/images/header/i_head5.png) 0 -.21rem no-repeat; 
    background-size:.42rem;
}
header .RBtn .myorder {
    display: inline-block;
    font-size: .06rem;
    line-height: .1rem;
    border: 1px solid #ffa800;
    padding: 0 .03rem 0 .04rem;
    color: #ffa800;
    border-radius: .07rem 0 0 .07rem;
    margin-top: .05rem;
}

.sortbar{
    height: .19rem;
}
.sortitem{
    position: relative;
    z-index: 2;
    height:.21rem;
    background: #f7f7f7 url(https://css.mafengwo.net/mobile/images/sales/index/line1.png) repeat-x;
    background-size: .02rem 1px;
    background-position: 0 bottom;
}
.sortitem li {
    display: inline;
    float: none !important;
}
.sortitem li a {
    display: inline-block;
    width: .5rem;
    line-height: .18rem;
    font-size: .053rem;
    color: #111;
    box-sizing: border-box;
    text-align: center;
    padding-top: .03rem;
    position: relative;
}
.sortitem li  .cur{
    color: #ff9d00;
}
.sortitem li a:after {
    content: "";
    display: inline-block;
    width: 1px;
    height:.1rem;
    background-color: #e5e5e5;
    position: absolute;
    right: 0;
    top: .08rem;
}
.sortitem li i {
    display: inline-block;
    border: .015rem solid;
    border-color: #696969 transparent transparent transparent;
    vertical-align: middle;
    margin-left: .01rem;
}
.sortitem li a .icon{
    display: inline-block;
    width: .05rem;
    height: .04rem;
    background: url(https://css.mafengwo.net/mobile/images/sales/index/i_filter.png) no-repeat 0 -1px;
    background-size: .05rem;
    vertical-align: middle;
    margin-right: .01rem;
}

.sortbar .droplist {
    position: absolute;
    top: .41rem;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 1;
}
.scrollview{
    height: 2.18rem;
}
.sortbar .droplist .sortlist {
    padding: 0 .05rem;
}
.droplist .sortlist a {
    display: block;
    line-height: .19rem;
    font-size: .06rem;
    color: #505050;
    background: url(https://css.mafengwo.net/mobile/images/sales/index/line1.png) repeat-x;
    background-size: .02rem 1px;
    background-position: 0 bottom;
}

.sortbar .droplist dl {
    background: url(https://css.mafengwo.net/mobile/images/sales/index/line1.png) repeat-x;
    background-size: .02rem 1px;
    background-position: 0 bottom;
    margin: 0;
    padding: 0;
}
.sortbar .droplist dt {
    font-size: .07rem;
    color: #111;
    padding:.06rem;
    box-sizing: border-box;
}
.sortbar .droplist dd {
    padding: 0 0 .04rem .08rem;
    margin: 0;
    box-sizing: border-box;
}
.sortbar .droplist dd a {
    display: inline-block;
    width: .41rem;
    line-height: .11rem;
    text-align: center;
    font-size: .05rem;
    color: #111;
    border: 1px solid #f2f2f2;
    border-radius: .05rem;
    margin: 0 .04rem .04rem 0;
}
.sortbar .droplist dd a.cur {
    border-color: #ff9d00;
    background-color: #ff9d00;
    color: #fff;
}
.sortbar .droplist .reset {
    display: block;
    padding: .07rem 0 .14rem;
    text-align: center;
    box-sizing: border-box;
}
.sortbar .droplist .reset a {
    display: inline-block;
    width: .38rem;
    line-height: .12rem;
    font-size: .06rem;
    color: #ff9d00;
    text-align: center;
    border: 1px solid #ff9d00;
    border-radius: .01rem;
}
/* 确定按钮 */
.sortbar .droplist .footbtn {
    display: block;
    width: 100%;
    line-height: .21rem;
    font-size: .08rem;
    color: #fff;
    text-align: center;
    background-color: #ff9d00;
    position: absolute;
}
/* 点击产品类型 */


/* 点击筛选 */
.itemlist ul{
    padding: 0 .08rem;
    box-sizing: border-box;
    display: block;
}
.itemlist ul li{
    padding: .08rem 0;
    box-sizing: border-box;
    background: url(https://css.mafengwo.net/mobile/images/sales/index/line1.png) repeat-x;
    background-size: .02rem 1px;
    background-position: 0 bottom;
}
.itemlist a {
    display: block;
    position: relative;
    overflow: hidden;
}
.itemlist a .imgs{
    width: .56rem;
    height: .38rem;
    float: left;
    position: relative;
}
.itemlist a .imgs img{
    width: 100%;
    height: 100%;
}
.itemlist a .imgs .tag{
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    font-size: .05rem;
}
.imgs .tag .tag1{
    background-color: #9b59b6;
    border: 1px solid #9b59b6;
    color: #fff;
    padding: 0 .03rem;
    display: inline-block;
    vertical-align: middle;
}
.imgs .tag .tag2{
    color: #9b59b6;
    display: inline-block;
    background-color: #fff;
    border: 1px solid #9b59b6;
    padding: 0 .03rem;
    vertical-align: middle;
}
.itemlist a .caption{
    margin-left: .6rem;
    margin-bottom: .04rem;
    font-size: .064rem;
    color: #111;
    line-height: .08rem;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
}
.itemlist a .tags {
    position: absolute;
    top: .19rem;
    left: .6rem;
    white-space: nowrap;
    margin-top: .05rem;
    font-size: 0;
}
.itemlist a .tags span {
    display: inline-block;
    vertical-align: top;
    margin-right: .02rem;
    height: .07rem;
    padding: 0 .01rem;
    font-size: .05rem;
    color: #696969;
    border: 1px solid #e5e5e5;
    border-radius: .02rem;
}
.itemlist a .price {
    font-size: .05rem;
    color: #999;
    padding: .06rem 0 0;
    position: relative;
    
}
.itemlist .price em {
    font-size: .05rem;
    font-style: normal;
    color: #f60;
    margin-left: .04rem;
}
.itemlist .price strong {
    font-size: .08rem;
    color: #ff7800;
    font-weight: normal;
    margin-right: .02rem;
}
.itemlist .price .num {
    position: absolute;
    right: 0;
    top: 0;
    padding: .07rem 0 0;
}


</style>