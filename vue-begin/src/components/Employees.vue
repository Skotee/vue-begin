<template>
  <div>
    <h1> {{ msg }}</h1>

    <h2>Add new employee</h2>
    <v-flex class="text-xs-center py-3">
      <v-btn @click="showDialog(true,employee)" color="primary">
        <v-icon>add</v-icon> Add Employee
      </v-btn>
    </v-flex>

    <h2>Display all employees</h2>
    <v-list three-line>
      <v-list-tile v-for="employee in paginatedEmployees"
        class="employees"
        v-bind:key="employee.id"
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
        <v-btn icon @click="showDialog(true, employee)">
          <v-icon>edit</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn icon @click="remove(employee.id)">
          <v-icon>delete</v-icon>
        </v-btn>
      </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <div class="text-xs-left">
      <v-pagination
        class="pagination-list"
        v-model="currentPage"
        :length="Math.floor(employees.length/employeesPerPage)"
        :total-visible="10"
      ></v-pagination>
    </div>

   <v-dialog v-model="dialogShow" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline" v-if="dialogForm.dialogId">Update employee</span>
        <span class="headline" v-else>Add employee</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field 
                label="Employee name"
                v-model="dialogForm.dialogName" 
                required/>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                label="Salary"
                type="number"
                min="0"
                v-model="dialogForm.dialogSalary" 
                required>
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field 
                label="Age"
                type="number"
                min="0"
                max="120"
                v-model="dialogForm.dialogAge" 
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat
          @click="showDialog(false)">Close</v-btn>
        <v-btn color="blue darken-1" flat
         v-if="dialogForm.dialogId" @click="add()">Add</v-btn>
         <v-btn color="blue darken-1" flat
         v-else @click="update(dialogForm.dialogId)">Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>

<script>
  import * as APIService from '../APIService';

const createDefaultItem = () => ({
  dialogName: '',
  dialogSalary: '',
  dialogShow: false,
  dialogId: true,
  dialogAge: null,
})

  export default {
    name: 'Employees',
    props: {
      msg: String
    },
    data() {
        return {
            employees: [],
            employeesPerPage: 20,
            currentPage: 1,
            dialogShow: false,
            dialogForm:{
              dialogId: null,
              dialogName: null,
              dialogSalary: null,
              dialogAge: null,
            }
        };
    },

    computed: {
      paginatedEmployees() {
        return this.employees.slice(
          this.currentPage * this.employeesPerPage, (this.currentPage + 1) * this.employeesPerPage - 1);
      }
    },

    mounted() {
      this.load();
    },

    methods: {
      async load() {
        this.employees = await APIService.getEmployees();
      },

      showDialog(show, item = createDefaultItem()  ) {
        this.dialogShow = show;
        this.dialogForm = {...item};
        // this.dialogForm.dialogId = (item || {}).id;
        // this.dialogForm.dialogName = (item || {}).name;
        // this.dialogForm.dialogSalary = (item || {}).salary;
        // this.dialogForm.dialogAge = (item || {}).age;
      },

      add() {
        let payload = {
          name: this.dialogName,
          salary: this.dialogSalary,
          age: this.dialogAge
        }
        console.log(name);
        APIService.createEmployee(data,payload);
        this.employees.push(payload)
        showDialog(false);
      },

      update(id) {
        let payload = {
          name: this.dialogName,
          salary: this.dialogSalary,
          age: this.dialogAge
        }
        this.employees = APIService.updateEmployee(id,payload);
        showDialog(false);
      },

      async remove(id) {
        await APIService.deleteEmployee(id);
        let arrayIndex = this.employees.findIndex(x => x.id === id);
        this.employees.splice(arrayIndex,1)
      }
    }
  }
</script>

