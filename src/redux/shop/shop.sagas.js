import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import {
    fetchingCollectionsSucceed,
    fetchingCollectionsFailed
} from './shop.action';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = collection(db, 'collections');
        const snapshot = yield getDocs(collectionRef);
        console.log(collectionRef);
        const collectionMap = yield call(
            convertCollectionSnapshotToMap,
            snapshot
        );
        yield put(fetchingCollectionsSucceed(collectionMap));
    } catch(error) {
        yield put(fetchingCollectionsFailed(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCHING_COLLECTIONS_STARTED,
        fetchCollectionsAsync
    )
}