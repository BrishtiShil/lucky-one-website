import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                <p>Selected Items: </p>
                {
                    cart.map((item) => (<h3 key={item.id}>{item.name}</h3>))
                    // <Cart cart={cart}></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;