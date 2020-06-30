<template>
    <div class="main">
        <div class="header">
        <!--头的左半部分-->
            <div class="header-left">
                <div class="header-left-content">
                    <div class="header-content">
                        <img class="header-img" :src="require('../assets/image/logo.png')" />
                        <div class="header-point">·</div>
                        <div class="header-title">商家开发平台</div>
                    </div>
                </div>
            </div>
        <!--头的右半部分-->
            <div class="header-right">
                <div class="header-right-content">
                    <div class="header-right-title">首页</div>
                    <div class="header-right-title">文档中心</div>
                    <div class="header-right-title">管理中心</div>
                    <div class="header-right-title">帮助中心</div>
                    <div class="header-right-input header-right-title">
                        <input placeholder="搜索"  class="header-input"/>
                    </div>
                    <div class="header-right-title">|</div>
                    <div class="header-right-title">登录</div>
                    <div class="header-right-title">注册</div>
                </div>
            </div>

            <div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
               
            }
        }
    }
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Heiti SC", "Microsoft YaHei", SimHei, "WenQuanYi MicroHei", sans-serif !important;
}
.header{
    background-color: brown;
    display: flex;
    padding:0.1rem 0.5rem;
    min-height: 0.2rem;
    justify-content:center;
}
.header-left{
    display: flex;
    flex-direction: row;
    min-height: 0.15rem;
}
.header-img{
    height: 0.13rem;
}
.header-content{
    align-items:center;
    font-size: 0.15rem;
    display: flex;
}
.header-point{
    margin:0 0.05rem;
    color:white
}
.header-title{
    font-size:0.10rem;
    align-items: center;
    color:white
}
.header-right{
    float: right;
}
.header-right-content{
    display: flex;
    color:white;
    font-size:0.10rem;
    padding-top:0.025rem ;
    justify-content:flex-end;
    width: 5.5rem;
}
.header-right-input{
    width: 0.5rem;
    height: 0.15rem;
}
.header-right-title{
    margin-right: 0.25rem;
    cursor: pointer;
}
.header-input{
    width: 0.5rem;
    background-color: none;
}
</style>