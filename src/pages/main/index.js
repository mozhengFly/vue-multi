import Vue from 'vue'
import App from './app.vue'
import '@/plugins/element'
import router from './router'
import store from './store'

Vue.config.productionTip = false

console.log(1)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
