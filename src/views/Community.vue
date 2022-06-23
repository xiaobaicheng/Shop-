<template>
  <h1>
    社区
  </h1>
</template>

<script>
export default {
data(){
  return{

  }
},
created(){
this.getdata()
},
methods:{
  getdata(){
    let a = JSON.parse(localStorage.getItem('Shop'))
    console.log(a);
    // localStorage.removeItem('Shop')
  }
}
}
</script>

<style>

</style>