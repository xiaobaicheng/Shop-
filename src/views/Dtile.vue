<template></template>

<script>
export default {
  name: "Dtile",
  data() {
    return {};
  },
  created() {
    this.getdata(this.$route.query.id)
  },
  methods:{
   async getdata(id){
    let {data} = await this.$axios.post("/home/findhome",{id})
    console.log(data);
    }
  }
};
</script>

<style>
</style>