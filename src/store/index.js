import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let state={
    account:"",
    pwd:"",
    loginaccount:"",
    loginpwd:""
} 

let actions={
    handleactions({commit},params){
        commit("handlemutations",params);
    },
    handleloginaction({commit},params){
        commit("handlelogin",params);
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
    }
}






const store=new Vuex.Store({
    state,
    actions,
    mutations
})

export default store;