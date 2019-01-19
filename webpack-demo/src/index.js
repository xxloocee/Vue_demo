// 项目的js入口文件

// 1. 导入Jquery
//import 是ES6中导入模块的方式
import $ from 'jquery'



$(function () {
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97634'
    })
})