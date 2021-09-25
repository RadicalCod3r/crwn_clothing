import React from 'react';
import './collectionPreview.style.scss';
import CollectionItem from '../CollectionItem/collectionItem.component'

const CollectionPreview = ({ title, items }) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4)
                        .map(({ id, ...otherProps }) => (
                            <CollectionItem key={id} {...otherProps} />
                        ))
                }
            </div>
        </div>
    );
} 

export default CollectionPreview;