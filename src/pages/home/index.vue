<template>
    <div class="home">
        <!-- 头部 -->
        <header>
            <div class="logo">
                <a href="/"></a>
            </div>
            <div class="search">
                <div class="searchbox">
                    <form action="">
                        <input type="text" placeholder="搜索目的地/攻略/游记">
                        <input type="button">
                    </form>
                </div>
            </div>
            <div class="login">
                <router-link tag="a" to="/login">
                    登录
                </router-link>
            </div>
        </header>
        <!-- banner区域 -->
        <section class="banner">
            <div class="bannerbox">
                <Swiper>
                    <div class="swiper-slide" v-for="(item,index) in imglist" :key="index">
                        <img :src="item" alt="">
                    </div>
                </Swiper>
                <img src="http://images.mafengwo.net/images/ad/icon.png?v=20160829" alt="" class="advert">
            </div>
        </section>
        <!-- 页面中间导航部分 -->
        <section class="nav-li">
            <ul class="nav-list">
                <li>
                    <a href="">
                        <i></i>
                        <b>找攻略</b>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                        <b>看游记</b>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                        <b>问达人</b>
                    </a>
                </li>
                    <router-link tag="li" to="./localdeals">
                        <a href="">
                            <i></i>
                            <b>结伴</b>
                        </a>
                    </router-link>
                <li>
                    <a href="">
                        <i></i>
                        <b>酒店</b>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                        <b>去旅行</b>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                        <b>机票</b>
                    </a>
                </li>
                
                <router-link tag="li" to="./together">
                    <a href="">
                        <i></i>
                        <b>当地玩乐</b>
                    </a>
                </router-link>
                
            </ul>
        </section>
        <section class="guide">
            <div class="recommend">
                <h3>>推荐攻略</h3>
            </div>
            <Scroll ref="scroll"> 
                <div class="guide-list">
                    <a href="" v-for="(item,index) in homeList" :key="index">
                        <div class="title">
                                {{item.title}}                                     
                        </div>
                        <dl class="info">
                            <dt>
                                <img :src="item.img" alt="">
                            </dt>
                            <dd>
                                <div class="text">
                                        {{item.text}}
                                </div>
                                <div class="extra">
                                    <div class="eyes">{{item.liulan}}浏览</div>
                                    <div class="author">
                                        <i>{{item.author}}</i>
                                        <span><img :src="item.autherimg" alt=""></span>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                        <div class="mark">
                            <img :src="item.fengshou=='1'?'https://n1-q.mafengwo.net/s9/M00/FB/0C/wKgBs1diFRKAMMptAAAIpExA3RM367.png':'1'" alt="">
                        </div>
                    </a>
                </div> 
            </Scroll>
            </section>
    </div>
</template>
<script>
// import axios from  "axios";
import {homenowApi} from "@api/home"; 
import MessageBox from "../../lib/messagebox/index.js"
// import MessageBox from "../../lib/messagebox";     
export default {
    components:{
        // MessageBox
    },
    name:"home",
    data(){
        return{
            homeList:[],
            imglist:[
                "https://b1-q.mafengwo.net/s15/M00/CF/C1/CoUBGV26sX2ABkFxAALHsZWXQoY272.jpg",
                "https://b1-q.mafengwo.net/s15/M00/0F/5F/CoUBGV28HDuALpzxABR490kDN0M39.jpeg?imageMogr2%2Fthumbnail%2F%21750x300r%2Fgravity%2FCenter%2Fcrop%2F%21750x300%2Fquality%2F100",
                "https://n1-q.mafengwo.net/s15/M00/7B/41/CoUBGV3KWoaAM_xFAALBS-8lQHA481.jpg"
            ]
        }
    },
   created(){
       this.handleGetMovieList();
        MessageBox({
            title:"要留级了",
            ok:()=>{
            alert("留级")
        }
        });

        //  console.log(this.homeList);
    // axios({
    //     method:'get',
    //     url:'/users/list',
    //     params:{
    //         page:2,
    //         limit:10
    //     }//传参

    // }).then((data)=>{
    //     console.log(data)
    // })
},
methods:{
     async handleGetMovieList(id){
         id=id;
        let data=await homenowApi(id);
        this.homeList=data;
    }
},
watch:{
    movieList(){
        this.$refs.scroll.handleRefreshDown();
    }
},
mounted(){
    // this.$refs.scroll.handlepullingDown(()=>{
    //     this.handleGetMovieList();//和接口有关不会写
    // });
    this.$refs.scroll.handleScroll(); 
}
}
</script>
<style lang="scss" scoped>
.wrapper{
    height: .74rem;
    background: #fff;
}
header,.banner,.recommend,.nav-li{
    position: relative;
    z-index: 100;
    background: #fff;
}

body{
    background: #fff;
}
header{
    height: .21rem;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    position: relative;
}

