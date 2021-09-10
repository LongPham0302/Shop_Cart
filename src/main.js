import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Plugin from './store'
import Notifications from 'vue-notification'
Vue.use(Notifications)

new Vue({
    el: '#app',
    store,
    Plugin,
    render: h => h(App)
})