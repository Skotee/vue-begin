<template>
      <v-list three-line>

      <v-list-tile v-for="employee in employees"
        class="employees"
        :key="employee.id"
      >
        <v-list-tile-content>
          <v-list-tile-title>
            Name: {{ employee.employee_name }}
          </v-list-tile-title>
          <v-list-tile-title>
            Salary: {{ employee.employee_salary | currency }}
          </v-list-tile-title>
          <v-list-tile-title>
            Age: {{ employee.employee_age }}
          </v-list-tile-title>
        </v-list-tile-content>
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
      </v-list-tile>
    </v-list>
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
}
</script>

<style>

</style>
