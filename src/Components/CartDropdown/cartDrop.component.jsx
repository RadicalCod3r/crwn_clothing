import React from 'react';
import './cartDrop.style.scss';
import CustomButton from '../CustomButton/customButton.component';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;