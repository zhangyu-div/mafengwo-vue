<template>
    <div class="login">
            <section class="signup">
        <a href="" class="logo"></a>
        <ul class="nav-tab">
            <router-link 
            tag="li" 
            to="/login/now"
            class="common">
                <a href="">普通登录</a>
            </router-link>

            <router-link 
            class="token" 
            tag="li"
            to="/login/quick"
            >    
                <a @click="toggle()">短信验证码登录</a>
            </router-link>
        </ul>
        <form action="">
            <router-view>

            </router-view>
            <div class="forget">
                <a href="">忘记密码？</a>
            </div>
            <div class="btns">
                <router-link to="/login/now"
                 tag="button" 
                 class="btn" 
                 type="submit" 
                 ref="login"
                 >
                 <div @click="logins()"
                 >登录</div></router-link>


                <router-link
                 tag="button"
                 class="btn" 
                 ref="regist"
                 to="/login/register"
                type="button"><div @click="regist()">快速注册</div> </router-link>
            </div>
        </form>
        <!-- 登录注册按钮 -->

        
        <div class="connect">
            <div class="hd">
                <span>使用第三方帐号登录</span>
            </div>
            <ul class="bd">
                <li>
                    <a href="http://passport.mafengwo.cn/weibo">
                        <i class="weibo"></i>
                        <br>新浪微博
                    </a>
                </li>
                <li>
                    <a href="http://passport.mafengwo.cn/qq">
                        <i class="qq"></i>
                        <br>QQ登录
                    </a>
                </li>
            </ul>
        </div>
    </section>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{

        }
    },
    name:"login",
    methods:{
        toggle(){
            console.log( this.$refs.login.$el);
           this.$refs.login.$el.style.backgroundColor="#ffba33";
           this.$refs.login.$el.style.color="#fff";
        },
        regist(){
           this.$refs.login.$el.style.backgroundColor="#fff";
           this.$refs.login.$el.style.color="#ffba33";
            let zhanghao=this.$store.state.account;
            let pwd=this.$store.state.pwd;
            axios({
            method:"get",
            url:' http://localhost:3000/registerlist?account='+zhanghao,
            }).then((res)=>{
              if(!zhanghao||!pwd){
                  alert("还没填完呢你注册个鬼阿")
              }else{
                if(res.data.length==0){
                    axios({
                    method:"post",
                    url:" http://localhost:3000/registerlist",
                    data:{
                        account:this.$store.state.account,
                        passward:this.$store.state.pwd,
                    }
                    })
                    alert("注册成功,快去登录")
                }else{
                    alert("用户名重复,再想一个好听点的吧")
                }
              }
            })
            

        },
        logins(){
           this.$refs.login.$el.style.backgroundColor="#ffba33";
           this.$refs.login.$el.style.color="#fff";
            let zhanghaos=this.$store.state.loginaccount;
            let pwds=this.$store.state.loginpwd;
            if(!zhanghaos||!pwds){
                alert("没填完呢就想登录想啥呢")
            }else{
                axios({
                    method:"get",
                    url:'http://localhost:3000/registerlist?account='+zhanghaos,
                }).then((res)=>{
                    let mima=res.data[0].passward;
                    if(res.data.length!=0&&mima==pwds){
                        alert("登录成功")
                    }else if(res.data.length=0){
                        alert("此账号未注册")
                    }else if(mima){
                        alert("密码输入错误")
                    }
                })
            }
        }  
    },
}
</script>
<style lang="scss" >
body{
    font-family: Arial,Helvetica,"迷你简准圆",sans-serif;
}
.signup{
    padding: 0 .04rem;
}
.signup .logo{
    width: .42rem;
    height: .13rem;
    display: block;
    margin: .08rem auto;
    background: url(https://css.mafengwo.net/mobile/images/header/logo200.png) no-repeat;
    background-size: 100px;
}
.nav-tab{
    height: .3rem;
    padding-bottom: .13rem;
    box-sizing: border-box;
    display: flex;
    width: 100%;
}
.nav-tab li{
    width: .74rem;
}
.nav-tab li a{
    display: block;
    line-height: .17rem;
    border-top: 2px solid #dadada;
    color: #999;
    text-align: center;
    font-size: .07rem;
    background-color: #fafafa;
}
.nav-tab .router-link-active a{
    border-top: 2px solid #ffba33;
    background-color:#fff;
    color: #ffba33;
} 
/* 头部 */
.forms{
    border-radius: .02rem;
    border: 1px solid #dadada;
}
.forms li{
    border-bottom: 1px solid #dadada;
    position: relative; 
}
.forms li .input{
    height: .18rem;
    background: 0;
    border: 0;
    font-size: .06rem;
    line-height: .18rem;
    width: 100%;
    text-indent: .05rem;
    color: red;
}
.forms li .code{
    height: .17rem;
    width: .5rem;
    position: absolute;
    bottom: .01rem;
    right: .04rem;
}
.forms li .code img{
    vertical-align: middle;
    height: 100%;
    width: 100%;
}
.getcode{
    position: absolute;
    bottom: .02rem;
    right: .02rem;
}
.getcode a{
    width: .46rem;
    height: .14rem;
    text-align: center;
    line-height:.14rem;
    display: block;
    border-radius: .02rem;
    background-color: #bbb8b5;
    font-size: .05rem;
    color: #fff;
    white-space: nowrap;
}
/* 忘记密码上面 */
.forget{
    height: .06rem;
}
.forget a{
    display: block;
    text-align: right;
    color: #999;
    font-size: .05rem;
}
.btns{
    height: .42rem;
    padding-top: .04rem;
    box-sizing: border-box;
}
.btns .btn{
    display: block;
    margin: 10px 0;
    width: 100%;
    font-size: .07rem;
    line-height: .14rem;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ffba33;
    color: #ffba33;
    border-radius: .02rem;
}
.btns .router-link-active{
    background-color: #ffba33;
    border: 1px solid #d8b165;
    color: #fff;
}
/*  登录注册按钮  */
.connect{
    margin-top: .17rem;
    padding-bottom: .08rem;
    box-sizing: border-box;
}
.connect .hd {
    border-top: 1px solid #d8d8d8;
    height: .1rem;
    width: 100%;
    position: relative;
}
.connect .hd span {
    font-size: .05rem;
    color: #CCC;
    background-color: #fff;
    padding: 0 .02rem;
    top: -0.03rem;
    left: 50%;
    margin-left: -0.28rem;
    position: absolute;
}


.connect .bd {
    width: 100%;
    display: table;
}
.connect .bd li {
    display: table-cell;
    width: 33%;
}
.connect .bd a {
    display: block;
    margin: 0 .06rem;
    border: 1px solid #e6e5e5;
    background-color: #f3f3f3;
    text-align: center;
    color: #666;
    font-size: .06rem;
    padding-bottom: .03rem;
    border-radius: .02rem;
}
.connect .bd i {
    width: 40px;
    height: 38px;
    display: inline-block;

}
.connect .bd .weibo{
    background: url(https://css.mafengwo.net/mobile/images/connect_ico.png) no-repeat 5px 10px;
    background-size: 130px 30px;
}
.connect .bd .qq{
    background: url(https://css.mafengwo.net/mobile/images/connect_ico.png) no-repeat -43px 10px;
    background-size: 130px 30px;
}
</style>