
import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

// 导入子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'


// 创建路由对象
var router = new VueRouter({
    routes: [
        { 
            path:  '/account',
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register }
            ]
        },
        { 
            path: '/goodslist',
            component: goodslist,
            // chidren: [
            //     { path: 'login', component: login },
            //     { path: 'register', component: register }
            // ]
        },
    ]
})

export default router