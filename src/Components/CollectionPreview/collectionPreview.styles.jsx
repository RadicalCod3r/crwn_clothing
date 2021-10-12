import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const CollectionTitle = styled(Link)`
    font-size: 32px;
    text-align: left;
    padding: 1rem 0;
`;

export const Preview = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;