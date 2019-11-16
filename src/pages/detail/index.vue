<template>
<div>
    <header class="main-header" >
        <div class="header-fixed">
            <router-link
            tag="div"
            to="/sales"
             class="btn-back iconfont">
                    &#xe6bc;
            </router-link>
            <div class="header-center">
                <span>商品</span>
                <span>评价</span>
                <span>详情</span>
            </div>
            <div class="share-wrap iconfont">
                    &#xe605;
            </div>
        </div>
    </header>
    <!-- 头部 -->
    <main>
        <div id="product">
            <div class="detail-info">
                <div class="active-tag">
                    <img src="https://n1-q.mafengwo.net/s15/M00/3E/BB/CoUBGV3AHNmAX2ICAABAMV1zeV8448.png?imageView2%2F2%2Fw%2F1050%2Fq%2F90" alt="大促">
                </div>
                <!---->
                <div class="img-title">
                    <div class="title-main">
                        <h2 class="title">
                            <span class="title-tag">自营</span>
                            {{detail.title}}
                        </h2>
                        <div class="tags">
                            <span class="tag" 
                            v-for="(item,index) in detail.infolist" :key="index"

                            
                            >{{item}}</span>
                        </div>
                    </div>
                    <div class="detail-headimg-small">
                        <img :src="detail.img" alt="">
                    </div>
                </div>
                <div class="sale-info">
                    <div>
                        <strong>¥</strong>
                        <span class="price">{{detail.pricel}}-{{detail.priceh}}</span>
                        <span class="wen">?</span>
                    </div>
                    <span class="sold">月售{{detail.monthsole}}</span>
                </div>
                <div class="vip">
                    <div class="vip-content">
                        <img src="https://css.mafengwo.net/mobile/images/sales/detail/gold-icon.png" alt="金卡">
                        <span>金卡专享96折，年度累计最高抵扣</span>
                        <span class="money">￥500</span>
                        <span class="open">去开通</span>
                    </div>
                </div>
      
            </div>
            <div class="infos">
                <ul>
                    <li class="infos-one">
                        <span>保障</span>
                        <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAkCAMAAABvyu7iAAAAV1BMVEVHcEz/3zT/4kklJyn/4zn/4Dv/3jPy0i3/4UD/4DX/4Uf/3jj/3TP/2yn/3C7/3zz/4EE0MypGQyumkzGMfjDErDNzaC/MtDZaUy3WuzX11jnmyji3ojUArwFwAAAACnRSTlMAj+j/Ga3L+mw/whA98QAABLpJREFUWMOFV4timzAMbOqsacMj+IHxg///zp1kbIwhrbKNNctyPul0lj4+trh///t8VjFdxOsQXRt9E2MbA8XXT4b8+D4gPqf82gHTq8Y8wPYt5kivAyRAGTej/msgnw3kBdOupdrCXhBNXP9dYTLi9usXpi3RriHaMB229CLBKbfPc0x/ECXIV1PR7g+mG2pi+nlNtOX5vqT9iSmz7C8QEbcLomFKsCG0ROMv2m2l24e4wYVHgU3A3+eKLtJxcr1SR6bRCf2+X07iVWJOYEose8MU0GN2tVDM1Am5plgYd5ECoMu8x0JY+Y01vxsT6AOfZqxFbOglwdwyx+waYameqyghI3hqPNeXEXXYrtOiDdn3XroeWJ6hjJD8jIXpnbyoKqdVSgqplJm8cBz4Gof6WiGUf72OGLrrVtmCur7H0Xp8MmzZtfTQwmZQIvpTs8zHpezqMC1KCDNNEQ8XKvm2BQ04wV5PKxSAFWN6IVY8Hkq4DfPRgFphkVZthYvEQBnKKXKNp2ka5hgzkrmDOmF7d8r7WntD1TFK6EVI5NKsIMq4kUQUzfx6eRPfgloqZQkccTyVWufssjfcdlApFoh3ArYWEmcFrJu3pkGR7Msve3jS7hZS2PzX2EewgnjNPGuNHKE0EPUjO2/yhr1NPYQK8U5SzFRdaaIh2EDGACUJYw+HN50VFxGR65jFi++xVN1hOLbpVwFFTp9OmAhsMDWBEysFqhq5RLoVr7nAVA+8O2bxQruO5Ds0bfpZidchwyuw0adxCsoS7JyMAbC+VBPfGXcr4rPoWrxjEu8Awmgqc2DaeAMEFKTwGoVUijpW0MOQUciVzl50hI4vXt9B6VS3cqURNZe6EwKLZE1D5feNN+zirfPm0DEwBvyx3aP4jabaTReVxefjQbxMbwQFQ91UE229ARrE0TSwJ5KpS5IMU1jBET/t/aKgohzIAw65t8wmXs02RHkTQ0208YZYLG22lFdBhqi4UwGFQ5fsBrbAxNMjuUiOK/coUdvE63J1K6KtNxhr8Q3W6lA76sqYhFOYwtuWDRQOKWMPkRamuoh3Jr5U3Zpp6w2c4XVyLkSkFf9xJg9gotOSxJtmBvrOgkkSqsQ7emU28RJRrm5d0tvpCifxQkurS+lN4mXXrcTb7eIlTMD5Il5tPU1HLF6y8ZGqS1jWXnvDwq5lcB/U4lVpcMjiZR1l8dLFtqJR1yxeHM0QKNHDxaK4U/0wBMePC28o3uwnGgFwWnqExDSLl/lJFm9Er8iZ5pQsXhzWPYDJ4rU8MlCGhgcwzbU3aMthIFcaCalz9tkziRe9kmLhVsEVyFMgjRUUZNREdEmtQk608j/tmK03NHsMrpyEyFShMNJwkrVc03Wm+23ezbenDTx2zmwxjgdse7zY2iv8uDc9I+s2M40zZzfypcbShWXs2wRuMYTnwZ5Q/fhYQ5oBIZU1vh96m7XpmafPemhoVwmi2lW7RL/P2OjOw+i5l/T7PNxX433ZX6a3o8ppV7veJWprqL0hbRPnbe236eiwUIxvV8TigfeL5akFbDa101b6F9PhyHTD/Lh/Hip6QfWXBZFJtrva+wTfyg7+8/We6YnoXzv/W8Tx8XW7Z8j/F1nLfINjuXIAAAAASUVORK5CYII=" alt=""></span>
                        <span>如实描述-入园保证-双倍赔付</span>
                        <span class="iconfont">&#xe603;</span>
                    </li>
                    <li class="infos-two">
                        <span>领券</span>
                        <span>
                            马蜂窝券 | 5元
                            <i></i>
                            <b></b>
                        </span>
                        <span class="iconfont">&#xe603;</span>
                    </li>
                    <li class="infos-three">
                        <span>保障</span>
                        <span>蜂蜜</span>
                        <span>蜂蜜抵100%</span>
                        <span class="iconfont">&#xe603;</span>
                    </li>
                    <li class="infos-four">
                        <span>服务</span>
                        <span>16.00前可订今日</span>
                        <span></span>
                    </li>
                </ul>
            </div>
            <div class="ticket-list">
                <h3>
                    <a v-for="(item,index) in detail.ticket" :key="index">{{item}}</a>
                </h3>
                <div class="ticketinfo" v-for="(item,index) in detail.tickettype" :key="index">
                    <div class="ticketinfo-l">
                        <p>{{item.type}}</p>
                        <p>{{item.info}}</p>
                        <p class="iconfont">预订须知 &#xe603;</p>
                    </div>
                    <div class="ticketinfo-r">
                        <p><i>￥</i><b>{{item.price}}</b>起</p>
                        <p>购买</p>
                    </div>
                </div>
                <div class="loading">
                    展开更多
                </div>
            </div>
        </div>
        <div class="detail">
            <div class="dianping">
                <h3>
                    <span>蜂蜂点评<i>({{detail.pingjia}})</i></span>
                    <span>{{detail.pingfen}}</span>
                </h3>
                <p class="pj">
                    <span v-for="(item,index) in detail.pingjiatype" :key="index">
                          {{item.one}}   {{item.count}}
                    </span>
                </p>
                <div class="text">
                    <p>
                        <span><img src="https://n2-q.mafengwo.net/s12/M00/35/2C/wKgED1uqImOAAxCCAAAeJTVWYJU680.png?imageView2%2F2%2Fw%2F48%2Fh%2F48%2Fq%2F90" alt=""></span>
                        <span>马蜂窝用户</span>
                        <span>3月前</span>
                    </p>
                    <h4>{{detail.pjtext}}</h4>
                </div>

            </div>
            <div class="biji">
                <p>
                    <span>旅行笔记<i>({{detail.lxbj}})</i></span>
                    <router-link
                    tag="span"
                    :to="'/biji/'+detail.id"
                    >查看全部</router-link>
                </p>
                <ul>
                    <li v-for="(item,index) in detail.lxbiimg" :key="index">
                        <img :src="item" alt="">    
                    </li>
                </ul>
            </div>
            <div class="wenda">
                <p>
                    <span>蜂蜂问答<i>({{detail.wenda}})</i></span>
                    <router-link
                    tag="span"
                    to="/wenda"
                    >查看全部</router-link>
                </p>
                <p class="wen" v-for="(item,index) in detail.wenlist" :key="index">
                    <span>问</span>
                    <span>{{item.text}}</span>
                    <span>{{item.count}}个回答</span>
                </p>
            </div>
            <div class="lastimg">
                <span>产品详情</span>
                <span>购买须知</span>
            </div>
            <div class="productimg"> 
                <img :src="detail.bigimg" alt="">
            </div>
        </div>
    </main>
    <footer>
        <div class="kefu iconfont">&#xe613; 客服</div>
        <div class="sc iconfont" >&#xe65e; 收藏</div>
        <div class="choose">选择票型</div>
    </footer>
