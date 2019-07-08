<template>
  <div>
    <h1> {{ msg }}</h1>
    <p>Employees names:</p>
    <p  v-for="employee in currentPageEmployees"
        class="employees"
        v-bind:key="employee.id"
        >
        {{ employee.employee_name }} {{ employee.employee_salary | currency }} {{ employee.employee_age }}
    </p>
    <div class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="employeesPerPage"
      ></v-pagination>
    </div>
    <!-- <ul>
      <li v-for="page in paginatedEmployees">
        <button @click="changePage(page.page)">{{page.page}}</button>
      </li>
    </ul> -->
  </div>
</template>

<script>
import * as APIService from '../APIService';

export default {
  name: 'Employees',
  props: {
    msg: String
  },
    data() {
        return {
            employees: [],
            employeesPerPage: 20,
            currentPage: 1
        };
    },

    computed: {
      paginatedEmployees() {
        this.employees.slice(this.employees.currentPageEmployees * employeesPerPage, (this.employees.currentPageEmployees + 1) * employeesPerPage - 1);
      },

      currentPageEmployees() {
        let currentPageEmployees = this.paginatedEmployees.find(pages => pages.page == this.currentPage);
        return currentPageEmployees ? currentPageEmployees.employees : [];
      }
    },

    mounted() {
        this.load();
    },

    methods: {
      changePage(pageNumber) {
        if(pageNumber !== this.currentPage)
        this.currentPage = pageNumber;
      },
      async load() {
          this.employees = await APIService.getEmployees();
      },

      create() {
          APIService.createEmployee();
      }
    }
}
</script>

