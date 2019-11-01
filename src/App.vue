<template>
  <div id="app">
     <!-- 顶部Header 区域 -->
     <mt-header fixed title="Vue项目">
       <span slot="left" @click="goBack" v-show="flag">
         <mt-button icon="back">返回</mt-button>
       </span> 
     </mt-header>
     <transition>
        <router-view></router-view>
     </transition>  
     <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar" >
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
      export default {
          data() {
            return {
              flag:false
            }
          },
          created(){
             this.flag=this.$route.path==="/home"?false:true; 
          },
          methods:{
            goBack(){
              //点击后退
              this.$router.go(-1);
            }
          },
          watch:{
            "$route.path":function(newVal){
              if(newVal==="/home"){
                this.flag=false;
              }else{
                this.flag=true;
              }
            }
          }
      }
</script>
<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top:40px;
  overflow-x: hidden;
  height: 100%;
  overflow-y: scroll;
  .mui-bar-tab .mui-tab-item1.mui-active {
      color: #007aff;
    }

    .mui-bar-tab .mui-tab-item1 {
      display: table-cell;
      overflow: hidden;
      width: 1%;
      height: 50px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #929292;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon {
      top: 3px;
      width: 24px;
      height: 24px;
      padding-top: 0;
      padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
      font-size: 11px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .mint-header.is-fixed{
      z-index: 99 !important;
    }
  //进
  .v-enter{
    opacity: 0;
    transform: translateX(100%)
  }
  //出
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,.v-leave-active{
    transition: all 0.5s ease;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  

  
</style>
