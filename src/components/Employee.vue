<template>
  <fragment>
    <v-list-tile-content>
      <v-list-tile-title>Name: {{ employee.employee_name }}</v-list-tile-title>
      <v-list-tile-title>Salary: {{ employee.employee_salary | currency }}</v-list-tile-title>
      <v-list-tile-title>Age: {{ employee.employee_age }}</v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn :disabled="isInCart(employee.id)" icon @click="addItem(employee)">
        <v-icon>add_shopping_cart</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-action>
      <v-btn icon @click="$emit('edit',employee)">
        <v-icon>edit</v-icon>
      </v-btn>
    </v-list-tile-action>
    <v-list-tile-action>
      <v-btn icon @click="$emit('remove',employee.id)">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-list-tile-action>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { mapActions, mapGetters } from "vuex";
import {
  ACTION_ADD_ITEM_TO_CART,
  GET_CART_ITEMS
} from "../store/types/cart.types";

export default {
  name: "Employee",
  components: { Fragment },
  props: {
    employee: {
      type: Object
    }
  },
  methods: {
    ...mapActions({
      addItem: ACTION_ADD_ITEM_TO_CART
    }),
    isInCart(id) {
      return this.items.some(item => item.id === id);
    }
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
