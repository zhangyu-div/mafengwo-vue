import Vue from "vue";
import VueRouter from "vue-router";
import home from  "./home";
import localdeals from  "./localdeals";
import together from  "./together";
import logins from "./logins";
import sales from "./sales";
Vue.use(VueRouter);
const router =new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/home",
        },
        home,
        localdeals,
        together,
        logins,
        sales,
        {
            path:"/detail/:id",
            component:_=>import("@pages/detail"),
            name:"detail",
            props:true
        },
        {
            path:"/biji/:id",
            component:_=>import("@pages/biji"),
            name:"biji",
            props:true
        },
        {
            path:"/wenda",
            component:_=>import("@pages/wenda"),
            name:"wenda"
        },
        {
            path:"/searchs",
            component:_=>import("@pages/searchs"),
            name:"searchs"
        }
    ]
})
router.beforeEach((to,from,next)=>{
    if(to.path!="/login"&&to.meta.requiredAuth){//requiredAuth 还未设置
        if(localStorage.getItem("token")){
            next();
        }else{
            next({name:"login",params:{to:to.path}})
        }
    }else{
        next();
    }
})
export default router;