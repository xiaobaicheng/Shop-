<template>
  <div class="nav">
    <div class="imgbox">
      <img
        src="http://static.shihuocdn.cn/admin/files/20210301/f545ff33a4c2fc639a11a22388e0201d.png"
        alt=""
      />
    </div>
  </div>
  <h1>商品正品保障</h1>
  <div class="qualitygoods">
    <div class="qualbox">
      <van-icon name="shopping-cart" size="40" />
      <p>商前严审商家</p>
      <span>严查商家资质，签约认证，已合作商家 10000+</span>
    </div>
    <div class="qualbox">
      <van-icon name="shopping-cart" size="40" />

      <p>商前严审商家</p>
      <span>严查商家资质，签约认证，已合作商家 10000+</span>
    </div>
    <div class="qualbox">
      <van-icon name="shopping-cart" size="40" />

      <p>商前严审商家</p>
      <span>严查商家资质，签约认证，已合作商家 10000+</span>
    </div>
  </div>
  <h1>商品品类齐全</h1>
  <div class="shophead">
    <span
      :style="{
        borderBottom: isswitch ? '4px black solid' : '4px white solid',
      }"
      @click="swith(0)"
      >鞋类</span
    >
    <span
      :style="{
        borderBottom: isswitch1 ? '4px black solid' : '4px white solid',
      }"
      @click="swith(1)"
      >服饰</span
    >
    <span
      :style="{
        borderBottom: isswitch2 ? '4px black solid' : '4px white solid',
      }"
      @click="swith(2)"
      >数码</span
    >
    <span
      :style="{
        borderBottom: isswitch3 ? '4px black solid' : '4px white solid',
      }"
      @click="swith(3)"
      >美妆</span
    >
    <span
      :style="{
        borderBottom: isswitch4 ? '4px black solid' : '4px white solid',
      }"
      @click="swith(4)"
      >箱包</span
    >
  </div>
  <div class="content">
    <div class="coone" v-for="item in shopdata" :key="item._id" @click="godetile(item._id)">
      <div class="shoppingbox">
        <img :src="baseURL + item.phtoto" alt="">
      </div>
      <p>{{item.name}}</p>
      <span>￥{{item.price}}</span>
    </div>
    <!-- <div class="coone">
      <div class="shoppingbox">
        <img src="" alt="">
      </div>
      <p>NIKE Air Force 1</p>
      <span>￥277</span>
    </div>
    <div class="coone">
      <div class="shoppingbox">
        <img src="" alt="">
      </div>
      <p>NIKE Air Force 1</p>
      <span>￥277</span>
    </div>
    <div class="coone">
      <div class="shoppingbox">
        <img src="" alt="">
      </div>
      <p>NIKE Air Force 1</p>
      <span>￥277</span>
    </div>
    <div class="coone">
      <div class="shoppingbox">
        <img src="" alt="">
      </div>
      <p>NIKE Air Force 1</p>
      <span>￥277</span>
    </div>
    <div class="coone">
      <div class="shoppingbox">
        <img src="" alt="">
      </div>
      <p>NIKE Air Force 1</p>
      <span>￥277</span>
    </div>
    <div class="coone">
      <div class="shoppingbox">
        <img src="" alt="">
      </div>
      <p>NIKE Air Force 1</p>
      <span>￥277</span>
    </div>
    <div class="coone">
      <div class="shoppingbox">
        <img src="" alt="">
      </div>
      <p>NIKE Air Force 1</p>
      <span>￥277</span>
    </div> -->
  </div>
  <!-- <div class="header">
    <header>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <van-button type="danger">搜索</van-button>
      <div class="pahto">
        <van-icon name="photograph" size="1.5rem" />
        <span>拍照搜</span>
      </div>
    </header>
    <h1>识货app实物鉴别 严选正品优质店铺</h1>
    <div class="identify">
      <div class="identify-one">
        <p>专业鉴别</p>
        <span>“国家队”中检合作</span>
      </div>
      
      <div class="identify-one">
        <p>店铺检验</p>
        <span>“国家队”中检合作</span>
      </div>
      
      <div class="identify-one">
        <p>专业鉴别</p>
        <span>“国家队”中检合作</span>
      </div>
    </div>
  </div>
  <div class="conten">

  </div> -->
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: "",
      isswitch: false,
      isswitch1: false,
      isswitch2: false,
      isswitch3: false,
      isswitch4: false,
      shopdata:[]
    };
  },
  created() {
    this.getdata();
    this.isswitch = true
  },
  methods: {
    async getdata() {
      let { data } = await this.$axios.get("/home");
      this.shopdata = data.data.splice(0,8)
      console.log(this.shopdata);
    },
    swith(index) {
      console.log(index);
      if (index == 4) {
        this.isswitch4 = true;
        this.isswitch = false;
        this.isswitch1 = false;
        this.isswitch2 = false;
        this.isswitch3 = false;
      } else if (index == 1) {
        this.isswitch1 = true;
        this.isswitch = false;
        this.isswitch4 = false;
        this.isswitch2 = false;
        this.isswitch3 = false;
      } else if (index == 2) {
        this.isswitch2 = true;
        this.isswitch = false;
        this.isswitch4 = false;
        this.isswitch1 = false;
        this.isswitch3 = false;
      } else if (index == 3) {
        this.isswitch3 = true;
        this.isswitch = false;
        this.isswitch4 = false;
        this.isswitch1 = false;
        this.isswitch2 = false;
      } else {
        this.isswitch = true;
        this.isswitch2 = false;
        this.isswitch4 = false;
        this.isswitch1 = false;
        this.isswitch3 = false;
      }
    },
    godetile(id){
      this.$router.push({
        path:"/Dtile",
    query: {
            id: id
          }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.content{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 10%;
  height: 400px;
  margin-right: 10%;
  .coone{
    width: 23%;
    padding-top: 40px;
    .shoppingbox{
      width: 80%;
      height: 100px;
      img{
    //  width: 100%;
     height: 100%;
      }
    }
    p{
      margin-top: 10px;
    }
    span{
      margin-top: 10px;
    }
  }
}

.shophead {
  display: flex;
  justify-content: space-around;
  margin-left: 20%;
  margin-right: 20%;
  height: 30px;
  margin-top: 24px;
  span {
    font-size: 15px;
    font-weight: 600;
  }
}
.qualitygoods {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  margin-left: 10%;
  margin-right: 10%;
  .qualbox {
    height: 140px;
    width: 26%;
    outline: 1px rgba(0, 0, 0, 0.21) solid;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding-left: 3%;
    line-height: 20px;
    padding-top: 27px;
    p {
      font-size: 25px;
      font-weight: 600;
      padding-top: 14px;
    }
    span {
      padding-top: 10px;
      font-size: 16px;
    }
  }
}
.imgbox {
  height: 410px;
  width: 60%;
  margin: auto;
  padding-top: 7%;
  img {
    height: 100%;
    // width: 100%;
  }
}
.nav {
  // position: fixed;
  // top: -100px;
  height: 80vh;
  // background-color: cadetblue;
  width: 100%;
  background: url(http://static.shihuocdn.cn/admin/files/20210303/fc8bbceb69b5334031a71ffeaceca55d.png?imageslim&imageView2/2/w/2600)
    100%/100%;
}
.conten {
  position: relative;
  top: -20px;
  border-radius: 20px;
}
.header {
  background-color: #ff3c4a;
  height: 200px;
  .identify {
    display: flex;
    justify-content: space-around;
    .identify-one {
      text-align: center;
      line-height: 0.5rem;
      color: white;
      p {
        font-size: 1rem;
        font-weight: 600;
      }
      span {
        font-size: 0.6rem;
      }
    }
  }
}
h1 {
  text-align: center;
  // color: white;
  font-weight: 600;
  margin-top: 70px;
  font-size: 46px;
}
header {
  display: flex;
  align-items: center;
  .pahto {
    text-align: center;
    display: flex;
    flex-direction: column;
    span {
      font-size: 10px;
    }
  }
}
/deep/.van-search {
  width: 85%;
  background: none;
}
/deep/.van-search__content {
  border-radius: 15px;
  outline: 1px red solid;
  // width: 70%;
}
/deep/.van-button {
  position: absolute;
  // top: 40%;
  left: 67%;
  height: 30px;
  top: 13px;
  border-radius: 16px;
}
</style>