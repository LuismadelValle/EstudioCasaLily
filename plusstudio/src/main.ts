import Vue from 'vue'
import App from './App.vue'
import Popper from 'popper.js'
import { BootstrapVue, IconsPlugin, LayoutPlugin, ModalPlugin, CardPlugin, VBScrollspyPlugin, DropdownPlugin, TablePlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(CardPlugin)
Vue.use(VBScrollspyPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
