import fetch from '../services/fetch';

export const logIn = async (payload) => {
  const {
    data
  } = await fetch.post("/login", payload);
  return data;
}

export const register = async (payload) => {
  const {
    data
  } = await fetch.post("/register", payload);
  return data;
}