<template>
  <v-layout>
    <v-flex xs12 md4>
      <v-text-field
        v-model="value.name"
        label="Filter by employee name"
        append-icon="search"
        required
      ></v-text-field>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex xs12 md4>
      <v-select
      v-model="value.orderMode"
      :items="sortOptionsArray"
      label="Sort by"
      append-icon="sort"
      ></v-select>
    </v-flex>
  </v-layout>
</template>

<script>
import sortOptions from "../sortOptions";
import {
  SORT_ALPHABETICAL,
  SORT_ASC_SALARY,
  SORT_DESC_SALARY,
  SORT_ASC_AGE,
  SORT_DESC_AGE
} from "../sortOptions";

export default {
  name: "ToolbarForm",
  data() {
    return {
      sortOptionsArray: [
        SORT_ALPHABETICAL,
        SORT_ASC_SALARY,
        SORT_DESC_SALARY,
        SORT_ASC_AGE,
        SORT_DESC_AGE
      ]
    };
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
