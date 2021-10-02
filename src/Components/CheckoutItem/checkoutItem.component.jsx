import React from 'react';
import './checkoutItem.style.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }}) => (
    <div className="checkout-item">
        <div className="item-image">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="item-description">{name}</span>
        <span className="item-quantity">{quantity}</span>
        <span className="item-price">${price}</span>
        <span className="item-remove">&#10005;</span>
    </div>
)

export default CheckoutItem;