<template>
  <v-app id="app">
    <v-toolbar fixed dark color="#41B883">
      <v-toolbar-title>Employee CRUD App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Employee list</v-btn>
        <v-btn to="/cart" flat>
          <v-badge color = #34495E right>
            <template v-slot:badge>
              <span>{{  cartCounter }}</span>
            </template>
            <v-icon>shopping_cart</v-icon>
          </v-badge>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <div class="main-view">
      <br />
      <br />
      <br />
      <br />
      <router-view></router-view>
    </div>
    <Snackbar></Snackbar>
  </v-app>
</template>

<script>
import {  GET_CART_TOTAL_COUNT  } from "./store/types/cart.types"
import { mapGetters } from 'vuex'
import Snackbar from "./components/Snackbar";

export default {
  name: "app",
  components: {
    Snackbar
  },
  computed:{
    ...mapGetters({
      cartCounter: GET_CART_TOTAL_COUNT
    })
  },
  data() {
    return {
      msg: "xd"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
