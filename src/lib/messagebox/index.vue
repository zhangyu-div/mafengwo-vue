<template>
    <div class="messagebox">
        <div class="title">
            <div>{{title}}</div>
            <v-touch
            tag="div"
            @tap="handelClose()"
            >{{del}}</v-touch>
        </div>
        <div class="main"> 
            {{content}}
        </div>
        <div class="foot">
            <v-touch
            tag="div"
            @tap="handelOk()"
            >确认</v-touch>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.messagebox{
    width: 1.01rem;
    min-height: .66rem;
    box-shadow: 1px 1px 50px rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -.5rem;
    z-index: 10000;
    background: #fff;
    .title{
        width: 100%;
        min-height: .17rem;
        line-height: .17rem;
        border-bottom: 1px solid #eee;
        padding: 0 .06rem;
        font-size:.06rem;
        color: #333;
        overflow: hidden;
        background-color: #F8F8F8;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        border-radius: 2px 2px 0 0;
    }
    .main{
        height: .25rem;
        display: flex;
        justify-content:center;
        align-items: center;
        font-size: .06rem;
    }
    .foot{
        height: .24rem;
        div{
            margin: 0 auto;
            height: .13rem;
            width: .37rem;
            background: brown;
            color:#fff;
            font-size: .06rem;
            line-height: .13rem;
            text-align: center;
        }
    }
}
</style>