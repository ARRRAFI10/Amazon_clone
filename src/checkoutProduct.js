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
      <div className="checkoutProduct__details">
        <p className="checkoutProduct__title">{title}</p><br />
        <p className="checkoutProduct__price">
          <small>BDT </small>
          <strong>{price}</strong><br />
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <FaStar key={index} color="gold" />
            ))}
        </div>
        <br />
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
