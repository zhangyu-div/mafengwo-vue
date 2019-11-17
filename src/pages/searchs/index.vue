<template>
    <div>
        <div class="search">
            <a href="http://localhost:8080/#/home">取消</a>
            <!-- <router-link></router-link> -->
            <form action="">
                <input type="text" placeholder="搜索目的地/攻略/游记/问答" v-model="value">
            </form>
        </div>
        <div>
            <div class="guide-list">
                <a href="" v-for="(item,index) in list" :key="index">
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
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Searchs",
    data(){
        return{
            value:"",
            list:[],
        }
    },
    watch:{
        value(newVal){
            axios({
                method:"get",
                url:'http://localhost:3000/data?q='+newVal,
            }).then((res)=>{
                this.list=res.data;
                console.log(this.list[0])
            })
        }
    }

}
</script>
<style lang="scss" scoped>
    .search{
        height: .17rem;
        padding:.02rem .03rem ;
        position: relative;
        a{
            font-size: .06rem;
            position: absolute;
            right: .03rem;
            top: .03rem;
            width:.15rem;
            height: .13rem;
            text-align: center;
            line-height:.13rem;
            color: #f39c11;
        }
        form{
            width: 1.35rem;
            margin-right: .15rem;
            box-sizing: border-box;
            padding-left: .13rem;
            border-radius: .03rem;
            background:#ececec  url(https://css.mafengwo.net/mobile/images/hotel_sprite4.png) -.24rem .04rem no-repeat;
            background-size: 1rem;
            input{
                
                height: .13rem;
                padding: .03rem 0;
                line-height: .06rem;
                color: #666;
                width: 100%;
                font-size: .06rem;
                box-sizing: border-box;
                background: #ececec;
            }
        }

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