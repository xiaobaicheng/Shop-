const express =require("express");


const router=express.Router();

router.use("/home",require("./home/home.js"))
//注册路由
router.use("/login",require("./login/login.js"))
router.use("/reglogin",require("./reglogin/reglogin.js"))



module.exports= router