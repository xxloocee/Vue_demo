// 项目的js入口文件

// 1. 导入Jquery
//import 是ES6中导入模块的方式
import $ from 'jquery'

import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'



$(function () {
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97634'
    })
})

class Person {
    static info = { name: 'zs', age: 20}
}
console.log(Person.info)