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
      <template v-if="isLogged">
        <span class="p-21">Logged as {{ username.name }}</span>
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
import { SET_SNACK_MESSAGE } from "../store/types/snackbar.types";
import {
  GET_USERNAME,
  AUTH_USERNAME,
  AUTH_TOKEN,
  IS_LOGGED,
  ACTION_LOGOUT
} from "../store/types/auth.types";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      cartCounter: GET_CART_TOTAL_COUNT,
      username: GET_USERNAME,
      isLogged: IS_LOGGED
    })
    // isLogged: function() {
    //   return this.$store.getters.isLogged; //jaka różnica?
    // }
  },
  methods: {
    ...mapActions({
      logout: ACTION_LOGOUT
    }),
    ...mapMutations({
      setSnack: SET_SNACK_MESSAGE
    }),
    async handleLogout(e) {
      e.preventDefault();
      await this.logout();
      this.setSnack("You have succesfully logged out");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.p-21{
  padding: 21px;
}
</style>
