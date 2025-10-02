import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useHandleWishListStore = create(
    persist(
        (set, get) => ({
            wishList: [],
            addToWishList: (product) => {
                const existedProduct = get().wishList.find((item) => item.id == product.id);
                if (existedProduct) {
                    const filterWishList = get().wishList.filter((item) => item.id != product.id);
                    set({ wishList: filterWishList });
                    toast.error("Removed from card");
                } else {
                    toast.success("Added to card");
                    set({ wishList: [...get().wishList, product] });
                }
            },
            inWishList: (id) => get().wishList.find((item) => item.id == id),
        }),
        {
            name: "wishList",
        },
    ),
);