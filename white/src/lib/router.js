
// 首先需要导入包 vue 和 vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用vue-router
Vue.use(VueRouter)

import index from '../components/index.vue'
//路由 不同的路由对应不同的组件
let routes = [{
    path:'/',
    component:index,
    // redirect:'users' 重定向可以用这个,
  }/* ,
  {
     path:'/login',
     component:login
 } */];

 //创建路由对象 固定写法
const router = new VueRouter({
    routes   
 });

 export default router;