<template>
  <div class="content">
    <div class="imgbox">
      <img :src="baseURL + userInfo.phtoto" alt="" />
    </div>
    <span class="name">用户名：{{ userInfo.name }}</span>
  </div>
  <div class="about">
    <article>
      <h2>关于我</h2>
      <p>一个shop商城应用</p>
      <p>谢谢你这么好看还这么关注我鸭！</p>
      <p>有必要强调一下！我还没有脱发！大概是写的代码还不够多...</p>
    </article>
    <article>
      <h2>关于网站</h2>
      <p class="it"><span>前 端</span>：<span>Vue + Element</span></p>
      <p class="it">
        <span>后 端</span>：<span>Node + Express + Mongodb</span>
      </p>
      <!-- <p><span>服务器</span>：<a href="/">阿里云ECS</a> | <a href="/"> 腾讯云</a></p> -->
      <!-- <p>这个博客终于能够在2021年上线了！</p> -->
      <!-- <p>每当我好不容易挤点时间写好代码准备上线时，总有前端技术在这个时间点做大的更新...ES2015、Node、Vue、Nuxt...很绝望，每次都是推翻重写，裂开...</p> -->
    </article>
    <article>
      <h2>关于版权</h2>
      <p>在注明出处的前提下，本站文章允许非商业用途的转载。</p>
    </article>
    <article>
      <h2>其他</h2>
      <!-- <p>我是一名前端开发者，也是一名前端技术讲师，如果有合作相关事宜的话，可以点这里联系我 。或者可以在👈左侧边栏找到我的联系方式哦。</p> -->
    </article>
  </div>
  <Weibu />
</template>

<script>
import Weibu from "../components/Weibu.vue";
import { mapState } from "vuex";

export default {
  name: "About",
  components: { Weibu },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>
<style lang="less" scoped>
.content {
  .name {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 20px;
    margin-left: 9px;
  }
  line-height: 40px;
  display: flex;
  .imgbox {
    height: 40px;
    width: 40px;
    margin-left: 70%;
    border-radius: 50%;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
}
article {
  width: 100%;
  margin-bottom: 15px;
  padding: 25px 20px;
  background-color: #fff;
  font-family: Quicksand, Microsoft YaHei, sans-serif;
  box-sizing: border-box;
  box-shadow: 0 0 4px #ddd;
  h2 {
    margin-bottom: 15px;
    font-size: 20px;
    letter-spacing: 3px;
    line-height: 24px;
    border-left: 5px solid #73b899;
    text-indent: 10px;
  }
  p {
    text-indent: 2em;
    color: #444;
    font-size: 14px;
    letter-spacing: 4px;
    line-height: 30px;
    a {
      color: #409eff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  p.it {
    span:nth-child(2) {
      color: #bd4147;
      background-color: rgba(27, 31, 35, 0.05);
      font-weight: 700;
    }
  }
}
</style>