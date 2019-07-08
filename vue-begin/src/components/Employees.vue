<template>
  <div>
    <h1> {{ msg }}</h1>
    <p>Employees names:</p>
    <p
            v-for="employee in employees"
            class="employees"
            v-bind:key="employee.id"
        >
        {{ employee.employee_name }}
    </p>
  {{ employees }}
  </div>
</template>

<script>
//employee_name":"","employee_salary":"","employee_age":""
import * as APIService from '../APIService';

export default {
  name: 'Employees',
  props: {
    msg: String
  },
    data() {
        return {
            employees: [],
        };
    },

    mounted() {
        this.load();
        APIService.writeme();
    },
    methods: {
        async load() {
            this.employees = await APIService.getEmployees();
        },

        create() {
            APIService.createEmployee();
        }
    }
}
</script>

