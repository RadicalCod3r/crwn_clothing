import React from 'react';
import './checkoutItem.style.scss';
import { connect } from 'react-redux';
import { clearItemFromList } from '../../redux/cart/cart.action';
import { removeItem } from '../../redux/cart/cart.action';
import { addItem } from '../../redux/cart/cart.action';

const CheckoutItem = ({ cartItem, removeItem, clearItem, addItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return(
        <div className="checkout-item">
            <div className="item-image">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="item-description">{name}</span>
            <span className="item-quantity">
                <span className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</span>
                <span className="value"> {quantity} </span>
                <span className="arrow" onClick={() => addItem(cartItem)}>&#10095;</span>
            </span>
            <span className="item-price">${price}</span>
            <span className="item-remove" onClick={() => clearItem(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromList(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);