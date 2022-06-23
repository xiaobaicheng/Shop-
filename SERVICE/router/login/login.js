const express = require("express");
const router = express.Router();
const userDB = require("../../database/userinfo");//userinfo表的操作对象

router.post('/',async (req,res)=>{
    let {name,password} = req.body
    let userDec = await userDB.findOne({ name });
    if(userDec){
        //存在
        res.send({
            code: 2,
            message: "用户已存在"
        })
    }else{
        //不存在添加
        await userDB.create({name,password});
        res.send({
            code:200,
            message:"注册成功"
        })
    }
})
module.exports = router