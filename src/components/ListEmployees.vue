<template>
  <div>
    <v-list three-line>
      <v-list-tile v-for="employee in employees" class="employees" :key="employee.id">
        <slot :employee="employee"></slot>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "ListEmployees",
  props: {
    employees: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>
