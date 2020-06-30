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
                    <div class="header-right-input header-right-title ">
                        <!--<input placeholder="搜索"  class="header-input"/>-->
                        <el-input
                            placeholder="搜索"
                            prefix-icon="el-icon-search"
                            class="header-input" >
                        </el-input>
                    </div>
                    <div class="header-right-title">|</div>
                    <div class="header-right-title">登录</div>
                    <div class="header-right-title">注册</div>
                </div>
            </div>

            <div>
            </div>
        </div>
        <!--走马灯 carousel-->
        <div class="carousel">
            <Carousel />
        </div>
        <!--主要信息 eleb-->
        <div class="eleb">
            <!--公告 adv-->
            <div class="adv">
                <ul class="adv-ul">
                    <li>
                        <div class="adv-ul-content">
                          <div class="adv-new">New</div>
                          <div class="adv-content">关于服务市场转账手续费变更公告</div>
                        </div>
                    </li>
                    <li>
                        <div class="adv-ul-content">
                          <div class="adv-new">New</div>
                          <div class="adv-content">【接口变更】订单接口变更</div>
                        </div>
                    </li>
                    <li>
                        <div class="adv-ul-content">
                          <div class="adv-content">全部公告</div>
                          <div><img :src="require('../assets/dayu.png')" height="20px" width="10px"></div>
                        </div>
                    </li>
                </ul>
                <!--资源优势和流程接入-->
                <div class="adv-main">
                    <div class="adv-main-title">资源优势和接入流程</div>
                    <div class="adv-serve">
                        <div class="adv-serve-content">
                            <div class="adv-s-content1">平台服务商</div>
                            <div class="adv-s-content2">提供经营管理增值服务</div>
                        </div>
                        <div class="adv-serve-content"> 
                            <div class="adv-s-content1">企业服务商</div>
                            <div class="adv-s-content2">提供订单商品基础服务</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Carousel from './Carousel'
    export default {
        name: 'HelloWorld',
        data () {
            return {
               
            }
        },
        components:{
            Carousel
        }
    }
</script>
<!--全局样式-->
<style scoped>
*{
    margin:0;
    padding:0;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang SC", "Heiti SC", "Microsoft YaHei", SimHei, "WenQuanYi MicroHei", sans-serif !important;
    list-style: none;
}
body{
    margin:0
}
</style>
<!--header样式-->
<style scoped>
.header{
    z-index: 999;
    display: flex;
    padding:0.1rem 0.5rem;
    min-height: 0.2rem;
    justify-content:center;
    height: 3.5rem;
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
    width: 1rem;
    height: 0.15rem;
    position: relative;
    top:-0.05rem;
}
.header-right-title{
    margin-right: 0.25rem;
    cursor: pointer;
}
.header-input{
    background-color: none;
    zoom:0.2;
}

</style>
<!--跑马灯样式（carousel）-->
<style scoped>
.carousel{
    z-index: auto !important;
    zoom: 0.25;
}
</style>
<!--主要信息样式 eleb-->
<style scoped>
    .adv{
        height: 3.4rem;
        font-size: 0.1rem;
    }
    .adv-ul{
        display: flex;
        justify-items: column;
        justify-content:center;
        padding-bottom: 0.05rem;
        border-bottom: 0.005rem solid #eeeeee;
    }
    .adv-ul-content{
        display: flex;
        margin: 0.005rem 0.5rem;
        
    }
    .adv-new{
        background-color: #71dd6b;
        margin:10;
        color:white;
        padding: 0.015rem 0;
        font-size: 0.01rem;
        border-radius: 25px;
        width: 0.25rem;
        text-align: center;
        font-style:italic;
    }
    .adv-content{
        color:#888888b0;
        margin-right:0.25rem;
        margin-left: 0.1rem;
        cursor: pointer;
    }
    .adv-main{
        margin:0 auto;
        padding: 0 1.5rem;
    }
    .adv-main-title{
        margin:0 auto;
        text-align: center;
        margin-top:0.75rem;
        font-size: 0.215rem;
        font-weight: 500;
        color: #3f3f3f;
    }
    .adv-serve{
        display: flex;
        background-color: #daf5f7;
        height: 0.3rem;
        border-radius: 25px;
        width: 60%;
        margin: 0 auto;
    }
    .adv-serve-content{
        display: flex;
        margin:0 0.2rem;
        align-self: center;
    }
    .adv-s-content1{
        text-align: center;
        vertical-align: middle;
        margin-right: 0.08rem;
        font-size: 0.15rem;
    }
    .adv-s-content2{
        font-size: 0.05rem;
        display: flex;
        align-items: center;
    }
</style>