<template>
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
</template>

<script>
import { GET_CART_TOTAL_COUNT } from "../store/types/cart.types";
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
  ...mapGetters({
    cartCounter: GET_CART_TOTAL_COUNT
  })
}
}
</script>

<style>

</style>
