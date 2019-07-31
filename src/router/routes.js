const Employees = () => import( /* webpackChunkName: "employees" */ '../views/Employees.vue')
const Cart = () => import( /* webpackChunkName: "cart" */ '../views/Cart.vue')

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
