import React from 'react';
import './cartDrop.style.scss';
import CustomButton from '../CustomButton/customButton.component';
import { connect } from 'react-redux';
import CartItem from '../CartItem/cartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items" style={(cartItems.length > 2) ? {overflowY: 'scroll'} : {overflowY: 'hidden'}}>
            {
                cartItems.length === 0
                ? <span className="empty-message">Your cart is empty</span>
                : cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            } 
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);
 
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// })

export default withRouter(connect(mapStateToProps)(CartDropdown));