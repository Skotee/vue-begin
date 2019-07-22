<template>
  <div>
    <h2>Your cart:</h2>
    <v-list three-line>
      <v-list-tile v-for="item in items" :key="item.id">
        <v-list-tile-content>
          <v-list-tile-title>Name: {{ item.employee_name }}</v-list-tile-title>
          <v-list-tile-title>Salary: {{ item.employee_salary | currency }}</v-list-tile-title>
          <v-list-tile-title>Age: {{ item.employee_age }}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon @click="removeItem(item.id)">
            <v-icon>remove_shopping_cart</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <h2>Remove all items</h2>
    <v-btn icon @click="removeAll">
      <v-icon>remove_shopping_cart</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  ACTION_REMOVE_ITEM_FROM_CART,
  ACTION_REMOVE_ALL_ITEMS,
  GET_CART_ITEMS
} from "../store/types/cart.types";

export default {
  name: "Cart",
  methods: {
    ...mapActions({
      removeItem: ACTION_REMOVE_ITEM_FROM_CART,
      removeAll: ACTION_REMOVE_ALL_ITEMS
    })
  },
  computed: {
    ...mapGetters({
      items: GET_CART_ITEMS
    })
  }
};
</script>

<style>
</style>
