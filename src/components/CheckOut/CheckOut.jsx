import React from 'react';
import "./CheckOut.css"
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const savedCart = useLoaderData();
    console.log(savedCart)
    return (
        <div className='checkout_container'>
            <div>
                <h1 className='page_title'>Place Your orders for shipment! </h1>
                <div className="checkout-page">
                    {savedCart.map((productData) => (
                        <div className="card" key={productData.id}>
                            <img src={productData.img} alt={productData.name} />
                            <div className="card-body">
                                <h5 className="card-title">{productData.name}</h5>
                                <p className="card-text">Price: ${productData.price}</p>
                                <p className="card-text">Quantity: {productData.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            <button className='place_order_btn'>Place Order</button>
            </div>
        </div>

    );
};

export default CheckOut;