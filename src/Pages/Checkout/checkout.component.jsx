import React from 'react';
import './checkout.style.scss';
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../Components/CheckoutItem/checkoutItem.component';
import StripeCheckoutButton from '../../Components/StripeButton/stripeButton.component';

const Checkout = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className="test-message">
            *Please enter test credit cart info:
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123*
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);