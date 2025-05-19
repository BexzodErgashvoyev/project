import axios from "axios"
export const instance = axios.create({
    baseURL: 'https://6808cd1c942707d722dfd170.mockapi.io/users/',
    headers: {'Content-Type': 'application/json'}
  });