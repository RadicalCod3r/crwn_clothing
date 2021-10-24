import CollectionOverview from './collectionOverview.component';
import WithSpinner from '../WithSpinner/withSpinner.component';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;