header .logo{
    height: .17rem;
    width: .47rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
}
header .logo a{
    display: block;
    height: 100%;
    width: 100%;
    background: url(https://css.mafengwo.net/mobile/images/header/logo2.png) no-repeat .04rem .06rem;
    background-size: .33rem .09rem;
    background-position: .04rem .06rem;
}
header .search{
    width:1.56rem;
    height: .16rem;
    position: relative;
    text-align: center;
}
header .search .searchbox{
    padding: .05rem .21rem 0 .43rem;
}
.searchbox form {
    height: .11rem;
    width: .92rem;
    box-sizing: border-box;
    padding: 0 .15rem 0 .05rem;
    border-radius:.05rem;
    font-size: 0;
    background: #f3f3f3;
    position: relative;
}
.searchbox form input:nth-child(1){
    background:inherit;
    width: .73rem;
    height:.11rem;
    vertical-align: top;
    font-size: .05rem;
}
.searchbox form input:nth-child(2){
    width: .15rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 .05rem .05rem 0;
    background: url(https://css.mafengwo.net/mobile/images/header/btn_search2.png) no-repeat center;
    background-size: 50%;
}
header .login{
    position: absolute;
    right: 0;
    top: 0.06rem;
    width: .17rem;
    height: .11rem;
    font-size: .06rem;
}
header .login a{
    color:#ffa800;
}
/* 头部信息 */
.banner{
    height: .65rem;
    width: 100%;
}
section .bannerbox{
    height: .65rem;
    position: relative;
}
section .bannerbox a {
    display: block;
    width: 100%;
    position: absolute;
}
section .bannerbox a img{
    width: 100%;
    height: 100%;
}
.advert{
    position: absolute;
    left: .02rem;
    bottom:.02rem ;
}
/* banner区域 */
 .guide{
    background: #fff;
}
.nav-li{
    height: .9rem;
    padding-top: .03rem;
    box-sizing: border-box;
}
.nav-list{
    height: .75rem;
    display: flex;
    padding: 0 .01rem;
    flex-wrap: wrap;
}
.nav-list li{
    width: .38rem;
    height: .38rem;
}
.nav-list li a{
    padding-top: .07rem;
    text-align: center;
    box-sizing: border-box;
    display: block;
}
.nav-list li a i{
    width: .19rem;
    display: inline-block;
    height: .19rem;
}
.nav-list li a b{
    font-size: .06rem;
    display:block;
    text-align: center;
    margin-top: .02rem;
}
.nav-list li:nth-child(1) a i{
    background: url(https://css.mafengwo.net/mobile/images/indexv4/i_nav3.png) no-repeat 0 0;
    background-size: .78rem;
}
.nav-list li:nth-child(2) a i{
    background: url(https://css.mafengwo.net/mobile/images/indexv4/i_nav3.png) no-repeat 0 -.19rem;
    background-size: .78rem;
}
.nav-list li:nth-child(3) a i{
    background: url(https://css.mafengwo.net/mobile/images/indexv4/i_nav3.png) no-repeat -.38rem -.19rem;
    background-size: .78rem;
}
.nav-list li:nth-child(4) a i{
    background: url(https://css.mafengwo.net/mobile/images/indexv4/i_nav3.png) no-repeat -.19rem -.19rem;
    background-size: .78rem;  
}
.nav-list li:nth-child(5) a i{
    background: url(https://css.mafengwo.net/mobile/images/indexv4/i_nav3.png) no-repeat -.19rem 0;
    background-size: .78rem;
}
.nav-list li:nth-child(6) a i{
    background: url(https://css.mafengwo.net/mobile/images/indexv4/i_nav3.png) no-repeat -.38rem 0;
    background-size: .78rem;
}
.nav-list li:nth-child(7) a i{
    background: url(https://css.mafengwo.net/mobile/images/indexv4/i_nav3.png) no-repeat -.58rem 0;
    background-size: .78rem;
}
.nav-list li:nth-child(8) a i{
    background: url(https://css.mafengwo.net/mobile/images/indexv4/i_nav3.png) no-repeat -.58rem -.19rem;
    background-size: .78rem;
}
.nav-list li:nth-child(1) a b{
    color: #ff9d00;
}
.nav-list li:nth-child(2) a b{
    color: #feca2b;
}
.nav-list li:nth-child(3) a b{
    color: #42d6ba;
}
.nav-list li:nth-child(4) a b{
    color: #f94a87;
}
.nav-list li:nth-child(5) a b{
    color: #32a2f1;
}
.nav-list li:nth-child(6) a b{
    color: #fd4e4e;
}
.nav-list li:nth-child(7) a b{
    color: #acce0e;
}
.nav-list li:nth-child(8) a b{
    color: #b16;
}
/* 页面中间导航部分 */
.guide .recommend h3{
    text-align: center;
    height: .15rem;
    color: #999;
    line-height: .15rem;
    font-size: .06rem;
     background: #f8f8f8;
}
.guide-list a{
    display: block;
    height: .74rem;
    position: relative;
}
.guide-list a .title{
    height: .25rem;
    padding:.05rem .23rem 0 .06rem;
    box-sizing: border-box;
    position: relative;
    color: #111;
    font-size: .08rem;
}
.guide-list a .info{
    height: .47rem;
    font-size: .06rem;
    padding: .04rem .06rem .06rem .06rem;
    box-sizing: border-box;
    display: flex;
}
.guide-list a .info dt{
    width: .54rem;
    height: .38rem;
}
.guide-list a .info dt img{
    width: 100%;
    height: 100%;
}
.guide-list a .info dd{
    width: .83rem;
    margin:.03rem 0 0  .05rem;
    position: relative;
    color: #999;
}
.guide-list a .info dd .text{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.guide-list a .info dd .extra{
    position: absolute;
    width: .83rem;
    height: .08rem;
    display: flex;
    bottom: 0;
    font-size: .05rem;
    justify-content: space-between;
}
.author{
    display: flex;
}
.author span{
    width: .08rem;
    height: .08rem;
    border-radius: 50%;
    margin-left: .03rem;
}
.author span img{
    width: .08rem;
    height: .08rem;
    border-radius: 50%;
}
.guide-list a .mark{
    position: absolute;
    width: .17rem;
    height: .09rem;
    top: .06rem;
    right: 0;
}
.guide-list a .mark img{
    width: 100%;
    height: 100%;
}
</style>