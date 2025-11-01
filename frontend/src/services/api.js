import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  register: (data) => api.post("/auth/register", data),
  login: (data) => api.post("/auth/login", data),
  getMe: () => api.get("/auth/me"),
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};

// Menu APIs
export const menuAPI = {
  getAll: (category = null) => {
    const params = category ? `?category=${category}` : "";
    return api.get(`/menu${params}`);
  },
  getById: (id) => api.get(`/menu/${id}`),
};

// Order APIs
export const orderAPI = {
  create: (data) => api.post("/orders", data),
  getUserOrders: (userId) => api.get(`/orders/user/${userId}`),
  getById: (id) => api.get(`/orders/${id}`),
};

export default api;
