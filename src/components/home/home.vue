<template>
    <div class="home-container">
        <div  class="home-swipe">
            <mt-swipe :auto="4000" @change="handleChange">
                <mt-swipe-item v-for="(item,index) in banner" :key="index">
                        <img :src="item" alt=""/>
                </mt-swipe-item>
            </mt-swipe> 
        </div>
        <!-- 九宫格 到 6宫格 的改造工程 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/mintuitest">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></router-link></li>
    </ul>           
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
           name:'home',
           data() {
               return {
                   banner:[
                       'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg',
                       'http://www.itcast.cn/images/slidead/BEIJING/2017511009514700.jpg',
                       'http://www.itcast.cn/images/slidead/BEIJING/2017421414422600.jpg'
                   ]
               }
           },
           created(){
              this.getBanner()
           },
           methods:{
               handleChange(){

               },
               getBanner(){
                    
               }
           }        
    }
</script>
<style lang="less" scoped>
    .home-container{
            height: 100%;
            margin-bottom: 50px;    
            .home-swipe{
                width: 100%;
                height: 200px;
                img{
                    height: 200px;
                    width: 100%;
                }
            }

            .mui-grid-view.mui-grid-9 {
                    background-color: #fff;
                    border: none;
                    img {
                        width: 60px;
                        height: 60px;
                    }

                    .mui-media-body{
                        font-size: 13px;
                    }
            }

            .mui-grid-view.mui-grid-9 .mui-table-view-cell {
                border: 0;
            }
    }
    
</style>