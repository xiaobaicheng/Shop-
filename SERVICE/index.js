const express = require("express")
const app =express();
app.listen(4001,()=>{
    console.log("开始监听4001端口");
})
//配置数据库
require("./middleware/mongoose")
app.use(require("./middleware/cors"))//允许跨域

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./public"))//配置静态资源
//设置路由监听
app.use("/",require("./router/index"));
