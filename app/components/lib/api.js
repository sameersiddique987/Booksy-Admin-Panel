// lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // ✅ backend URL
  withCredentials: true,
});

export default api;
