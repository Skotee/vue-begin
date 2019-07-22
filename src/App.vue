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
  </v-app>
</template>

<script>
import Employees from "./components/Employees.vue";
import {  GET_CART_TOTAL_COUNT  } from "./store/types/cart.types"
import { mapGetters } from 'vuex'

export default {
  name: "app",
  components: {
    Employees
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
