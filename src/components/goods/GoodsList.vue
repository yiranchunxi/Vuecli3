<template>
    <div class="goods-list">
        <div class="goods-item" @click="goDetail(666)">
            <img src="https://2c.zol-img.com.cn/product/201_220x165/592/cemGYCgkqZ5g.jpg"  alt=""/>
            <h1 class="title">
                OPPO Reno Ace（8GB/128GB/全网通)
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2999</span>
                    <span class="old">￥3199</span>
                </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩60件</span>
               </p>
            </div>
        </div>
        <div class="goods-item" @click="goDetail(666)">
            <img src="https://2e.zol-img.com.cn/product/201_220x165/248/ceNlyXftWlpBQ.jpg"  alt=""/>
            <h1 class="title">
                vivo NEX 3（8GB/256GB/全网通/5G版） 
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥4999</span>
                    <span class="old">￥5698</span>
                </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩40件</span>
               </p>
            </div>
        </div>
        <div class="goods-item" @click="goDetail(666)">
            <img src="https://2a.zol-img.com.cn/product/201_220x165/294/cesz5wU0SN0Gc.jpg"  alt=""/>
            <h1 class="title">
               一加7T（8GB/128GB/全网通）
            </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2999</span>
                    <span class="old">￥3299</span>
                </p>
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩10件</span>
               </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            goDetail(id){
                // 使用JS的形式进行路由导航   
                // 注意： 一定要区分 this.$route 和 this.$router 这两个对象，
                // 其中： this.$route 是路由【参数对象】，所有路由中的参数， params, query 都属于它
                // 其中： this.$router 是一个路由【导航对象】，用它 可以方便的 使用 JS 代码，实现路由的 前进、后退、 跳转到新的 URL 地址
                 // 1. 最简单的
                // this.$router.push("/home/goodsinfo/"+id);
                //2传递对象
                //this.$router.push({path:"home/goodsinfo/"+id});
                // 3. 传递命名的路由
                this.$router.push({name:"goodsinfo",params:{id}})
            }
        }
    }
</script>
<style lang="less" scoped>
    .goods-list{
        margin-bottom: 80px;
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item{
            width: 49%;
            border:1px solid #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
            }
            .info{
                background-color: #eeeeee;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }

                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>