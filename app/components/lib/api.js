// lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://booksy-backend.vercel.app", 
  
  withCredentials: true,
});

export default api;
