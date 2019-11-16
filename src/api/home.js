import http from "@utils/request";

export const homenowApi=(id)=>http({
    method:"get",
    url:"http://localhost:3000/data",
    data:{
        id:id
    }
    // tiji=fjdsliffsdfsdffdsf
})
