import ShopActionTypes from './shop.types';
import { db, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { getDocs, collection, onSnapshot } from 'firebase/firestore';

export const fetchingCollectionsStarted = () => ({
    type: ShopActionTypes.FETCHING_COLLECTIONS_STARTED
});

export const fetchingCollectionsSucceed = collectionsMap => ({
    type: ShopActionTypes.FETHCING_COLLECTIONS_SUCCEED,
    payload: collectionsMap
});

export const fetchingCollectionsFailed = errorMessage => ({
    type: ShopActionTypes.FETHCING_COLLECTIONS_FAILED,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collectionRef = collection(db, 'collections');
        dispatch(fetchingCollectionsStarted());
    
        // getDocs(collectionRef)
        // .then(snapshot => {
        //     const collectionMap = convertCollectionSnapshotToMap(snapshot);
        //     dispatch(fetchingCollectionsSucceed(collectionMap));
        // })
        // .catch(error => dispatch(fetchingCollectionsFailed(error.message)));

        onSnapshot(collectionRef, snapshot => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchingCollectionsSucceed(collectionMap));
        }, error=> dispatch(fetchingCollectionsFailed(error.message)));
    }
}