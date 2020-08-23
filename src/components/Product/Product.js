import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {

    // Create data de-structure
    const { img, name, seller, price, stock } = props.product;

    return (
      <div className='product'>
        <div>
          <img src={img} alt='' />
        </div>
        <div className='product-info'>
          <h5 className='product-name'>{name}</h5>
          <p>
            <small>By: {seller}</small>
          </p>
          <p>${price}</p>
          <p>
            <small>Only {stock} left in stock - order soon</small>
          </p>
                <button
                    className='main-button'
                    onClick={() => props.handleAddProduct(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className='cart-btn-text'>Add to Cart</span>
          </button>
        </div>
      </div>
    );
};

export default Product;