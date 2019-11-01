<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <!-- 商品列表项区域-->
            <div class="mui-card" v-for="item in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img src="../../images/icon_mobile.png">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <a href="#" @click.prevent="">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
    import numbox from "../subcomponets/shopcar_numbox.vue";
    export default {
        data() {
            return {
                goodslist:[]    
            }
        },
        created(){
            this.goodslist=this.$store.state.car; 
        },
        components:{
            numbox
        }
    }
</script>
<style lang="less" scoped>
.shopcar-container{
    background-color: #eeeeee;
    overflow: hidden;
    .goods-list{
           .mui-card-content-inner{
               display: flex;
               align-items: center;
               justify-content: space-between;
           } 
           img{
               width: 60px;
           }
           h1{
               font-size: 13px;
           }
           .info{
             display: flex;
             flex-direction : column;
             
             .price{
                 color: red;
                 font-weight: bold;
                 margin-right: 10px;
             }
             
           }
    }
}
</style>