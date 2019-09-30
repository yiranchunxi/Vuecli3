import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
//import { Button, Cell } from 'mint-ui'
import 'mint-ui/lib/style.css' 

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false
//Vue.component(Button.name, Button)
//Vue.component(Cell.name, Cell)
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
