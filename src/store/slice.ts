import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

// export interface ProductState {
//   cartItems: {};
// }

export const productData = createSlice({
  name: "product data",
  initialState: {
    showCart: false,
    cartItems: [],
  },
  reducers: {
    setShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const ProductDataReducer = productData.reducer;
export const { setCartItems, setShowCart } = productData.actions;
