import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <p>Selected Items: {cart}</p>
        </div>
    );
};

export default Cart;