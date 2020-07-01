<template>
        <div>
            <div class="header-carousel">
                <el-carousel trigger="click" class="el-carousel-index" indicator-position="none" arrow="never" :autoplay="false" ref="carousel">
                    <el-carousel-item >
                        <div class="header-back1">
                            <div class="header-title">
                                <div class="header-title-1">饿了么开放平台，连接千万商家</div>
                                <div class="header-title-2">与 3,000+ 位开发者一起，共建 O2O 行业良性生态</div>
                                <el-button type="primary" round class="btn-add1">立即免费加入</el-button>
                            </div>
                            
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <div class="header-back2">
                            <div class="header-title">
                                <div class="header-title-1">饿了么开放平台，连接千万商家</div>
                                <div class="header-title-2">与 3,000+ 位开发者一起，共建 O2O 行业良性生态</div>
                                <el-button type="primary" round class="btn-add2">立即免费加入</el-button>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
                <div class="point-contorl">
                    <div class="point1 point-white" @click="clickpoint"></div>
                    <div class="point2" @click="clickpoint"></div>
                </div>
            </div>
        </div>
</template>

<script>
// import Logo from '../assets/image/logo.png'
export default {
  name: 'Carousel',
  data(){
      return{
          white_hidden:true, //控制白点儿的位置,true是左边
      }
  },
  methods:{
    // 控制白点儿
    clickpoint(){
        this.white_hidden = !this.white_hidden;
        let point1 = document.getElementsByClassName("point1")[0]
        let point2 = document.getElementsByClassName("point2")[0]
        console.log(point1.classList.add)
        point1.classList.remove("point-white")
        point2.classList.remove("point-white")
        if(this.white_hidden){
            // setActiveItem(0)
            point1.classList.add("point-white")
            this.$refs.carousel.setActiveItem(0)
        }else{
            // setActiveItem(1)
            point2.classList.add("point-white")
            this.$refs.carousel.setActiveItem(1)
        }
    }
  }
}
</script>

<style scoped>

    *{
        list-style: none;
    }
    .point1, .point2{
        width: 10px;
        height: 10px;
        background-color: #eee;
        border-radius: 25px;
        float: left;
        margin:5px;
        cursor: pointer;
        opacity: 70%;
    }
    .point-contorl{
        position:absolute;
        top: 500px;
        z-index: 99;
        margin: 0 auto;
        text-align: center;
        left: 49%;
    }
    .point-white{
        background-color: white;
        opacity: 100%;
    }
    .el-header{
        padding: 0;
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    body > .el-container {
        margin-bottom: 40px;    
        height: 550px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
        
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .header-back1{
        width: 100%;
        height: 550px;
        background-image: url("../assets/image/back1.jpg");
        background-size: 100% 100%;
    }
    .header-back2{
        width: 100%;
        height: 550px;
        background-image: url("../assets/image/back2.jpg");
        background-size: 100% 100%;
    }
    .header-bar{
        width: 100%;
        height: 60px;
        float: left;
        padding:20px 0;
    }
    .header-title{
        margin:0 auto;
    }
   
    .header-img{
        margin-left:10%;
        width: 70px;
        cursor: pointer;
    }
    .header-point{
        margin:0 0.5%;
        color:white;
        font-size: 25px;

    }
    .header-play{
        color:white;
        position: relative;
        top:-5px;
        cursor: pointer;
    }
    .header-list{
        position: relative;
        color:white;
        list-style-type: none;
        display: flex;
        align-self: center;
        align-items:center;

    }
    .header-list li{
        margin:0.5% 2.5%;
        cursor: pointer;
        cursor: pointer;

    }
    .header-search{
        width: 160px;
        opacity:0.6;
    }
    .header-mylist{
        margin-right: 10%;
        width: 850px;
        float: right;
    }
    .header-register{
        width: 70px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border: 1px solid white;
        border-radius: 30px ;
    }
    
    .header-carousel{
        z-index: auto !important;
        position: absolute;
        top:0;
        height: 550px;
        width: 100%;
    }
    .tini-box{
        width: 100%;
        height: 100px;
        background-size: 100% 100%;
    }
    .header-carousel{
        height: 20rem;
    }
    .header-title{
        position: relative;
        top:30%;
        color: white;
        text-align: center;
    }
    .header-title-1{
        margin-bottom: 50px;
        font-size: 40px;
        font-weight: 900;
    }
    .header-title-2{
        margin-bottom: 50px;
        font-size: 20px;
        font-weight: 500;
    }
    .btn-add2{
        width:180px;
        height:45px;
        font-size: 18px;
        background-color:white;
        border-color: white;
        color:#00c8ff;
        margin-top:50px;

    }
    .btn-add1{
        width:180px;
        height:45px;
        font-size: 18px;
        background-color:white;
        border-color: white;
        color:#7480db;
        margin-top:50px;
    }
    .adv{
        position: absolute;
        top:550px;
        border-bottom: 0.1px solid #d9d9d9;
        width: 100%;
        text-align: center;
        

    }
    .adv li{
        float:left;
        margin:10px;
        margin-left: 12.5%;
        cursor: pointer;
    }
    .adv-new ,.adv-content, .adv-all{
        color:#cccccc;
        font-size: 14px
    }
    .adv-new{
        width: 40px;
        height: 15px;
        background-color:#6aa84f;
        font-size:10px;
        border-radius: 25px;
        color: white;
        
    }
    .adv-new-fitin{
        margin: 0 5px;
        font-style:italic;
    }
</style>

<style scoped>
.header-carousel /deep/ .el-carousel__container{
      height: 550px!important;
      z-index: -2;
  }
</style>

<style scoped>
.ele-body{
    position: absolute;
    top:590px;
    width: 100%;
    height: 1800px;

}
.ele-body-title{
    font-weight: 900;
    font-size:30px;
    text-align: center;
    padding-top: 120px;
    color:#636363;
}
.ele-body-choose{
    text-align: center;
    width: 600px;
    height: 50px;
    vertical-align:middle;
    background-color: #d6edff;
    border-radius: 25px;
    position: relative;
    top:60px;
    margin:0 auto;
}
.ele-body-title-1{
    position: relative;
    top:25%;
    font-size:20px;
    font-weight: 500;
    z-index:20;
    cursor: pointer;
}
.ele-body-title-2{
    position: relative;
    top:22.5%;
    font-weight: 300;
    font-size:12px;
    margin:0 15px;
    z-index:20;
    cursor: pointer;
}
.ele-body-fitin{
    width: 30px;
    height: 50px;
    background-color: #d6edff;
    border-radius: 25px;
    color:#d6edff;
}

</style>
