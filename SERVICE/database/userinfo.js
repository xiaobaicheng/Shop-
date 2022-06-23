
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userinfoSchema = new Schema({
    name:String,//用户名
    password:String,//密码
    phtoto:{
        type:String,
        default:"/img/1.7a586dee.jpg"
    }
})
module.exports = mongoose.model("userinfo", userinfoSchema)