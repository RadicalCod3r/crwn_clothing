import React from 'react';
import './customButton.style.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button 
    className={`${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-signin' : ''} custom-button`}
    {...otherProps}>
        {children}
    </button>
);

export default CustomButton;