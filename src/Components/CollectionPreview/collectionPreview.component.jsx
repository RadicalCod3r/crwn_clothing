import React from 'react';
import './collectionPreview.style.scss';
import CollectionItem from '../CollectionItem/collectionItem.component'
import { Link, withRouter } from 'react-router-dom';
import { CollectionTitle, CollectionPreviewContainer, Preview } from './collectionPreview.styles';

const CollectionPreview = ({ title, items, routeName, match }) => {
    return(
        <CollectionPreviewContainer>
            <CollectionTitle to={`${match.url}/${routeName}`}>{title.toUpperCase()}</CollectionTitle>
            <Preview>
                {
                    items.filter((item, idx) => idx < 4)
                        .map(item => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                }
            </Preview>
        </CollectionPreviewContainer>
    );
} 

export default withRouter(CollectionPreview);