const express = require("express");
const router = express.Router();
const detile = require("../../database/detile")

router.get("/", async (req,res) =>{
    let setileDb = await detile.find()
    res.send({
        code:200,
        message:"首页数据获取成功",
        data:setileDb
    })
})
router.post("/findhome", async (req,res)=>{
    const {id} = req.body;
    let detadoc= await detile.findById({
        _id:id
    })
    res.send({
        code:200,
        message:"详情数据获取成功",
        data:detadoc
    })
})
module.exports = router
