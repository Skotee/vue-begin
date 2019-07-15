<template>
  <v-dialog v-model="value" persistent max-width="500px">
    <v-card>
      <Form @submit="handleSubmit" :initial-values="form" :validation-schema="validations">
        <template slot-scope="props">
          <v-card-title>
            <span class="headline">{{ title }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6>
                  <v-text-field
                    value="props.values.name"
                    :error-messages="getNameErrors(props.errors.name)"
                    label="Employee name"
                    v-model="form.name"
                    @change="props.values.name = $event;"
                    required
                  />
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    :value="props.values.salary"
                    :error-messages="getSalaryErrors(props.errors.salary)"
                    label="Salary"
                    type="number"
                    min="0"
                    v-model="form.salary"
                    @change="props.values.salary = $event;"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    :value="props.values.age"
                    :error-messages="getAgeErrors(props.errors.age)"
                    label="Age"
                    type="number"
                    v-model="form.age"
                    @change="props.values.age = $event;"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="$emit('close')">Close</v-btn>
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
  maxLength,
  salary,
  numeric,
  minValue
} from "vuelidate/lib/validators";
import { setTimeout } from "timers";

export default {
  components: {
    Form
  },
  data() {
    return {
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
    handleSubmit(values, actions) {
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
  }
};
</script>

<style>
</style>
