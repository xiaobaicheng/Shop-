<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
  </div> -->
  
  <div class="content">
    <div v-if="$route.meta.keepAlive">
        <Tabar/>
      <router-view />
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import Tabar from "./components/Tabar.vue"
export default {
  components:{Tabar},
  
  data(){
    return{

    }
  },
}

</script>


<style lang="less" scoped>
@import "assets/css/reset.css";
</style>