import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import fetch from '../services/fetch'
import {
  SET_TOKEN
} from './types/auth.types'
import createAuthTokenPlugin from '../plugins/fetch-plugin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [
    createAuthTokenPlugin(fetch, {
      setTokenMutationType: SET_TOKEN
    })
  ],
  strict: process.env.NODE_ENV !== 'production',
})
