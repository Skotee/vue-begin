<template>
  <v-dialog v-model="value" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{title}}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field
                label="Employee name"
                v-model="form.name"
                required />
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                label="Salary"
                type="number"
                min="0"
                v-model="form.salary"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                label="Age"
                type="number"
                min="0"
                max="120"
                v-model="form.age"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat
          @click="$emit('close')">Close</v-btn>
        <v-btn color="blue darken-1" flat
          @click="$emit('submit', form)">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    props: {
      employee: {
        type: Object,
        default: null
      },
      title: {
        type: String,
        required: true
      },
      value: { //przekazany v-model showDialog z employees.vue
        type: Boolean,
        required: true,
      }
    },
    computed: {
      form(){
        return {
          name: this.employee ? this.employee.employee_name : "" ,
          salary: this.employee ? this.employee.employee_salary : "" ,
          age: this.employee ? this.employee.employee_age : "" 
        }
      }
    }
};

</script>

<style>
</style>
