import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import MintUI from 'mint-ui'
//import { Lazyload } from 'mint-ui';
import moment from 'moment'
//import { Button, Cell } from 'mint-ui'
import 'mint-ui/lib/style.css' 

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import VuePreview from 'vue-preview'


Vue.config.productionTip = false
//Vue.component(Button.name, Button)
//Vue.component(Cell.name, Cell)
Vue.use(VueAxios, axios)

Vue.use(MintUI)

//Vue.use(Lazyload);
Vue.use(VuePreview)

// 定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
