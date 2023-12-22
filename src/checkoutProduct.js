// CheckoutProduct.js

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useStateValue } from './StateProvider';
import './checkoutProduct.css';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__imageContainer">
        <img className="checkoutProduct__image" src={image} alt="" />
      </div>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>BDT</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <FaStar key={index} color="gold" />
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
