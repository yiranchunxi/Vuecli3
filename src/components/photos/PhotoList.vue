<template>
    <div class="photo-container">
            <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active">
							推荐
						</a>
						<a class="mui-control-item" >
							热点
						</a>
						<a class="mui-control-item" >
							北京
						</a>
						<a class="mui-control-item" >
							社会
						</a>
                        <a class="mui-control-item" >
							科技
						</a>
						<a class="mui-control-item" @tap="getPhotoListByCateId('tap-click')">
							娱乐
						</a>
					</div>
				</div>

			</div>

			<ul class="img_container">
				<router-link v-for="(item,index) in imgList" :key="index" :to="'/home/photoinfo/'+index" tag="li" >
					<img v-lazy="item.img_url">
					<div class="info">
						<h1 class="info-title">{{item.title}}</h1>
						<div class="info-body">{{item.content}}</div>
					</div>
				</router-link>
			</ul>
    </div>
</template>
<script>
   
	import mui  from "../../lib/mui/js/mui.min.js";
	import {Toast} from 'mint-ui';
    export default {
         data() {
             return {
                 imgList:[
					 {
						img_url:"http://img5.imgtn.bdimg.com/it/u=50040935,2125257000&fm=26&gp=0.jpg",
						title:"这是一辆丰田车",
						content:"普拉多是一款进口ORV，源于丰田享誉全球的LAND CRUISER车系，1996年丰田正式将LAND CRUISER FJ90命名为PRADO普拉多，即真正意义上的第一代普拉多。"						 	
					 },
					 {
						img_url:"http://img1.imgtn.bdimg.com/it/u=2959873991,2241033072&fm=26&gp=0.jpg",
						title:"这是一辆丰田车",
						content:"卡罗拉（Corolla），曾用译名“花冠”，是丰田汽车的一个品牌。卡罗拉采用的是米其林轮胎215/45 R17轮胎、TRD Sportivo高性能减震器、TRD TF4 17寸运动型轮毂、强化离合器、高性能刹车片则保证其拥有比较理想的运动性能。 [1]  第一代卡罗拉于1966年发布，当时作为一款国民车推出，由于价格低廉，受到了当时消费者的热捧，到如今已经发展到了第11代，现在的卡罗拉依然是全球最畅销的车型之一。" 	
					 },
					  {
						img_url:"http://img3.imgtn.bdimg.com/it/u=3692064440,2653942991&fm=26&gp=0.jpg",
						title:"这是一辆丰田车",
						content:"普拉多是一款进口ORV，源于丰田享誉全球的LAND CRUISER车系，1996年丰田正式将LAND CRUISER FJ90命名为PRADO普拉多，即真正意义上的第一代普拉多。"						 	 	
					 },
					  {
						img_url:"http://img1.imgtn.bdimg.com/it/u=2948870395,3667482196&fm=26&gp=0.jpg",
						title:"这是一辆丰田车" ,
						content:"卡罗拉（Corolla），曾用译名“花冠”，是丰田汽车的一个品牌。卡罗拉采用的是米其林轮胎215/45 R17轮胎、TRD Sportivo高性能减震器、TRD TF4 17寸运动型轮毂、强化离合器、高性能刹车片则保证其拥有比较理想的运动性能。 [1]  第一代卡罗拉于1966年发布，当时作为一款国民车推出，由于价格低廉，受到了当时消费者的热捧，到如今已经发展到了第11代，现在的卡罗拉依然是全球最畅销的车型之一。" 		
					 },
					  {
						img_url:"http://img5.imgtn.bdimg.com/it/u=50040935,2125257000&fm=26&gp=0.jpg",
						title:"这是一辆丰田车",
						content:"普拉多是一款进口ORV，源于丰田享誉全球的LAND CRUISER车系，1996年丰田正式将LAND CRUISER FJ90命名为PRADO普拉多，即真正意义上的第一代普拉多。"						 		
					 },
					 {
						img_url:"http://img1.imgtn.bdimg.com/it/u=2959873991,2241033072&fm=26&gp=0.jpg",
						title:"这是一辆丰田车",
						content:"卡罗拉（Corolla），曾用译名“花冠”，是丰田汽车的一个品牌。卡罗拉采用的是米其林轮胎215/45 R17轮胎、TRD Sportivo高性能减震器、TRD TF4 17寸运动型轮毂、强化离合器、高性能刹车片则保证其拥有比较理想的运动性能。 [1]  第一代卡罗拉于1966年发布，当时作为一款国民车推出，由于价格低廉，受到了当时消费者的热捧，到如今已经发展到了第11代，现在的卡罗拉依然是全球最畅销的车型之一。" 	 	
					 },
					  {
						img_url:"http://img3.imgtn.bdimg.com/it/u=3692064440,2653942991&fm=26&gp=0.jpg",
						title:"这是一辆丰田车",
						content:"普拉多是一款进口ORV，源于丰田享誉全球的LAND CRUISER车系，1996年丰田正式将LAND CRUISER FJ90命名为PRADO普拉多，即真正意义上的第一代普拉多。"						 	 	
					 },
					  {
						img_url:"http://img1.imgtn.bdimg.com/it/u=2948870395,3667482196&fm=26&gp=0.jpg",
						title:"这是一辆丰田车",
						content:"卡罗拉（Corolla），曾用译名“花冠”，是丰田汽车的一个品牌。卡罗拉采用的是米其林轮胎215/45 R17轮胎、TRD Sportivo高性能减震器、TRD TF4 17寸运动型轮毂、强化离合器、高性能刹车片则保证其拥有比较理想的运动性能。 [1]  第一代卡罗拉于1966年发布，当时作为一款国民车推出，由于价格低廉，受到了当时消费者的热捧，到如今已经发展到了第11代，现在的卡罗拉依然是全球最畅销的车型之一。" 	 	
					 },
				 ]
             }
         },
         mounted(){
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
		 },
		 methods: {
			 getPhotoListByCateId(tap){
				  Toast(tap)
			 }
		 },
    }
</script>
<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.photo-container{
	overflow-x: hidden;
	.img_container{
	
		margin: 0;
		padding: 10px;
		list-style: none;
		padding-bottom: 0px;
		li{
			background-color: antiquewhite;
			margin-bottom: 10px;
			box-shadow: 0 0 9px #999;
			position: relative;
			text-align: center;
			img{
				width: 100%;
				vertical-align: middle;
			}
			
			img[lazy="loading"] {
				width: 40px;
				height: 300px;
				margin: auto;
			}
			.info{
				position: absolute;
				bottom: 0;
				text-align: left;
				color: white;
				background-color: rgba(0, 0, 0, 0.4);
				max-height: 84px;
				.info-title{
					font-size: 14px;
				}
				.info-body{
					font-size: 12px;
				}
			}
		}
	}
}


</style>