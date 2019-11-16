<template>
      <ul class="forms">
        <li>
            <input type="text" class="input" placeholder="您的账号" :value="zhanghao" @input="handleInput({type:'zhanghao',e:$event})">
        </li>
        <li>
            <input type="text" class="input" placeholder="您的密码" :value="pwd" @input="handleInput({type:'pwd',e:$event})">
        </li>
      </ul>
</template>
<script>

export default{
  name:"register",
  data(){
    return{
        zhanghao:"",
        pwd:""
    }
  },
  methods:{
    handleInput(a,b){
      // console.log(a,b);
      this.$store.dispatch("handleactions",{a,b})
    }
  }
    
}
</script>
<style lang="scss">
    
</style>