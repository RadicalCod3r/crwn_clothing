import React from 'react';
import './shop.style.scss';
import ShopData from './shop.data';
import CollectionPreview from '../../Components/CollectionPreview/collectionPreview.component';
import { connect } from 'react-redux';
import CollectionOverview from '../../Components/CollectionOverview/collectionOverview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../Collection/collectionPage.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import WithSpinner from '../../Components/WithSpinner/withSpinner.component';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
    // We can access the state without using constructor in newer versions of react
    unsubscibeFromSnapshot = null;

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} /> } /> 
                <Route exact path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} /> } /> 
            </div> 
        );
    }
} 

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);