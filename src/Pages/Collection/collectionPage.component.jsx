import React from 'react';
import './collectionPage.style.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionItem from '../../Components/CollectionItem/collectionItem.component';

const CollectionPage = ({ collection }) => {
    // console.log(collection);
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h1 className="title">{title}</h1>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);