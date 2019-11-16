const Mock = require("mockjs");
const url =require("url");
const data = Mock.mock({
    "data|20": [
        {
            "id|+1": 1,
            "username": "@cname",
            "tel": /^1(3|5|7|8|9)\d{9}$/,
            "urlPic": "@image()",
            "address": "@country(true)",
            "time": "@now()",
            "text": "@cparagraph()"
        }
    ]
})


Mock.mock(/\/users\/list/, "get", (options) => {
    let { page, limit } = url.parse(options.url, true).query;
    console.log({ page, limit })
    var obj = {
        code: 200,
        errMsg: "",
        data: {
            list: []
        }
    }
    for (var i = (page - 1) * limit; i<Math.min(data.data.length, page * limit); i++){
    obj.data.list.push(data.data[i]);
}
return obj;
})
