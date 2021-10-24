import React from 'react';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import auth from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/cartIcon.component';
import CartDropdown from '../CartDropdown/cartDrop.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux/user/user.action'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
    return(
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/contact">
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                    <OptionDiv onClick={() => signOutStart()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink className="option" to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            { hidden ? null : <CartDropdown /> }
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);