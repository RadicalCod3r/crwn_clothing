import CollectionPage from './collectionPage.component';
import WithSpinner from '../../Components/WithSpinner/withSpinner.component';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;