import { create } from "zustand";

// Auth Store
export const useAuthStore = create((set) => ({
  user: null,
  token: null,

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
  isAdmin: () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    return user?.role === "admin";
  },
}));

// Language Store
export const useLanguageStore = create((set) => ({
  language:
    typeof window !== "undefined"
      ? localStorage.getItem("language") || "en"
      : "en",

  setLanguage: (language) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
    set({ language });
  },
}));

// Cart Store - STARTS EMPTY
export const useCartStore = create((set, get) => {
  // Initialize cart from localStorage ONLY if it exists and is valid
  const initCart = () => {
    try {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("cart");
        if (stored) {
          const parsed = JSON.parse(stored);
          return Array.isArray(parsed) ? parsed : [];
        }
      }
    } catch (e) {
      console.error("Failed to load cart:", e);
    }
    return [];
  };

  return {
    items: initCart(),

    addItem: (item) => {
      const current = get().items;
      const existingItem = current.find((i) => i._id === item._id);

      if (existingItem) {
        existingItem.quantity =
          (existingItem.quantity || 1) + (item.quantity || 1);
      } else {
        current.push({ ...item, quantity: item.quantity || 1 });
      }

      localStorage.setItem("cart", JSON.stringify(current));
      set({ items: [...current] });
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
        set({ items: [...items] });
      }
    },

    clearCart: () => {
      localStorage.removeItem("cart");
      set({ items: [] });
    },

    getTotal: () => {
      return get().items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
    },
  };
});

// Menu Store
export const useMenuStore = create((set) => ({
  items: [],
  loading: false,
  error: null,

  setItems: (items) => set({ items }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
