import axios from "axios";

const baseConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

const api = axios.create(baseConfig);

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
