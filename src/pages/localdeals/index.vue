<template>
    <div class="together">
    <header class="twohead">
        <a href="" class="logo">
            <img src="https://css.mafengwo.net/mobile/images/header/logo-new204.png" alt="">
        </a>
        <div class="head-r">
            <router-link tag="a" to="/home" href="" class="home">
                官网首页
            </router-link>
            <a href="" class="search">
                
            </a>
        </div>
    </header>
    <!-- 头部 -->
    <section class="container">
        <div class="main">
            <section class="searchbox">
                <form action="">
                    <a href="">
                        <i></i>
                        搜索产品名称/目的地
                    </a>
                </form>
            </section>
        </div>
    </section>
    <!-- 搜索区域 -->
    <section class="banner">
            <Swiper>
                <div class="swiper-slide" v-for="(item,index) in imglist" :key="index">
                    <img :src="item" alt="">
                </div>
            </Swiper>
            <!-- <li>
                <img src="https://n4-q.mafengwo.net/s10/M00/96/BE/wKgBZ1lQ4xCAN_0GAAGB1uhlaoU51.jpeg?imageMogr2%2Fthumbnail%2F%21750x240r%2Fgravity%2FCenter%2Fcrop%2F%21750x240%2Fquality%2F90" alt="">
            </li>
            <p>
                <b></b>
                <b></b>
                <b></b>
            </p> -->
      
    </section>
    <div class="btnlist">
        <div class="swiper-container">
            <div class="swiper-wrapper">
               <div class="swiper-slide swiper">
                <router-link tag="a" to="/sales">
                    <img src="https://p2-q.mafengwo.net/s9/M00/25/A0/wKgBs1e66GSAHL4EAAANMuKo3uw227.png" alt="">
                    <p>景点门票</p>
                </router-link>
                <a href="">
                    <img src="https://b1-q.mafengwo.net/s9/M00/A5/00/wKgBs1e8DtuAL072AAANFc-mbTU587.png" alt="">
                    <p>一日游</p>
                </a>
                <a href="">
                    <img src="https://n1-q.mafengwo.net/s9/M00/A5/C5/wKgBs1e8D9mAOagmAAALsBHRmTA476.png" alt="">
                    <p>酒店套餐</p>
                </a>
                <a href="">
                    <img src="https://p3-q.mafengwo.net/s9/M00/26/A0/wKgBs1e66nqAWowMAAANvhXlocM209.png" alt="">
                    <p>WiFi</p>
                </a>
                <a href="">
                    <img src="https://b1-q.mafengwo.net/s9/M00/A5/2F/wKgBs1e8DxyAEGlrAAAOV4m9fgU361.png" alt="">
                    <p>演出预览</p>
                </a>
                <a href="">
                    <img src="https://p3-q.mafengwo.net/s9/M00/A5/3D/wKgBs1e8Dy6ANf2zAAAOQDkr9h0173.png" alt="">
                    <p>接送机</p>
                </a>
                <a href="">
                    <img src="https://b4-q.mafengwo.net/s9/M00/2B/D7/wKgBs1e68yyAOunPAAALzO7l4OM536.png" alt="">
                    <p>电话卡</p>
                </a>
                <a href="">
                    <img src="https://n3-q.mafengwo.net/s9/M00/A5/50/wKgBs1e8D0yAFrvYAAALeK_2ZPo816.png" alt="">
                    <p>交通卡</p>
                </a>
            </div>  
              <div class="swiper-slide swiper">
                <router-link tag="a" to="/sales">
                    <img src="https://n4-q.mafengwo.net/s9/M00/A5/5E/wKgBs1e8D2CAF4aQAAANJhQd2jA905.png" alt="">
                    <p>多日游</p>
                </router-link>
                <a href="">
                    <img src="https://n4-q.mafengwo.net/s9/M00/A5/6C/wKgBs1e8D3OAELq5AAAMf_ve5lY406.png" alt="">
                    <p>包拼车</p>
                </a>
                <a href="">
                    <img src="https://n1-q.mafengwo.net/s9/M00/A5/80/wKgBs1e8D5CAAt09AAANLlv72vY692.png" alt="">
                    <p>美食</p>
                </a>
                <a href="">
                    <img src="https://p4-q.mafengwo.net/s9/M00/A5/9B/wKgBs1e8D6yAAgVEAAAMgYQFoK8807.png" alt="">
                    <p>租车</p>
                </a>
                <a href="">
                    <img src="https://p3-q.mafengwo.net/s9/M00/A5/0B/wKgBs1e8DvSATaefAAANAY8-wQM546.png" alt="">
                    <p>体验</p>
                </a>

            </div>  
            </div>
            
            <div class="swiper-pagination">

            </div>
        </div>
    </div>
    <!-- 景点门票  一日游 -->
    <section class="address">
        <div class="address-nav">
            <!-- <a href="" class="active">热门</a>
            <a href="">东南亚</a>
            <a href="">欧美澳</a>
            <a href="">国内</a> -->
            <v-touch tag="a" v-for="(item,index) in countryList" 
            :key="index"
            :class="flag==index?'active':''"
            @tap="toggle(index)"
            >{{item.title}}
            </v-touch>
        </div>
        <component :is="isshow"></component>
    </section>
    </div>
</template>
<script>
import Hot from "@components/localdeals/hot";
import Guonei from "@components/localdeals/guonei";
import Dny from "@components/localdeals/dny";
import Oma from "@components/localdeals/oma";

