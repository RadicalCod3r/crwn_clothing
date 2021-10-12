import styled, { css } from 'styled-components';

const buttonStyles = css`
    color: white;
    border: none;
    background-color: black;
    &:hover {
        color: black;
        background-color: white;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    cursor: pointer;
    color: black;
    background-color: white;
    border: 1px solid black;

    &:hover {
        color: white;
        border: none;
        background-color: black;
    }
`;

const googleSignInButtonStyles = css`
    background-color: #4c8bf5;
    color: white;
    border: none;

    &:hover {
        background-color: #357ae8;
    }
`;

const getButtonStyle = props => {
    if(props.isGoogleSignIn) {
        return googleSignInButtonStyles;
    }else if(props.inverted) {
        return invertedButtonStyles;
    }else {
        return buttonStyles;
    }
}

export const CustomButtonContainer = styled.button`
    padding: 1rem 3rem;
    text-align: center;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
    }

    ${getButtonStyle}
`;