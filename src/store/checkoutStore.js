import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCheckoutStore = create(
  persist(
    (set) => ({
      userInfo: {
        firstName: "",
        lastName: "",
        city: "",
        town: "",
        fullAddress: "",
        phone: "",
        email: "",
        delivery: "standard",
      },

      setUserInfo: (data) =>
        set((state) => ({
          userInfo: { ...state.userInfo, ...data },
        })),

      clearCheckout: () =>
        set({
          userInfo: {
            firstName: "",
            lastName: "",
            city: "",
            town: "",
            fullAddress: "",
            phone: "",
            email: "",
            delivery: "standard",
          },
        }),
    }),
    { name: "checkout-storage" },
  ),
);
