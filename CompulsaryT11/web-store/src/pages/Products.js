import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  { id: 1, name: "Lap top", price: 2000 },
  { id: 2, name: "Wireless Mouse", price: 350 },
  { id: 3, name: "Playstation", price: 5000 },
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R{product.price} 
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
