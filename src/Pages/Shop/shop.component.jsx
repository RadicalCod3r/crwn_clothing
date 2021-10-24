import React, { useEffect } from 'react';
import './shop.style.scss';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// import { fetchCollectionsStart } from '../../redux/shop/shop.sagas';
import CollectionOverviewContainer from '../../Components/CollectionOverview/collectionOverview.container';
import CollectionPageContainer from '../Collection/collectionPage.container';
import ShopActionTypes from '../../redux/shop/shop.types';

const Shop = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`}
                component={CollectionOverviewContainer}/> 
            <Route exact path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}/> 
        </div> 
    );
} 

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch({type: ShopActionTypes.FETCHING_COLLECTIONS_STARTED})
})

export default connect(null, mapDispatchToProps)(Shop);