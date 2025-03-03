import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/navbar.css"; // Ensure the styles exist

const Navbar = () => {
  const cartItemCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/cart">Cart ({cartItemCount})</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
