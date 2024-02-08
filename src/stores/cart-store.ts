import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as cartInMemory from "./helpers/cart-in-memory";

export interface ProductCartProps extends ProductProps {
    quantity: number;
}
interface StateProps {
    products: ProductCartProps[];
    add: (product: ProductProps) => void;
    remove: (productId: string) => void;
}

export const useCardStore = create(
    persist<StateProps>(
        (set) => ({
            products: [],
            add: (product: ProductProps) =>
                set((state) => ({
                    products: cartInMemory.add(state.products, product),
                })),

            remove: (productId: string) =>
                set((state) => ({
                    products: cartInMemory.remove(state.products, productId),
                })),
        }),
        {
            name: "nlw-expert:cart",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
