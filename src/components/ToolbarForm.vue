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
    <v-btn @click="$emit('add')" color= "rgb(65, 184, 131)">
      <v-icon>add</v-icon>Add Employee
    </v-btn>
  </v-layout>
</template>

<script>
import {
  SORT_ALPHABETICAL,
  SORT_ASC_SALARY,
  SORT_DESC_SALARY,
  SORT_ASC_AGE,
  SORT_DESC_AGE
} from "../utils/sortOptions";

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
    },
    employee: {
      type: Object
    }
  },
  methods: {
    handleOpenDialog(value, mode) {
      //nazwa wydarzenia
      switch (mode) {
        case "add":
          this.dialogTitle = "Add employee";
          this.selected = null;
          break;
        case "edit":
          this.dialogTitle = "Edit employee";
          this.selected = value;
          break;
      }
      this.showDialog = true;
    }
  }
};
</script>

<style scoped>

</style>
