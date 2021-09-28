import React from 'react';
import { ReactComponent as ShoppingCart } from '../../assets/cart_icon.svg';
import './cartIcon.style.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingCart className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);