</div>
</template>
<script>
import {salesdetailApi} from "@api/sales";
export default {
    name:"Detail",
    props:["id"],
    data(){
        return{
            detail:[],
        }
    },
    async created(){
        let data=await salesdetailApi(this.id);
        this.detail=data[0];
        console.log(this.detail);
    }
}
</script>
<style lang="scss">
body{
    background: #f6f7f9;
}
#product{
    position: relative;
}
.main-header{
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0;
}
.header-fixed{
    width: 100%;
    position: relative;
    height: .19rem;
    display: flex;
    justify-content:space-around;
    padding: 0 .05rem;
    background: #fff;
}
.btn-back{
    height: 100%;
    left: .03rem;
    position: absolute;
    top: 0;
    width: .1rem;
    text-align: center;
    line-height: .19rem;
    font-size: .1rem;
}
.header-center{
    width: .83rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
.header-center span{
    margin: 0 .04rem;
    font-size:.07rem;
    line-height:.19rem;
}
.share-wrap{
    height: 100%;
    position: absolute;
    right:.03rem;
    left: 1.29rem;
    top: 0;
    text-align: center;
    line-height: .19rem;
    font-size: .1rem;
}
/* 头部 */
.detail-info{
    padding: .05rem .03rem;
    text-align: center;
    background: #fff;
}
.active-tag{
    height: .25rem;
    margin: 0 -0.05rem 0.05rem -0.05rem;
}
.active-tag img{
    max-width: 100%;
}
.img-title{
    display: flex;
}
.title-main{
    height:.3rem;
    width: 1.21rem;
}
.title-main .title{
    font-weight: bold;
    font-size: .07rem;
}
.title-main .title span{
    width: .12rem;
    height: .07rem;
    border:1px solid #4d97ff;
    color: #4d97ff;
    font-size: .05rem;
    position: relative;
    top: -0.01rem;
    text-align: center;
    line-height:.07rem;
    display: inline-block;
}
.detail-headimg-small{
    height: .25rem;
    width: .25rem;
    border-radius: .02rem;
    margin: 0 .01rem;
}
.detail-headimg-small img{
    width: 100%;
    height: 100%;
    border-radius: .02rem;
}
.tags{
    margin-top: .04rem;
    font-size: .04rem;
    text-align: left;
    overflow: hidden;
    height:.07rem;
    padding-left: .04rem;
    box-sizing: border-box;
}
.detail-info .tags .tag{
    background: #f6f7f9;
    border-radius: .02rem;
    color: #242629!important;
    display: inline-block;
    font-size: .04rem;
    margin:0 .02rem .02rem 0;
    height: .07rem;
    padding: 0 .02rem;
}
.sale-info{
    margin-top: .04rem;
    height: .08rem;
    /* display: flex; */
}
.sale-info div{
    width: .5rem;
    color: #ff5b4d;
    font-size: .08rem;
    float: left;
    font-weight: 500;
    position: absolute;
}
.sale-info div .wen{
    border-radius: 50%;
    width: .05rem;
    height: .05rem;
    color: #f6f7f9;
    display: inline-block;
    text-align: center;
    font-size: .03rem;
    position: absolute;
    right: 0;
    top: .02rem;
    background: gray;
}
.sale-info div strong{
    font-size: .05rem;
}
.sale-info .sold{
   float: right;
   font-size: .05rem;
   margin-top: .02rem;
}
/* 60-3800 */
.vip{
    margin-top: .05rem;
}
.detail-info .vip .vip-content {
    background: #fffbef;
    border-radius: .02rem;
    font-size:.05rem;
    display: flex;
    box-sizing: border-box;
    line-height: .15rem;
    justify-content: space-between;
    align-items: center;
}
.vip .vip-content img{
    height: .07rem;
    width: .18rem;
    display: inline-block;
}
.vip .vip-content .open{
    color: #b37012;
}
.vip .vip-content .money{
    margin-left: -15px;
    font-weight: bolder;
}
/* 头部 */
main{
    background: #f6f7f9;
    margin-top: .16rem;
}
.infos{
    height: .7rem;
    padding: .05rem;
    box-sizing: border-box;
    font-size: .05rem;
    background: #fff;
    margin-top: .04rem;
}
.infos li{
    height: .09rem;
    margin-top: .08rem;
}
.infos li span:nth-child(2){
    margin:0  .04rem ;
}
.infos li span:last-child{
    float: right;
    margin-right:0.04rem;
}
.infos .infos-one{
    height: .07rem;
    font-size: .05rem;
}
.infos .infos-one span:nth-child(2){
    height: .07rem;
    width: .24rem;
    display: inline-block;
}
.infos .infos-one span:nth-child(2) img{
    width: 100%;
}
.infos-two span:nth-child(2){
    display: inline-block;
    width: .34rem;
    background: #ff4d97;
    position: relative;
}
.infos-two span:nth-child(2) i{
    background: #fff;
    width: .02rem;
    height: .02rem;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: .03rem;
}
.infos-two span:nth-child(2) b{
    background: #fff;
    width: .02rem;
    height: .02rem;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: .03rem; 
}
.infos-three span:nth-child(2){
    width: .13rem;
    background: pink;
    color:#ff4a26;
    display: inline-block;
    text-align: center;
}
/* 成人票上面 */
.ticket-list{
 background: #fff;
 margin-top: .04rem;   
}
.ticket-list h3{
    height: .23rem;
    overflow: hidden;
    display: flex;
}
.ticket-list h3 a{
    height: .13rem;
    display: block;
    font-size: .05rem;
    width: .26rem;
    text-align: center;
    line-height: .13rem;
    background-color: #ffdb26;
    color: #242629;
    font-weight: 700;
    border-radius: .02rem;
    margin: .03rem 0 0 .05rem
}
.ticketinfo{
    padding: .05rem 0;
    box-sizing: border-box;
    font-size: .06rem;
    display: flex;
    border-bottom: 1px gainsboro solid;
    justify-content: space-around;
}
.ticketinfo-l{
    width: .83rem;
    margin-left: -0.18rem;
}
.ticketinfo-l p{
    line-height: .09rem;
}
.ticketinfo-l p:nth-child(1){
    color:#242629;
    font-weight:700;
}
.ticketinfo-l p:nth-child(2){
    color: rgb(0, 199, 217);
    font-size: .05rem;
}
.ticketinfo-l p:nth-child(3){
    color: #717376;
    font-size: .05rem;
}
.ticketinfo-r{
    width: .21rem;
    margin-left: -.2rem;
}
.ticketinfo-r p:nth-child(1){
    font-size: .04rem;
    text-align: center;
    padding-left: .03rem;
    box-sizing: border-box;
}
.ticketinfo-r p:nth-child(1) i{
    color: #ff4a26;
}
.ticketinfo-r p:nth-child(1) b{
    color: #ff4a26;
    font-size: .06rem;
    font-weight: bold;
}
.ticketinfo-r p:nth-child(2){
    font-size: .06rem;
    height: .13rem;
    width: .31rem;
    border-radius: .05rem;
    background: linear-gradient(135deg,#ffe24c,#ffdb26);
    text-align: center;
    line-height:.13rem;
}
/* 票 */
footer{
    margin: 0;
    padding: 0;
    height: .23rem;
    width: 100%;
    position: fixed;
    background: #fff;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
}
footer div{
    text-align: center;
    font-size: .05rem;
    line-height: .23rem;
}
footer .sc{
    margin:0 .04rem;
}
footer .kefu{
    margin-left:.04rem;
}
footer .choose{
    width: .9rem;
    height: .17rem;
    background: linear-gradient(135deg,#ffe24c,#ffdb26);
    line-height: .17rem;
    font-size: .07rem;
    border-radius: .08rem;
}
.loading{
    height: .18rem;
    font-size: .07rem;
    color: #4d97ff;
    line-height: .18rem;
    text-align: center;
}
.detail{
    margin-top: .04rem;
    height: 1.57rem;
    padding: .05rem;
    box-sizing: border-box;
    background: #fff;
}
.dianping{
    padding-bottom: .06rem;
    border-bottom: 1px solid snow;
}
.dianping h3{
    display: flex;
    justify-content: space-between;
}
.dianping h3 span:nth-child(1){
    color: #242629;
    font-size: .06rem;
}
.dianping h3 span:nth-child(1) i{
    font-weight: 800;
}
.dianping h3 span:nth-child(2){
    color: rgb(76, 151, 255);
    font-size: .06rem;
}
.dianping .pj{
    margin-top: .05rem;
}
.dianping .pj span{
    width: .36rem;
    height: .13rem;
    background: #f6f7f9;
    display: inline-block;
    font-size: .05rem;
    text-align: center;
    line-height: .13rem;
    border-radius: .02rem;
}
.text{
    margin-top: .05rem ;
    font-size: .05rem;
}
.text p span:nth-child(1){
    height: .08rem;
    display: inline-block;
    width: .08rem;
    border-radius: 50%;
    margin-right: .01rem;
}
.text p span:nth-child(1) img{
    width: 100%;
    border-radius: 50%;
    height: 100%;
    vertical-align: middle;
}
.text p span:nth-child(3){
    float: right;
} 
.text  h4{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    content: "viewport-units-buggyfill; padding-top: 2.133vw; font-size: 3.2vw; line-height: 4.267vw";
    display: -webkit-box;
    margin-top: .04rem;
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: pre-wrap;
}
/* 下面是旅行笔记 */
.biji{
    margin-top: .05rem;
}
.biji p{
    display: flex;
    font-size: .055rem;
    justify-content: space-between;
}
.biji p span:nth-child(1) i{
    font-weight: 800;
    color: #242629;
}
.biji p span:nth-child(2){
    color: rgb(76, 151, 255);
}
.biji ul{
    margin-top: .05rem;
    border-radius: .03rem;
    display: flex;
}
.biji ul li{
    height: .27rem;
    width: .35rem;
    margin-right: .01rem;
}
.biji ul li:first-child{
    border-radius:.03rem 0 0 .03rem;
}
.biji ul li:first-child img{
    border-radius:.03rem 0 0 .03rem;
}
.biji ul li:last-child{
    border-radius: 0 .03rem .03rem 0;
}
.biji ul li:last-child img{
    border-radius: 0 .03rem .03rem 0;
}
.biji ul li img{
    width: 100%;
    height: 100%;
}
/* 问答 */
.wenda{
    margin-top: .05rem;
}
.wenda p{
    display: flex;
    font-size: .055rem;
    justify-content: space-between;
    margin: .04rem 0;
}
.wenda p span:nth-child(1) i{
    font-weight: 800;
    color: #242629;
}
.wenda p span:nth-child(2){
    color: rgb(76, 151, 255);
}
.wenda .wen {
    display: block;
}
.wenda .wen span:first-child{
    background: #ffdb26;
    margin-right: .06rem;
}
.wenda .wen span:nth-child(2){
    color: #242629;
}
.wenda .wen span:nth-child(3){
    float: right;
}
.lastimg{
    display: flex;
    height: .23rem;
    width: 100%;
    font-size: .06rem;
    background: #fff;
    margin-top: .04rem;
    justify-content: space-around;
}
.lastimg{
    text-align: center;
    line-height:.23rem;
}
.productimg{
    width: 100%;
}
.productimg img{
    width: 100%;
}


</style>




