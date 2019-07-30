import cart from "./cart"
import {
  CART_MODULE
} from "../types/cart.types"
import snackbar from "./snackbar"
import {
  SNACKBAR_MODULE
} from "../types/snackbar.types"
export default {
  [CART_MODULE]: cart,
  [SNACKBAR_MODULE]: snackbar
}
