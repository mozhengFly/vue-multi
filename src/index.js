import Vue from 'vue'
// 这个只是个占位符
// eslint-disable-next-line no-template-curly-in-string
import App from '${vuePath}'
import '@/plugins/element'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
