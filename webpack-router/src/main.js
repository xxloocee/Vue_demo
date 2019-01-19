import Vue from 'vue'


import VueRouter from 'vue-router'
// 安装VueRouter
Vue.use(VueRouter)

import app from './App.vue'

import router from './router.js'







var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router   //将路由对象挂载到vm上 
})