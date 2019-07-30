import {
  SET_SNACK_MESSAGE
} from "../types/snackbar.types"

export default {
  state: {
    snack: ""
  },
  mutations: {
    [SET_SNACK_MESSAGE]: function (state, snack) {
      state.snack = snack
    }
  }
}
