import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import AppIndex from '../components/home/AppIndex'
import Register from '../components/Register'
import RegisterSuccess from '../components/RegisterSuccess'

Vue.use(Router)

export default new Router({
  //使用history模式进行路由
  mode: 'history',
  //配置路由数组
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/registerSuccess',
      name:'RegisterSuccess',
      component:RegisterSuccess,
      meta: {
        requireAuth: true
      }
    },
      ]
})
