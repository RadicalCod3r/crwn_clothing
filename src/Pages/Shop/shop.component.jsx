import React from 'react';
import './shop.style.scss';
import ShopData from './shop.data';
import CollectionPreview from '../../Components/CollectionPreview/collectionPreview.component';
import { connect } from 'react-redux';
import CollectionOverview from '../../Components/CollectionOverview/collectionOverview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../Collection/collectionPage.component';

const Shop = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} /> 
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} /> 
    </div>
);    

export default Shop;