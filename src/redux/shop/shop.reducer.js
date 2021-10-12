import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCHING_COLLECTIONS_STARTED:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETHCING_COLLECTIONS_SUCCEED:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }  
        case ShopActionTypes.FETHCING_COLLECTIONS_FAILED:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default shopReducer;