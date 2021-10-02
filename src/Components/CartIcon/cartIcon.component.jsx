import React from 'react';
import { ReactComponent as ShoppingCart } from '../../assets/cart_icon.svg';
import './cartIcon.style.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    // let itemCount = 0;
    // cartItems.forEach(item => {
    //     itemCount = itemCount + item.quantity;
    // })

    // console.log(itemCount);

    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingCart className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => {
    console.log('This is a test');
    return {
        itemCount: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);