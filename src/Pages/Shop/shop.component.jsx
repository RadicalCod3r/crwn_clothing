import React from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../Components/CollectionPreview/collectionPreview.component';

class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: ShopData
        }
    }

    render() {
        return (
            <div className="collections">
                <h1>Collections</h1>
                {
                    this.state.collections.map(({id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        );    
    }
}

export default Shop;