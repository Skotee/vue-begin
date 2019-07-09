import axios from 'axios';
const API_URL = 'http://dummy.restapiexample.com/api/v1';
var id_employee;


  export const getEmployees = async () => {
    const url = `${API_URL}/employees`;
    const response = await axios.get(url);
    return response.data;
  }

  export const writeme = () => {
    console.log("siema");

  }

  export const createEmployee = async () => {
    const url = `${API_URL}/create`;
    const response = await axios.get(url);
    return response.data;
  }

  export const updateEmployee = async () => {
    const url = `${API_URL}/update/${id_employee}`;
    return axios.get(url).then(response => response.data);
  }

  export const deleteEmployee = async () => {
    const url = `${API_URL}/delete/${id_employee}`;
    return axios.get(url).then(response => response.data);
  }



