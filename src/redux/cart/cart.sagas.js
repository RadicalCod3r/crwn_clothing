import UserActionTypes from '../user/user.types'
import { call, all, put, takeLatest } from 'redux-saga/effects';
import { clearCart } from './cart.action'

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCEED,
        clearCartOnSignOut
    )
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}