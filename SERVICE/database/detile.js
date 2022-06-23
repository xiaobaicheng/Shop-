
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactSchema = new Schema({
    name:String,//商品名
    phtoto:String,//图片路劲
    price:Number,//价格
    message:String,//描述
})
module.exports = mongoose.model("detile", contactSchema)