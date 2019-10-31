<template>
        <div class="goodsinfo-container">
			<!-- 动画用时方复习 -->
			<transition @before-enter="beforeEnter" 
						@enter="enter" 
						@after-enter="afterEnter">
						<div class="ball" v-show="ballFlag" ref="ball"></div>
			</transition>
			 <!-- 商品轮播图区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
					</div>
				</div>
			</div>
			<!--商品购买区域-->
			<div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价:<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now_price">￥{{goodsinfo.sell_price}}</span>
						</p>
						<p>购买数量:<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
					</div>
					<p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
						<!-- 分析：如何实现加入购物车时候，拿到 选择的数量 -->
						<!-- 1 经过分析发现：按钮属于goodsinfo页面,数字属于 numbox组件-->
						<!-- 2 由于涉及到了父子组件的嵌套了,所以，无法直接在goodsinfo页面中获取到 选中的商品数量值 -->
						<!-- 3 怎么解决这个问题：涉及到了子组件向父组件传值了(事件调用机制)-->
						<!-- 4 事件调用的本质：父向子传递方法，子调用这个方法，同时把数据当做参数 传递给这个方法 -->
					</p>
				</div>

			</div>

			<!-- 商品参数区域 -->
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					</div>
				</div>
				 <div class="mui-card-footer">
					<mt-button type="primary" size="large" plain>图文介绍</mt-button>
					<mt-button type="danger" size="large" plain >商品评论</mt-button>
				</div>
			</div>
        </div>
</template>
<script>
	//导入轮播图组件
	import swiper from "../subcomponets/swiper.vue";
	//导入 数字选择框 组件
	import numbox from "../subcomponets/goodsinfo_numbox.vue";
    export default {
        data() {
            return {
				id:this.$route.params.id,
				lunbotu:[{img:"https://2c.zol-img.com.cn/product/202_200x150/550/ceViNy1p1AvdA.jpg"},
						 {img:"http://2a.zol-img.com.cn/product/201_320x240/474/ceDiPO20qRL3U.jpg"},
						 {img:"https://2b.zol-img.com.cn/product/202_200x150/555/cegHETLgn6whw.jpg"}],
				goodsinfo:{title:"OPPO Reno Ace（8GB/128GB/全网通",
							market_price:"3199",
							sell_price:"2999",
							stock_quantity:60},
				ballFlag:false,  // 控制小球的隐藏和显示的标识符
				selectedCount:1	 // 保存用户选中的商品数量， 默认，认为用户买1个				         
            }
		},
		created(){

		},
		methods:{
			getSelectedCount(count){
				//当子组件把 选中的数量传递给父组件的时候, 把选中的值保存到data上
				this.selectedCount=count;
				console.log("父组件拿到的数量值为："+this.selectedCount)	
			},
			addToShopCar(){
				this.ballFlag=!this.ballFlag;	
			},
			beforeEnter(el){
				console.log(el)
				el.style.transform="translate(0,0)";	
				//console.log("beforeEnter")
			},
			enter(el,done){
				
				el.offsetWidth;

				//小球动画优化思路:
				//1.先分析导致动画不准确的本质原因：我们把小球最终位移到的位置，已经局限在某一分辨率下的滚动条未滚动的情况下；
				//2只要分辨率和测试的时候不一样，或者滚动条有一定 滚动距离之后 问题就出现了
				//3因此我们经过分析得到结论：不能把位置的横纵坐标直接写死了，而是应该根据不同情况，动态计算这个坐标值
				//4经过分析，得出解题思路：先得到 购物车图标的横纵坐标 在得到小球的横纵坐标，然后让y值求差 x值也求差，得到的结果就是横纵坐标要位移的距离
				//5如何获取购物车的坐标和小球的位置  ？？？ domObject.getBoundingClientRect()

				//获取小球在页面中的位置
				const ballPosition =this.$refs.ball.getBoundingClientRect();
				//获取购物车图标在页面中的位置
				const badgePosition=document.getElementById("badge").getBoundingClientRect();

				const xDist=badgePosition.left-ballPosition.left;
				const yDist=badgePosition.top-ballPosition.top;

				el.style.transform=`translate(${xDist}px,${yDist}px)`;
				el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68)";
				done();
				//console.log("enter")
			},
			afterEnter(el){
				
				this.ballFlag=!this.ballFlag;	
				//console.log("afterEnter")	
			}	
		},
		components:{
			swiper,
			numbox
		}
    }
</script>
<style lang="less" scoped>
 .goodsinfo-container{
	 background-color: #eeeeee;
	 overflow: hidden;
	 .now_price{
		 color: red;
		 font-size: 16px;
		 font-weight: bold;
	 }

	 .ball{
		 width: 15px;
		 height: 15px;
		 border-radius: 50%;
		 background-color: red;
		 position: absolute;
		 z-index: 99;
		 top: 390px;
		 left: 210px;	
	 }
 }
</style>