import React from 'react';
import './collectionPreview.style.scss';

const CollectionPreview = ({ title, items }) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4)
                        .map(({ name }) => (
                            <p>{name}</p>
                        ))
                }
            </div>
        </div>
    );
} 

export default CollectionPreview;