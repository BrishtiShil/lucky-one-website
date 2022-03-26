import React from 'react';
import './Product.css';

const Product = (props) => {
    const { gun, handleAddToCart } = props;
    const { name, img, price } = gun;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(gun)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;