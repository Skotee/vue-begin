<template>
  <v-dialog v-model="value" persistent max-width="500px">
    <v-card>
      <Form :key="formKey" @submit="handleSubmit" :initial-values="form" :validation-schema="validations">
        <template slot-scope="props">
          <v-card-title>
            <span class="headline">{{ title }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="props.values.name"
                    :error-messages="getNameErrors(props.errors.name)"
                    label="Employee name"
                    required
                  />
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="props.values.salary"
                    :error-messages="getSalaryErrors(props.errors.salary)"
                    label="Salary"
                    type="number"
                    min="0"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    v-model="props.values.age"
                    :error-messages="getAgeErrors(props.errors.age)"
                    label="Age"
                    type="number"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="$emit('close')">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="props.handleReset">Clear</v-btn>
            <v-btn color="blue darken-1" flat @click="props.handleSubmit">Save</v-btn>
          </v-card-actions>
        </template>
      </Form>
    </v-card>
  </v-dialog>
</template>

<script>
import { Form } from "@v-forms/core";
import {
  required,
  minLength,
  numeric,
  minValue
} from "vuelidate/lib/validators";

export default {
  components: {
    Form
  },
  data() {
    return {
      formKey: 0,
      validations: {
        salary: {
          required,
          minValue: minValue(10)
        },
        name: {
          required,
          minLength: minLength(3)
        },
        age: {
          numeric,
          minValue: minValue(18)
        }
      }
    };
  },
  props: {
    employee: {
      type: Object,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    value: {
      //przekazany v-model showDialog z employees.vue
      type: Boolean,
      required: true
    }
  },
  computed: {
    form() {
      return {
        name: this.employee ? this.employee.employee_name : "",
        salary: this.employee ? this.employee.employee_salary : "",
        age: this.employee ? this.employee.employee_age : ""
      };
    }
  },
  methods: {
    handleSubmit(values) {
      this.$emit("submit", values);
    },
    getNameErrors({ required, minLength } = {}) {
      const errors = [];
      if (required) errors.push("Name is required");
      if (minLength) errors.push("Name is too short");
      return errors;
    },
    getSalaryErrors({ numeric, minValue } = {}) {
      const errors = [];
      if (numeric) errors.push("Salary must be numeric");
      if (minValue) errors.push("Salary is too low");
      return errors;
    },
    getAgeErrors({ numeric, minValue } = {}) {
      const errors = [];
      if (numeric) errors.push("Age must be numeric");
      if (minValue) errors.push("You have to be 18 years old at least");
      return errors;
    }
  },
  watch: {
    form: function() {
      this.formKey +=1;
    }
  }
};
</script>

<style>
</style>
