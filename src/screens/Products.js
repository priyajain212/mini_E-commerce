import React ,{useEffect}from "react";  
import { addTocart } from "../features/cartSlice";
import { setCategory } from "../features/productsSlice";
import { fetchProducts, fetchCategories } from "../features/productsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
    const dispatch = useDispatch();
    const {items,selectedCategory,categories} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
    }, [dispatch]);

    const filtered = selectedCategory === "all" ? items : items.filter((item) => item.category === selectedCategory);

    return (  
        <div>
            <h1>Products</h1>
            <div className="container">
                
                <select
                className="filter"
                onChange ={(e) => dispatch(setCategory(e.target.value))}
                >
                    <option value="all">All</option>
                    {categories.map((c) => (
                        <option key={c} value={c}>
                          {typeof c === "string" ? c.charAt(0).toUpperCase() + c.slice(1) : c}
                        </option>
                    ))}
                </select>       

                <div className="grid">
                    {filtered.map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.image} alt={item.title} />       
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => dispatch(addTocart(item))}>
                                Add to Cart
                            </button>       
                            </div>
                    ))}       
                </div>
            </div>
        </div>
    );
}     