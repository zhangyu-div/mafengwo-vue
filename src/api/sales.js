import http from "@utils/request";
export const salesnowApi=(id)=>http({
    method:"get",
    url:"http://localhost:3000/salesdata",
    data:{
        id:id
    }
})

export const salesdetailApi=(id)=>http({
    method:"get",
    url:" http://localhost:3000/salesdetail",
    data:{
        id
    }
})

export const bijiApi=(id)=>http({
    method:"get",
    url:" http://localhost:3000/biji",
    data:{
        id
    }
})
