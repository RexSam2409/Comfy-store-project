import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    clearcart: (state) => {
      console.log(state);
    },
    addItem: (state) => {
      console.log(state);
    },
    removeItem: (state) => {
      console.log(state);
    },
    editItem: (state) => {
      console.log(state);
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
