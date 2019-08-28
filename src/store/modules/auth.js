import {
  AUTH_USERNAME,
  AUTH_TOKEN,
  GET_USERNAME,
  SET_USERNAME,
  ACTION_LOGIN,
  ACTION_LOGOUT,
  SET_TOKEN,
  IS_LOGGED
} from "../types/auth.types"
import {
  TokenService
} from "../../services/storage";
import {
  logIn
} from "../../api/users";

export default {
  state: {
    [AUTH_TOKEN]: TokenService.getToken() || '',
    [AUTH_USERNAME]: '',
  },
  mutations: {
    [SET_USERNAME]: (state, payload) => {
      state[AUTH_USERNAME] = payload;
    },
    [SET_TOKEN]: (state, payload) => {
      state[AUTH_TOKEN] = payload
    },
  },
  actions: {
    [ACTION_LOGIN]: async function ({ commit }, payload) {
      try {
        const {
          token,
          user
        } = await logIn(payload)
        commit(SET_TOKEN, token);
        TokenService.saveToken(token)
        commit(SET_USERNAME, user);
      } catch(err) {
        TokenService.removeToken()
      }
    },
    [ACTION_LOGOUT]: function ({
      commit
    }) {
      commit(SET_TOKEN, '')
      TokenService.removeToken();
      commit(SET_USERNAME, null);
    },
  },
  getters: {
    [GET_USERNAME]: state => state[AUTH_USERNAME],
    [IS_LOGGED]: state => !!state[AUTH_TOKEN],
  }
}
