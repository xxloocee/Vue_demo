// 提供的runtime-only 的方式，并不是像网页那样开发
// import Vue from 'vue'

// 网页中的引入方式
import Vue from '../node_modules/vue/dist/vue.js'

// 网页中定义组件的方式，
// var login = {
//     template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }


// 导入login组件，需要安装相关的loader： cnpm i vue-loader vue-template-compiler -D
// 在配置文件中，新增loader配置项
import login from './login.vue'
import m1, { title as title1, content } from './test.js'
console.log(m1);
console.log(title1 + "---" + content);

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    // components: {
    //     login
    // }
    // render: function(creatElements) {  //在webpack中，要通过vue，把一个组件放到页面中去展示，vm实例中的render函数可以实现
    //     return creatElements(login)
    // },
    render: c => c(login)  //简写
})