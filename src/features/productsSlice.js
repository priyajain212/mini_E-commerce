import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  });

  export const fetchCategories = createAsyncThunk(
    "products/fetchCategories",
    async () => {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        return res.json();
    }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categories: [],
   selectedCategory: "all",},
    reducers: {
        setCategory : (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
  extraReducers: (builder) => {
  builder.addCase(fetchProducts.fulfilled, (state, action) => {
    // store fetched products in `items`
    state.items = action.payload;
  });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
    });
    },});
    export const { setCategory } = productsSlice.actions;

    export default productsSlice.reducer;