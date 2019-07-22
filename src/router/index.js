import routes from "./routes"
import Router from "vue-router"
import Vue from "vue"

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history'
})

export default router;