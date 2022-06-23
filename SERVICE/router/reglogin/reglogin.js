const express = require("express");
const router = express.Router();
const userDB = require("../../database/userinfo");//userinfo表的操作对象
router.post('/', async (req, res) => {
    let { name, password } = req.body;
    let userDoc = await userDB.findOne({ name })
    if (userDoc === null) {
        res.send({
            code: 2,
            message: "用户不存在，请先注册"
        });
        return;//return相当于返回上面让用户重新登录
    } else {
        if (userDoc.password === password) {
            res.send({
                code: 200,
                message: "登录成功",
                data: userDoc//给前端用户数据
            });
        } else {
            res.send({
                code: 2,
                message: "密码不正确"
            });
        }

    }
})
module.exports = router