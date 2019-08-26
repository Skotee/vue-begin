import cart from "./cart"
import {
  CART_MODULE
} from "../types/cart.types"
import snackbar from "./snackbar"
import {
  SNACKBAR_MODULE
} from "../types/snackbar.types"
import auth from "./auth"
import {
  AUTH_MODULE
} from "../types/auth.types"
export default {
  [CART_MODULE]: cart,
  [SNACKBAR_MODULE]: snackbar,
  [AUTH_MODULE]: auth
}
