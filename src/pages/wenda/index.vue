<template>
    <div>
        <header>
            <div class="header">
                <v-touch class="iconfont"
                tag="span"
                @tap="back()"
                >&#xe6bc;</v-touch>
                <span>蜂蜂回答</span>
                <span></span>
            </div>
        </header>
        <div class="title">
            <span>三亚亚龙湾热带公园门票（回归自然+打卡三亚地标景点）</span>
            <span>的<b> 20 </b>个问题</span>
        </div>
        <ul class="list">
            <li>
                <p class="wen">
                    <span>问</span>
                    <span>游览车是往返的吗</span>
                </p>
                <p class="text">是往返的,当时很贵,你付不起</p>
                <p class="all">
                    全部<b>56</b>个问答
                </p>
            </li>
            <li>
                <p class="wen">
                    <span>问</span>
                    <span>作业能不能做完</span>
                </p>
                <p class="text">写了8个静态页面 两个vuex nodejs还没写完 所以综上所述 写不完写了8个静态页面 两个vuex nodejs还没写完 所以综上所述 写不完写了8个静态页面 两个vuex nodejs还没写完 所以综上所述 写不完</p>
                <p class="all">
                    全部<b>56</b>个问答
                </p>
            </li>
            <li>
                <p class="wen">
                    <span>问</span>
                    <span>有女朋友吗</span>
                </p>
                <p class="text">滚</p>
                <p class="all">
                    全部<b>56</b>个问答
                </p>
            </li>
            <li>
                <p class="wen">
                    <span>问</span>
                    <span>有男朋友吗</span>
                </p>
                <p class="text">46个</p>
                <p class="all">
                    全部<b>56</b>个问答
                </p>
            </li>
            <li>
                <p class="wen">
                    <span>问</span>
                    <span>有钱吗</span>
                </p>
                <p class="text">穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷穷</p>
                <p class="all">
                    全部<b>56</b>个问答
                </p>
            </li>
            <li>
                <p class="wen">
                    <span>问</span>
                    <span>留级吗</span>
                </p>
                <p class="text">留</p>
                <p class="all">
                    全部<b>56</b>个问答
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Wenda",
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>
<style lang="scss" scoped>
  body{
      background: #e5e5e5;
  }
  header{
    width: 100%;  
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 2;
  }
  .header{
      width: 100%;
      height: .19rem;
      display: flex;
      align-items: center;
      justify-content:space-around;
      font-size: .08rem;
      border-bottom: 1px solid #e5e5e5;
  }
  header span:first-child{
      font-size: .1rem;
  }
  .title{
      height: .19rem;
      line-height: .19rem;
      font-size: .05rem;
      margin-top: .19rem;
      padding: 0 .04rem;
      box-sizing: border-box;
      display: flex;
  }
  .title span:nth-child(1){
      width: 1.1rem;
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }
  .title span:nth-child(2){
    font-size: .054rem;
}
.title span:nth-child(2) b{
    font-size: .054rem;
    color: #4C97FF;
}
.list{
    padding:0 .04rem;
    box-sizing: border-box;
}
.list li{
    background: #fff;
    width: 100%;
    border-radius: .02rem;
    position: relative;
    padding: .04rem 0 .06rem .04rem ;
    box-sizing: border-box;
    margin-top: .04rem;
}
.list li .wen span:first-child{
    background-color: #FFDB26;
    font-size: .05rem;
    font-weight: 500;
}
.list li .wen span:last-child{
    color: #242629;
    font-size: .06rem;
    font-weight: 800;
}
.list li .text{
    padding-left: .08rem;
    box-sizing: border-box;
    font-size: .06rem;
    margin-top: .03rem;
    line-height: .1rem;
}
.list li .all{
    margin-top: .03rem;
    padding-left: .08rem;
    font-size: .05rem;
    color: #BDBFC2;
}

</style>