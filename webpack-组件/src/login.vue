<template>
    <div>
        <h1>这是登录组件，.vue文件专门定义组件 --- {{msg}}</h1>
    </div>
</template>

<script>
    export default {
        data () {
            //注意组件中的data必须是function
            return {
                msg: 123
            };
        },
        methods: {
            show() {
                console.log("调用了login.vue中的show方法");
            }
        }
    };
</script>

<style>

</style>
