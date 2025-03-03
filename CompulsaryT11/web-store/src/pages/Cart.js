import React from "react";
import { useSelector } from "react-redux";
import ShippingSelector from "../components/ShippingSelector";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const shippingMethod = useSelector(state => state.cart.shippingMethod);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - R{item.price}</li>
          ))}
        </ul>
      )}
      <h3>Total: R{totalAmount}</h3>
      <ShippingSelector />
      <h3>Selected Shipping: {shippingMethod}</h3>
    </div>
  );
};

export default Cart;
