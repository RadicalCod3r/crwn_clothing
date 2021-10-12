import React from 'react';
import './customButton.style.scss';
import { CustomButtonContainer } from './customButton.styles';

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;