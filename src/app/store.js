import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";

const loadcart = () => {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
    } catch  {
    return [];
    }};

    const savedCart = (state) =>{
         localStorage.setItem("cart", JSON.stringify(state.cart.items));
        
    };

    const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
    preloadedState: {
        cart:{ items: loadcart()}}});
    store.subscribe(() => { savedCart(store.getState()); });

export default store;