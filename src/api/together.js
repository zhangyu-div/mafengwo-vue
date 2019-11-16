import http from "@utils/request";
export const togethernowApi=(id)=>http({
    method:"get",
    url:" http://localhost:3000/togetherdata",
    data:{
        id:id
    }
})
