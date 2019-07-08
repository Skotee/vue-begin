import axios from 'axios';
const API_URL = 'http://dummy.restapiexample.com/api/v1';
var id_employee;


  export const getEmployees = async () => {
    const url = `${API_URL}/employees`;
    const response = await axios.get(url);
    console.log(response.data[0]);
    return response.data;
  }

  export const writeme = () => {
    console.log("siema");

  }

//   createEmployee() {
//     const url = `${API_URL}/create`;
//     return axios.get(url).then(response => response.data);
//   }

//   updateEmployee() {
//     const url = `${API_URL}/update/${id_employee}`;
//     return axios.get(url).then(response => response.data);
//   }

//   deleteEmployee() {
//     const url = `${API_URL}/delete/${id_employee}`;
//     return axios.get(url).then(response => response.data);
//   }



