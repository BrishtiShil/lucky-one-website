import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [guns, setGuns] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])

    const handleAddToCart = (gun) => {
        console.log(gun);
        const newCart = [...cart, gun];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    guns.map(gun => <Product
                        key={gun.id}
                        gun={gun}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;