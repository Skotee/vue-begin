<template>
  <div class="main-container">
    <Header></Header>
    <template>
      <ToolbarForm v-model="filters"
        @add="handleOpenDialog($event, 'add')"></ToolbarForm>
      <div class="text-xs-center" v-if="isLoading">
        <v-progress-circular active="loading" indeterminate color="primary"></v-progress-circular>
      </div>
      <ListEmployees v-else class="list-employees" :employees="paginatedEmployees">
        <template v-slot:default="{employee}">
          <Employee
            :employee="employee"
            @edit="handleOpenDialog($event, 'edit')"
            @remove="handleRemove"
          ></Employee>
        </template>
      </ListEmployees>
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
import ToolbarForm from "../components/ToolbarForm";
import {getEmployees,createEmployee,updateEmployee,deleteEmployee} from "../api/employees";
import Dialog from "../components/Dialog";
import ListEmployees from "../components/ListEmployees";
import { mapping, SORT_ALPHABETICAL } from "../utils/sortOptions";
import orderBy from "lodash-es/orderBy";
import Employee from "../components/Employee";
import Header from "../components/Header";
import { mapMutations } from "vuex";
import { SET_SNACK_MESSAGE } from "../store/types/snackbar.types";

export default {
  name: "Employees",
  components: {
    Dialog,
    ListEmployees,
    ToolbarForm,
    Employee,
    Header
  },
  props: {
    loading: Boolean
  },
  data() {
    return {
      selected: null,
      isLoading: false,
      employees: [],
      employeesPerPage: 20,
      currentPage: 1,
      showDialog: false,
      dialogTitle: "",
      filters: {
        name: "",
        orderMode: SORT_ALPHABETICAL
      },
      snackName: ""
    };
  },

  computed: {
    paginatedEmployees() {
      const startIndex = (this.currentPage - 1) * this.employeesPerPage;
      const endIndex = this.currentPage * this.employeesPerPage;
      return this.sortedEmployees.slice(startIndex, endIndex);
    },
    filteredEmployees() {
      return this.employees.filter(employee =>
        employee.employee_name
          .toLowerCase()
          .includes(this.filters.name.toLowerCase())
      );
    },
    sortedEmployees() {
      const { field, direction } = mapping[this.filters.orderMode];
      return orderBy(this.filteredEmployees, field, direction);
    },
    length() {
      return Math.ceil(this.sortedEmployees.length / this.employeesPerPage);
    }
  },

  mounted() {
    this.load();
  },

  methods: {
    async load() {
      this.isLoading = true;
      this.employees = await getEmployees();
      this.isLoading = false;
    },
    handleSubmit(value) {
      const employee = {
        employee_age: value.age,
        employee_name: value.name,
        employee_salary: value.salary
      };
      this.selected
        ? this.handleUpdate(value)
        : this.handleCreate(value, employee);

      this.showDialog = false;
      this.$router.push("/");

      this.selected
        ? this.setSnack("Edycja zakończona z powodzeniem")
        : this.setSnack("Pracownik został dodany");
    },
    handleCreate(value, employee) {
      createEmployee(value);
      this.employees.push(employee);
    },
    handleUpdate(value) {
      updateEmployee(this.selected.id, value);
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
      await deleteEmployee(id);
      this.employees = this.employees.filter(employee => employee.id !== id);
      this.setSnack("Usunięto pracownika z bazy")
    },
    ...mapMutations({
      setSnack: SET_SNACK_MESSAGE
    })
  }
};
</script>

<style scoped>
.main-container {
  display: grid;
  height: 100vh;
  grid-template-rows: auto auto 1fr auto;
}
.list-employees {
  overflow: auto;
}
</style>
