import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {}
  },
  mutations: {
    // 修改数据
    updatauser(state, userInfo) {
      state.userInfo = userInfo //将用户数据更新到state。userinfo中
    },
    //清空数据
    cleardatauser(state) {
      state.userInfo = {};
    },
  },
  actions: {
  },
  modules: {
  }
})
