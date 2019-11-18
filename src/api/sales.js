import http from "@utils/request";
export const salesnowApi=(id)=>http({
    method:"get",
    url:"http://localhost:3000/salesdata",
    data:{
        id:id
    }
})

export const salessortApi=(id)=>http({
    method:"get",
    url:"http://localhost:3000/salesdata?_sort=moneysole&_order=desc",
    data:{
        id:id
    }
})

export const lhsortApi=(id)=>http({
    method:"get",
    url:"http://localhost:3000/salesdata?_sort=money&_order=asc",
    data:{
        id:id
    }
})

export const hlsortApi=(id)=>http({
    method:"get",
    url:"http://localhost:3000/salesdata?_sort=money&_order=desc",
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
