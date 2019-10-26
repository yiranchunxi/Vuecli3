<template>
    <div class="test">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
            <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
        </mt-loadmore>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list:[1,2,3,4,5,6,7,8,9,10,11],
                allLoaded:false,
                
            }
        },
        methods:{
           loadTop() {
            console.log("加载更多数据TOP.........")
            let own=this;
            setTimeout(function(){
                own.$refs.loadmore.onTopLoaded();
            },3000)
            
            },
            loadBottom() {
               let own=this;
            console.log("加载更多数据bottom.........")
            setTimeout(function(){
               // own.allLoaded = true;
                own.$refs.loadmore.onBottomLoaded();
            },5000)

           // this.allLoaded = true;// 若数据已全部获取完毕
           //  this.$refs.loadmore.onBottomLoaded();
            }
        },
        mounted(){
            console.log(this);
        }
    }
</script>
<style lang="less" scoped>

    .test{
        overflow: scroll;
        height:100vh;
        margin-bottom: 50px;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        li{
            display: block;
            text-align: center;
            line-height: 200px;
            height: 200px;
            background-color: aquamarine;
            border-bottom: 1px solid #00ff00;
        }
    }
</style>