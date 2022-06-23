<template>
  <header v-if="!isshop">
    <div class="logpo">
      <span>SHOP</span>
      <h1>我的购物车</h1>
    </div>
    <div>
      <span>登录</span>|
      <span>注册</span>
    </div>
  </header>
  <hr />
  <div class="content1" v-if="!isshop">
    <van-icon name="cart-o" size="200" />
    <div class="right">
      <p>你的购物车还是空的</p>
      <span>登录后将显示你的商品</span>
      <el-button type="primary" plain @click="login">马上登录或注册</el-button>
    </div>
  </div>
  <Classshop v-else="isshop" />
  <h2>推荐商品</h2>
  <div class="content">
    <div
      class="coone"
      v-for="item in shopdata"
      :key="item._id"
      @click="godetile(item._id)"
    >
      <div class="shoppingbox">
        <img :src="baseURL + item.phtoto" alt="" />
      </div>
      <p>{{ item.name }}</p>
      <span>￥{{ item.price }}</span>
    </div>
  </div>
  <Weibu />
  <!-- <button @click="remove">点击清空沟渠车</button> -->
</template>

<script>
import Classshop from "../components/Classshop.vue";
import Weibu from "../components/Weibu.vue";
import { mapState } from "vuex";

export default {
  components: {
    Classshop,
    Weibu,
  },
  data() {
    return {
      shopdata: [],
      isshop: false,
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  created() {
    this.getdata();
    console.log(this.userInfo);
    if (!this.userInfo.name) {
      console.log(1);
      this.isshop = false;
    } else {
      console.log(2);
      this.isshop = true;
    }
  },
  methods: {
    login() {
      this.$router.push("/Login");
    },
    godetile(id) {
      this.$router.push({
        path: "/Dtile",
        query: {
          id: id,
        },
      });
    },
    remove() {
      // localStorage.setItem('Shop',{})
      localStorage.setItem("Shop", "[]");
    },
    async getdata() {
      let { data } = await this.$axios.get("/home");
      this.shopdata = data.data.splice(0, 8);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 10%;
  height: 400px;
  margin-right: 10%;
  .coone {
    width: 23%;
    padding-top: 40px;
    .shoppingbox {
      width: 80%;
      height: 100px;
      img {
        //  width: 100%;
        height: 100%;
      }
    }
    p {
      margin-top: 10px;
    }
    span {
      margin-top: 10px;
    }
  }
}
h2 {
  margin: 70px;
  font-size: 40px;
}
.content1 {
  display: flex;
  justify-content: space-around;
  /deep/.van-badge__wrapper {
    opacity: 0.4;
  }
  .right {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    line-height: 40px;
    p {
      font-size: 25px;
      font-weight: 600;
    }
  }
}
header {
  display: flex;
  justify-content: space-around;
  .logpo {
    display: flex;
    line-height: 20px;
    span {
      font-size: 30px;
      font-weight: bold;
    }
    h1 {
      margin-left: 20px;
    }
  }
}
hr {
  background-color: aqua;
}
</style>