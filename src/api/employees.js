import axios from 'axios';
const API_URL = process.env.VUE_APP_API_URL;

  export const getEmployees = async () => {
    const url = `${API_URL}/employees`;
    const { data } = await axios.get(url);
    return data;
  }

  export const createEmployee = async (payload) => {
    const url = `${API_URL}/create`;
    const {data} = await axios.post(url,payload);
    return data;
  }

  export const updateEmployee = async (idEmployee, payload) => {
    const url = `${API_URL}/update/${idEmployee}`;
    const {data} = await axios.put(url,payload);
    return data;
  }

  export const deleteEmployee = async (idEmployee) => {
    const url = `${API_URL}/delete/${idEmployee}`;
    const response = await axios.delete(url);
    return response;
  }