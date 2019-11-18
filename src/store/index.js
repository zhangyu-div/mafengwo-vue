import Vue from "vue";
import Vuex from "vuex";
// import sales from "./sales";

import {salesnowApi,salessortApi,lhsortApi,hlsortApi} from "@api/sales";
Vue.use(Vuex);

let state={
    account:"",
    pwd:"",
    loginaccount:"",
    loginpwd:"",
    normallist:JSON.parse(sessionStorage.getItem("salesnormal"))||[],
} 
// this.$store.dispatch("handlesalessort");
let actions={
    handleactions({commit},params){
        commit("handlemutations",params);
    },
    handleloginaction({commit},params){
        commit("handlelogin",params);
    },
    async handlesalesnormal({commit}){
        let data= await salesnowApi();
        // console.log(data);
        commit("salesnormal",data);
    },
    async handlesalessort({commit}){
        let data= await salessortApi();
        // console.log(data);
        commit("salessort",data);
    },
    async handlelhsort({commit}){
        let data= await lhsortApi();
        // console.log(data);
        commit("lhsort",data);
    },
    async handlehlsort({commit}){
        let data= await hlsortApi();
        // console.log(data);
        commit("hlsort",data);
    },


}
let mutations={
    handlemutations(state,params){
        if(params.a.type=="zhanghao"){
            state.account=params.a.e.target.value;
        }else{
            state.pwd=params.a.e.target.value;
        }
    },
    handlelogin(state,params){
        if(params.type=="zhanghaos"){
            state.loginaccount=params.e.target.value;
        }else{
            state.loginpwd=params.e.target.value;
        }
    },
    salesnormal(state,data){
        this.state.normallist=data;
        sessionStorage.setItem("salesnormal",JSON.stringify(data));
    },
    salessort(state,data){
        // console.log(data);
        this.state.normallist.length=0;
        this.state.normallist=data;
        // console.log(this)
    },
    lhsort(state,data){
        this.state.normallist.length=0;
        this.state.normallist=data;
    },
    hlsort(state,data){
        this.state.normallist.length=0;
        this.state.normallist=data;
    },

}

const store=new Vuex.Store({
    state,
    actions,
    mutations,
})

export default store;