const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/decgin",{
    //连接数据库时的基本配置项
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("数据库连接成功");
}).catch((err)=>{
console.log("数据库连接失败",err);
})
// const Gooddb = require("../database/detile")
// Gooddb.create(
//     {name:"小米耳机3",price:999,phtoto:"/img/0cc4e8e58d7288cd8dff13b98bdc3ea8.webp",message:"一款不止于降噪的降噪耳机保持旗舰级降噪功能的同时在音质方面也有当仁不让的出色表你只需闭上眼睛，静听好声音.3亿美元。此后乔丹系列球鞋一直在延续，直至最后一代--乔丹23代为止。"},
//     {name:"Note 1",price:4999,phtoto:"/img/5713971c4bb6512743dfd06023080268.webp",message:"  性能强悍的年度旗舰芯高配护眼的 LCD 旗舰屏幕超越预期的充电、续航、品质它，不可错过的 618 重磅新品.3亿美元。此后乔丹系列球鞋一直在延续，直至最后一代--乔丹23代为止。"},
//     {name:"小米9",price:2999,phtoto:"/img/18d2099cb0b05bbd23cb1915dfc9d0d6.webp",message:"超大电量可以连听一周的音乐、持续追剧从日出到日落；从此出门放轻松，再也不必为电量焦虑"},
//     {name:"xiaomi watch S1",price:1999,phtoto:"/img/a8cb283c8d66913c5c7ef19ffac6555b1655083277.jpg",message:"这一次，把对技术和品质的坚持，牢牢把握在手上。Xiaomi Watch S1 以高级腕表打磨抛光的水准，邀请资深腕表磨光师精细打磨中框，无数次的手工磨砺，让中框的每一处细节不仅光彩耀目，也更具匠心情怀"},
//     {name:"Note 1",price:4999,phtoto:"/img/5713971c4bb6512743dfd06023080268.webp",message:"  性能强悍的年度旗舰芯高配护眼的 LCD 旗舰屏幕超越预期的充电、续航、品质它，不可错过的 618 重磅新品.3亿美元。此后乔丹系列球鞋一直在延续，直至最后一代--乔丹23代为止。"},
//     {name:"小米耳机3",price:999,phtoto:"/img/0cc4e8e58d7288cd8dff13b98bdc3ea8.webp",message:"一款不止于降噪的降噪耳机保持旗舰级降噪功能的同时在音质方面也有当仁不让的出色表你只需闭上眼睛，静听好声音.3亿美元。此后乔丹系列球鞋一直在延续，直至最后一代--乔丹23代为止。"},

//     {name:"xiaomi watch S1",price:1999,phtoto:"/img/a8cb283c8d66913c5c7ef19ffac6555b1655083277.jpg",message:"这一次，把对技术和品质的坚持，牢牢把握在手上。Xiaomi Watch S1 以高级腕表打磨抛光的水准，邀请资深腕表磨光师精细打磨中框，无数次的手工磨砺，让中框的每一处细节不仅光彩耀目，也更具匠心情怀"},
//     {name:"小米9",price:2999,phtoto:"/img/18d2099cb0b05bbd23cb1915dfc9d0d6.webp",message:"超大电量可以连听一周的音乐、持续追剧从日出到日落；从此出门放轻松，再也不必为电量焦虑"},
    
// )