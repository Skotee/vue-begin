import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import Vue2Filters from 'vue2-filters'

Vue.config.productionTip = false

Vue.use(Vuetify);
Vue.use(Vue2Filters);

new Vue({
  render: h => h(App),
}).$mount('#app')


