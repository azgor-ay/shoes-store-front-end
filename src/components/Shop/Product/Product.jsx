import React from 'react';
import "./Product.css"
import { FaBoxOpen, FaCartPlus } from "react-icons/fa";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Product = (props) => {
    const { category, img, name, price, ratings, seller, stock } = props.product
    const addToCart = props.addToCart;


    return (
        <div className='product-card'>
            <small title="Products Category" className='product-category'>{category}</small>
            <div className='card-image'>
                <img src={img} alt="" />
            </div>
            <div className='card-body'>
                <h3 className='product-name'>{name}</h3>
                <h5 className='product-price'>Price: {(price * 105.05).toFixed(0)} BDT</h5>
                <div className='product-quality-info'>




                    <p className='rating'>({ratings} stars)
                        <Rating style={{ maxWidth: 130 }}
                            value={ratings}
                            readOnly />
                    </p>
                    <p className="stock">
                        <FaBoxOpen className="stock_icon" /> <span>In Stock : {stock}</span>
                    </p>
                    <p>Manufacturer: {seller}</p>
                </div>
            </div>
            <button onClick={() => { addToCart(props.product) }} className='add-to-cart-btn'>
                Add To Cart  <FaCartPlus />
            </button>
        </div>
    );
};

export default Product;