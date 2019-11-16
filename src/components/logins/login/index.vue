<template>
      <ul class="forms">
        <li>
            <input type="text" class="input" placeholder="您的账号" :value="zhanghaos" @input="handlechange({type:'zhanghaos',e:$event})">
        </li>
        <li>
            <input type="password" class="input" placeholder="您的密码"  :value="pwds"  @input="handlechange({type:'pwds',e:$event})" >
        </li>
    </ul>
</template>
<script>
export default {
    name:"logins",
    data(){
        return{
            zhanghaos:"",
            pwds:""
        }
    },
    methods:{
        handlechange(x){
            this.$store.dispatch("handleloginaction",x);
        }
    }
}
</script>