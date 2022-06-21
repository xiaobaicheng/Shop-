<template>
  <div class="nav">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <router-link to="/">
        <van-tabbar-item icon="wap-home" name="home"
          >首页</van-tabbar-item
        ></router-link
      >
      <router-link to="/Community">
        <van-tabbar-item icon="label" name="Community">社区</van-tabbar-item>
      </router-link>
      <router-link to="/Life">
        <van-tabbar-item icon="chat" name="Life">生活</van-tabbar-item>
      </router-link>
      <router-link to="/Classification">
        <van-tabbar-item icon="shop" name="Classification"
          >分类</van-tabbar-item
        >
      </router-link>
      <router-link to="/about">
        <van-tabbar-item icon="manager" name="about">我的</van-tabbar-item>
      </router-link>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: "home",
    };
  },
  mounted() {
    this.istabar();
  },
  methods: {
    istabar() {
      let _that = this;
      setTimeout(() => {
        let path = _that.$route.path;
        let newpath = path.substring(1);
        _that.active = newpath;
          if (!newpath) {
            _that.active = "home";
          }
      }, 100);
    },
  },
};
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: space-around;
}

/deep/.van-tabbar {
  display: flex;
  justify-content: space-around;
}
</style>