import Vue from 'vue'
import App from '@/App'
import "@babel/polyfill"

new Vue({
    //安排全局事件总线
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    el:"#root",
    render: h => h(App)
})