import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cart/cartSlice";
import userReducer from "./Features/cart/user/user";

export const store = configureStore({
  reducer: { cart: cartReducer, userState: userReducer },
});
