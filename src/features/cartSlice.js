import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items : [],
  },
  reducers: {
    addTocart: (state, action) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromcart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
}); 
export const { addTocart, removeFromcart } = cartSlice.actions;

export default cartSlice.reducer;