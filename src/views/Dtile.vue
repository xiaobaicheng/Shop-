<template>
  <div class="hot" v-for="item in shop" :key="item._id">
    <div class="block">
      <el-carousel height="300px">
        <el-carousel-item>
          <img :src="baseURL + item.phtoto" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="detile">
      <h1>{{ item.name }}</h1>
      <span>{{ item.message }}</span>
      <div class="select">
        <el-select v-model="value" placeholder="请选择你的码数">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="bu">
          <button @click="redce(false)">-</button> {{ count }}
          <button @click="redce(true)">+</button>
        </div>
      </div>
      <p>￥{{ item.price }}</p>
      <div class="car">
        <van-action-bar>
          <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
          <van-action-bar-icon icon="cart-o" text="购物车" />
          <van-action-bar-icon
            icon="star"
            text="已收藏"
            color="#ff5000"
            icon-class=""
            @click="Star"
            v-show="istar"
          />
          <van-action-bar-icon
            icon="star"
            text="未收藏"
            color="#99a9bf"
            icon-class=""
            @click="Star"
            v-show="!istar"
          />
          <van-action-bar-button
            type="warning"
            text="加入购物车"
            @click="shoping"
          />
          <van-action-bar-button type="danger" text="立即购买" />
        </van-action-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dtile",
  data() {
    return {
      shop: [],
      count: 1,
      shopdata: null,
      istar: true,
      options: [
        {
          value: "39",
          label: "39",
        },
        {
          value: "40",
          label: "40",
        },
        {
          value: "41",
          label: "41",
        },
        {
          value: "42",
          label: "42",
        },
        {
          value: "43",
          label: "43",
        },
      ],
      value: "",
    };
  },
  created() {
    this.getdata(this.$route.query.id);
  },
  watch: {
    value(newvalue, oldvalue) {
      // console.log(newvalue, oldvalue);
    },
  },
  methods: {
    async getdata(id) {
      let { data } = await this.$axios.post("/home/findhome", { id });
      this.shopdata = data.data;
      this.shop.push(data.data);
    },
    //点击收藏
    Star() {
      this.istar = !this.istar;
    },
    //点击改变数量
    redce(bool) {
      if (bool) {
        ++this.count;
      } else if (this.count <= 1) {
        console.log("不能再减少了");
      } else {
        --this.count;
      }
    },
    //点击加入购物车
    shoping() {
      if (!this.value) return this.$message.error("请选择码数");
      let { value } = this;
      let count = this.count;
      const { message, name, phtoto, price, _id } = this.shopdata;
      let obj = JSON.parse(localStorage.getItem("Shop" || "[]"));
      let bool = true;
      obj.forEach((item) => {
        if (item._id == _id) return (bool = false);
      });
      this.$message.warning("购物车中已存在");

      if (!bool) return;
      this.$message.success("添加购物车成功");

      let obj1 = [
        {
          message,
          name,
          phtoto,
          price,
          _id,
          value,
          count,
        },
        ...obj,
      ];

      localStorage.setItem("Shop", JSON.stringify(obj1));
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.van-action-bar {
  position: relative;
}
.select {
  width: 58%;
  display: flex;
  justify-content: space-around;
  .bu {
    margin-left: 20px;
    margin-top: 5px;
    line-height: 20px;
    button {
      height: 20px;
    }
  }
}
// /deep/.el-input__wrapper{
//     width: 10px;
// }
// /deep/.el-input__inner{
//     width: 10px;

// }
.car {
  margin-top: 50px;
  width: 100%;
  height: 100px;
}
.hot {
  display: flex;
  .detile {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    line-height: 50px;

    h1 {
      font-size: 30px;
      color: #409eff;
      font-weight: bold;
    }
    span {
      font-size: 20px;
      color: #99a9bf;
    }
    p {
      color: #ff3c4a;
    }
  }
}
.block {
  width: 40%;
  padding: 6%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

/deep/.el-carousel__item {
  //   background-color: #99a9bf;
  outline: 1px black solid;
  img {
    // height: 100%;
    width: 100%;
  }
}

.el-carousel__item:nth-child(2n + 1) {
  //   background-color: #d3dce6;
}
</style>