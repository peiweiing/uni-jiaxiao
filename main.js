import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$url = 'http://dj.wandingjt.com/api/'
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
