import LoadingView from "./index.vue";
// console.log(LoadingView);
import Vue from 'vue';
class JsLoading{
    constructor(){
        let LoadingFn=Vue.extend(LoadingView); 
        this.loadingVm=new LoadingFn({
            el:document.createElement("div")
        })
    }
    loadingMount(){
        // console.log(this.loadingVm.$mount().$el)
        document.body.appendChild(this.loadingVm.$mount().$el);
    }
    destroyLoading(){
        document.body.removeChild(this.loadingVm.$mount().$el);
    }
}
export default new JsLoading();
