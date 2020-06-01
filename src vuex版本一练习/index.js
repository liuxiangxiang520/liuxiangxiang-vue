import Vue from 'vue'
import App from '@/App'
import store from '@/vuex/store'
// import "@babel/polyfill";
new Vue({
    el:'#root',
    render: h => h(App),
    store//注册vuex，只有在这里注册才能生效
})