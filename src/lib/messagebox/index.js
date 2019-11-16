import MessageBoxView from "./index.vue"; 
import Vue from "vue";


export default(()=>{
    let defaultVal={
        title:'信息',
        content:'考试不百度',
        del:'X',
        ok:function(){}

    }
    let MessageboxFn=Vue.extend(MessageBoxView);
    return (options)=>{
        for(var key in options){
            defaultVal[key]=options[key];
        }
        let messageBoxVm=new MessageboxFn({
            el:document.createElement("div"),
            data:{
                title:defaultVal.title,
                content:defaultVal.content,
                del:defaultVal.del
            },
            methods:{
                handelOk(){
                    document.body.removeChild(messageBoxVm.$mount().$el),
                    defaultVal.ok&&defaultVal.ok()

                },
                handelClose(){
                    document.body.removeChild(messageBoxVm.$mount().$el)
                }
            }
        })

        document.body.appendChild(messageBoxVm.$mount().$el)
    }


})()
// export default (()=>{
//     let defaultVal={
//         title:"信息",
//         content:"上弹出",
//         del:"X",
//         handelOk:function(){}
//     }
//     let MessageBoxFn=Vue.extend(MessageBoxView);
//     return (options)=>{
//         for(var key in options){
//             defaultVal[key]=options[key];
//         } 
//         let messageBoxVm=new MessageboxFn({
//             el:document.createElement("div"),
//             data:{
//                 title:defaultVal.title,
//                 content:defaultVal.content,
//             }
//         })
//         document.body.appendChild(messageBoxVm.$mount().$el);
//     } 
// })()