import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart}</p>
        </div>
    );
};

export default Cart;