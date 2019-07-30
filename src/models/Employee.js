import * as yup from 'yup';
import {
  assertObject
} from "../utils/validators"

const schema = yup.object().nullable().shape({
  employee_name: yup.string().required(),
  employee_age: yup
    .number()
    .required()
    .integer(),
  employee_salary: yup
    .number()
    .required()
    .integer(),
  id: yup
    .number()
    .required()
    .positive()
    .integer(),
});

export class Employee {
   constructor(data) {
     assertObject(data,schema);
     this.employee_name = data.employee_name;
     this.employee_age = data.employee_age;
     this.employee_salary = data.employee_salary;
     this.id = data.id;
   }
}