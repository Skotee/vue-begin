<template>
  <div class="main-container">
    <div class="header">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>{{ msg }}</h1>
      <br>
      <h2>Add new employee</h2>
      <v-flex class="text-xs-center py-3">
        <v-btn @click="handleOpenDialog($event, 'add')" color="primary">
          <v-icon>add</v-icon>Add Employee
        </v-btn>
      </v-flex>
      <h2>Display all employees</h2>
    </div>

  <template>
    <div
      class="text-xs-center"
      v-if="isLoading">
      <v-progress-circular
        active="loading"
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <ListEmployees
        v-else
        class="list-employees"
        :employees="paginatedEmployees"
        @edit="handleOpenDialog($event, 'edit')"
        @remove="handleRemove"
    />

  </template>
  <div class="text-xs-left pagination">
    <v-pagination
      class="pagination-list"
      v-model="currentPage"
      :length="length"
      :total-visible="10"
    ></v-pagination>
  </div>

    <Dialog
      @close="handleClose"
      @submit="handleSubmit"
      :employee="selected"
      v-model="showDialog"
      :title="dialogTitle"
    />
  </div>
</template>

<script>
import * as APIService from "../APIService";
import Dialog from "./Dialog";
import ListEmployees from "./ListEmployees";

export default {
  name: "Employees",
  components: {
    Dialog,
    ListEmployees
  },
  props: {
    msg: String,
    loading: Boolean,
  },
  data() {
    return {
      selected: null,
      isLoading: false,
      employees: [],
      employeesPerPage: 20,
      currentPage: 1,
      showDialog: false,
      dialogTitle: ""
    };
  },

  computed: {
    paginatedEmployees() {
      const startIndex = this.currentPage * this.employeesPerPage;
      const endIndex = (this.currentPage + 1) * this.employeesPerPage - 1;
      return this.employees.slice(startIndex, endIndex);
    },
    length() {
      return Math.floor(this.employees.length / this.employeesPerPage);
    }
  },

  mounted() {
    this.load();
  },

  methods: {
    async load() {
      this.isLoading = true;
      this.employees = await APIService.getEmployees();
      this.isLoading = false;
    },

    handleSubmit(value) {
      const employee = {
        employee_age: value.age,
        employee_name: value.name,
        employee_salary: value.salary
      };

      if (this.selected) {
        APIService.updateEmployee(this.selected.id, value);
      } else {
        APIService.createEmployee(value);
        this.employees.push(employee);
      }
      this.showDialog = false;
    },

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
    },

    handleClose() {
      this.showDialog = false;
    },

    async handleRemove(id) {
      await APIService.deleteEmployee(id);
      this.employees = this.employees.filter(employee => employee.id !== id);
    }
  }
};
</script>

<style scoped>
  .main-container {
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
  }
  .list-employees {
    overflow: auto;
  }
  img{
    width: 50px;
    height: auto;
  }
</style>
