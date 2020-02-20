import Vue from 'vue'
import Vuex from 'vuex'
//vuex是一个专门为vue开发的状态管理方案，可以在各个组件中传递使用的变量和方法定义在这里
//方便组件中传值
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    user:{
      username:window.localStorage.getItem('user'||'[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
  },
  mutations:{
    login (state,user){
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }
})
