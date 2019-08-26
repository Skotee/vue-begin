const Employees = () => import( /* webpackChunkName: "employees" */ '../views/Employees.vue')
const Cart = () => import( /* webpackChunkName: "cart" */ '../views/Cart.vue')
const Login = () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
const Register = () => import( /* webpackChunkName: "register" */ '../views/Register.vue')

const routes = [{
    path: '/cart',
    component: Cart,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    component: Employees,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  }
]

export default routes;
