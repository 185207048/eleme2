import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import Element from 'element-ui'
import '../element-variables.scss'
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
