import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//每次刚进入页面 肯定会调用main.js 在刚调用的时候,先从本地存储中,把购物车数据读出来,放到store中
var car =JSON.parse(localStorage.getItem('car')||'[]')

export default new Vuex.Store({
  state: {  //this.$store.state.****  
    car:car
    // 将 购物车中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象， 咱们可以暂时将这个商品对象，设计成这个样子
    // {id:商品的id,count:要购买的数量,price:商品的单价,selected:false 是否在购物车中勾选中}
  },
  mutations: { //this.$store.commit('方法的名称','按需传递唯一的参数')
   addToCar(state,goodsinfo){
     //点击加入购物车，把商品信息保存到store中的car上
     //分析：
     //1 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更讯数量
     //2 如果没有，则直接把商品数据 push到car中即可
     //假设在购物车中没有找到对应的商品
     var flag=false;
     
     state.car.some(item=>{
       if(item.id==goodsinfo.id){
         item.count+=parseInt(goodsinfo.count)
         flag=true;
         return true;
       }
     })

     //如果最终循环完毕，得到的flag还是false，则把商品数据直接push到购物车中
     if(!flag){
       state.car.push(goodsinfo)
     }

     //当更新car之后,把car数组,存储到本地的localStoreage中
     localStorage.setItem('car',JSON.stringify(state.car))
   },
   updateGoodsInfo(state,goodsinfo){
     //修改购物车中商品的数量值
     //
     state.car.some(item=>{
       if(item.id==goodsinfo.id){
         item.count=parseInt(goodsinfo.count)
         return true
       }
     })

       // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
       localStorage.setItem('car',JSON.stringify(state.car))
   }
  },
  actions: { //

  },
  getters:{ //this.$store.getters.*****
    //获取已选择的数量
    getGoodsCount(state){
      var o={}
      console.log(state);
      state.car.forEach(element => {
        o[element.id]=element.count
      });
      console.log(o);
      return o;
    },
    //获得购物车数量
    getAllCount(state){
      var c=0;
      state.car.forEach(item=>{
        c+=item.count;
      })
      return c;
    }
  }
})
