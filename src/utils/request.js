import axios from "axios";
import loading from "../lib/loading/index.js"
const server=axios.create({
    timeout:5000,
    // baseUrl:'',公司时会用到
    withCredentials:true
})
// 请求拦截
server.interceptors.request.use((config)=>{
    if(config.method=="get"){
        config.params={...config.data};
    }
    loading.loadingMount();
    return config;
    // config.headers["content-type"]="application/json"//公司 后端
},(err)=>{
    return Promise.reject(err);
})
// 响应拦截
server.interceptors.response.use((res)=>{
    if(res.status==200){ 
        loading.destroyLoading();
        return res.data;
    }
},(err)=>{
    return Promise.reject(err);
})
export default server;
