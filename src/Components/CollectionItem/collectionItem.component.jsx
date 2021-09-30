import React from 'react';
import './collectionItem.style.scss';
import CustomButton from '../CustomButton/customButton.component';
import { addItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl} = item;
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
            <CustomButton inverted id="add-item-button" onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);