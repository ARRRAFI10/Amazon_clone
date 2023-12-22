import React from 'react';
import './subtotal.css';
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{ cart }] = useStateValue();
  const getCartTotal = () => {
    return cart?.reduce((total, item) => total + item.price, 0) || 0;
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({cart.length} items): <strong>{getCartTotal().toLocaleString('en-US', { style: 'currency', currency: 'BDT' })}</strong>
      </p><br></br>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
