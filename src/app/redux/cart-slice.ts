// // "use client";
// // import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // interface CartItem {
// //   id: number;
// //   title: string;
// //   price: number;
// //   image: string;
// // }

// // const cartSlice = createSlice({
// //   name: "Cart",
// //   initialState: [] as CartItem[],
// //   reducers: {
// //     add(state, action: PayloadAction<CartItem>) {
// //       state.push(action.payload);
// //     },
// //     remove(state, action: PayloadAction<number>) {
// //       return state.filter((item) => item.id !== action.payload);
// //     },
// //   },
// // });

// // export const { add, remove } = cartSlice.actions;
// // export default cartSlice.reducer;


"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

// Retrieve the cart from localStorage or initialize with an empty array
const getInitialCart = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: getInitialCart(),
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state);
    },
    remove(state, action: PayloadAction<number>) {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    },
    increment(state, action: PayloadAction<number>) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCartToLocalStorage(state);
    },
    decrement(state, action: PayloadAction<number>) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCartToLocalStorage(state);
    },
  },
});

export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
