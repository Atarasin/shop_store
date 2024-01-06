import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
console.log("vue 2 !!!")
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
console.log("vue 3 !!!")
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif