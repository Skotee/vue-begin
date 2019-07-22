const Employees = () => import( /* webpackChunkName: "employees" */ '../components/Employees.vue')
const Cart = () => import( /* webpackChunkName: "cart" */ '../components/Cart.vue')

const routes = [{
    path: '/cart',
    component: Cart,
  },
  {
    path: '/',
    component: Employees,
  },

]

export default routes;
