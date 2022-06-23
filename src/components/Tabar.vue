<template>

  <header>
    <div class="logo">HUASSY</div>
    <div class="head">
      <router-link to="/">首页</router-link>
      <router-link to="/Community">社区</router-link>
      <router-link to="/Life">生活</router-link>
      <router-link to="/Classification">购物车</router-link>
      <router-link to="/about">我的</router-link>
    </div>
  </header>

</template>

<script>
export default {
  name: "Tabar",
};
</script>
<style lang="less" scoped>
header {
  width: 100%;
  padding-top: 20px;
  display: flex;
  .head{
    display: flex;
    justify-content: space-around;
    width: 100% ;
    a{
        color: black;
        font-size: 20px;
        font-weight: 600;
        &:hover{
            border-bottom: 4px black solid;
        }
    }
  }
  .logo{
    width: 40%;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: white;
  }
}
// .nav{
//     height: 80vh;
//     width: 100%;
// }
</style>