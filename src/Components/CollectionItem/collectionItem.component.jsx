import React from 'react';
import './collectionItem.style.scss';

const CollectionItem = ({ id, name, price, imageUrl}) => {
    return(
        <div className="collection-item">
            <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="item-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    );
}

export default CollectionItem;