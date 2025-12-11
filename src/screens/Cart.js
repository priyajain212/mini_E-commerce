import React from "react";
import { useSelector ,useDispatch} from "react-redux";     
import { removeFromcart } from "../features/cartSlice";

export default function Cart() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="container">
           <h1>Cart</h1>
              {items.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <div className="cart-list">
                    {items.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div>
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                               </div>
                               <button onClick={() => dispatch(removeFromcart(item.id))}>
                                Remove
                               </button>
                               </div>
                    ))}
                </div>  
                )}
        </div>
    );
}