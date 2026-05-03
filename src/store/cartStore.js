import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      buyNowProduct: null,

      addToCart: (product) =>
        set((state) => {
          const exist = state.cart.find((item) => item.id === product.id);

          if (exist) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, qty) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: qty } : item,
          ),
        })),

      clearCart: () => set({ cart: [] }),

      setBuyNowProduct: (product) =>
        set({
          buyNowProduct: product,
        }),

      clearBuyNowProduct: () =>
        set({
          buyNowProduct: null,
        }),
    }),
    { name: "cart-storage" },
  ),
);
