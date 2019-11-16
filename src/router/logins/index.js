export default{
    path:"/login",
    component:_=>import("@pages/login"),
    name:"login",
    meta:{
        flag:true
    },
    children:[
        {
            path:"/login",
            redirect:"/login/now"
        },
        {
            path:"now",
            component:_=>import("@components/logins/login")
        },
        {
            path:"register",
            component:_=>import("@components/logins/register")
        },
        {
            path:"quick",
            component:_=>import("@components/logins/login-quick")
        }

    ]
}