export default {
    name:"together",
    components:{
        Hot,
        Guonei,
        Dny,
        Oma
    },
    data(){
        return{
            isshow:"Hot",
            flag:0,
            countryList:[
                {
                    title: "热门",
                    isshow:"Hot"
                },
                {
                    title:"东南亚",
                    isshow:"Dny"
                },
                {
                    title: "欧美澳",
                    isshow:"Oma"
                },
                {
                    title: "国内",
                    isshow:"Guonei"
                },
              ],
            imglist:[
                "https://n4-q.mafengwo.net/s10/M00/96/BE/wKgBZ1lQ4xCAN_0GAAGB1uhlaoU51.jpeg?imageMogr2%2Fthumbnail%2F%21750x240r%2Fgravity%2FCenter%2Fcrop%2F%21750x240%2Fquality%2F90",
                "https://n2-q.mafengwo.net/s9/M00/6F/DC/wKgBs1hXpweAMBTIAAPqcgR5mVY25.jpeg?imageMogr2%2Fthumbnail%2F%21750x240r%2Fgravity%2FCenter%2Fcrop%2F%21750x240%2Fquality%2F90",
                "https://p4-q.mafengwo.net/s9/M00/C3/03/wKgBs1hOf_GAdpB3AAF3xV1Qk4829.jpeg?imageMogr2%2Fthumbnail%2F%21750x240r%2Fgravity%2FCenter%2Fcrop%2F%21750x240%2Fquality%2F90"
            ]
        }
    },
    methods:{
        toggle(index){
            this.isshow=this.countryList[index].isshow;
            this.flag=index;
        },
        
    },
  mounted(){
      new Swiper('.swiper-container',{
      loop:true,
      pagination: {
        el: '.swiper-pagination',
    },
    })
  }
}
</script>
<style lang="scss">
body{
    font-size: .05rem;
    font-family: 'PingFangSC-Light',Arial,Helvetica,sans-serif,"Hiragino Sans GB";
    color: #474747;
    background: #efefef;
}
.swiper-pagination{
    top:.69rem;
    }
.twohead{
    height: .21rem;
    position: relative;
    background:#fff url(https://css.mafengwo.net/mobile/images/header/line1.png) repeat-x 0 bottom;
    background-size: .02rem;
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
    background: #fff;
}
 .main .searchbox{
    width: 100%;
    padding: .03rem .07rem;
    box-sizing: border-box;
}
.main .searchbox form{
    height: .13rem;
    padding: .03rem;
    box-sizing: border-box;
    background-color: #efeff4;
    border-radius: 2px;
    position: relative;
}
.searchbox form a{
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    font-size: .05rem;
    color: #696969;
    line-height: .13rem;
}
.searchbox form a i{
    height: 70%;
    width: .09rem;
    display: inline-block;
    background: url(https://css.mafengwo.net/mobile/images/sales/index/i_search.png) no-repeat -.05rem .018rem;
    background-size: .32rem;
    vertical-align: middle;
    margin-right: .02rem;
}
/* 搜索区域  */
.banner{
    height: .51rem;
    width:100%;
}
.banner ul{
    height: 100%;
    width: 100%;
}
.banner li{
    position: absolute;
    width: 100%;
    height: 100%;
}
.banner li img{
    width: 100%;
    height: 100%
}
.banner p{
    height: .07rem;
    width: .32rem;
    margin: 0 0 0 -28px;
    bottom: 0;
    left: 50%;
    position: absolute;
    padding:0  .01rem;
}
.banner p b{
    margin: .03rem .03rem;
    width: .03rem;
    height: .03rem;
    display: inline-block;
    border-radius: .01rem;
    background-color: rgba(255,255,255,0.5);
}
.btnlist{
    height: .92rem;
    padding: 0 .01rem 0 .03rem;
    background: #fff url(https://css.mafengwo.net/mobile/images/sales/index/line1.png) repeat-x;
    background-size: .02rem 1px;
    background-position: 0 bottom;
    position: relative;
    box-sizing: border-box;
}
.btnlist .btnlist-swiper{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;

}
.swiper a{
    display: block;
    float: left;
    width: .37rem;
    height: .37rem;
    padding-top: .08rem;
    text-align: center;
    box-sizing: border-box;
}
.swiper a img{
    width: .18rem;
}
.swiper a p{
    color: #111;
    font-size: .06rem;
    padding-top: .03rem;
}
.btnlist-btn{
    position: absolute;
    bottom:.06rem;
    left: 0;
    width: 100%;
    text-align: center;
}
.btnlist-btn span{
    width: 8px;
    height: 8px;
    display: inline-block;
    /* background: #007aff; */
    background-color: #ff9d00;
    border-radius: 50%;
    margin: 0 .03rem;
}
// banner图


/* 景点门票  一日游 */
.address{
    margin-top: .04rem;
    background: #fff;
}
.address-nav{
    height: .25rem;
    padding: 0 .07rem;
    box-sizing: border-box;
    background: url(https://css.mafengwo.net/mobile/images/sales/index/line1.png) repeat-x 0 bottom;
    background-size: .02rem 1px;
}
.address-nav a{
    display: block;
    width: .21rem;
    height: .25rem;
    margin:0  .07rem;
    line-height: .25rem;
    float: left;
    font-size: .07rem;
    color: #696969;
    box-sizing: border-box;
    text-align: center; 
}
.address-nav .active{
    border-bottom: #ff9d00 .01rem solid;
    color: #ff9d00;
}

/* 热门 东南亚 欧美澳 国内 */
.address-list{
    height: .64rem;
    padding: .06rem;
    box-sizing: border-box;
}
.address-list a{
    width: .32rem;
    height: .13rem;
    display: block;
    float: left;
    line-height: .13rem;
    background-color: #f7f7f7;
    border-radius: 2px;
    text-align: center;
    font-size: .06rem;
    color: #696969;
    margin: .02rem;
}


</style>