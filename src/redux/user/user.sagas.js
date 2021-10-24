import { call, put, takeLatest, all } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { createUserProfileDocument, provider, auth, getCurrentUser } from '../../firebase/firebase.utils';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './user.action';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function* getSnapshotFromUserAuth(user, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData);
        const userSnapshot = yield getDoc(userRef);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch(error) {
        yield put(signInFailure(error.message));
    } 
}

// Async Generators
export function* signInWithGoogleAsync() {
    try {
        const { user } = yield signInWithPopup(auth, provider);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error.message));
    }
}

export function* signInWithEmailAsync({ payload: { email, password } }) {
    try {
        const { user } = yield signInWithEmailAndPassword(auth, email, password);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error.message));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        put(signInFailure(error));
    }
}

export function* signOutAsync() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error.message));
    } 
}

export function* signUpAsync({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, email, password);
        yield put(signUpSuccess({ user, displayName }));
    } catch(error) {
        put(signUpFailure(error.message))
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

// Sagas
export function* onGoogleSignInStart() {
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_STARTED,
        signInWithGoogleAsync
    )
}

export function* onEmailSignInStart() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_STARTED,
        signInWithEmailAsync
    )
}

export function* onCheckUserSession() {
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

export function* onSignOutStart() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_STARTED,
        signOutAsync
    )
}

export function* onSignUpStart() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_STARTED,
        signUpAsync
    )
}

export function* onSignUpSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_UP_SUCCEED,
        signInAfterSignUp
    )
}  

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ]);
}