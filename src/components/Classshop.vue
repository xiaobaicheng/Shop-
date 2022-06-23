<template>
  <header>
    <span>图片</span>
    <span>名字</span>
    <span>数量</span>
    <span>小计</span>
  </header>
  <div class="detile" v-for="item in shopdata" :key="item._id">
    <!-- <input
      type="checkbox"
      @change="changePrice($event, { price: item.price, count: item.count })"
    /> -->
    <div class="imgbox">
      <img :src="baseURL + item.phtoto" alt="" />
    </div>
    <div class="message">
      <p>{{ item.name }}</p>
      <span>{{ item.name }}</span>
      <span class="price">￥{{ item.price }}</span>
    </div>

    <div class="number">
      <button @click="item.count -= (item.count && 1)">-</button>
      X{{ item.count }} <button @click="++item.count">+</button>
    </div>
    <span class="xj">{{item.price*item.count}}</span>
  </div>
  <!--- <div class="tontile">
    全选：<input type="checkbox" @change="chgeteq($event)" />
  </div> -->
  <h1>
    总价：<span>{{ price() }}</span>
  </h1>
</template>

<script>
export default {
  name: "Classshop",
  data() {
    return {
      shopdata: [],
      Totalprice: 0,
      // dhag:false
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    //点击加减
    // add(a,count){
    //   console.log(a,count);
    //   if(a){
    //     count++
    //     this.changePrice()
    //   }
    // },
    //全选
    chgeteq(e) {
      if (e.target.checked) {
      }
    },
    getdata() {
      let obj = JSON.parse(localStorage.getItem("Shop" || "[]"));
      this.shopdata = obj;
      console.log(obj);
    },
    price() {
      let pcie = 0;
      this.shopdata.forEach((item) => {
        pcie += item.price * item.count;
      });
      return pcie;
    },
    changePrice(e, doc) {
      const { price, count } = doc;
      if (e.target.checked) {
        this.Totalprice += price * count;
      } else {
        this.Totalprice = this.Totalprice - price * count;
      }
    },
  },
};
</script>
<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-around;
}
.tontile {
  margin-left: 6%;
}
h1 {
  margin-left: 80%;
  display: flex;
  span {
    color: red;
  }
}
.detile {
  display: flex;
  input {
    margin-left: 5%;
  }
  align-items: center;
  .xj{
    position: absolute;
    right: 10%;
  }
  .number {
    position: absolute;
    display: flex;
    // width: 100px;
    right: 34%;
    color: brown;
    // margin-left: 60%;
    // margin-top: 40px;
  }
  .imgbox {
    height: 100px;
    width: 100px;

    background-color: antiquewhite;
    margin-left: 10%;
    img {
      width: 100%;
    }
  }
  .message {
    display: flex;
    margin-left: 6%;

    flex-direction: column;
    line-height: 20px;
    .price {
      margin-top: 30px;
      color: rgb(137, 13, 13);
    }
  }
}
</style>