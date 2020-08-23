import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    // Slice data from fakeData
    const first10 = fakeData.slice(0, 10)

    // Add useState to catch data from fakeData
    const [products, setProducts] = useState(first10)

    // Add useState to add product on cart
    const [cart, setCart] = useState([]);

    // Create event listener and dynamicly add to Product components
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="left-container"></div>
            <div className="product-container">
                {
                    products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;