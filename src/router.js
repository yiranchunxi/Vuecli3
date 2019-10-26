import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './components/home/home.vue'
import Member from './components/member/member.vue'
import Shopcar from './components/shopcar/shopcar.vue'
import Search from './components/search/search.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import MintUiTest from './components/test/MintTest.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'  
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/home',
      component:Main
    },
    {
      path:'/member',
      component:Member
    },
    {
      path:'/shopcar',
      component:Shopcar
    },
    {
      path:'/search',
      component:Search
    },
    {
       path:'/home/newslist',
       component:NewsList 
    },
    {
      path:'/home/newsinfo/:id',
      component:NewsInfo 
    },
    {
      path:'/home/photolist',
      component:PhotoList
    },
    {
      path:'/home/photoinfo/:id',
      component:PhotoInfo
    },
    {
      path:'/home/goodslist',
      component:GoodsList
    },
    {
      path:'/home/mintuitest',
      component:MintUiTest
    }
  ],
  linkActiveClass:'mui-active'
})
