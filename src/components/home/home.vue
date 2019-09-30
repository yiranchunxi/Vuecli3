<template>
    <div>
        <div  class="home-swipe">
            <mt-swipe :auto="4000" @change="handleChange">
                <mt-swipe-item v-for="(item,index) in banner" :key="index">
                        <img :src="item" alt=""/>
                </mt-swipe-item>
            </mt-swipe>          
        </div>
    </div>
</template>
<script>
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
           methods:{
               handleChange(){

               }
           }        
    }
</script>
<style lang="less" scoped>

    .home-swipe{
        width: 100%;
        height: 200px;
        img{
            height: 200px;
            width: 100%;
        }
    }


</style>