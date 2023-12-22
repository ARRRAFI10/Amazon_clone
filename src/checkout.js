import React from 'react';
import { useStateValue } from './StateProvider';
import "./checkout.css";
import CheckoutProduct from './checkoutProduct'; 
import Subtotal from './subtotal.js'

function Checkout() {
    const [{ cart }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Cart is empty.</h2>
                        <h3>Add Item to the Cart.</h3>
                    </div>
                ) : (
                    <div>
                        <h1 className="checkout__title">Your Cart</h1>
                        {cart?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
                </div>
                {cart.length>0 && (
                    <div className="checkout__right">
                        <Subtotal/>
                    </div>
                )}
            
        </div>
    );
}

export default Checkout;
