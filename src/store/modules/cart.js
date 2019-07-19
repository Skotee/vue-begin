import {
  CART_ITEMS_KEY,
  GET_CART_TOTAL_COUNT,
  GET_CART_ITEMS,
  SET_CART_ITEMS,
  ACTION_ADD_ITEM_TO_CART,
  ACTION_REMOVE_ITEM_FROM_CART,
  ACTION_REMOVE_ALL_ITEMS
} from "../types/cart.types"

export default {
  state: {
    [CART_ITEMS_KEY]: []
  },
  actions: {
    [ACTION_ADD_ITEM_TO_CART]: function ({
      commit,
      state
    }, payload) {
      const newState = [...state[CART_ITEMS_KEY], payload];
      commit(SET_CART_ITEMS, newState);
    },
    [ACTION_REMOVE_ALL_ITEMS]: function ({
      commit
    }) {
      commit(SET_CART_ITEMS, []);
    },
    [ACTION_REMOVE_ITEM_FROM_CART]: function ({
      commit,
      state
    }, id) {
      const newState = state[CART_ITEMS_KEY].filter(item => item.id !== id);
      commit(SET_CART_ITEMS, newState);
    }
  },
  mutations: {
    [SET_CART_ITEMS]: function (state, payload) {
      state[CART_ITEMS_KEY] = payload;
    }
  },
  getters: {
    [GET_CART_TOTAL_COUNT]: function (state) {
      return state[CART_ITEMS_KEY].length;
    },
    [GET_CART_ITEMS]: function(state){
      return state[CART_ITEMS_KEY];
    }
  }
}
