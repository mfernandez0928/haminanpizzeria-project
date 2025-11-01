import { create } from "zustand";

// Auth Store
export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,

  setUser: (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    set({ user, token });
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },

  isLoggedIn: () => !!localStorage.getItem("token"),
  isAdmin: () => JSON.parse(localStorage.getItem("user"))?.role === "admin",
}));

// Cart Store
export const useCartStore = create((set, get) => ({
  items: JSON.parse(localStorage.getItem("cart")) || [],

  addItem: (item) => {
    const current = get().items;
    const existingItem = current.find((i) => i._id === item._id);

    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
    } else {
      current.push({ ...item, quantity: item.quantity || 1 });
    }

    localStorage.setItem("cart", JSON.stringify(current));
    set({ items: current });
  },

  removeItem: (id) => {
    const filtered = get().items.filter((i) => i._id !== id);
    localStorage.setItem("cart", JSON.stringify(filtered));
    set({ items: filtered });
  },

  updateQuantity: (id, quantity) => {
    const items = get().items;
    const item = items.find((i) => i._id === id);

    if (item) {
      item.quantity = Math.max(1, quantity);
      localStorage.setItem("cart", JSON.stringify(items));
      set({ items });
    }
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ items: [] });
  },

  getTotal: () => {
    return get().items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
}));

// Menu Store
export const useMenuStore = create((set) => ({
  items: [],
  loading: false,
  error: null,

  setItems: (items) => set({ items }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
