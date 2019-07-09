import axios from 'axios';
const API_URL = 'http://dummy.restapiexample.com/api/v1';

  export const getEmployees = async () => {
    const url = `${API_URL}/employees`;
    const response = await axios.get(url);
    return response.data;
  }

  export const createEmployee = async (payload) => {
    const url = `${API_URL}/create`;
    const response = await axios.post(url,payload);
    return response.data;
  }

  export const updateEmployee = async (idEmployee, payload) => {
    const url = `${API_URL}/update/${idEmployee}`;
    const response = await axios.put(url,payload);
    return response.data;
  }

  export const deleteEmployee = async (idEmployee) => {
    const url = `${API_URL}/delete/${idEmployee}`;
    const response = await axios.delete(url);
    return response.data;
  }

  // export const writeme = () => {
  //   console.log("siema");
  // }