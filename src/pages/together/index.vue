<template>
    <div class="localdeals">
    <header class="twohead">
        <a href="" class="logo">
            <img src="https://css.mafengwo.net/mobile/images/header/logo-new204.png" alt="">
        </a>
        <div class="head-r">
            <router-link tag="a" to="/home" class="home">
                官网首页
            </router-link>
            <a href="" class="search">
                
            </a>
        </div>
    </header>
    <!-- 头部 -->
    <section class="container">
        <div class="head-fix"> 
            <v-touch 
            class="fix-l" 
            :class="flag1?'active':''"
            @tap="toggleone()"
            >
                <span>目的地</span>
            </v-touch>
            <v-touch
            class="fix-r"
            @tap="toggletwo()"
            :class="flag2?'active':''"
            >
                <span>全部出发时间</span>
            </v-touch>
        </div>
        <keep-alive>
            <component :is="isShow"> </component>
        </keep-alive>

        <div class="footer">
            <div class="btn-group">
                <a href="" id="sort">排序</a>
                <a href="" id="coming">发起结伴</a>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
import Home from "@components/together/home";
import Time from "@components/together/time";
import Address from "@components/together/address";
export default {
    name:"localdeals",
    components:{
        Home,
        Time,
        Address
    },
    data(){
        return{
            isShow:"Home",
            flag1:false,
            flag2:false,
            mark:true
        }
    },
    methods:{
        toggleone(){
            if(this.mark){
                this.isShow="Address";
                this.flag1=true;
                this.flag2=false;
                this.mark=false;
            }else{
                if(!this.flag2){
                    this.isShow="Home";
                    this.mark=true;
                    this.flag1=false;
                }else{
                    this.isShow="Address";
                    this.flag1=true;
                    this.flag2=false;
                    this.mark=false;
                }
            }
        },
        toggletwo(){
            if(this.mark){
                this.isShow="Time";
                this.flag2=true;
                this.flag1=false;
                this.mark=false;
            }else{
                if(!this.flag1){
                    this.isShow="Home";
                    this.mark=true;
                    this.flag2=false;
                }else{
                    this.isShow="Time";
                    this.flag2=true;
                    this.flag1=false;
                    this.mark=false;
                }
            }
        }
    },
    

}
</script>
<style lang="scss">
body{
    font-family: 'PingFangSC-Light',Arial,Helvetica,sans-serif,"Hiragino Sans GB";
}
.twohead{
    height: .21rem;
    position: relative;
}
.twohead .logo{
    width: .55rem;
    display: block;
    padding: .04rem .06rem;
    box-sizing: border-box;
}
.twohead .logo img{
    width:.42rem;
    height:.11rem;
}
.head-r{
    width:.6rem;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
}
.head-r .home{
    width: .39rem;
    height: 100%;
    font-size: .06rem;
    color: #ff9d00;
    line-height:.21rem;
    text-align: center;
    position: relative;
}
.head-r .home:after {
    content: "";
    display: block;
    width: 1px;
    height: .08rem;
    background-color: #efefef;
    position: absolute;
    right: 0;
    top: .07rem;
}
.head-r .search{
    width: .21rem;
    height: 100%;
    text-align: center;
    background: url(https://css.mafengwo.net/mobile/images/header/i_head5.png) no-repeat 0 -.21rem;
    background-size: .42rem 1.25rem;
}

/* 头部 */
.container{
    color: #696969;
    overflow-x: hidden;
}
.head-fix{
    height: .19rem;
    padding: 7px 0;
    font-size: .06rem;
    box-sizing: border-box;
    border-bottom: 1px solid #e2e2e2;
    background-color: #fcfcfc;
    position: relative;
    display: flex;
    justify-content: space-around;
    line-height: .13rem;
}
.head-fix .active{
    color: #f39c11;
}
.fix-l{
    width: 50%;
    text-align: center;
    border-right: 1px solid #e2e2e2;
    position: relative;
}
.fix-l::after,.fix-r::after{
    content: '';
    position: absolute;
    right: .07rem;
    top: 50%;
    margin-top: -0.04rem;
    border-left: .01rem solid #ccc;
    border-bottom: .01rem solid #ccc;
    width: .04rem;
    height: .04rem;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    transition: all 0.3s ease-in 0s;
    -webkit-transition: all 0.3s ease-in 0s;
}
.fix-r{
    width: 50%;
    text-align: center;
}
/* 目的地和出发时间 */
.allgotime{
    height: 2.54rem;
}
.allgotime .alltime{
    padding-left: .06rem;
    box-sizing: border-box;
}
.alltime li{
    height: .19rem;
    padding-right: .06rem;
    border-bottom: 1px solid #ebebeb;
    color: #696969;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .06rem;
    box-sizing: border-box;
}
.alltime li b{
    color: #f39c11;
    font-weight: normal;
}

/* 全部出发时间 */
.mudidi .ulcol{
    display: flex;
}
.mudidi p{
    height: .19rem;
    padding:0  .06rem;
    border-bottom: 1px solid #ebebeb;
    box-sizing: border-box;
    color: #696969;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .06rem;
    background-color: #f8f8f8;
}
.mudidi p b{
    color: #f39c11;
    font-weight: normal;
}
.col1{
    width:25%;
    box-sizing: border-box;
    border-right: 1px solid #ebebeb;
    background-color: #f8f8f8;
    overflow: auto;
}
.mudidi li{
    padding-left: .06rem;
    height: .19rem;
    border-bottom: 1px solid #ebebeb;
    font-size: .06rem;
    cursor: pointer;
    box-sizing: border-box;
    line-height: .19rem;
    color: #696969;
}
.ulcol .on{
    background-color: #fff;
    position: relative;
}

.ulcol .on::before{
    content: '';
    position: absolute;
    top: .06rem;
    left: .02rem;
    width: .01rem;
    height: .07rem;
    background-color: #ee8a11;
    border-radius: 1px;
    overflow: hidden;
}
.col2{
    width:25%;
    padding-left: .06rem;
    box-sizing: border-box;
    border-right: 1px solid #ebebeb;
    background-color: #fff;
    height: 2.35rem;
    overflow: scroll;
}
.col3{
    width:50%;
    padding-left: .06rem;
    box-sizing: border-box;
    border-right: 1px solid #ebebeb;
    background-color: #fff;
    height: 2.35rem;
    overflow: scroll;
}



/* 全部目的地 */
.top-img{
    height: .46rem;
    width: 100%;
    position: relative;
}
.top-img img{
    height: .46rem;
    width: 100%;
    position: absolute;
}
.count{
    position: absolute;
    z-index: 1;
    color: #fff;
    top: .15rem;
    font-size: .07rem;
    display: flex;
    text-shadow: 0 2px 2px rgba(0,0,0,0.2);
}
.count span{
    width: .38rem;
    margin: 0 .08rem;
}
.count span i{
    display: block;
    text-align: center;
    font-size: .1rem;
    margin-bottom: .02rem;
}
.count span b{
    display: block;
    text-align: center;
    font-size: .05rem;
}
.lists{
    width: 100%;
    padding: .04rem 0 0 .04rem;
    padding-bottom: 55px!important;
}
.lists ul{
    overflow: hidden;
}
.lists .item{
    width: .76rem;
    height: .9rem;
    float: left;
}
.lists .item a{
    width: .72rem;
    height: .86rem;
    margin:0 .04rem  .04rem 0;
    display: block;
    box-sizing: border-box;
    border: 1px solid #e6e5e5;
    position: relative;
}
.item .item-t{
    height: .46rem;
    background: gray;
    width: 100%;
    position: relative;
}
.item .item-t img{
    width: 100%;
    height:100%;
    position: absolute;
}
.item-t .t-title{
    // width: .35rem;
    
    height: .32rem;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    padding: .05rem .03rem 0;
    font-size: .07rem;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    z-index: 1;
}
.go-date{
    position: absolute;
    right: 0;
    bottom: .04rem;
    background-color: #41c6ad;
    height: .1rem;
    width: .43rem;
    line-height: .1rem;
    color: #fff;
    font-size: .05rem;
    padding: 0 .04rem 0 .04rem;
    border-radius: .1rem 0 0 .1rem;
    box-shadow: 0 .01rem .01rem rgba(0,0,0,0.2);
}

.item .item-b{
    height: .39rem;
    position: relative;
    box-sizing: border-box;
    color: #474747;
    padding:.09rem .04rem .05rem .06rem
}
.item-b .head-img{
    height: .13rem;
    width: .13rem;
    position: absolute;
    border-radius: 50%;
    left: .06rem;
    top: -0.07rem;
}
.item-b .head-img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.item-b .name{
    display: block;
    height: 14px;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 14px;
    color: #696969;
    box-sizing: border-box;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.item-b .address{
    line-height: .05rem;
    font-size: .05rem;
}
.item-b .address span:nth-child(1){
    margin-right: .02rem;
    color: #fa9f00;
}
.item-b .txt{
    margin-top: .02rem;
    font-size: .04rem;
    color: #a4a4a4;
    line-height: .05rem;
    height: .1rem;
    overflow: hidden;
}
section .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:3;
    width: 100%;
    height: .21rem;
    background-color: rgba(255,255,255,0.95);
    border-top: 1px solid rgba(0,0,0,0.1);
    box-sizing: border-box;
    padding: .04rem .06rem;
    text-align: center;
}
.footer .btn-group{
    height: .13rem;
    display: flex;
}
#sort{
    width: .28rem;
    display: table-cell;
    font-size: .05rem;
    color: #a4a4a4;
    box-sizing: border-box;
    padding: .02rem 0;
    line-height: .09rem;
    text-align: left;
}
#sort::before{
    content: '';
    float: left;
    margin: .01rem .03rem  0 0;
    /* display: inline-block; */
    width: .07rem;
    height: .07rem;
    background: url(https://css.mafengwo.net/mobile/images/together/sprites4.png) no-repeat 0 -0.06rem;
    background-size: .42rem;
}
#sort::after{
    content: '';
    float: right;
    margin-right: 7px;
    height: 23px;
    width: 1px;
    background-color: #e5e5e5;
    overflow: hidden;
}
#coming{
    width: 1.17rem;
    display: table-cell;
    box-sizing: border-box;
    height: .13rem;
    background-color: #f39c11;
    border-radius: .13rem;
    line-height: .13rem; 
    color: #fff;
    font-size: .06rem; 
}


</style>