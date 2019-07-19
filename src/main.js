import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Vue2Filters from 'vue2-filters'
import "vuetify/dist/vuetify.min.css"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

Vue.use(Vuetify);
Vue.use(Vue2Filters);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


