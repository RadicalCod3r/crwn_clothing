import React from 'react';
import './cartItem.style.scss';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" className="cart-image" />
        <div className="cart-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} * ${price}</span>
        </div>
    </div>
);

export default CartItem;