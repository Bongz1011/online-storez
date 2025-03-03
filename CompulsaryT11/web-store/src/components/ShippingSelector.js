import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShippingMethod } from "../redux/cartSlice";

const ShippingSelector = () => {
  const dispatch = useDispatch();
  const selectedShipping = useSelector(state => state.cart.shippingMethod);
  const [showHelp, setShowHelp] = useState(false);

  const handleShippingChange = (event) => {
    dispatch(setShippingMethod(event.target.value));
  };

  return (
    <div className="shipping-container">
      <h2>Select Shipping Method</h2>
      <select value={selectedShipping} onChange={handleShippingChange}>
        <option value="Standard">Standard (5-7 days) - R50</option>
        <option value="Express">Express (2-3 days) - R100</option>
        <option value="Overnight">Overnight (1 day) - R250</option>
      </select>
      <p>Selected: <strong>{selectedShipping}</strong></p>

      {/* Help Button */}
      <button onClick={() => setShowHelp(!showHelp)}>Help</button>

      {showHelp && (
        <div className="help-text">
          <p><strong>Standard:</strong> Delivered within 5-7 days.</p>
          <p><strong>Express:</strong> Delivered within 2-3 days.</p>
          <p><strong>Overnight:</strong> Delivered the next day.</p>
        </div>
      )}
    </div>
  );
};

export default ShippingSelector;
