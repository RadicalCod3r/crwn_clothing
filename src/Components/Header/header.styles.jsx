import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionStyles = css`
    padding: 0 1rem;
    font-size: 1.2rem;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        margin-bottom: 10px;
    }
`;

export const LogoContainer = styled(Link)`
    hight: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;  
    width: 50%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end; 

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const OptionDiv = styled.div`
    ${OptionStyles}
`;

export const OptionLink = styled(Link)`
    ${OptionStyles}
`