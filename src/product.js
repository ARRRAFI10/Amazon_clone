import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useStateValue } from './StateProvider';
import './product.css';
function Product({ id, title, image, price, rating }) {
  const [{ cart },dispatch]= useStateValue();
const addTOCart= ()=>{
  dispatch({
    type:'ADD_TO_CART',
    item:{
      id: id,
      title: title,
      image:image,
      price:price,
      rating:rating
      
    }

  })
};
  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price"> 
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
        </div>
      <img src={image} alt=""/>
      <button onClick={addTOCart}>Add to cart</button>
    </div>
  );
}

export default Product;
