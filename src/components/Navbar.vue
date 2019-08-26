<template>
  <v-toolbar fixed dark color="#41B883">
    <v-toolbar-title>Employee CRUD App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/" flat>Employee list</v-btn>
      <v-btn to="/cart" flat>
        <v-badge color="#34495E" right>
          <template v-slot:badge>
            <span>{{ cartCounter }}</span>
          </template>
          <v-icon>shopping_cart</v-icon>
        </v-badge>
      </v-btn>
      <template v-if="islogged">
        <v-btn flat>Logged as {{ credential.name }}</v-btn>
        <v-btn @click="handleLogout" flat>Logout</v-btn>
      </template>
      <template v-else>
        <v-btn to="/login" flat>Login</v-btn>
      </template>
      <v-btn to="/register" flat>Register</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { GET_CART_TOTAL_COUNT } from "../store/types/cart.types";
import {
  GET_USERNAME,
  AUTH_USERNAME,
  AUTH_TOKEN,
  IS_LOGGED,
  ACTION_LOGOUT
} from "../store/types/auth.types";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      credential: {
        name: "",
        password: ""
      }
    };
  },
  name: "Navbar",
  computed: {
    ...mapGetters({
      cartCounter: GET_CART_TOTAL_COUNT,
      username: GET_USERNAME,
      islogged: IS_LOGGED
    }),
    isLogged: function() {
      return this.$store.getters.isLogged;
    }
  },
  methods: {
    ...mapActions({
      logout: ACTION_LOGOUT
    }),
    async handleLogout(e) {
      e.preventDefault();
      const { name, password } = "";
      await this.logout({
        name,
        password
      });
      this.$router.push("/"); //czy ({path:'/'})?
    }
  }
};
</script>

<style>
</style>
